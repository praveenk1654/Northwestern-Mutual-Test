import React, { Component } from 'react';
import logo from './logo.svg';
import ListItem from './ListItem';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {data: [], filteredItems:[]}
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({data: json, filteredItems: json})
      })
  }

  compareItems(a,b) {
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;
    return 0;
  }

  handleSearch(e){
    const {data} = this.state;
    let filteredItems = data.filter(item => item.title.indexOf(e.target.value) != -1);
    console.log(filteredItems);
    filteredItems = filteredItems.sort(this.compareItems)
    this.setState({filteredItems : filteredItems});
  }

  render() {
    const {filteredItems} = this.state;
    return (
      <div className="filterApp">
      <div className="searchBoxWrapper">
        <input className="searchBox" type="text" placeHolder="Search Items" onChange = {(e)=>this.handleSearch(e)}/>
      </div>
        {filteredItems.map((item, ind)=>{
          return(
            <ListItem key={ind} content={item} serialNum={ind+1}/>
          )}
           )}
      </div>
    );
  }
}

export default App;
