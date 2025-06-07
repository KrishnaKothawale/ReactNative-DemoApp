import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-3xl font-bold text-secondary-200">AURA</Text>
      <StatusBar style="auto" />
      <Link href={'/Profile'} className='text-blue-300'>Go To Profile</Link>
    </View>
  );
}

