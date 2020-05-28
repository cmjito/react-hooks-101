import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


//import EventForm from './EventForm'
//import Events from './Events'
import Event from './Event'
//import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    console.log('addEvent')
    console.log( {title, body} )
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    setTitle('')
    setBody('')
  }


  //console.log({state})

  return (
    //<AppContext.Provider value={{ state, dispatch }}>
      //  <EventForm />
      //  <Events />


      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className='form-group' >
            <label htmlFor='formEventTitle'  >タイトル</label>
            <input className='form-control' id='formEventTitle' value={title} onChange={e => setTitle(e.target.value) } ></input>
          </div>

          <div className='form-group' >
            <label htmlFor='formEventBody'  >ボディ</label>
            <textarea className='form-control' id='formEventBody' value={body} onChange={e => setBody(e.target.value) } ></textarea>
          </div>

          <button className='btn btn-primary' onClick={addEvent} >イベントを作成する</button>
          <button className='btn btn-danger' >全てのイベントを削除する</button>
        </form>

        <h4>イベント一覧</h4>
        <table className='table table-hover' >
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { state.map( (event, index) => (<Event key={index} event={event} dispatch={dispatch} ></Event> )) }

          </tbody>
        </table>

      </div>
    //</AppContext.Provider>
  )
}

export default App
