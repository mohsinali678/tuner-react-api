import SongDetails from "../Components/SongDetails";

function Show(props) {
    const {deleteSong} = props;
    return (
        <div className="Show">
            <h2>Show</h2>
            <section>
                <SongDetails 
                    deleteSong = {deleteSong}
                />
            </section>
        </div>
    );
};

export default Show;