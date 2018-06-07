import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const listStyle = {
    list: {
        textAlign: 'left',
        webkitBoxShadow: '0px 1px 22px -4px rgba(0,0,0,0.75)',
        mozBoxshadow: '0px 1px 22px -4px rgba(0,0,0,0.75)',
        boxShadow: '0px 1px 22px -4px rgba(0,0,0,0.75)',
    },
    };
export default class List extends React.Component{
    render(){
        const {items} = this.props;        
        return <ListGroup style={listStyle.list}>
            {items.map(this.listItem)}
        </ListGroup>
    } 

    listItem=({text, isDone}, index)=>{
        const {handleDone} = this.props;
        console.log(index);
        
        return <ListGroupItem style={{background: isDone ? '#00BFFF' : '#fFF',height:'15vh',textDecoration: isDone ?'line-through': 'none'}} 
        onClick={()=>handleDone(index)}>{text}</ListGroupItem>
        
    }
}



