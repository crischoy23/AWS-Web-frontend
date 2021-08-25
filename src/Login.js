import React, {useState} from 'react';
import axios from 'axios';
import { setUserSession } from './service/AuthService';
const loginAPIUrl = ' ';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Both username and password are required');
      return;
    }
    setErrorMessage(null);
    const requestConfig = {
      headers: {
        'x-api-key': ' '
      }
    }
    const requestBody = {
      username: username,
      password: password
    }

    axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
      setUserSession(response.data.user, response.data.token);
      props.history.push('/promo-page');
    }).catch((error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('sorry....the backend server is down. please try again later!!');
      }
    })
  }

  return (
    <>
      <div className="position-relative h-75 vh-100 w-100 bg-secondary">
        {/* <img
          src=""
          layout="fill"
        ></img> */}
      
      <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="row">
          <div className="col-lg-6 p-0 d-none d-lg-block">
            <div className=" d-flex  align-items-center justify-content-center h-100 position-relative ">
              <div className="p-xl-3 " style={{ zIndex: 3 }}>
                <h1 className="">
                  Best Shopping Experience!
                </h1>
                <p className="text-white login-text">
                Shopping is an activity in which a customer browses the available goods
                </p>
              </div>
              <div
                className="overlay-dark"
                style={{ zIndex: 2 }}
                layout="fill"
              ></div>
              {/* <img
                style={{ zIndex: 1 }}
                src=""
                layout="fill"
              ></img> */}
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="login-container ">
              <div className="form-title-container px-5 py-2 py-xxl-3">
                <h2 className="lexyellow ">Login</h2>
                {/* {ERROR!} */}
                {/* <span className="underline d-block bg-gold rounded-pill w-100"></span> */}
              </div>
              <div className="login-form  p-4 px-md-5 p-xxl-5">
                <form onSubmit={submitHandler}  className="row g-3 p-xl-4 gray-bg">
                  <div className="col-12">
                    <label>Username</label>
                    <input type="text" name="username"
                      className="form-control"
                      placeholder="Username"value={username} onChange={event => setUsername(event.target.value)} />
                   
                  </div>
                  <div className="col-12 mb-3">
                    <label>Password</label>
                    <input type="password" name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password} onChange={event => setPassword(event.target.value)} />
                  </div>
                  <div className="col-12 ">
                  <input type="submit" value="Login" className="btn bg-primary text-white w-100"/>
                  </div>
                </form>
                {errorMessage && <p className="message">{errorMessage}</p>}  
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
    
  )
}

export default Login;