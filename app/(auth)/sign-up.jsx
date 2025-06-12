import { View, Text, ScrollView, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/custombutton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const [isSubmitting, setisSubmitting] = useState(false);

  const {setisLoggedIn, setuser} = useGlobalContext();

  const [Form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {

    if (Form.username === '' || Form.email === '' || Form.password === '') {
      Alert.alert("Missing Fields", "All fields are required")
      return
    }
    setisSubmitting(true);

    try {
      const result = await createUser(Form.email, Form.password, Form.username);

      setuser(result);
      setisLoggedIn(true);
      
      router.replace("/home")

    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setisSubmitting(false);
    }

    console.log(Form);

  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="">
        <View className="w-full min-h-[85vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-psemibold text-white mt-10 ">
            Sign Up
          </Text>

          <FormField
            title="Username"
            value={Form.username}
            handleChangeText={(e) => {
              setForm({ ...Form, username: e });
            }}
            otherStyle="mt-10"
          />
          <FormField
            title="Email"
            value={Form.email}
            handleChangeText={(e) => {
              setForm({ ...Form, email: e });
            }}
            otherStyle="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={Form.password}
            handleChangeText={(e) => {
              setForm({ ...Form, password: e });
            }}
            otherStyle="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex-row gap-2 pt-5 justify-center items-center">
            <Text className="text-gray-100 text-lg font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-secondary text-lg font-psemibold"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
