import React, { Component } from 'react';
import Notifications from '../Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
       <Notifications/>
       <div className='App'>
         <Header/>
         <div className='App-body'>
           <Login/>
         </div>
         <div className='App-footer'>
           <Footer/>
         </div>
       </div>
     </>
   );
 }
}

export default App;