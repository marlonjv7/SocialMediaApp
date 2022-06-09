import axios from "axios";

const Get = async (url) => {
    const { data } = await axios.get(url);
    return data;
}

export default Get;