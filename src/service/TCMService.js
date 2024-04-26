import axios from "axios";

const getAll = async (page, size) => {
  const res = await axios.get('/tcm/find_all', {
    params:{
      page: page,
      size: size
    }
  });

  try {
    return res.data;
  } catch (error) {
    return error;
  }
}

const getAllBy = async (type, content, page, size) => {
  const res = await axios.get("/tcm/find_all_by", {
    params: {
      type: type,
      content: content,
      page: page,
      size: size
    }
  });
  try {
    return res.data;
  } catch (error) {
    return error;
  }
}

const TCMService = {
  getAll: getAll,
  getAllBy: getAllBy
};

export default TCMService;
