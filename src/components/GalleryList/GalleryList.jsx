//importing GalleryItems from GalleryItems.jsx
import GalleryItems from '../GalleryItems/GalleryItems'



function GalleryList({galleryList, getGalleryList}) {
    return (
        <section>
            <h2>My Gallery</h2>
                    {galleryList.map(item => 
                        <GalleryItems
                            // calling the id from the GalleryItems from the gallery.data.js
                            key={item.id}
                            // calling the image from the GalleryItems which I called item.
                            item={item}
                            getGalleryList={getGalleryList}
                            />
                    )}
        </section>

    )
}

//exporting the GalleryList
export default GalleryList;