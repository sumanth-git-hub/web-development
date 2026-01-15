import React, { useState } from "react";

import featuredImage from "../assets/business-insurance.png";
import UserInfo from "../components/UserInfo";
import IndustryInfo from "../components/IndustryInfo";
import Stepper from "../components/Stepper";
import CompanyInfo from "../components/CompanyInfo";
import { DisclaimerAccordion } from "../components/DisclaimerAccordion";
import ThanksModal from "../components/ThanksModal";

const BusinessInsurance = () => {
  const [activeForm, setActiveForm] = useState(0);
  const [storeData, setStoreData] = useState({
    userName: "",
    mobileNumber: "",
    emailId: "",
    companyName: "",
    pinCode: "",
    noOfEmp: "",
    industryCategory: "",
    sumInsured: "",
    registeredIn: "yes",
    termsAndCondition: "accept",
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [errorElement, setErrorElement] = useState({
    // nameError: 'Please Enter Your Name',
    // mobileNumberError: 'Please enter your mobile number',
    // emailIdError: 'Please enter a valid email address',
    // companyNameError: 'Please Enter Your Company Name',
    // pinCodeError: 'Please enter your pin code',
    // noOfEmpError: 'Employee field is required',
    // industryCategoryError: 'Please Select Your Business Category',
    // sumInsuredError: 'Sum Insurance field is required'
  })
  // console.log(activeForm)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHiddenForm, setHiddenForm] = useState(false)
  const ListItems = [
    {
        id: 1,
        name: 'User Info',
        component: UserInfo,
        validateError: () => {
            const errorObject = {}
            if(!storeData.userName){
                errorObject.nameError = 'Please Enter Your Name'
            }
            if(!storeData.mobileNumber){
                errorObject.mobileNumberError = 'Please enter your mobile number'
            }
            if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(storeData.emailId)){
              errorObject.emailIdError = 'Please enter a valid email address'
            }
            setErrorElement(errorObject)
            return errorObject.nameError || errorObject.mobileNumberError || errorObject.emailIdError ? false : true
        }
    },
    {
        id: 2,
        name: 'Company Info',
        component: CompanyInfo,
        validateError: () => {
          const errorObject = {}
          if(!storeData.companyName){
            errorObject.companyNameError = 'Please Enter Your Company Name'
          }
          if(!storeData.pinCode){
            errorObject.pinCodeError = 'Please enter your pin code'
          }
          if(!storeData.noOfEmp){
            errorObject.noOfEmpError = 'Employee field is required'
          }
          setErrorElement(errorObject)
          return errorObject.companyNameError || errorObject.pinCodeError || errorObject.noOfEmpError ? false : true;
        }
    },
    {
        id: 3,
        name: 'Industry Info',
        component: IndustryInfo,
        validateError : () => {
          const errorObject = {}
          if(!storeData.industryCategory) {
            errorObject.industryCategoryError = 'Please Select Your Business Category'
          } 
          if(!storeData.sumInsured){
            errorObject.sumInsuredError = 'Sum Insurance field is required'
          }
          setErrorElement(errorObject)
          return errorObject.industryCategoryError || errorObject.sumInsuredError ? false : true
        }
    },
]


  const handleNext = () => {
    // if (activeForm < ListItems.length - 1) {
    //   setActiveForm((prev) => prev + 1);
    //   ListItems[activeForm].validateError()
    // }
    if(ListItems[activeForm].validateError() && activeForm < ListItems.length - 1 && storeData.termsAndCondition === "accept"){
      setActiveForm((prev) => prev + 1);
    }
    else if (ListItems[activeForm].validateError() && activeForm === ListItems.length - 1 && storeData.termsAndCondition === "accept") {
      setIsModalOpen(true)
      setHiddenForm(!isHiddenForm)
      console.log(storeData);
    }
  };
  const handlePrevious = () => {
    if (activeForm > 0) {
      setActiveForm((prev) => prev - 1);
    }
  };
// const navStepper = (stepperIndex) => {
//   setActiveForm(stepperIndex)
// }
  const acceptTerms = (e) => {
    setStoreData((prev) => ({
      ...prev,
      termsAndCondition: e.target.checked ? e.target.name : e.target.checked,
    }));
  };

  const ActiveFormComponent = ListItems[activeForm].component;
  return (
    <div>
      <section className="w-full flex">
        <div className={`mt-10 px-10 ${isHiddenForm? 'w-full': 'w-10/15'}`}>
          <h1 className="text-3xl text-center font-bold">
            Business Insurance <span className="text-sky-300">Online</span>
          </h1>
          <img
            className="w-10/15 mx-auto"
            src={featuredImage}
            alt="business-insurance"
          />
          <div className="usp-section flex gap-4 items-center justify-center">
            <div className="bg-gray-300 rounded-sm p-4 w-1/4">
              <div className="flex items-center gap-2">
                {" "}
                <i className="fa-solid fa-file"></i>
                <p>Quick Claim</p>
              </div>
              <p>Claim Settled in 4 Hours</p>
            </div>
            <div className="bg-gray-300 rounded-sm p-4 w-1/4">
              <div className="flex items-center gap-2">
                {" "}
                <i className="fa-solid fa-phone"></i>
                <p>Support</p>
              </div>
              <p>Get 24X7 Support</p>
            </div>
            <div className="bg-gray-300 rounded-sm p-4 w-1/4">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-file-arrow-down"></i>
                <p>Digital Document</p>
              </div>
              <p>Download Policy PDF</p>
            </div>
          </div>
        </div>
        <div className={`mt-6 p-8 w-1/3 ${isHiddenForm ? 'hidden': ''}`}>
            <Stepper activeForm= {activeForm} setActiveForm = {setActiveForm} />
        <div className=" bg-gray-100 p-8 h-fit rounded-md add-shadow">
          <p className="bg-sky-200 p-2 mb-2 text-center">
            Zero Paperwork.{" "}
            <span className="text-green-600">Online Process</span>
          </p>
          <div className="flex my-4 items-center justify-between">
            <i
              className="fa-solid fa-left-long cursor-pointer"
              onClick={handlePrevious}
            ></i>
            <p>
              Steps <span className="text-[#fa0]">{activeForm + 1}</span> of 3
            </p>
          </div>

          <ActiveFormComponent
            data={storeData}
            setData={setStoreData}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            errorElement = {errorElement}
          />
          <button
            className="font-bold bg-[#fa0] w-full rounded-sm p-2 my-8 cursor-pointer"
            onClick={handleNext}
          >
            {activeForm === ListItems.length - 1 ? "Get Quote" : "Next"}
          </button>
          <p className='relative'>
            <input
              className="cursor-pointer"
              type="checkbox"
              name="accept"
              id="accept"
              checked={storeData.termsAndCondition === "accept"}
              onChange={acceptTerms}
            />
            &nbsp;
            <label htmlFor="accept">I agree to the Terms & Conditions</label>
            {storeData.termsAndCondition !== "accept" && <span className='text-sm text-red-400 absolute top-6 left-4'>Please accept the terms and Conditions</span>}
          </p>
        </div>
        </div>
      </section>
      <div className="p-4">
              <h2 className="text-xl font-bold">What is business insurance?</h2>
              <p className="pb-4">Business Insurance is a type of insurance that protects a business from financial losses caused by unexpected events such as accidents, lawsuits, property damage, theft, or employee-related risks.</p>
            <h2 className="text-xl font-bold">Why business insurance is important?</h2>
            <ul className="list-disc px-4">
              <li>Protects business assets (office, equipment, inventory)</li>
              <li>Covers legal liabilities and lawsuits</li>
              <li>Helps continue operations after losses</li>
              <li>Builds trust with clients, partners, and lenders</li>
            </ul>
      </div>
      <DisclaimerAccordion/>
      <ThanksModal isModalOpen = {isModalOpen} setIsModalOpen = {setIsModalOpen}/>
    </div>
  );
};

export default BusinessInsurance;
