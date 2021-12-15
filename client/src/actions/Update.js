import { useState } from "react";
import axios from "axios";

const handlePut = async (username, place) => {
    axios.put("/users", { username, place })
        .then(res => {
            console.log(res);
            if (res.data.modifiedCount) alert("Data updated successfully.");
            else alert("Data not updated.");
        })
        .catch(err => {
            console.log("Error: " + err)
            alert("An error occurred.");
        });
}

const Update = () => {
    const [username, setUsername] = useState("");
    const [place, setPlace] = useState("");

    return (
        <div>
            <input
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <input
                required
                placeholder="Place"
                value={place}
                onChange={(e) => setPlace(e.target.value)} />

            <button onClick={() => handlePut(username, place)}>Put</button>
        </div>
    );
}

export default Update;