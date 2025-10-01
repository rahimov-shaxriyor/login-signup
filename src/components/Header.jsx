import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/ContextProvider'
import i18n from '../languages/i18n'
import { auth, signOut } from '../firebase'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'

const Header = () => {

  const {dispatch} = useContext(MainContext)

  const handleLogout = async () => {
    try {
      await signOut(auth)
      dispatch({ type: "LOGOUT" })
      toast.success('Successfully logged out')
    } catch (error) {
      console.error("Logout failed", error)
    }
  }

  const { t, i18n } = useTranslation()

  return (
    <header className='min-h-[4.0625rem] bg-gray-800 flex text-white mb-[1.25rem]'>
        <div className='container flex justify-between items-center'>
            <Link to={"/"} className='font-semibold text-[1.25rem] flex items-center gap-[.3125rem]'>
                <img src="/brand_logo.png" alt="" width={50}/>
                <h1 className='font-semibold text-[1.25rem]'>Quotes</h1>
            </Link>
            <div className='flex gap-[1.5625rem]'>
                <select onChange={(e) => {
                  i18n.changeLanguage(e.target.value)
                  localStorage.setItem("lang", e.target.value)
                }}  defaultValue={localStorage.getItem("lang") || "en"} className='bg-gray-800'>
                    <option value="en">en</option>
                    <option value="uz">uz</option>
                    <option value="ru">ru</option>
                </select>
                <button onClick={handleLogout} className="btn btn-secondary">{t("logout")}</button>
            </div>
        </div>
    </header>
  )
}

export default Header