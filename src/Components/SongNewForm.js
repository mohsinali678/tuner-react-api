import React, { Component } from 'react'
import { withRouter } from 'react-router'

export class SongNewForm extends Component {
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
        const {addSong} = this.props;
        addSong(this.state.song);
        this.props.history.push("/songs");
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

export default withRouter(SongNewForm)
