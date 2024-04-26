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

const getAllByIdLike = async (id, page, size) => {
  const res = await axios.get("/tcm/find_all_by_id", {
    params: {
      id: id,
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
  getAllByIdLike: getAllByIdLike
};

export default TCMService;
