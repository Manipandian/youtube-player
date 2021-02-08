import axios from "axios";


const KEY = "AIzaSyDOs08J8N-TQYL4OGv0Lb3GTKJvyVF9CN8";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResult: 5,
        key: KEY,
        type: "video"
    }
})