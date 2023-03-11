import React from 'react';
import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerLeft}>
        <img width={40} height={40} src="/img/logo.svg" alt="logo"/>
        <div className={style.headerInfo}>
          <h1>React Sneakers</h1>
          <div>The best sneakers here</div>
        </div>
      </div>
      <ul className={style.headerRight}>
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
