//importing the GalleryItem from GalleryItem.css
import './GalleryItem.css';
import axios from 'axios';

function GalleryItems ({ item }){


const changeLike = () => {
    axios.put(`/gallery/like/${item.id}`, {id: item.like})
    .then(response => {
        console.log('response from server:', response);
    })
    .catch(err => {
        console.log('Error on PUT request:', err);
        alert('Can not do Put')
    })
}
    return (
        <div>
            {/*calling the image source using path from the gallery.data.js*/}
            <img src={item.path}/>
            <p>{item.likes}</p>
            <button onClick={changeLike}>Like</button>
        </div>
    )
}

//exporting the GalleryItems
export default GalleryItems;