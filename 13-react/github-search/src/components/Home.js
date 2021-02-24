import React from 'react';

import { Link } from 'react-router-dom';

import _ from 'underscore';

const Home = (props) => {

  const _gotoRandomUser = () => {
    const students = ['Anchorite1001','AndreAnggono','aronweston','DaniiBlack','ethmoses1','gotem4ever1','jyeharry','leopengilley','little-chi-mai','mufcs','nataliepauchard','Naveen2008','oisa','PegliOne','plantdink','ScottCausby','trentthom','wuersen','zohaf'];
    const username = _(students).sample();

    props.history.push(`/details/${ username }`); // redirect (programmatic navigation)
  };

  return (
    <div>
      <h1>Github Search</h1>

      <Link to="/search">
        <button>Search for a user</button>
      </Link>

      <button onClick={ _gotoRandomUser }>Random user</button>
    </div>
  );
};

export default Home;
