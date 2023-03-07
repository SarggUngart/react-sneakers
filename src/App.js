import {Card} from "./components/Card";

function App() {
  return (
    <div className='wrapper'>
      
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
      
      <header className='header'>
        <div className='headerLeft'>
          <img width={40} height={40} src="/img/logo.svg" alt="logo"/>
          <div className='headerInfo'>
            <h1>React Sneakers</h1>
            <div>The best sneakers online store</div>
          </div>
        </div>
        <ul className='headerRight'>
          <li>
            <img src="/img/card.svg" alt="card"/>
            <span>1205 $</span></li>
          <li>
            <img src="/img/user.svg" alt="user"/>
          </li>
        </ul>
      </header>
      <div className="content">
        <div className='contentHeader'>
          <h3 className='contentTitle'>All models</h3>
          <div className="searchWrapper">
            <img className='searchIco' src="/img/search.svg" alt="search"/>
            <input className='searchInput' type="text" placeholder={'search...'}/>
          </div>
        </div>
        
        <div className="sneakers">
          
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        
        </div>
      </div>
    
    
    </div>
  );
}

export default App;
