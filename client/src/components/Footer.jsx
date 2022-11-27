import React, { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear]= useState();
  const getYear=()=> setYear( new Date().getFullYear());
  useEffect(()=>{
    getYear();
  },[]); 
  return(
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <p className="text-white text-3xl "> <i>Web 3.0</i> </p> 
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Implemented Modern Web 3.0 Blockchain with React.js, Solidity, Crypto and Metamask that allows users to send transactions to the blockchain.</p>
      <p className="text-white text-sm text-center font-medium mt-2"> <a href="mailto: hardikchaturvedi0562@gmail.com">hardikchaturvedi0562@gmail.com</a> </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">Copywrite @{year} Hardik Chaturvedi</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
  );
  };

export default Footer;
