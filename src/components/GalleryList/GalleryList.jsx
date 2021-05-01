import GalleryItems from '../GalleryItems/GalleryItems'



function GalleryList(props) {
    return (
        <section>
            <h2>My Gallery</h2>
                    {props.galleryList.map(item => 
                        <GalleryItems
                            key={item.id}
                            item={item}
                            />
                    )}
        </section>

    )
}

export default GalleryList;