//DEPENDENCIES
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { apiURL } from "./util/apiURL";
import axios from "axios";
import './App.css';

//PAGES
import Home from "./Pages/Home";
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';
import Edit from "./Pages/Edit";
import FourOFour from './Pages/FourOFour';



//COMPONENTS
import NavBar from './Components/NavBar';
import FootBar from './Components/FootBar';

export class App extends Component {
  constructor(){
    super();
    
    this.state = {
      songs:[]
    }

    this.API_BASE = apiURL();
  }
  
  //Load Songs on Page Load
  componentDidMount(){
    
    axios.get(`${this.API_BASE}/songs`)
      .then(response => {
        const { data } = response;

        this.setState({
          songs:[...data.payload]
        })
        
      },
      error => console.error(`Error: ${error}`)
      )
      .catch(c => console.warn(`Warning: ${c}`));
  };
  

    //Create a New Song
    addSong = (newSong) => {
      const {songs} = this.state;
      axios.post(`${this.API_BASE}/songs`, newSong)
        .then(response => {
          
          this.setState({
            songs:[...songs, response.data.payload]
          })
        },
        error => console.error(`Error: ${error}`)
        )
        .catch(c => console.warn(`Warning: ${c}`))
    };


  // //Delete a Song
  deleteSong = (id) => {
    // const {songs} = this.state;
    axios.delete(`${this.API_BASE}/songs/${id}`)
      .then((response) => {

        const tempArray = this.state.songs.filter((song) => {
          return song.id === response.data.payload.id ? false : true;
        })

        this.setState({
          songs : [...tempArray]
        })
        
      },
      error => console.error(`Error: ${error}`)
      )
      .catch(c => console.warn(`Warning: ${c}`));
  };


  // //Update a Song
  updateSong = (updatedSong, id) => {
    axios.put(`${this.API_BASE}/songs/${id}`, updatedSong)
      .then((response) => {
        
        const tempArray = this.state.songs.filter((song) => {
          return song.id === response.data.payload.id ? false : true;
        })

        this.setState({
          songs : [...tempArray, response.data.payload]
        })

      },
      error => console.error(`Error: ${error}`)
      )
      .catch(c => console.warn(`Warning: ${c}`));
  };

  render() {
    const {songs} = this.state;
    return (
      <div className="App">
        <Router>
          <NavBar />

          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/songs">
                <Index songs={songs}/>
              </Route>

              <Route path="/songs/new">
                <New addSong={this.addSong}/>
              </Route>

              <Route exact path="/songs/:id">
                <Show songs={songs} deleteSong={this.deleteSong}/>
              </Route>

              <Route path="/songs/:id/edit">
                <Edit updateSong={this.updateSong}/>
              </Route>

              <Route path="*">
                <FourOFour />
              </Route>
            </Switch>
          </main>
          <FootBar />
        </Router>
      </div>
    )
  }
}

export default App
