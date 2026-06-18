import { Client, Account, Avatars, ID, Databases } from "react-native-appwrite";


export const client = new Client()
.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
// .setPlatForm(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME)
.setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)


export const account = new Account(client);
export const avatars = new Avatars(client)
export const database = new Databases(client)