import { ActivityIndicator, StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useRouter } from 'expo-router'

const Products = () => {

  
 const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [handleError, setHandleError] = useState(null);
  const router = useRouter()

  const callingApi = async () => {
    const apiUrl = "https://dummyjson.com/products?limit=10";

    try {
      const getResponse = await fetch(apiUrl);
      const getData = await getResponse.json();
      setProductsList(getData.products);
      setIsLoading(false);
    } catch (error) {
      setHandleError("Something went wrong please try again later");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    callingApi();
  }, []);

  return (
<ThemedView safe = {true}>
    <ThemedText title = {true}>Products List</ThemedText>
    <Spacer />
    {isLoading ? (
          <ActivityIndicator color={"red"} size={"large"} />
        ) : handleError ? (
          <ThemedText style={{color: "red", fontWeight: "600"}}>{handleError}</ThemedText>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={productsList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable style={styles.container} onPress={() => (
                router.push(`/items/${item.id.toString()}`)
              )}>
                <Image style={styles.images} source={{ uri: item.images[0] }} />
                <Text>{item.title}</Text>
                <Text>${item.price}</Text>
              </Pressable>
            )}
          />
        )}
</ThemedView>
  )
}

export default Products

const styles = StyleSheet.create({
  images: {
    width: 250,
    height: 250,
    alignSelf: "center",
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

