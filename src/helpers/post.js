import axios from "axios";

const Post = async (url, object = {}) => {
    await axios.post(url, object);
}

export default Post;