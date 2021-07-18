import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

function SongDetails(props) {
  const { deleteSong } = props;
  const [song, setSong] = useState([]);
  const API_BASE = apiURL();

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_BASE}/songs/${id}`)
      .then(
        (response) => {
          setSong(response.data.payload);
        },
        (error) => {
          console.error(`Error: ${error}`);
        }
      )
      .catch((c) => {
        console.warn(`Warning: ${c}`);
        history.push("/not-found");
      });
  }, [id, history, API_BASE]);

  const handleDelete = async () => {
    await deleteSong(id);
    history.push("/songs");
  };

  return (
    <article>
      <h2>Song Name: {song.name}</h2>
      <h3>Artist Name: {song.artist}</h3>
      <h3>Album: {song.album}</h3>
      <h3>Release Time: {song.time}</h3>
      <h3>Favorite: {song.is_favorite ? "Yes" : "No"}</h3>

      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default withRouter(SongDetails);
