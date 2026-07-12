import { View, TextInput, Button, Text, Pressable, Keyboard } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useState } from "react";
import { useRouter } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedTextInput from "../../components/ThemedTextInput";
import Spacer from "../../components/Spacer";

export default function Verify() {
  const { signUp, setActive, isLoaded } = useSignUp();
  const [code, setCode] = useState("");
  const router = useRouter();

  const onVerify = async () => {
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });

      router.replace("/(dashboard)/products");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemedView safe = {true}>
      <Pressable style = {{flex: 1}} onPress={Keyboard.dismiss}>
        <ThemedText title = {true}>Enter OTP</ThemedText>
        <Spacer />
      <ThemedTextInput placeholder="Enter code" onChangeText={setCode} />
      <ThemedButton title="Verify" onPress={onVerify}>
        <ThemedText style={{color: "#f2f2f2"}}>Verify</ThemedText>
      </ThemedButton>
      </Pressable>
    </ThemedView>
  );
}