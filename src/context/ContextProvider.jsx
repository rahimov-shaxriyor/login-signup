import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useReducer, useState } from 'react'
import { auth } from '../firebase'

export const MainContext = createContext()

const initialState = {
  user: null,
  isLogged: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isLogged: true }
    case "SIGNUP":
      return { ...state, user: action.payload, isLogged: true }
    case "LOGOUT":
      return { ...state, user: null, isLogged: false }
    default:
      return state
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      } else {
        dispatch({ type: "LOGOUT" });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center'>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    )
  }

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  )
}

export default ContextProvider
