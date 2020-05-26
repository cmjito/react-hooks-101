import React, { usestate, useState } from 'react'


const App = props => {
  const [ name, SetName ] = useState( props.name )
  const [ price, SetPrice ] = useState( props.price )

  const reset = () => {
    SetPrice(props.price)
    SetName(props.name)
  }


  return (
    <React.Fragment>
      <div >
        Hello...
      </div>
      <p>現在の{name}は、{price}です</p>
      <button onClick={() => SetPrice(price +1)}>+1</button>
      <button onClick={() => SetPrice(price -1)}>-1</button>
      <button onClick={ reset }>Reset</button>
      <input value={name} onChange={ e => SetName( e.target.value ) } />


    </React.Fragment>
  )
}


App.defaultProps = {
  name: '',
  price: 1000
}


export default App
