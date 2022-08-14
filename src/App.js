// import logo from './logo.svg';
import './App.css';

function App() {

  // const names = ["Mark Zukar", "Steve Jobs", "Shiv", "John"]

   const celebrateObj = [{
    name: "Mark Zukar", 
    age : 30
  }, {
    name: "Steve Jobs", 
    age : 40
  }, {
    name: "Shiv", 
    age : 150
  }, {
    name: "John", 
    age : 56
  }];
  
  
  return (
    <div className="App">
      <header className="App-header">  
      
      {/* 
      dynamically array theke element map kore [ata loop er moto]
      ------------------
      joto names array er majhe "string" ase oigulor 1tar jnno 1bar <person> component k call korbe
      ^^
      {
        names.map(names => names)
      }

      {
        names.map(names => <Person></Person>)
      }

      */}


      {/* joto names object er majhe "object" ase oigulor 1tar jnno 1bar <person> component k call korbe 

      celebrateObj holo ek ekta full object (loop er moto [i] gulo)

      celebrateObj theke name & age gulo access
      */}

      {
        celebrateObj.map(value => <Person name={value.name} age={value.age}></Person>)
      }

      
      </header>
    </div>
  );
}


function Person (props) {
  const personStyle={
    width : "600px",
    border: '2px solid red',
    margin : '20px',
    padding : '20px',
  }
  return (
    <div style={personStyle}>
    {/*
    ai vabeo tag er vitor style lekha jay 
    <div style={{border: '2px solid red',
    margin : '10px'}}> 
    */}

      {/* <h2>Name : {props.name}</h2>
      <h3>Discovered : {props.discovered}</h3> */}

      <h2>Name : {props.name}</h2>
      <h3>Discovered : {props.discovered}</h3>

      {/* age property onno kothao use na korle default value hisebe none bosiye */}
      <p>He has done it in {props.age || 'none'} years</p>
    </div>
  )
}

export default App;