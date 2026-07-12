import { ActivityIndicator, FlatList, StyleSheet, Text, View, Pressable, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useRouter } from 'expo-router'

const Recipes = () => {
  const [recipesData, setRecipes] = useState([])
  const [handleError, setHandleError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()
  const apiUrl = "https://dummyjson.com/recipes?limit=10"

  const fetchRecipe = async () => {
      try {
        const getResponse = await fetch(apiUrl)
        const getData = await getResponse.json()
          setRecipes(getData.recipes)
          setIsLoading(false)
      } catch (error) {
        setHandleError("Something went wrong")
      }
      finally {
        setIsLoading(false)
      }
  }

  useEffect(() => {
    fetchRecipe()
  }, [])

  return (
    <ThemedView safe = {true}>
        <ThemedText title = {true}>List of Recipes</ThemedText>
        <Spacer />
     { isLoading ? <ActivityIndicator color={"red"} size={"large"} /> :

     handleError ? <Text style = {{color: "red", textAlign: "center", fontWeight: "bold"}}>{handleError}</Text> :
         <FlatList
        data={recipesData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator = {false}
        renderItem={({item}) => (
          <Pressable style={styles.container} 
         onPress={() => {
          router.push(`/recipes/${item.id.toString()}`)
         }}
                        >
                          <Image style={styles.images} source={{ uri: item.image }} />
                          <Text style= {{fontWeight: '600'}}>{item.name}</Text>
                          <Text>Difficulty: {item.difficulty}</Text>
                          <Text>PrepTimeMinutes: {item.prepTimeMinutes}</Text>
                        </Pressable>
        )}/>
     }
    </ThemedView>
  )
}

export default Recipes

const styles = StyleSheet.create({
  images: {
    width: '100%',
    height: 250,
    alignSelf: "center",
    marginBottom: 10
  },
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android Shadow
    elevation: 5,
  }
})