import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CustomerHome} from "./view/CustomerHome";
import {LoginView} from "./view/LoginView";
import {PersonalInfoView} from "./view/PersonalInfoView";
import {DetailListView} from "./view/DetailListView";
import BasicRoute from "./Router";

function App() {
  return (
      <BasicRoute/>
  );
}

export default App;
