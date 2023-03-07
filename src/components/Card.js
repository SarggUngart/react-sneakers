import React from 'react';

export const Card = () => {
  return (
    <div className="card">
      <img className='favorite' src="/img/heart-grey.svg" alt="heart"/>
      <img width={133} height={112} src="/img/sneakers/01.jpg" alt="sneaker"/>
      <h5>Nike Blazer Mid Suede</h5>
      <div className="cardInfo">
        <div className="cardPrice">
          <p>price</p>
          <b>400 $</b>
        </div>
        <button className="cardBtn">
          <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
        </button>
      </div>
    </div>
  );
};
