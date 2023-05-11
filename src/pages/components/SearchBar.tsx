import { useState } from "react";


function SearchBar({onSubmit} : {onSubmit : Function}){

    const [term, setTerm] = useState("");

    const handleFormSubmit = (event : any) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event : any) => {
        setTerm(event.target.value);
    };
  

    return <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label> Enter Search Term </label>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
}

export default SearchBar;