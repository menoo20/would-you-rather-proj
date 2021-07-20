import React from 'react'
import Login from './components/login';
import Nav from './components/navbar'
class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Nav />
      <Login />
    </div>
  )
}
}







export default App;
