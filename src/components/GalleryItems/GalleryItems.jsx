//importing the GalleryItem from GalleryItem.css
import './GalleryItem.css';
import axios from 'axios';
import {useState} from 'react';


function GalleryItems ({ item, getGalleryList }){

    const [state, setState ] = useState( true );

    function switchInfo(){
        if (state){
            setState(false);
        } else {
            setState(true);
        }
    }

const changeLike = () => {
    axios.put(`/gallery/like/${item.id}`, {id: item.like})
    .then(response => {
        console.log('response from server:', response);
        getGalleryList();
    })
    .catch(err => {
        console.log('Error on PUT request:', err);
        alert('Can not do Put')
    })
}
    return (
        <div>
            {/*calling the image source using path from the gallery.data.js*/}
            { state?
        (
            <img onClick={switchInfo} src={item.path}/>
        ): (
        <p onClick={switchInfo}>{item.description}</p>
        )}
            <p>{item.likes}</p>
            <button onClick={changeLike}>Like</button>
        </div>
    )
}

//exporting the GalleryItems
export default GalleryItems;