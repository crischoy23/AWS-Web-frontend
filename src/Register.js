import React, { useState } from 'react';
import axios from 'axios';

const registerUrl = ' ';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === '' || email.trim() === '' || name.trim() === '' || password.trim() === '') {
      setMessage('All fields are required');
      return;
    }
    setMessage(null);
    const requestConfig = {
      headers: {
        'x-api-key': ' '
      }
    }
    const requestBody = {
      username: username,
      email: email,
      name: name,
      password: password
    }
    axios.post(registerUrl, requestBody, requestConfig).then(response => {
      setMessage('Registeration Successful! Please go to Login');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }

  return (
    <>
    <div className="position-relative  vh-100 w-100 bg-secondary " >
      {/* <Image
        src=""
        layout="fill"
      ></Image> */}
      <div className="container position-absolute top-50 start-50 translate-middle mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6 p-0 d-none d-lg-block">
            <div className="gray-bg d-flex align-items-center justify-content-center h-100 position-relative ">
              <div className="p-3 " style={{ zIndex: 3 }}>
                <h1 >
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
              {/* <Image
                style={{ zIndex: 1 }}
                src=""
                layout="fill"
              ></Image> */}
            </div>
          </div>
          <div className="col-lg-6 p-0 ">
            <div className="login-container ">
              <div className="form-title-container px-5 py-2 py-xxl-3 dark-bg">
                <h2 className="lexyellow mb-3">Register</h2>
                <span className="underline d-block bg-gold rounded-pill w-100"></span>
              </div>
              <div className="login-form gray-bg p-4 px-md-5 py-xl-2">
                <form action="gray-bg"  className="row g-3 p-xl-4" onSubmit={submitHandler}>
                  <div className="col-12">
                    <label>Name</label>
                    <input 
                      type="text" 
                      name="name"
                      className="form-control"
                      placeholder="Name"value={name} 
                      onChange={event => setName(event.target.value)} />
                  </div>
                  <div className="col-12">
                    <label>Email</label>
                    <input 
                      type="text" 
                      name="email"
                      className="form-control"
                      placeholder="Email" value={email} 
                      onChange={event => setEmail(event.target.value)} />
                  </div>
                  <div className="col-12">
                    <label>Username</label>
                    <input 
                      type="text" 
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      value={username} 
                      onChange={event => setUsername(event.target.value)} />
                  </div>
                  <div className="col-12 mb-3">
                    <label>Password</label>
                    <input 
                      type="password"  
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password} 
                      onChange= {event => setPassword(event.target.value)}/>
                  </div>
                  <div className="col-12">
                  <input className="btn bg-primary w-100 text-white" type="submit" value="Register" />
                  </div>
                </form>
                  {message && <p className="message">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Register;