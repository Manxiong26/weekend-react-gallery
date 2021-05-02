//importing the GalleryItem from GalleryItem.css
import './GalleryItem.css';
import axios from 'axios';
import {useState} from 'react';

// in the params i'm proping item and getGalleryList to be exported to GalleryList.
function GalleryItems ({ item, getGalleryList }){

    const [state, setState ] = useState( true );

 
// this is the function to switch my photo when clicked on to show infor and vice versa
    function switchInfo(){
        if (state){
            setState(false);
        } else {
            setState(true);
        }
    }

    //this is the function where I call put to show the number of liked to update each time
    //the liked buttone is clicked.
const changeLike = () => {
    //I am grabbing from gallery from like from the item's id from the id of like.
    axios.put(`/gallery/like/${item.id}`, {id: item.like})
    .then(response => {
        console.log('response from server:', response);
        //called getGalleryList so that the like updates everytime
        // getGallery is getting called.
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
            <p>{item.likes} like on this image!</p>
            <button onClick={changeLike}>Like</button>
        </div>
    )
}

//exporting the GalleryItems
export default GalleryItems;