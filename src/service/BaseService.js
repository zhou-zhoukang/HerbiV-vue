import axios from "axios";
/**
 * 查询服务
 * */
const tcmList = async (type, content, page, size) => {
  const res = await axios.get("/api/tcm/list", {
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
  const res = await axios.get('/api/chemical/list', {
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
  const res = await axios.get('/api/protein/list', {
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

const formulaList = async (type, content, page, size) => {
  const res = await axios.get('/api/formula/list', {
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
  formulaList: formulaList
};

export default BaseService;
