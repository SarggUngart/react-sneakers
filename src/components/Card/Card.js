import React, {useState} from 'react';
import style from './Card.module.scss'

export const Card = ({addToFavorite, addToCart, title, img, price}) => {
  let [check, setCheck] = useState(false)
  
  const onClickBtnHandler = () => {
    setCheck(!check)
    addToCart({title, img, price})
  }
  
  const onClickFavorite = () => {
    // setCheck(!check)
    addToFavorite()
  }
  
  const isCheck = check ? "/img/check.svg" : "/img/plus.svg"
  // const isFavorite = check ? "/img/heart-color.svg" : "/img/heart-grey.svg"
  
  return (
    <div className={style.card}>
      <img onClick={onClickFavorite} className={style.favorite} src="/img/heart-grey.svg" alt="heart"/>
      <img width={133} height={112} src={img} alt="sneaker"/>
      <h5>{title}</h5>
      <div className={style.cardInfo}>
        <div className={style.cardPrice}>
          <p>price</p>
          <b>{price}$</b>
        </div>
        <button onClick={onClickBtnHandler} className={style.cardBtn}>
          <img src={isCheck} alt="plus"/>
        </button>
      </div>
    </div>
  );
};
