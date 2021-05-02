//importing GalleryItems from GalleryItems.jsx
import GalleryItems from '../GalleryItems/GalleryItems'
import './GalleryList.css';


function GalleryList({galleryList, getGalleryList}) {
    return (
        <section>
            <h2>The Reason I smile!</h2>
                    {galleryList.map(item => 
                        <GalleryItems
                            // calling the id from the GalleryItems from the gallery.data.js
                            key={item.id}
                            // calling the image from the GalleryItems which I called item.
                            item={item}
                            //calling getGalleryList from GalleryItems.jsx
                            getGalleryList={getGalleryList}
                            />
                    )}
        </section>

    )
}

//exporting the GalleryList
export default GalleryList;