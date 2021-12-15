import { useState } from "react";
import axios from "axios";

const handleDelete = async (username) => {
    axios.delete(`/users/${username}`)
        .then(res => {
            console.log(res);
            if (res.data.deletedCount) alert("Data deleted successfully.");
            else alert("Data not deleted.");
        })
        .catch(err => {
            console.log("Error: " + err)
            alert("An error occurred.");
        });
}

const Delete = () => {
    const [username, setUsername] = useState("");

    return (
        <div>
            <input
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <button onClick={() => handleDelete(username)}>Delete</button>
        </div>
    );
}

export default Delete;