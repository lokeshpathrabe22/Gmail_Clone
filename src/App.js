import React from 'react';
import { BrowserRouter as Router, Switch, Route , Link } from 'react-router-dom';
import Header from './Header';
import Mail from './Mail';
import EmailList from './EmailList';
import Sidebar from './Sidebar';
import SendMail from './SendMail';
import { useSelector ,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import { selectsendMessageIsOpen } from './features/mailSlice';
import {login, selectUser} from "./features/userSlice";
// import Login from './Login';
import { auth } from './firebase';
import Sideoption from "./Sideoption";

function App() {
  const sendMessageIsOpen=useSelector(selectsendMessageIsOpen);
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if(user){
          //user is logged in
          dispatch(login({
            displayName:user.displayName,
            email:user.email,
            photoUrl:user.photoURL,
          }))
        }else{

        }
      })
  },[])

  return (
    <Router>
      {
      // !user?(
      //     <Login/>
      // ):(
        <div className="app">
        <Header/>
        <div className="app__body">
        <Sidebar/>
        <Switch>
          <Route path="/mail">
            <Mail/>
          </Route>
          <Route path="/">
            <EmailList/>
          </Route>
        </Switch>
        </div> 
        {sendMessageIsOpen && <SendMail/>}
        <Sideoption/>
      </div>
      // )
      }
    </Router>
  );
}

export default App;
