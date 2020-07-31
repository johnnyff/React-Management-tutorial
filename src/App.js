import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers =[{
  'id':1,
  'image' : 'https://placeimg.com/64/64/1',
  'name':'jame',
  'birthday':'945685',
  'gender':'male',
  'job':'student'
},
{
  'id':2,
  'image' : 'https://placeimg.com/64/64/2',
  'name':'olivia',
  'birthday':'997124',
  'gender':'female',
  'job':'doctor'
},
{
  'id':3,
  'image' : 'https://placeimg.com/64/64/3',
  'name':'Jamy',
  'birthday':'000001',
  'gender':'male',
  'job':'student'
}]

class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c=>{ return(<Customer key = {c.id} id = {c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job = {c.job}/>)})}
      </div>
      );
    }

}

export default App;
