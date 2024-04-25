import axios from "axios";

class Graph {
    static async getResult() {
        const res = await axios.get(
            'http://127.0.0.1:3000/html',
        )
        try {
            return res.data
        } catch (error) {
            return error
        }
    }
}

export default Graph