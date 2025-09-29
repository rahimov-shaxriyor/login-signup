import { FcGoogle } from "react-icons/fc"; 
import React, { useContext } from 'react'
import { MainContext } from '../context/ContextProvider'
import { Link, Navigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import toast from "react-hot-toast";

const Login = () => {
  const {state, dispatch} = useContext(MainContext)
  
  if (state.isLogged) {
    return <Navigate to="/" replace />
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        toast.success("Successfully logged in");
     } catch (error) {
        console.log("Login failed:", error);
        toast.error(error.message)
    }
  }

  const handleGoogleLogin = async ()=>{
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user
      dispatch({type: "LOGIN", payload: { login: user.displayName, email: user.email }})
      toast.success('Successfully logged in')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='container min-h-screen flex justify-center items-center'>
        <div className='w-full max-w-[31.25rem] bg-gray-700 rounded-[.625rem] py-[1.875rem] px-[.625rem] flex flex-col items-center'>
            <p className='font-medium text-[1.0625rem] mb-[.875rem]'>Please enter your login and password</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-[.875rem] w-full max-w-[20rem]'>
                <input name='email' type="email" placeholder="Email..." className="input input-primary" required autoComplete='off'/>
                <input name='password' type="password" placeholder="Password..." className="input input-primary" required autoComplete='off'/>
                <button type='submit' className="btn btn-primary">Login</button>
                <div className="flex justify-center gap-[.75rem]">
                  <p>Don't have an account?</p>
                   <Link to={"/sign-up"} className='text-blue-300 hover:underline self-start'>Sign up</Link>
                </div>
                <hr />
                <button type='button' onClick={handleGoogleLogin} className="btn btn-neutral"><FcGoogle className="text-[1.25rem]"/> Google</button>
            </form>
        </div>
    </div>
  )
}

export default Login