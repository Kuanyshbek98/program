import api from '@/utils/api'
import Cookies from 'js-cookie'

let state = {
  offerList: null,
  dealList: null,
  searchList: null,
  cityList: null,
  countryList: null,
  skillList: null,
  chatList: null,
  resume: null,
  expertList: null,
  transactionList: null,
  companyList: null,
  hiredCompanyList: null,
  statistics: null,
  profile: null
}

let mutations = {
  setOfferList (state, payload) {
    state.offerList = payload
    // if (payload && payload.page > 1) {
    //   state.offerList.data = [...state.offerList.data, ...payload.data]
    //   state.offerList.page = payload.page
    // } else state.offerList = payload
  },
  setDealList (state, payload) {
    if (payload && payload.page > 1) {
      state.dealList.data = [...state.dealList.data, ...payload.data]
      state.dealList.page = payload.page
    } else state.dealList = payload
  },
  setSearchList (state, payload) {
    if (payload && payload.page > 1) {
      state.searchList.data = [...state.searchList.data, ...payload.data]
      state.searchList.page = payload.page
    } else state.searchList = payload
  },
  setResume (state, payload) {
    state.resume = payload
  },
  setCityList (state, payload) {
    state.cityList = payload
  },
  setCountryList (state, payload) {
    state.countryList = payload
  },
  setSkillList (state, payload) {
    state.skillList = payload
  },
  setChatList (state, payload) {
    state.chatList = payload
  },
  setExpertList (state, payload) {
    state.expertList = payload
  },
  setTransactionList (state, payload) {
    state.transactionList = payload
  },
  setCompanyList (state, payload) {
    state.companyList = payload
  },
  setHiredCompanyList (state, payload) {
    state.hiredCompanyList = payload
  },
  setStatistics (state, payload) {
    state.statistics = payload
  },
  setProfile (state, payload) {
    state.profile = payload
  }
}

let actions = {
  getOfferList: async ({commit, dispatch}, payload) => {
    try {
      const list = await Promise.resolve(api.get('/user/offers', {
        params: payload
      }))
      await commit('setOfferList', list.data)
    } catch (err) {
      await commit('setOfferList', {data: []})
      if (err.response) dispatch('getAlert', err.response.data)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getDealList: async ({commit}, payload) => {
    try {
      const list = await Promise.resolve(api.get(`/${payload.userType}/offers-${payload.type}`, {
        params: payload
      }))
      await commit('setDealList', list.data)
    } catch (err) {
      if (err.response) {
        await commit('setDealList', {data: []})
      }
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getSearchList: async ({commit}, payload) => {
    try {
      const list = await Promise.resolve(api.post('/employee/search-resumes', payload))
      await commit('setSearchList', list.data)
    } catch (err) {
      if (err.response) {
        await commit('setSearchList', {resumes: []})
      }
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getResume: async ({commit, dispatch}, payload) => {
    try {
      const list = await Promise.resolve(api.get('/user/my-resume', {
        params: payload
      }))
      await commit('setResume', list.data.data)
    } catch (err) {
      if (err.response) dispatch('getAlert', err.response.data)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getCityList: async ({commit, dispatch, state}, payload) => {
    try {
      if (state.cityList) {
        return
      }
      const list = await Promise.resolve(api.get('/cities', {
        params: payload
      }))
      await commit('setCityList', list.data.data)
    } catch (err) {
      if (err.response) dispatch('getAlert', err.response.data)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getCountryList: async ({commit, dispatch, state}, payload) => {
    try {
      if (state.countryList) {
        return
      }
      const list = await Promise.resolve(api.get('/countries', {
        params: payload
      }))
      await commit('setCountryList', list.data.data)
    } catch (err) {
      if (err.response) dispatch('getAlert', err.response.data)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getSkillList: async ({commit, dispatch, state}, payload) => {
    try {
      if (state.skillList) {
        return
      }
      const list = await Promise.resolve(api.get('/skills', {
        params: payload
      }))
      await commit('setSkillList', list.data.data)
    } catch (err) {
      if (err.response) dispatch('getAlert', err.response.data)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getChatList: async ({commit, dispatch}, payload) => {
    try {
      const list = await Promise.resolve(api.get(`/${payload.type}/chat-list`, {
        params: payload
      }))
      await commit('setChatList', list.data)
    } catch (err) {
      if (err.response) dispatch('getAlert', err.response.data)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getExpertList: async ({commit, dispatch}, payload) => {
    try {
      const list = await Promise.resolve(api.get('/admin/all-claggers', {
        params: payload
      }))
      await commit('setExpertList', list.data)
    } catch (err) {
      if (err.response) dispatch('getAlert', err.response.data)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getTransactionList: async ({commit, dispatch}, payload) => {
    try {
      const list = await Promise.resolve(api.get('/admin/transactions', {
        params: payload
      }))
      await commit('setTransactionList', list.data)
    } catch (err) {
      if (err.response) dispatch('getAlert', err.response.data)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getCompanyList: async ({commit, dispatch}, payload) => {
    try {
      const list = await Promise.resolve(api.get('/admin/companies', {
        params: payload
      }))
      await commit('setCompanyList', list.data)
    } catch (err) {
      if (err.response) dispatch('getAlert', err.response.data)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getHiredCompanyList: async ({commit, dispatch}, payload) => {
    try {
      const list = await Promise.resolve(api.get('/user/companies', {
        params: payload
      }))
      await commit('setHiredCompanyList', list.data)
    } catch (err) {
      if (err.response) dispatch('getAlert', err.response.data)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getStatistics: async ({commit, dispatch}, payload) => {
    try {
      const list = await Promise.resolve(api.get('/admin/statistics', {
        params: payload
      }))
      await commit('setStatistics', list.data.data)
    } catch (err) {
      if (err.response) dispatch('getAlert', err.response.data)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getProfile: async ({commit}, payload) => {
    try {
      const list = await Promise.resolve(api.get(Cookies.get('clagme-type') === 'employee' ? '/employee/get-company' : '/user/get-user', {
        params: payload
      }))
      await commit('setProfile', list.data.data)
    } catch (err) {
      if (err.response)
        throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
}

export default {
  state,
  mutations,
  actions
}
