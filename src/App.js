function App() {
  return (
    <div className='wrapper'>
      
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
        <h3>All models</h3>
      </div>
      <div className="sneakers">
        
        <div className="card">
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
  
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/04.jpg" alt="sneaker"/>
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
  
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/02.jpg" alt="sneaker"/>
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
  
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/03.jpg" alt="sneaker"/>
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
        
      </div>
    
    </div>
  );
}

export default App;
