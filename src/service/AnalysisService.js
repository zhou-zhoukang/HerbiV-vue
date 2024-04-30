// import axios from "axios";

const fromTcm = async (tcmIds) => {
  console.log(tcmIds);
  // const res = await axios.post("/herbiv/from_tcm", {
  //   "tcms": ['HVM0367']
  // });
  // try {
  //   return res.data;
  // } catch (error) {
  //   return error;
  // }
}

const AnalysisService = {
  fromTcm: fromTcm,
};

export default AnalysisService;
