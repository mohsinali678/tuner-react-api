import Songs from "../Components/Songs.js"

function Index({songs}) {

    return (
        <div className="Index">
            <h2>My Play List</h2>
            <Songs songs={songs}/>
        </div>
    )
}

export default Index
