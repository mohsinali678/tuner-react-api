import { Link } from "react-router-dom"
function Song(props) {
    const { song } = props;

    return (
        <tr>
            
                    
                    <td>{song.id}</td>

                    <td>{song.name}</td>

                    <td>{song.artist}</td>

                    <td>{song.album}</td>

                    <td>{song.time}</td>

                    <td>{song.is_favorite ? "Yes" : "No"}</td>

                    <td><Link to={`/songs/${song.id}`}>✏️</Link></td>

                
            
        </tr>
    )
}

export default Song
