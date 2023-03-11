import React from 'react';
import style from './Card.module.scss'

export const Card = (props) => {
  
  const onClickBtnHandler = () => {
    alert(props.title)
  }
  
  
  return (
    <div className={style.card}>
      <img className={style.favorite} src="/img/heart-grey.svg" alt="heart"/>
      <img width={133} height={112} src={props.img} alt="sneaker"/>
      <h5>{props.title}</h5>
      <div className={style.cardInfo}>
        <div className={style.cardPrice}>
          <p>price</p>
          <b>{props.price}$</b>
        </div>
        <button onClick={onClickBtnHandler} className={style.cardBtn}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
        </button>
      </div>
    </div>
  );
};
