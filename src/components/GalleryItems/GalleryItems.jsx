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

// to return massages i want to show when there is certain amount of likes.
const getMessage = () => {
    if (item.likes === 0) {
      // when there is not like return this
      return (<p>no like at the moment.</p>);
    } else if (item.likes === 1 ) {
      // when there is one like return this
      return (<p>{item.likes} person like this image.</p>);
    } else {
        //when there is more than 1 like return this
        return (<p>{item.likes} people like this image.</p>);
    }
  }

    return (
        <div>
            {/*calling the image source using path from the gallery.data.js*/}
            { state?
        (
            <img onClick={switchInfo} src={item.path}/>
        ): (
        <p onClick={switchInfo}>{item.description}</p>
        )}{/* called the getMessage function in the p tag */}
            <p>{getMessage()} </p>
            <button onClick={changeLike}>Like</button>
        </div>
    )
}

//exporting the GalleryItems
export default GalleryItems;