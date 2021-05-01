//importing the GalleryItem from GalleryItem.css
import './GalleryItem.css';


function GalleryItems ({ item, changeLikes }){
    return (
        <div>
            {/*calling the image source using path from the gallery.data.js*/}
            <img src={item.path}/>
        </div>
    )
}

//exporting the GalleryItems
export default GalleryItems;