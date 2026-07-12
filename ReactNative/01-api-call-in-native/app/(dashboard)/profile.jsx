import { Modal, StyleSheet, View, Text, Pressable, Image} from "react-native";
import React, { useState } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import logo from "../../assets/favicon.png";


const Profile = () => {
  const { signOut } = useClerk();
  const router = useRouter();
  const {user} = useUser()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleLogout = async () => {
    await signOut();
    router.replace("/login");
  };
  return (
    <ThemedView safe={true} style={{flex: 1}}>
      <ThemedText title={true}>User Details</ThemedText>
      <Spacer />
      {/* {user.firstName && <ThemedText style={{fontWeight: "bold"}}>Hello {user.firstName}</ThemedText>} */}
      <Spacer />
      <ThemedButton onPress = {() => setIsModalVisible(true)}>
        <ThemedText style={{
          color: "#f2f2f2"
        }}>View Profile</ThemedText>
      </ThemedButton>
      <ThemedButton title="Logout" onPress={handleLogout}>
        <ThemedText style={{
          color: "#f2f2f2"
        }}>Logout</ThemedText>
      </ThemedButton>

        <Modal visible = {isModalVisible} 
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        transparent = {true}
        >
          <ThemedView safe = {true} style = {styles.modalContainer}>
            <Image source ={logo} style = {styles.img}/>
          <ThemedText style={{fontWeight: "600"}}>Welcome {user.firstName}{user.lastName}</ThemedText>
          <Spacer/>
          <ThemedButton onPress = {() => setIsModalVisible(false)}>
            <Text style = {{color: "#f2f2f2", textAlign: "center"}}>Close</Text>
          </ThemedButton>
          </ThemedView>
        </Modal>

    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "plum",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
    img: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginBottom: 10
  },
})
