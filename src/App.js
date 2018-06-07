import React, { Component } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import Token from './Token';
import List from './List';


const appStyle = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '2.5vw',
    color: 'grey',
    fontWeight: 'bold',
  },
  Appheader: {
    height: '100px',
    padding: '20px',
  },
  Space: {
    height: '2vh',
  },
  Input: {
    backgroundColor: 'whitesmoke',
  },
  column: {
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  checked : {
    background: '#888',
    color: '#fff',
    textDecoration: 'line-through'
    
  }
};

  
class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      items: [],
      done: [],
      notdone:[]
     //count:0 
    }
    
  }
  componentDidMount() {
  fetch('http://192.168.1.23:3001/todos')
  .then(response => response.json())
  .then(txt => {
    console.log(txt);
    this.setState({items:txt})})
  }
  handleChange =(event)=>{
    var txt=event.target.value;
    this.setState({ text:txt});
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var text = this.state.text;
    
    let data = {
      text,
      isDone: false,
      
      }
    this.setState({items: [ data,...this.state.items],text: ''})
   }
  

  handleDone=(isDoneIndex)=>{
    const {items} = this.state;
  // var counter=this.state.count;
     const updatedItems = items.map((item, key)=>{
      if(isDoneIndex === key){
        item.isDone = !item.isDone;
    // counter++;
        }
     return item ;
      })
      this.setState({items: updatedItems})
     var isdone=items.filter(
       function done(currentValue,i){
         if(currentValue.isDone===true){
           return true; 
          }
           else{
             return false;
           }
       }

       
     );
     var isnotdone=items.filter(
      function done(currentValue,i){
        if(currentValue.isDone===false){
          return true; 
         }
          else{
            return false;
          }
      }

      
    );
     this.setState({done: isdone})
     this.setState({notdone:isnotdone})
    // this.setState({count:counter})
    
  }
  
   render() {
    return (
      <div className="App">
        <header className="Appheader" style={appStyle.Appheader}>
          <h1 className="AppTitle" style={appStyle.title}> Todo List</h1>
        </header>
        <Container>
          <Row><Col sm={{ size: 4,offset:3 }} lg={{ size: 4,offset:3}} xl={{ size: 4,offset:3 }} md={{ size: 4,offset:3 }} style={appStyle.column}>
            <Token
              counter= {this.state.items.length} title="Total task" /></Col>
            <Col style={appStyle.column}>
              <Token
                counter={this.state.done.length} title="finished task" /></Col>
                <Col style={appStyle.column}>
              <Token
                counter={this.state.notdone.length} title="Unfinished task" /></Col>
          </Row></Container>
        <form onSubmit={this.handleSubmit}>
           <Input onChange={this.handleChange} style={appStyle.Input} value={this.state.text} placeholder="Add a task..." />
           <div style={appStyle.Space}></div>
           <List 
           handleDone={this.handleDone}
           items={this.state.items}/>
        </form>
        </div>
        
        );
  }
}

export default App;
