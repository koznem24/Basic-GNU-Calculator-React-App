import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import UserProvider from './components/UserProvider';


function App() {
  return (
    <div className="App">
    	<UserProvider value="Vishwas">
    	   <h1>GNU Calculator</h1>
      	   <Main />
    	</UserProvider>
    	  
    </div>
  );
}

export default App;
