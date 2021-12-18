import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const History = (props: any) => {
  return (
    <View>
      <Image
      style={styles.image}
      source={props.image}></Image>
      <Text>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 190,
    borderColor: '#FFF',
    borderWidth: 1
  },

  text: {
    color: '#8a8585',
    fontWeight: 'bold'
  }
})

export default History;