import React, {useState} from 'react';
import style from './Card.module.scss'

export const Card = (props) => {
  let [check, setCheck] = useState(false)
  
  const onClickBtnHandler = () => {
    setCheck(!check)
  }
  
  const onClickFavorite = () => {
    props.addToFavorite()
  }
  
  const isCheck = check ? "/img/check.svg" : "/img/plus.svg"
  
  return (
    <div className={style.card}>
      <img onClick={onClickFavorite} className={style.favorite} src="/img/heart-grey.svg" alt="heart"/>
      <img width={133} height={112} src={props.img} alt="sneaker"/>
      <h5>{props.title}</h5>
      <div className={style.cardInfo}>
        <div className={style.cardPrice}>
          <p>price</p>
          <b>{props.price}$</b>
        </div>
        <button onClick={onClickBtnHandler} className={style.cardBtn}>
          <img src={isCheck} alt="plus"/>
        </button>
      </div>
    </div>
  );
};
