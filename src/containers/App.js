import React, {Component} from 'react';
import CardList from '../components/CardList';
import {directors} from '../director';
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll'


class App  extends Component {
    constructor(){
        super()
        this.state = {
            directors: directors,
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({directors : users}));
    // }

    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){ 
        const filterdirectors = this.state.directors.filter(directors => {
            return directors.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.directors.length === 0){
            return <h1 style={{textAlign: "center", marginTop:250}}>loading</h1>
        }else{
            return(
                <div className='tc'> 
                    <h1 className="f1">Directors</h1>
                    <SearchBox searchChange = {this.onsearchChange}/>
                    <Scroll>
                        <CardList directors={filterdirectors}/>
                    </Scroll>
                </div>
            );
        }
    }
}


export default App;