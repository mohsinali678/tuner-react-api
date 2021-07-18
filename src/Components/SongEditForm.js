import React, { Component } from 'react'
import axios from "axios";
import { withRouter } from 'react-router'
import { apiURL } from "../util/apiURL";

export class SongEditForm extends Component {
    constructor(){
        super();

        this.state = {
            song :{
                name: "",
                artist: "",
                album:"",
                time: "",
                is_favorite: false
            }
        }

        this.API_BASE = apiURL();
    }

    handleTextChange = (e) => {
        const {song} = this.state;
        this.setState({
            song: {...song, [e.target.id]:e.target.value}
        })
    }

    handleCheckboxChange = () => {
        const {song} = this.state;
        this.setState({
            song: {...song, is_favorite: !song.is_favorite}
        })
      };

    handleSubmit = (e) => {
        e.preventDefault();
        const {updateSong} = this.props;
        updateSong(this.state.song, this.props.match.params.id);
        this.props.history.push("/songs");
    }

    componentDidMount = () => {
        axios.get(`${this.API_BASE}/songs/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                song:{...response.data.payload}
            })
        },
        error => console.error(`Error: ${error}`)
        )
        .catch(c => console.warn(`Warning: ${c}`))
    }

    render() {
        const { song } = this.state;

        return (
            <div className="New">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Enter Song Name:</label>
                    <input 
                        id="name"
                        type="text"
                        value={song.name}
                        onChange={this.handleTextChange}
                        placeholder = "Name of the Song"
                        required 
                    />
                    <br />
                    <label htmlFor="artist">Artist Name:</label>
                    <input 
                        id="artist"
                        type="text"
                        value={song.artist}
                        onChange={this.handleTextChange}
                        placeholder = "Name of the Artist"
                        required 
                    />
                    <br />
                    <label htmlFor="album">Album:</label>
                    <input 
                        id="album"
                        type="text"
                        value={song.album}
                        onChange={this.handleTextChange}
                        placeholder = "Name of the Album"
                        required 
                    />
                    <br />
                    <label htmlFor="time">Enter Release Date:</label>
                    <input 
                        id="time"
                        type="Date"
                        value={song.time}
                        onChange={this.handleTextChange}
                        placeholder = "Enter Release Date"
                        required 
                    />
                    <label htmlFor="is_favorite">Favorite:</label>
                    <br />
                    <input
                        id="is_favorite"
                        type="checkbox"
                        onChange={this.handleCheckboxChange}
                        checked={song.is_favorite}
                    />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(SongEditForm)
