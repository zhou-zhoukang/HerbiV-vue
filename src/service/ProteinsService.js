import axios from "axios";

const getAll = async (page, size) => {
  const res = await axios.get('/proteins/find_all', {
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

const ProteinsService = {
  getAll: getAll,
};

export default ProteinsService;
