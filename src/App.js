import {Card} from "./components/Card/Card";
import {Header} from "./components/Header/Header";
import {CartDrawer} from "./components/CartDrawer/CartDrawer";
import React from "react";


function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  
  const addToCart = () => {
    console.log('cart')
  }
  
  const addToFavorite = () => {
    console.log('favorite')
  }
  
  React.useEffect(()=>{
    fetch('https://640d9391b07afc3b0db08963.mockapi.io/items').then(
      res => {
        return res.json()
      }).then(json => {
      setItems(json)
    })
  }, [])
  
  
  return (
    <div className='wrapper'>
      {cartOpened && <CartDrawer
        onClickCart={() => setCartOpened(!cartOpened)}
      />}
      
      <Header
        onClickCart={() => {
          setCartOpened(!cartOpened)
        }}
      />
      <div className="content">
        <div className='contentHeader'>
          <h3 className='contentTitle'>All models</h3>
          <div className="searchWrapper">
            <img className='searchIco' src="/img/search.svg" alt="search"/>
            <input className='searchInput' type="text" placeholder={'search...'}/>
          </div>
        </div>
        
        <div className="sneakers">
          {items.map(s => {
            return (
              <React.Fragment key={s.id}>
                <Card
                  title={s.title}
                  price={s.price}
                  img={s.img}
                  addToCart={addToCart}
                  addToFavorite={addToFavorite}
                />
              
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
