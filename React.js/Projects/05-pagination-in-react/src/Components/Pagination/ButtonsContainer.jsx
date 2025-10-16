import React from 'react'

const ButtonsContainer = ({currentPage, setCurrentPage, totalNumPages, setPagination}) => {
  return (
    <div className="flex gap-4 flex-wrap">
        <button
          className="p-2 bg-amber-500 rounded cursor-pointer m-1"
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <div className="mx-auto text-center">
          {[...Array(totalNumPages).keys()].map((num) => {
            return (
              <button
                className={`p-2 w-10  rounded cursor-pointer m-1 ${num === currentPage ? "bg-amber-500" : "bg-gray-400"}`}
                key={num} onClick={() => setPagination(num)}
              >
                {num + 1}
              </button>
            );
          })}
        </div>
        <button
          className="p-2 bg-amber-500 rounded cursor-pointer m-1"
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
          disabled={currentPage === totalNumPages - 1}
        >
          Next
        </button>
      </div>
  )
}

export default ButtonsContainer