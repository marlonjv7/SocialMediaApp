import axios from "axios";

const Put = async (url, object = {}) => {
    await axios.put(url, object);
}

export default Put;