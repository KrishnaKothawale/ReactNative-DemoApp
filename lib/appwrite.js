import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
export const appwriteConfig = {
    endpoint: "https://fra.cloud.appwrite.io/v1",
    platform: "com.nova.aura",
    projectId: "684aa44a003d2bcca30b",
    databaseId: "684aa8700016db074c8a",
    userCollectionId: "684aa8b200270a288c3e",
    videoCollectionId: "684aa8e30031e1554a04",
    storageId: "684aaa060036e1ba7e74"
}

// Init your React Native SDK
const client = new Client();


client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)
    ;

export const account = new Account(client);
const avatar = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if (!newAccount) {
            throw Error;
        }

        const avatarUrl = avatar.getInitials(username);

        await signin(email,password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                username: username,
                email: email,
                avatar: avatarUrl
            }
        )
        
        return newUser;

    } catch (error) {
        console.log('create error :',error);
        throw new Error(error);
    }
}

export const signin = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) {
            throw Error;
        }

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [
                Query.equal("accountId", currentAccount.$id)
            ]
        )

        if(!currentUser) {
            throw Error;
        }

        return currentUser.documents[0];

    } catch (error) {
        console.log('get current user error :',error);
    }
}


account.get()
  .then(console.log)
  .catch((err) => console.log("⚠️ Ping successful, but not logged in yet:", err));

