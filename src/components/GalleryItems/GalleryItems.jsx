import './GalleryItem.css';


function GalleryItems ({ item, changeLikes }){
    return (
        <div>
            <img src={item.path}/>
        </div>
    )
}

export default GalleryItems;