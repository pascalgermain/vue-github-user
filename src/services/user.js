import axios from 'axios'

const apiUrl = 'https://api.github.com'

export default {
  getUser (query, successFn, errorFn) {
    return axios.get(apiUrl + '/users/' + encodeURIComponent(query))
      .then(response => successFn(response.data))
      .catch(error => { if (typeof errorFn === 'function') errorFn(error) })
  },
  getUserRepos (query, successFn, errorFn) {
    return axios.get(apiUrl + '/users/' + query + '/repos')
    .then(response => successFn(response.data))
    .catch(error => { if (typeof errorFn === 'function') errorFn(error) })
  },
  getUserRepoLastIssue (query, successFn, errorFn) {
    return axios.get(apiUrl + '/repos/' + query + '/issues')
    .then(response => successFn(response.data.length && response.data[0]))
    .catch(error => { if (typeof errorFn === 'function') errorFn(error) })
  }
}
