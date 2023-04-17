import React, { useState } from 'react';
import youtube from '../apis/youtube';

// AIzaSyAtGb453QpbquJuEbgJFOawT67G3l-GpZ8

const SearchBar = ({addContent,selectVideo}) => {

    let  [searchTerm , setSearchTerm] = useState('')

     function getVideos(){
             youtube.get('/search',{
                      params:{
                        q: searchTerm,
                        type: 'video'
                      }
             }
             )
             .then(response =>  {
                addContent(response.data.items)
                selectVideo(response.data.items[0])
                return ;
            })

             .catch(err => console.log(err))
     }
      

    return(
        <div>
              <input 
                 type="text"
                 placeholder="Search"
                 onChange={(e) => setSearchTerm(e.target.value)}
              />
            <button onClick={getVideos}> Search </button>
        </div>
    )
}

export default SearchBar;