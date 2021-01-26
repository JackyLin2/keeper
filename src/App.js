import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Notes'
import Api from './Api'

function App() {

  return (<div>
      <Header/>

     {Api.map(statements => <Note 
        key = {statements.id}
        content = {statements.content}
        title = {statements.title}
     /> )} 
      <Footer/>
  </div>
  );
}

export default App;
