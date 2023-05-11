import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import ImageShow from "./components/ImageShow"
import styles from '@/styles/Home.module.css'
import searchImages from "./api/searchImageAPI"






export default function Home() {

  const [images, setImages] = useState([]);

  const handleSubmit = async (term : string) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </>
  )
}
