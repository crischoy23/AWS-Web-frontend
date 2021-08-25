import React from 'react';
import { getUser, resetUserSession } from './service/AuthService';

const PromoPage = (props) => {
  const user = getUser();
  const name = user !== 'undefined' && user ? user.name : '';

  const logoutHandler = () => {
    resetUserSession();
    props.history.push('login');
  }
  return (
    <div className="p-5">
      Welcome {name}! Hit the <span className="text-danger">subscribe</span>  button to get exciting promos! <br />
      <div className="d-flex justify-content-between mt-5">
      <input className="btn bg-danger text-white text-uppercase" type="button" value="subscribe" onClick=""/>
      <input className="btn bg-dark text-white" type="button" value="Logout" onClick={logoutHandler} />
      </div>

    </div>
  )
}

export default PromoPage;