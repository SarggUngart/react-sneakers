import React from 'react';

export const Header = () => {
  return (
    <header className='header'>
      <div className='headerLeft'>
        <img width={40} height={40} src="/img/logo.svg" alt="logo"/>
        <div className='headerInfo'>
          <h1>React Sneakers</h1>
          <div>The best sneakers online store</div>
        </div>
      </div>
      <ul className='headerRight'>
        <li>
          <img src="/img/card.svg" alt="card"/>
          <span>1205 $</span></li>
        <li>
          <img src="/img/user.svg" alt="user"/>
        </li>
      </ul>
    </header>
  );
};
