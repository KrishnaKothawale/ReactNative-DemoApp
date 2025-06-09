import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/custombutton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center h-full px-4">
          <Image
            source={images.logo}
            className='w-[120px] h-[84px]'
            resizeMode="contain"
          />
          <Image 
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode="contain"
          />
          <View className='relative mt-5'>
            <Text className='text-3xl font-pbold text-white text-center'>
              Discover Endless Possibilities with{' '}<Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-0'
              resizeMode="contain"
            />
          </View>
          <View className='mt-5 px-4'>
            <Text className='text-sm mt-3 text-center text-gray-100 font-pregular '>
              Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
            </Text>
          </View>
          <CustomButton 
            title='Continue With Email'
            handlePress={() => router.push("/sign-in")}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
