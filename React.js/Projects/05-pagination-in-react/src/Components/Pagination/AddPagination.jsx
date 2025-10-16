import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { cardsPerPage } from "./Constants";
import ButtonsContainer from "./ButtonsContainer";

const AddPagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading,setLoading] = useState(true)
//   let cardsPerPage = 10;
  const totalProducts = products.length;
  const totalNumPages = Math.ceil(totalProducts / cardsPerPage);

  console.log(totalNumPages);

  const fetchData = async () => {
    try {
    setLoading(true)
    const data = await fetch("https://dummyjson.com/products?limit=0");
    const json = await data.json();
    setProducts(json.products);
    } catch (error) {
      console.error("Error while fetching the product", error)
    } finally {
      setLoading(false)
    }
  };

  // useEffect (() => {
  //   fetch("https://dummyjson.com/products?limit=0")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setProducts(data.products);
  //   })
  // }, )


  useEffect(() => {
    fetchData();
  }, []);

  let startingPage = currentPage * cardsPerPage;
  let endingPage = startingPage + cardsPerPage;

//   console.log("Start", startingPage, "End", endingPage);

  const setPagination = (passingPageNumber) => {
    setCurrentPage(passingPageNumber)
  }

  return (
    <div className="mt-10">
      <h2 className="text-center font-bold text-xl">
        How to Add the Pagination in React?
      </h2>
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {/* {
              Array.from({length: totalNumPages}, (_,index) => {
                return    <button className='p-2 bg-amber-500 w-10 rounded cursor-pointer'>{index + 1}</button>
                })
            } */}

        { loading ? <div className="flex flex-col items-center justify-center py-20">
            {/* Spinner */}
            <div className="w-10 h-10 rounded-full border-4 border-t-4 border-transparent border-t-blue-600 bg-gradient-to-r from-blue-400 to-blue-600 animate-spin"></div>
            <p className="mt-3 text-gray-600 font-medium text-lg">Loading...</p>
          </div> : products?.slice(startingPage, endingPage).map(({ id, thumbnail, price, title }) => {
            return (
              <ProductsCard
                key={id}
                image={thumbnail}
                title={title}
                price={price}
              />
            );
          })}
      </div>
      {
        loading ? <span></span> : <ButtonsContainer currentPage={currentPage} setCurrentPage = {setCurrentPage} totalNumPages={totalNumPages} setPagination={setPagination}/>
      }
    </div>
  );
};

export default AddPagination;
