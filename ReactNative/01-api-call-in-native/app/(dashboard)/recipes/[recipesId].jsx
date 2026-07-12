import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import Spacer from "../../../components/Spacer";
import { useLocalSearchParams } from "expo-router";

const RecipesId = () => {
  const { recipesId } = useLocalSearchParams();
  const [recipesDetails, setRecipesDetails] = useState(null);

  const fetchRecipeDetails = async () => {
    try {
      const getResponse = await fetch(
        `https://dummyjson.com/recipes/${recipesId}`,
      );
      const getDetails = await getResponse.json();
      setRecipesDetails(getDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [recipesId]);

  return (
    <ThemedView safe={true}>
      <ThemedText title={true}>Recipe Details</ThemedText>
      <Spacer />
      {recipesDetails === null ? (
        <ActivityIndicator color={"red"} size={"large"} />
      ) : (
        <ThemedView>
          <Image
            style={styles.imageStyle}
            source={{ uri: recipesDetails.image }}
          />
          <ThemedText
            style={{ fontWeight: "bold", textAlign: "left", marginBottom: 10 }}
          >
            {recipesDetails.name}
          </ThemedText>
          <ThemedText style={{ textAlign: "left" }}>
            PrepTimeMinutes: {recipesDetails.prepTimeMinutes}
          </ThemedText>
          <Spacer height={5} />
          <ThemedText style={{ textAlign: "left" }}>
            Cook Time in Minutes: {recipesDetails.cookTimeMinutes}
          </ThemedText>
          <ThemedText style={{ textAlign: "left" }}>
            Difficulty: {recipesDetails.difficulty}
          </ThemedText>
          <ThemedText style={{ textAlign: "left" }}>
            Cuisine: {recipesDetails.cuisine}
          </ThemedText>
        </ThemedView>
      )}
    </ThemedView>
  );
};

export default RecipesId;

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 300,
    marginBottom: 10
  },
});
