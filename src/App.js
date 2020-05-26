import React, { useEffect, useState } from 'react'


const App = props => {
  const [ state, setState ] = useState( props )

  const reset = () => {
    setState(props)
  }

  const { name, price } = state


  useEffect( () => {
    console.log( 'This is like componentDidMount or componentDidUpdate' )
  } )


  useEffect( () => {
    console.log( 'This is like componentDidMount' )
  }, [] )

  useEffect( () => {
    console.log( 'This callback is for name only' )
  }, [name] )



  return (
    <React.Fragment>
      <div >
        Hello....
      </div>
      <p>現在の{ name }は、{ price }です。 </p>
      <button onClick={() => setState( {...state, price: price +1} )}>+1</button>
      <button onClick={() => setState( {...state, price: price -1} )}>-1</button>
      <button onClick={ reset }>Reset</button>
      <input value={ name } onChange={ e => setState( {...state, name: e.target.value }) } />


    </React.Fragment>
  )
}


App.defaultProps = {
  name: '',
  price: 1000
}


export default App
