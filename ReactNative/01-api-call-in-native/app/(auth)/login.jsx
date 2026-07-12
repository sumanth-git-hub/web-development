import {
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";
import ThemedTextInput from "../../components/ThemedTextInput";
import { Link, useRouter } from "expo-router";
import { useAuth, useSignIn } from "@clerk/clerk-expo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [loginError, setLoginError] = useState(null);
 
  const onLogin = async () => {
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
        strategy: "password",
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });

        router.replace("/(dashboard)/products");
      } else {
        console.log("Login not complete:", result);
      }
    } catch (error) {
      setLoginError(error.message);
      console.log("LOGIN ERROR:", JSON.stringify(error.message));
    }
  };
  return (
    <ThemedView safe={true}>
      <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <ThemedText title={true}>Login to your Account</ThemedText>

        <Spacer />
        <ThemedTextInput placeholder="Email" onChangeText={setEmail} />
        <ThemedTextInput
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
        />
        <ThemedButton title="Login" onPress={onLogin}>
          <ThemedText
            style={{
              color: "#f2f2f2",
            }}
          >
            Login
          </ThemedText>
        </ThemedButton>
        <Spacer height={20} />
        {loginError && (
          <ThemedText
            style={{
              color: "red",
            }}
          >
            {loginError}
          </ThemedText>
        )}
        <Spacer height={20} />

        <Link href={"/register"}>
          <ThemedText style={styles.btnText}>Register Instead</ThemedText>
        </Link>
      </Pressable>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  btnText: {
    color: "blue",
    textDecorationLine: "underline",
    fontWeight: 600,
  }
});
