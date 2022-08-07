export const state = () => ({
  user: {
    firstName: 'Alex',
    lastName: 'Valenchits',
    username: 'valenchits',
    roleName: 'admin',
    role: 1,

  }
})

export const getters = {
  user(state) {
    return state.user
  }
}

export const mutations = {
  increment(state, user) {
    state.user = user;
  }
}

export const actions = {
  async fetchCounter(state) {
    const res = {
                  firstName: 'Alex',
                  lastName: 'Valenchits',
                  username: 'valenchits',
                  roleName: 'admin',
                  role: 1,
                }
    state.user = res.data;
    return res.data;
  }
}
