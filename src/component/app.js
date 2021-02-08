import React from "react";
import youTube from "../API/youtube";
import VideoDetail from "./videoDetail";
import SearchBar from "./searchBar";
import VideoList from "./videoList";



class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onSearchText("cars");
    }

    onVideoClick = (video) => {
        this.setState({ selectedVideo: video})
    }
    onSearchText = async text => {
        const response = await youTube.get("/search", {
            params: {
                q: text
            }
        });
        console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    render() {
        return (
            <div className="ui container"> 
                <SearchBar getSearchText={this.onSearchText}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;