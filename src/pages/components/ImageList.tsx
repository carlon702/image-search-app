import ImageShow from "./ImageShow";


function ImageList({images}:{images:any}){

    const renderedImages = images.map((image : any) => {
        return <ImageShow key={image.id} image={image}/>
    })

    return <div className="image-list">{renderedImages}</div>
}

export default ImageList;