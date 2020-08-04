import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/Home.css'
class Home extends Component{
    render() {
        return(
            <div className="App">
<h1> Info about Chemical Engineers</h1>
        <img src="https://lh3.googleusercontent.com/proxy/-aAegNZL12-Zd3xV7xgzlI5YbO7U8lJgzVqL9Lj38CjPosph0ks2WhV3g9lDIZ5BL47QTxyzBWBfOk84OgxXn5kgT8YrOawsIRJaFeYT8BcVqpQrV9YvfcOBp6kB3DlZrFUChRhzLg" />
<br/>
<br/>
      <Link  className="lik" to="/Skills"> How Chemical Engineers use different math and science subjects </Link>
      <br/>
      <Link className="lik" to="/Problem"> How Chemical Engineers work with other subjects and industries </Link>
      <br/>
      <Link className="lik" to="/Life">How Chemical Engineers use knowledge of chemicals to solve real world problems. </Link>
      
    </div>
        )
    }
}

export default Home


