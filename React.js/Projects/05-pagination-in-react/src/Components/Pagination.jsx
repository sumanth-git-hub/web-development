import React, { useEffect, useState } from "react";

function Pagination() {
  const [userData, setUserData] = useState();
  const [pageData, setPageData] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const lastIndexItems = pageData * rowsPerPage;
  const firstIndexItems = lastIndexItems - rowsPerPage;
//   const currentItems = userData?.users?.slice(firstIndexItems, lastIndexItems);
//   const totalPages = Math.ceil(userData?.total / rowsPerPage);
  const [searchTerm, setSearchTerm] = useState("")
  const filteredUser = userData?.users?.filter((addFilter) => {
    return addFilter.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  })
    // console.log(filteredUser);

    const currentItems = filteredUser?.slice(firstIndexItems, lastIndexItems);
    const totalPages = Math.ceil((filteredUser?.length || 0) / rowsPerPage);


  console.log("first: ", firstIndexItems, "Last: ", lastIndexItems);

  // console.log(userData)

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=0")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  function handlePrevious() {
    setPageData((prev) => Math.min(prev - 1));
  }
  function handleNext() {
    setPageData((prev) => Math.max(prev + 1));
  }
  function handleCurrent(pageCount) {
    setPageData(pageCount);
  }
  useEffect(() => {
    setPageData(1)
  },[searchTerm])
  return (
    <section className="w-full bg-black text-white min-h-screen">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center pt-20 pb-4">
          Pagination in <span className="text-sky-300">React</span>
        </h1>
        <div>
          <div className="w-full max-w-xs md:max-w-lg px-4 py-2 rounded-xl flex flex-row items-center my-5  z-10 darkShadow bg-black">
            <i className="fa-solid fa-magnifying-glass px-4"></i>
            <input
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
              className="w-full outline-none"
              placeholder="Find User Details"
              type="text"
              value={searchTerm}
            />
          </div>
        </div>
        <div className="pt-10 w-full overflow-scroll">
          <table className="mx-auto">
            <thead>
              <tr className="bg-amber-500 text-black">
                <th className="border w-1/8">Name</th>
                <th className="border w-1/8">Email ID</th>
                <th className="border w-1/8">Contact Number</th>
                <th className="border w-1/8">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {
                !userData ? (<tr className="border">
                    <td colSpan={4} className="text-center py-4 font-bold">Please Wait for a Minute!!</td>
                </tr>) : currentItems.length > 0 ? (currentItems?.map((user, index) => {
                  return <tr key={index} className="bg-gray-300 text-black">
                    <td className="border w-1/8 px-2">{user.firstName}</td>
                    <td className="border w-1/8 px-2">{user.email}</td>
                    <td className="border w-1/8 px-2">{user.phone}</td>
                    <td className="border w-1/8 px-2">{user.birthDate}</td>
                  </tr>
              })) : (<tr className="border"><td className="text-center py-4 font-bold" colSpan={4}>Sorry No User Found!</td></tr>)
              }
            </tbody>
          </table>
        </div>
        <div className="pagination-button-section flex justify-center pt-4">
          <button
            className="previousButton px-4 bg-gray-500 rounded-xl text-black py-1 mx-1 cursor-pointer"
            onClick={() => {
              handlePrevious();
            }}
            disabled={pageData === 1}
          >
            Previous
          </button>
          <div className="currentButtons flex overflow-x-scroll scrollbar-hide">
            {Array.from({ length: totalPages }, (_, index) => {
              return (
                <button
                  onClick={() => {
                    handleCurrent(index + 1);
                  }}
                  className={`px-4 rounded-xl text-black py-1 mx-1 cursor-pointer ${
                    pageData === index + 1 ? "bg-amber-500" : "bg-gray-500 "
                  }`}
                  key={index}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <button
            className={`nextButton px-4 bg-gray-500 rounded-xl text-black py-1 mx-1 cursor-pointer `}
            onClick={() => {
              handleNext();
            }}
            disabled={pageData === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pagination;
