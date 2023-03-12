import React from 'react';
import style from './CartDrawer.module.scss'

export const CartDrawer = ({onClickCart, items = [], removeFromCart}) => {
  
  const closeCart = () => {
    onClickCart()
  }
  
  const deleteItem = (id) => {
    removeFromCart(id)
  }
  
  return (
    <div className={style.drawerOverlay}>
      <div className={style.drawer}>
        <h2>Cart
          <button onClick={closeCart} className={style.cartBtn}>
            <img src="/img/remove.svg" alt="delete"/>
          </button></h2>
        <div className={style.items}>
          
          {items.map(s => {
            return (
              <div key={s.id} className={style.cartItem}>
                <img className={style.cartItemImg} src={s.img} alt="item"/>
                
                <div>
                  <p>{s.title}</p>
                  <b>{s.price}$</b>
                </div>
                
                <button onClick={()=>deleteItem(s.id)} className={style.cartBtn}>
                  <img src="/img/remove.svg" alt="delete"/>
                </button>
              </div>
            )
          })}
        
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

