import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyle,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);
  const [isFocused, setisFocused] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View
        className={`w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl ${isFocused ? 'border-secondary' : 'border-black-200'} items-center mt-2 flex-row`}
      >
        <TextInput
          className="flex-1 text-base text-white font-psemibold"
          value={value}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setisFocused(true)}
          onBlur={()=> setisFocused(false)}
          {...props}
        />

        {title === 'Password' && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                <Image 
                    source={!showPassword ? icons.eye : icons.eyeHide}
                    className='w-6 h-6'
                    resizeMode="contain"
                />
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
