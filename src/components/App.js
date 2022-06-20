import {useEffect, useState} from "react";

function App(){

    const [image, setImage] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(obj => setImage(obj.message))
    },[])

    if(!image){
        return <p>Loading...</p>
    }
    return (
        <img src={image} alt="A Random Dog"/>
    );
}

export default App;