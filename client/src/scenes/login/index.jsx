import {  useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

const Login=()=> {
  const [accounts,setAccounts]=useState();
  const [loginFalse,setLoginFalse]=useState(false);
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
   <h2 className="text-2xl font-bold text-center">Login</h2>
<form  onSubmit={handleSubmit((data) => {
  const existsAccount= accounts.filter((account)=>(account.attributes.email===data.email && account.attributes.password===data.password));
  if(existsAccount.length>0){
          navigate(`/`);
          localStorage.setItem("user", data.email);
  }
  else{
    setLoginFalse(true);
  }
  })}>
  <div>
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
    w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
    {...register('email')}/>
  </div>
  <div class="mb-6 mt-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
     w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
      {...register('password')}/>
  </div>
{loginFalse && <p className='text-red-500'>Account not true</p>}
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
<p className='mt-5'>Not had account yet, <a href="/signup" className='text-blue-600'> Create account here</a></p>
</div>
  );
}

export default Login;

