import React, { useContext, useRef } from 'react'
import { MainContext } from '../context/ContextProvider'
import { Link, Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const {state, dispatch} = useContext(MainContext)
  
  if (state.isLogged) {
    return <Navigate to="/" replace />
  }

  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    if (passwordRef.current.value == confirmPasswordRef.current.value) {
      try {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        dispatch({ type: "SIGNUP", payload: data });
        toast.success("Successfully signed up");
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error(t("passwordError"))
      passwordRef.current.classList.remove('input-primary')
      passwordRef.current.classList.add('input-error')
      passwordRef.current.value = ''
      confirmPasswordRef.current.classList.remove('input-primary')
      confirmPasswordRef.current.classList.add('input-error')
      confirmPasswordRef.current.value = ''
    }
  }

  const handleGoogleSignUp = async ()=>{
      try {
        const result = await signInWithPopup(auth, googleProvider)
        const user = result.user
        dispatch({type: "SIGNUP", payload: { login: user.displayName, email: user.email }})
        toast.success('Successfully signed up')
      } catch (error) {
        toast.error(error.message)
      }
  }

  const { t, i18n } = useTranslation()

  return (
    <div className='container min-h-screen flex justify-center items-center'>
        <div className='w-full max-w-[31.25rem] bg-gray-700 rounded-[.625rem] py-[1.875rem] px-[.625rem] flex flex-col items-center'>
            <p className='font-medium text-[1.0625rem] mb-[.875rem]'>{t("please2")}</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-[.875rem] w-full max-w-[20rem]'>
                <input name='fullname' type="text" placeholder="Full name..." className="input input-primary" required autoComplete='off'/>
                <input name='email' type="email" placeholder="Email..." className="input input-primary" required autoComplete='off'/>
                <input ref={passwordRef} name='password' type="password" placeholder="Password..." className="input input-primary" required autoComplete='off'/>
                <input ref={confirmPasswordRef} name='confirmPassword' type="password" placeholder="Confirm password..." className="input input-primary" required autoComplete='off'/>
                <button type='submit' className="btn btn-primary">{t("signup")}</button>
                <div className="flex justify-center gap-[.75rem]">
                    <p>{t("haveaccount")}</p>
                    <Link to={"/login"} className='text-blue-300 hover:underline self-start'>{t("login")}</Link>
                </div>
                <hr />
                <button type='button' onClick={handleGoogleSignUp} className="btn btn-neutral"><FcGoogle className="text-[1.25rem]"/> Google</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp