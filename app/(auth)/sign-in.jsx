import { View, Text, ScrollView, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState, useEffect } from "react";
import CustomButton from "../../components/custombutton";
import { Link } from "expo-router";
import { getCurrentUser, signin } from "../../lib/appwrite";
import { router } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const [isSubmitting, setisSubmitting] = useState(false);

  const { setisLoggedIn, setuser } = useGlobalContext();

  const [Form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (Form.email === '' || Form.password === '') {
      Alert.alert("Missing Fields", "All fields are required");
      return;
    }
    setisSubmitting(true);

    try {
      await signin(Form.email, Form.password);
      const result = await getCurrentUser();

      setuser(result);
      setisLoggedIn(true);

      router.replace("/home");
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
            Sign In
          </Text>

          <FormField
            title="Email"
            value={Form.email}
            handleChangeText={(e) => {
              setForm({ ...Form, email: e });
            }}
            otherStyle="mt-10"
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
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex-row gap-2 pt-5 justify-center items-center">
            <Text className="text-gray-100 text-lg font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-secondary text-lg font-psemibold"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
