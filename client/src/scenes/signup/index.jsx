import {  useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

const Signup=()=> {
  const [accounts,setAccounts]=useState();
  const [existsAccount,setExistsAccount]=useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

    async function getAccounts() {
    const accounts = await fetch(
      "http://localhost:1337/api/accounts",
      { method: "GET" }
    );

    const itemsJson = await accounts.json();
    setAccounts( itemsJson.data)
  }

  useEffect(() => {
    getAccounts();
  }, []);
   const {
    register,
    handleSubmit,
  } = useForm();

  return (
   <div className=" mt-20 mx-10">
   <h2 className="text-2xl font-bold text-center">Signup</h2>
<form  onSubmit={handleSubmit(async (data) => {
  const existsAccount= accounts.filter((account)=>(account.attributes.email===data.email));
  if(existsAccount.length>0){
    setExistsAccount(true);
  }
  else{
     await fetch("http://localhost:1337/api/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({data:{
        email:data.email,
        password:data.password,
    }}),
    });
    navigate(`/login`);
    
  }
  })}>
<div class="mb-6">
    <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
     required 
    {...register('email')}/>

  </div>
  <div class="mb-6">
    <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
     required 
    {...register('password')}/>

  </div>
  <div class="mb-6">
    <label htmlFor="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm 
    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      required 
    {...register('password')}/>

  </div>
 
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
{existsAccount && <p className='text-red-500'>Account already existed!</p>}
<p className='mt-5'>Have account, <a href="/login" className='text-blue-600'> Login here here</a></p>
</div>
  );
}

export default Signup;

