import axios from "axios";

const getAll = async (page, size) => {
  const res = await axios.get('/chemicals/find_all', {
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

const getByName = async (name, page, size) => {
  const res = await axios.get({
    url: `/chemicals/find_by_name`,
    params: {
      name: name,
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

const ChemicalsService = {
  getAll: getAll,
  getByName: getByName
};

export default ChemicalsService;