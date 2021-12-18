import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import PostSlize from '../../components/PostSlize';
import History from "../../components/History";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleMain}>Home</Text>
        <Image
         style={styles.perfil}
        source={require('../../assets/perfil.jpg')}></Image>
      </View>
      <View>
        <Text style={styles.title}>Welcome to our new Home feed.</Text>
        <ScrollView horizontal>
          <PostSlize
          text="This new home was built with your mind."
          image={require('../../assets/wall1.png')}
          />
          <PostSlize
          text="This new home was built with your mind."
          image={require('../../assets/wall2.jpg')}
          />
          <PostSlize
          text="This new home was built with your mind."
          image={require('../../assets/wall3.jpg')}
          />
        </ScrollView>
      </View>
      <View>
        <Text  style={styles.textBook}>Welcome home!</Text>
        <Text style={styles.title}>Top picks for you</Text>
        <ScrollView horizontal>
          <History
          text="action"
          image={require('../../assets/capa1.jpg')}
          />
          <History
          text="aliens"
          image={require('../../assets/capa2.jpg')}
          />
          <History
          text="education"
          image={require('../../assets/capa3.jpg')}
          />
          <History
          text="conspy"
          image={require('../../assets/capa4.jpg')}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  titleMain: {
    color: 'orange',
    fontWeight: "bold",
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'orange'
  },

  textBook: {
    fontSize: 17,
    fontWeight: 'bold'
  },

  perfil: {
    width: 40,
    height: 40,
    borderRadius: 20
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18
  },

  header: {
    width: '100%',
    marginTop: 50,
    paddingHorizontal: 10,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Home;