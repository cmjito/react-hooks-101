import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'


const APP_KEY = 'appWithRedux'

const App = () => {

  // Loadする
  const appState = localStorage.getItem(APP_KEY)

  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  // 変化検知 stateの監視
  useEffect( () => {
    //console.log('I am called')
    const szStr = JSON.stringify(state)
    //console.log(szStr)
    localStorage.setItem( APP_KEY, szStr)
  }, [state])


  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
       <EventForm />
       <Events />
       <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App
