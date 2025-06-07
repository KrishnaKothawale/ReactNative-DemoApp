import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { Image } from 'react-native'
import {icons} from '../../constants'

const TabIcon = ({icon, name, color, focused}) => {
  return (
    <View className='gap-1 items-center justify-center'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6 mt-10'
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-[7px]`} style={{color}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
          tabBarShowLabel:false,
          // tabBarLabelStyle: {
          //   fontFamily: 'Poppins-Regular',
          //   fontWeight: 'bold',
          //   color: '#cdcde0'
          // },
          tabBarActiveTintColor: '#ffa001',
          tabBarInactiveTintColor: '#cdcde0',
          tabBarStyle:{
            backgroundColor:'#161622',
            borderTopWidth:1,
            borderTopColor:'#232533',
            height:84
          }

        }}>
        <Tabs.Screen name='home'
          options={
            {
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.home}
                  name='Home'
                  color={color}
                  focused={focused}
                />
              )
            }
          }
        />
        <Tabs.Screen name='create'
          options={
            {
              title: 'Create',
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.plus}
                  name='Create'
                  color={color}
                  focused={focused}
                />
              )
            }
          }
        />
        <Tabs.Screen name='bookmark'
          options={
            {
              title: 'Bookmark',
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.bookmark}
                  name='Bkmark'
                  color={color}
                  focused={focused}
                />
              )
            }
          }
        />
        <Tabs.Screen name='profile'
          options={
            {
              title: 'Profile',
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.profile}
                  name='Profile'
                  color={color}
                  focused={focused}
                />
              )
            }
          }
        />
      </Tabs>
    </>
  )
}

export default TabsLayout