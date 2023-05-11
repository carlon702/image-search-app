import axios from "axios";

const searchImages = async (term : string) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID w7l4KaDAs94r4w5SZsJylJL5WYQB1sxQX2mo6-VBAmA"
        },
        params: {
            query: term
        }
    });
    
    return response.data.results
};

export default searchImages;

