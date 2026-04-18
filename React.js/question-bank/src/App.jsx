import { useState } from "react";
import "./App.css";
import { StoreData } from "./components/StoreData";

function App() {
  const [answerQuery, setAnswerQuery] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categoriesList = [
    "All",
    "Basics",
    "Props & State",
    "Hooks",
    "Lifecycle & Rendering",
    "Events & Forms",
    "Lists & Keys",
    "Advanced",
  ];

  const handleClick = (id) => {
    setAnswerQuery((prev) => {
      return prev === id ? null : id;
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredData =
    selectedCategory === "All"
      ? StoreData
      : StoreData.filter((item) => item.category === selectedCategory);

  return (
    <div className="px-4 py-5 sm:w-[70%] w-full mx-auto">
      <h1 className="text-2xl text-center font-bold py-10">
        Frequently asked Question in React.js
      </h1>
      <section className="radio-buttons">
        {categoriesList.map((items) => {
          return (
            <div key={items}>
              <input
                onChange={() => {
                  handleCategoryChange(items);
                  setAnswerQuery(null)
                }}
                id={items}
                type="radio"
                value={items}
                name="section"
                checked={selectedCategory === items}
              />
              <label className="px-1" htmlFor={items}>
                {items}
              </label>
            </div>
          );
        })}
      </section>
      {filteredData.map(({ question, answer, id }) => {
        return (
          <div
          className="p-2 bg-gray-200 my-1 rounded-xl"
            key={id}
            onClick={() => {
              handleClick(id);
            }}
          >
            <h3 className="cursor-pointer flex justify-between items-center hover:text-amber-500">
              {id}. {question}
              <i className={`fa-solid  px-4 ${answerQuery === id ? 'fa-angle-up text-amber-500': 'fa-angle-down'}`}></i>
            </h3>
            {answerQuery === id && <p className="answer-section">{answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default App;
