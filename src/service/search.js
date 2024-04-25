import axios from "axios"

const getResult = async (requestContent) => {
    const res = await axios.post(
      'http://127.0.0.1:8081/search/first',
      requestContent
    );
    try {
        return res.data;
    } catch (error) {
        return error;
    }
}

const getDetail = async (type, content) => {
    const res = await axios.post(
      'http://127.0.0.1:3000/search/second',
      { 'type':type, 'content':content }
    )
    try {
        return res.data;
    } catch (error) {
        return error;
    }
}

const SearchService = {
    getResult: getResult,
    getDetail: getDetail
};

export default SearchService