


const VideoList = ({videos, selectVideo}) => {
        

    return(
        <div className="video-list"> 
                {
                    videos.map((video, index) => {
                        return(
                        <div id={index} onClick={()=>{selectVideo(video)}}>
                             
                               <img id={index} src={video.snippet.thumbnails.default.url} alt="Youtube Videos"/>
                        </div>
                        )
                    })
                }
        </div>
    )
}

export default VideoList;