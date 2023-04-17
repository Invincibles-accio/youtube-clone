


const VideoList = ({videos, selectVideo}) => {
        

    return(
        <div className="video-list"> 
                {
                    videos.map(video => {
                        return(
                        <div onClick={()=>{selectVideo(video)}}>
                             
                               <img  src={video.snippet.thumbnails.default.url} alt="Youtube Videos"/>
                        </div>
                        )
                    })
                }
        </div>
    )
}

export default VideoList;