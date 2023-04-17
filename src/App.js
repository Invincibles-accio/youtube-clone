

import React,{useState,useEffect} from 'react';
import SearchBar from './Components/SearchBar';
import Player from './Components/Player';
import VideoList from './Components/VideoList';
import youtube from './apis/youtube';


const App = () =>{
      let [video , setVideo] = useState([])
      let [selectedVideo , setSelectedVideo] = useState(null)

      console.log(video)

      useEffect(() => {
           youtube.get('/search',{
                      params:{
                        q: "React Tutorials",
                        type: 'video'
                      }
            }
            )
            .then(response =>  {
              setVideo(response.data.items)
              setSelectedVideo(response.data.items[0])
                return ;
            })

            .catch(err => console.log(err))
      },[])

      

      return(
            <div>
                    <SearchBar  addContent={setVideo}  selectVideo={setSelectedVideo}/>
                    <div style={{display: "flex"}}>

                           <div style={{width: "70vw"}}> 
                                  <Player video={selectedVideo}/>
                           </div>

                           <div style={{width: "30vw"}}> 
                                  <VideoList videos={video} selectVideo={setSelectedVideo}/>
                           </div>

                    </div>
            </div>
      )
}


export default App;

