import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {CartDrawer} from "./components/CartDrawer";

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
