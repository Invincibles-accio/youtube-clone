


const Player = ({ video }) => {
    
    if(!video){
        return <div> Loading... </div>
    }
    let videoId = video.id.videoId;

    let videosrc =  `https://www.youtube.com/embed/${videoId}`
     
    return(
        <div> 
            {
             <iframe width="560" height="315" src={videosrc} title="YouTube video player"></iframe>
            }
        </div>
    )
}


export default Player;