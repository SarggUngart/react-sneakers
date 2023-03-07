import React from 'react';

export const CartDrawer = () => {
  return (
    <div style={{display: 'none'}} className="drawerOverlay">
      <div className="drawer">
        <h2>Cart
          <button className="cartBtn">
            <img src="/img/remove.svg" alt="delete"/>
          </button></h2>
        <div className="items">
          <div className="cartItem">
            <img className='cartItemImg' src="/img/sneakers/07.jpg" alt="item"/>
          
            <div className='cartItemInfo'>
              <p>Nike Air Max 270</p>
              <b>300$</b>
            </div>
          
            <button className="cartBtn">
              <img src="/img/remove.svg" alt="delete"/>
            </button>
          </div>
          <div className="cartItem">
            <img className='cartItemImg' src="/img/sneakers/08.jpg" alt="item"/>
          
            <div className='cartItemInfo'>
              <p>Nike Air Max 270</p>
              <b>300$</b>
            </div>
          
            <button className="cartBtn">
              <img src="/img/remove.svg" alt="delete"/>
            </button>
          </div>
        </div>
        <div className='cartTotal'>
          <ul className='cartList'>
            <li className='cartListItem'>
              <span>total</span>
              <div></div>
              <b>1300 $</b>
            </li>
            <li className='cartListItem'>
              <span>tax</span>
              <div></div>
              <b>5%</b>
            </li>
          </ul>
          <button className='GreenBtn'>
            Place an order
            <img className='GreenBtnIco' src="/img/arrow.svg" alt="arrow"/>
          </button>
        </div>
      </div>
    </div>
  );
};

