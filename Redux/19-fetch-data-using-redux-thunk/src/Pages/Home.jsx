import React from "react";
import ProductComponent from "../Components/Product";
import { useSelector } from "react-redux";
import { exportDisplayFetchError, exportLoadingEffect, exportStoredProductList } from "../store/Slice/productsSlice";

const Home = () => {
  const storedProductList = useSelector(exportStoredProductList);
  const loadingEffect = useSelector(exportLoadingEffect);
  const displayFetchError = useSelector(exportDisplayFetchError);
  return (
    <div>
      {loadingEffect ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : displayFetchError ?  <h2 style={{ textAlign: "center" }}>Something went wrong!!</h2> : (
        <div className="products-container">
          {storedProductList.map(({ id, title, rating, price, image }) => (
            <ProductComponent
              key={id}
              productId={id}
              title={title}
              rating={rating.rate}
              price={price}
              image={image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
