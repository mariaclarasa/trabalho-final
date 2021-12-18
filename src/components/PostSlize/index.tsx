import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const PostSlize = (prop: any) => {
  return (
    <View>
      <Text>{prop.text}</Text>
      <Image style={styles.image} source={prop.image}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 30
  },

  text: {
    color: '#202020'
  }
})

export default PostSlize
