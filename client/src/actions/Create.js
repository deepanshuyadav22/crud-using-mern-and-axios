import { useState } from "react";
import axios from "axios";

const handlePost = async (username, name, place, pincode) => {
    axios.post("/users", { username, name, place, pincode })
        .then(res => {
            console.log(res);
            if (res.data.username === username) alert("Data inserted successfully.");
            else alert("Data not inserted");
        })
        .catch(err => {
            console.log("Error: " + err)
            alert("An error occurred.");
        });
}

const Create = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [pincode, setPincode] = useState("");

    return (
        <div>
            <input
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <input
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

            <input
                required
                placeholder="Place"
                value={place}
                onChange={(e) => setPlace(e.target.value)} />

            <input
                required
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => Number(e.target.value) && setPincode(Number(e.target.value))} />

            <button onClick={() => handlePost(username, name, place, pincode)}>Post</button>
        </div>
    );
}

export default Create;