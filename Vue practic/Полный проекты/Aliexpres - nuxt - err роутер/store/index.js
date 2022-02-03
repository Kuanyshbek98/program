export const state = () => ({
  data: null,
  phone: null,
  profile: false,
  change: true,
  authShow: false,
  passwordRecovery: false,
  componentName: 'RegistrationBlock',
  profilePage: 'Favorite'
})

export const mutations = {
  registrationData (state, payload) {
    state.data = payload
  },
  authPhone (state, payload) {
    state.phone = payload
  },
  passwordRecovery (state, payload) {
    state.passwordRecovery = payload
  },
  componentChange (state, payload) {
    state.componentName = payload
    if (payload === 'AuthorizationBlock' || payload === 'RegistrationBlock') {
      state.change = true
    } else {
      state.change = false
    }
  },
  authClose (state, payload) {
    state.authShow = !payload
    if (payload === true) {
      state.componentName = 'RegistrationBlock'
      state.change = true
    }
  },
  isAuth (state, payload) {
    state.profile = payload
    if (payload) {
      state.authShow = false
      state.change = true
    }
  },
  profilePage (state, payload) {
    state.profilePage = payload
  }
}

export const actions = {
  // async getNewsList ({ commit }, payload) {
  //   try {
  //     const { data } = await Promise.resolve(this.$api.$get('/news', {
  //       params: payload
  //     }))
  //     await commit('setNewsList', data)
  //   } catch (err) {
  //     throw new Error('Внутреняя ошибка сервера, сообщите администратору')
  //   }
  // }
}
