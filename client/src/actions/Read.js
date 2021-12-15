import { useState } from "react";
import axios from "axios";

const handleGet = (username) => {
    axios.get(`/users/${username}`)
        .then(res => {
            const userDetails = JSON.parse(res.data);

            console.log(userDetails);

            alert(`Username: ${userDetails.username}
Name: ${userDetails.name}
Place: ${userDetails.place}
Pincode: ${userDetails.pincode}`);
        })
        .catch(err => {
            console.log("Error: " + err);
            alert("Error: " + err);
        });
}

const Read = () => {
    const [username, setUsername] = useState("");

    return (
        <div>
            <input
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <button onClick={() => handleGet(username)}>Get</button>
        </div>
    );
}

export default Read;