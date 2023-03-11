import {Card} from "./components/Card/Card";
import {Header} from "./components/Header/Header";
import {CartDrawer} from "./components/CartDrawer/CartDrawer";
import React from "react";

const arr = [{id: 12, title: 'Nike Blazer Mid Suede', price: '670', img: '/img/sneakers/01.jpg'},
  {id: 1, title: 'Nike Air Max 270', price: '350', img: '/img/sneakers/02.jpg'},
  {id: 2, title: 'Nike Blazer Mid Suede', price: '400', img: '/img/sneakers/03.jpg'},
  {id: 3, title: 'Puma X Aka Boku Future', price: '450', img: '/img/sneakers/04.jpg'},
  {id: 4, title: 'Under Armour Curry 8', price: '500', img: '/img/sneakers/05.jpg'},
  {id: 5, title: 'Nike Kyrie 7', price: '550', img: '/img/sneakers/06.jpg'},
  {id: 6, title: 'Jordan Air Jordan 11', price: '330', img: '/img/sneakers/07.jpg'},
  {id: 7, title: 'Nike LeBron XVIII', price: '410', img: '/img/sneakers/08.jpg'},
  {id: 8, title: 'Nike Lebron XVIII Low', price: '250', img: '/img/sneakers/09.jpg'},
  {id: 9, title: 'Nike Blazer Mid Suede', price: '444', img: '/img/sneakers/10.jpg'},
  {id: 10, title: 'Puma X Aka Boku Future', price: '555', img: '/img/sneakers/11.jpg'},
  {id: 11, title: 'Nike Kyrie Flytrap IV', price: '333', img: '/img/sneakers/12.jpg'}]

function App() {
  return (
    <div className='wrapper'>
      
      <CartDrawer/>
      <Header/>
      
      <div className="content">
        <div className='contentHeader'>
          <h3 className='contentTitle'>All models</h3>
          <div className="searchWrapper">
            <img className='searchIco' src="/img/search.svg" alt="search"/>
            <input className='searchInput' type="text" placeholder={'search...'}/>
          </div>
        </div>
        
        <div className="sneakers">
          {arr.map(s => {
            return(
              <React.Fragment key={s.id}>
                <Card title={s.title} price={s.price} img={s.img}/>
              </React.Fragment>
            )
    
            
          })}
        
        
        </div>
      </div>
    </div>
  );
}

export default App;
