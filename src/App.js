import './App.css';
import Product from "./Product";

// props are passed down from comp tree
// REDUX introduces more complex data flow structure
// read only - property can not be modified once its passed

function App() {
  return (
    <div>
      <h1> Hello World </h1>
        <Product
            name='Amazon Echo'
            description='Ai ass'
            price={59.99}
        />
      <Product
          name='Iphone'
          description='amax v10'
          price={456.99}
      />
      <Product
          name='Drone'
          description='blade x330'
          price={32.99}
      />
    </div>
  );
}

export default App;
