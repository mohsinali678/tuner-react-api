import SongEditForm from "../Components/SongEditForm";

function Edit(props) {
    const {updateSong} = props;
    return (
        <div className="New Edit">
            <h2>Edit</h2>
            <SongEditForm updateSong={updateSong}/>
        </div>
    )
}

export default Edit
