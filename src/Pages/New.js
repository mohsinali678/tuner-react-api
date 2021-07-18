import SongNewForm from "../Components/SongNewForm.js";

function New(props) {
    const {addSong} = props
    return (
        <div className="New">
            <h2>Enter a New Song</h2>
            <SongNewForm addSong={addSong} />
        </div>
    )
}

export default New
