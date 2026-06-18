import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo
        // style = {[styles.logo, {width: 40, height: 40}]}
        // source={{uri: `https://reactnative.dev/img/tiny_logo.png`}}
        // source={logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <Spacer height={10} />
      <ThemedText style={styles.text} title={true}>
        The Number 1
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer height={20}/>
      <Link style={styles.link} href={"/login"}>
        <ThemedText>Login page</ThemedText>
      </Link>
      <Link style={styles.link} href={"/register"}>
        <ThemedText>Register page</ThemedText>
      </Link>
      <Link style={styles.link} href={"/profile"}>
        <ThemedText>Profile page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  logo: {
    marginVertical: 20,
    // width: 20,
    // height:20
  },
  link: {
    textDecorationLine: "underline",
    marginVertical: 10,
    textDecorationColor: "blue",
  },
});
