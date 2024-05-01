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

const getResult = async (analysisNo) => {
  const formData = new FormData()
  formData.append('analysis_no', analysisNo)
  const res = await axios.post("/herbiv/get_result", formData);
  try {
    return res.data;
  } catch (error) {
    return error;
  }
}

const AnalysisService = {
  fromTcm: fromTcm,
  getResult: getResult
};

export default AnalysisService;
