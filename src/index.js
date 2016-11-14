import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './SignUp.js';


ReactDOM.render(
  <SignUp email={"yahoo.com"} password={"password"} confirmation={"password"}/>,
  document.getElementById('root')
);
