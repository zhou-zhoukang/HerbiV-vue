import axios from "axios";

const tcmList = async (type, content, page, size) => {
  const res = await axios.get("/tcm/list", {
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

const chemicalList = async (type, content, page, size) => {
  const res = await axios.get('/chemical/list', {
    params:{
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

const proteinList = async (type, content, page, size) => {
  const res = await axios.get('/protein/list', {
    params:{
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

const BaseService = {
  tcmList: tcmList,
  chemicalList: chemicalList,
  proteinList: proteinList,
};

export default BaseService;