import axios from "axios";

/**
 * @param tcmIds should be a list
 * */
const fromTcm = async (tcmIds) => {
  const res = await axios.post("/herbiv/from_tcm", {
    "tcms": tcmIds,
  });
  try {
    return res.data;
  } catch (error) {
    return error;
  }
}

const AnalysisService = {
  fromTcm: fromTcm,
};

export default AnalysisService;
