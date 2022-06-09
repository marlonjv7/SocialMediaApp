import axios from "axios";

const Delete = async (url) => {
    await axios.delete(url)
}

export default Delete;