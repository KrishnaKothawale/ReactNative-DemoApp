import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.CenterHeading}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    CenterHeading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})