import axios from "axios";

/**
 * @param tcmIds should be a list, e.g. ['HVM0367', 'HVM1695']
 * @param score
 * */
const fromTcm = async (tcmIds, score) => {
  const res = await axios.post("/api/herbiv/from_tcm", {
    "tcms": tcmIds,
    "score": score
  });
  try {
    return res.data;
  } catch (error) {
    return error;
  }
}

const fromFormula = async (formulaIds, score) => {
  const res = await axios.post("/api/herbiv/from_formula", {
    "formulas": formulaIds,
    "score": score
  });
  try {
    return res.data;
  } catch (error) {
    return error;
  }
}

const fromTcmProtein = async (tcmIds, proteinIds, score) => {
  const res = await axios.post("/api/herbiv/from_tcm_protein", {
    "tcms": tcmIds,
    "proteins": proteinIds,
    "score": score
  });
  try {
    return res.data;
  } catch (error) {
    return error;
  }
}

const fromFormulaProtein = async (formulaIds, proteinIds, score) => {
  const res = await axios.post("/api/herbiv/from_formula_protein", {
    "formulas": formulaIds,
    "proteins": proteinIds,
    "score": score
  });
  try {
    return res.data;
  } catch (error) {
    return error;
  }
}

const fromProtein = async (proteinIds, score) => {
  const res = await axios.post("/api/herbiv/from_protein", {
    "proteins": proteinIds,
    "score": score
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
  const res = await axios.post("/api/herbiv/get_result", formData);
  try {
    return res.data;
  } catch (error) {
    return error;
  }
}

const getStatic = async (staticPath) => {
  if (staticPath === "") {
    return ""
  }
  const res = await axios.get(`/${staticPath}`);
  try {
    return res.data;
  } catch (error) {
    return error;
  }
}

const getStatistic = async () => {
  const res = await axios.get(`/api/herbiv/get_statistic`);
  try {
    return res.data;
  } catch (error) {
    return error;
  }
}

const AnalysisService = {
  fromTcm: fromTcm,
  fromFormula: fromFormula,
  fromTcmProtein: fromTcmProtein,
  fromFormulaProtein: fromFormulaProtein,
  fromProtein: fromProtein,
  getResult: getResult,
  getStatic: getStatic,
  getStatistic: getStatistic
};

export default AnalysisService;
