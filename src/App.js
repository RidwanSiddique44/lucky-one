
import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Gadget Zone: (find your gadget)</h1>
      <Shop></Shop>
      <div className="query">
        <h3>How reacts works?</h3>
        <p>React.js is one of the most talked about JavaScript web frameworks.The best way to understand how React works is by comparing it to plain JS. A plain JS works without any libraries. Basically, JavaScript is a scripting language and it does not succumb to any rules. You're free to write JS anywhere you want and run it in your browser.But in react, how the data flow has clearly defined rules. React apps have a structure. Each piece of code that performs on its own is constrained inside a component. These components work in isolation but communicate with each other to make the web application work.</p>
        <h3>How useState works?</h3>
        <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.</p>
      </div>
    </div>
  );
}

export default App;
