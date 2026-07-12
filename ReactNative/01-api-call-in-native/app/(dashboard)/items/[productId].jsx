import { StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import Spacer from "../../../components/Spacer";
import { useLocalSearchParams } from "expo-router";

const ProductId = () => {
  const { productId } = useLocalSearchParams();
  const [productDetails, setProductDetails] = useState(null);

  const fetchedData = async () => {
    try {
      const getResponse = await fetch(
        `https://dummyjson.com/products/${productId}`,
      );
      const getDetails = await getResponse.json();
      setProductDetails(getDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchedData();
  }, [productId]);

  return (
    <ThemedView safe={true}>
      <ThemedText title={true}>Product Details</ThemedText>
      <Spacer />

      { productDetails === null ? (
        <ActivityIndicator color={"red"} size={"large"} />
      ) : (
        <ThemedView>
          <Image
            style={styles.imageStyle}
            source={{ uri: productDetails.images[0] }}
          />
          <ThemedText style={{ fontWeight: "bold", textAlign: "left", marginBottom: 10 }}>
            {productDetails.title}
          </ThemedText>
          <ThemedText style={{textAlign: "left"}}>{productDetails.description}</ThemedText>
          <Spacer  height={5}/>
          <ThemedText style={{textAlign: "left"}}>Price ${productDetails.price}</ThemedText>
          <ThemedText style={{textAlign: "left"}}>Category: {productDetails.category}</ThemedText>
          <ThemedText style={{textAlign: "left"}}>Rating: {productDetails.rating}</ThemedText>
          <ThemedText style={{textAlign: "left"}}>Return Policy: {productDetails.returnPolicy}</ThemedText>
        </ThemedView>
      )}
    </ThemedView>
  );
};

export default ProductId;

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 300,
  },
});
