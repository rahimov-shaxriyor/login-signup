import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../languages/i18n'

const Home = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className='container'>
        <h1 className='font-bold text-[1.25rem] text-center'>{t("welcome")}</h1>
    </div>
  )
}

export default Home