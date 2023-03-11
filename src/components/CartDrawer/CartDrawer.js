import React from 'react';
import style from './CartDrawer.module.scss'

export const CartDrawer = () => {
  return (
    <div style={{display: 'none'}} className={style.drawerOverlay}>
      <div className={style.drawer}>
        <h2>Cart
          <button className={style.cartBtn}>
            <img src="/img/remove.svg" alt="delete"/>
          </button></h2>
        <div className={style.items}>
          <div className={style.cartItem}>
            <img className={style.cartItemImg} src="/img/sneakers/07.jpg" alt="item"/>
            
            <div>
              <p>Nike Air Max 270</p>
              <b>300$</b>
            </div>
            
            <button className={style.cartBtn}>
              <img src="/img/remove.svg" alt="delete"/>
            </button>
          </div>
        
        </div>
        <div className={style.cartTotal}>
          <ul className={style.cartList}>
            <li className={style.cartListItem}>
              <span>total</span>
              <div></div>
              <b>1300 $</b>
            </li>
            <li className={style.cartListItem}>
              <span>tax</span>
              <div></div>
              <b>5%</b>
            </li>
          </ul>
          <button className={style.greenBtn}>
            Place an order
            <img className={style.greenBtnIco} src="/img/arrow.svg" alt="arrow"/>
          </button>
        </div>
      </div>
    </div>
  );
};

