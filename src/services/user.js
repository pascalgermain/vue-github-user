import axios from 'axios'

const apiUrl = 'https://api.github.com'

export default {
  getUser (query, callback) {
    return axios.get(apiUrl + '/users/' + encodeURIComponent(query))
      .then(response => callback(response.data))
      .catch(error => console.log('error', error))
  }
}
