import React, { act, useState } from "react";
import Profile from "../components/Profile";
import Interests from "../components/Interests";
import Settings from "../components/Settings";

const TabsForm = () => {

    const [activeTab, setActiveTab] = useState(0)
    const [storeData, setStoreData] = useState({
        name: "",
        age: "",
        email: "",
        interests: [],
        theme: ''
    })
    const [errorElement, setErrorElement] = useState({})

  const tabs = [
    {
      tabName: "Profile",
      formComponent: Profile,
      validation: () => {
        const errorObject = {}
        if(!storeData.name || storeData.name.length < 2) {
          errorObject.name = "Please enter the valid name"
        }
        if(storeData.age < 14){
            errorObject.age = "Please enter the age and it should be above 14 years"
        } 
        if(!/^[^@]+@[^@]+\.[^@]+$/.test(storeData.email)){
            errorObject.email = "Please enter the valid e mail id"
        }
        setErrorElement(errorObject)
          return errorObject.name || errorObject.age || errorObject.email ? false : true;
      }
    },
    {
      tabName: "Interests",
      formComponent: Interests,
      validation: () => {
        const errorObject = {}
        if(storeData.interests.length < 1){
          errorObject.interests = "Please select at least 1 interest"
        }
        setErrorElement(errorObject)
        return errorObject.interests ? false : true
      }
    },
    {
      tabName: "Settings",
      formComponent: Settings,
      validation: () => {
        return true
      }
    },
  ];

//   console.log(activeTab)

  const handleTab = (index) => {
    setActiveTab(index)
  }
  const handlePrevious = () => {
    if(tabs[activeTab].validation()) {
      setActiveTab((prev) => prev - 1)
    }
  }
  const handleNext = () => {
    if(tabs[activeTab].validation()) {
      setActiveTab((prev) => prev + 1)
    }
  }
  const handleSubmit = () => {
    console.log(storeData)
  }
  const ActiveTabComponent = tabs[activeTab].formComponent
//   console.log(ActiveTabComponent)


  return (
    <div>
      <ul className="tabs-list-container">
        {tabs.map((tab, index) => {
          return <li className={`${activeTab === index && "active-class"}`} key={index} onClick={() => tabs[activeTab].validation() && handleTab(index)}>{tab.tabName}</li>;
        })}
      </ul>
      <div>
        {<ActiveTabComponent data={storeData} setData = {setStoreData} error = {errorElement} setError = {setErrorElement} />}
      </div>
      <div className="navigator-buttons-section">
        {activeTab > 0 && <button className="prev-button" onClick={handlePrevious}>Previous</button>}
        {activeTab < tabs.length -1 && <button className="next-button" onClick={handleNext}>Next</button>}
        {activeTab === tabs.length -1 && <button className="next-button" onClick={handleSubmit}>Submit</button>}
       
        
      </div>
    </div>
  );
};

export default TabsForm;
