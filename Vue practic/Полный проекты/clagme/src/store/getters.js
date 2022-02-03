let getters = {
  // Загружает из файла moduless/get
  OFFER_LIST: (state) => state.get.offerList,
  DEAL_LIST: (state) => state.get.dealList,
  RESUME: (state) => state.get.resume,
  SEARCH_LIST: (state) => state.get.searchList,
  CITY_LIST: (state) => state.get.cityList,
  COUNTRY_LIST: (state) => state.get.countryList,
  SKILL_LIST: (state) => state.get.skillList,
  CHAT_LIST: (state) => state.get.chatList,
  HIRED_COMPANY_LIST: (state) => state.get.hiredCompanyList,
  PROFILE: (state) => state.get.profile,

  //
  COMPANY_LIST: (state) => state.get.companyList,
  EXPERT_LIST: (state) => state.get.expertList,
  TRANSACTION_LIST: (state) => state.get.transactionList,
  STATISTICS: (state) => state.get.statistics,

  //
  PROPOSAL_DATA: (state) => state.other.proposalData,
  TOKEN: (state) => state.other.token,
  TYPE: (state) => state.other.type,
  SOCKET: (state) => state.other.socket,
  CHAT_HEADER: (state) => state.other.chatHeader,
  EXAMPLE: (state) => state.other.example,
};

export default getters;
