import Song from "../Components/Song.js";

function Songs(props) {
    const { songs } = props;
    return (
        <div className="BudgetLogs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Release Time</th>
                            <th>Favorite</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song, index) => {
                            return <Song key={index} song={song}/>
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Songs
