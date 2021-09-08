import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Emily Morgenbesser</Text>
        <Text style={styles.careerTitle}>Full Stack Software Engineer</Text>
      </View>
      <View style={styles.navbar}>
          <View>
        <Text style={styles.aboutMe}>About me</Text>
        </View>
        <View>
        <Text style={styles.projects}>My projects</Text>
        </View>
        <View>
        <Text style={styles.resume}>Resume</Text>
        </View>
        <View>
        <Text style={styles.contactInfo}>Contact me</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingTop: 100,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hotpink",
    fontWeight: "bold",
    paddingTop: 20,
    width: 400,
  },
  boldText:{
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
  },
  careerTitle:{
    color: "gray",
    fontSize: 17,
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "lightgreen",
    height: 50,
    width: 400,
  },
});
