import React,{Component} from 'react';
import Person  from './Components/Person/Person';
import Persons from './Components/Persons/Persons';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       persons:[
        {id:1,name:'Max',age:20},
        {id:2,name:'Manu',age:21},
        {id:3,name:'Sam',age:22}
       ],
       displayPerson:false
    }
  }

  toggleHandler = () => {
   this.setState({displayPerson:!this.state.displayPerson});
  }
  inputChangeHandler = (event,id) => {
   const personIndex = this.state.persons.findIndex(
    (p) => {
      return p.id === id;
    }
   );
   const onePerson = {...this.state.persons[personIndex]};
   onePerson.name = event.target.value;
   const allPersons = [...this.state.persons];
   allPersons[personIndex] = onePerson;
   this.setState({persons:allPersons});
  }
  deleteHandler = (personIndex) => {
    const allPersons = [...this.state.persons];
    allPersons.splice(personIndex,1);
    this.setState({persons:allPersons});
  }
  
   render(){

    const style  ={
      backgroundColor:'red',
      border:'2px solid transparent',
      margin:'5px',
      padding:'5px'
    }

    let showPerson = null;
     if(this.state.displayPerson){
      showPerson = (
         <Persons 
         persons={this.state.persons} 
         delete={this.deleteHandler}
         change={this.inputChangeHandler}
         />
      )
      
     } 
    return (
      <div className="App">
        <h1>React App</h1>
      <button style={style} onClick={this.toggleHandler}>Toggle Data</button>
           
         {showPerson}
      
      </div>
     
    );  
   }
}

export default App;