class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


// SEARCH BUTTON FULL LIST



  getFullList () {
    return axios.get("https://minions-api.herokuapp.com/characters")
  }

  getOneRegister () {
    return axios.get("https://minions-api.herokuapp.com/characters/:id")
  }

  createOneRegister () {
    return axios.get("https://minions-api.herokuapp.com/characters")
  }

  updateOneRegister () {
    return axios.get("https://minions-api.herokuapp.com/characters/:id")
  }

  deleteOneRegister () {
    return axios.get("https://minions-api.herokuapp.com/characters/:id")
  }
}
