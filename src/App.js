import React, { useEffect, useState } from 'react';

const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state

  // レンダリングの後で実行される
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.')
  })

  // 第 2 引数に空の配列を渡すことで、1 度しか呼ばれないようにできる
  useEffect(() => {
    console.log('This is like componentDidMount.')
  }, [])

  // name が変更される度、呼ばれるようにできる
  useEffect(() => {
    console.log('This callback is for name only')
  }, [name])

  // const renderPeriod = () => {
  //   console.log('renderPeriod renders period.')
  //   return '。'
  // }

  return (
    <>
      {/* <p>現在の {name} は、{price} 円です{renderPeriod()}</p> */}
      <p>現在の {name} は、{price} 円です</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input type="text" value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
