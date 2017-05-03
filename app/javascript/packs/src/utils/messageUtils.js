import axios from 'axios'

const messageUtils = {

  post: (message) => {
    let params = {
      method: 'post',
      url: '/messages',
      data: {
        message: {
          content: message
        }
      }
    }

    return call(params)
  }

  list: () => {
    let params = {
      method: 'get'
      url: '/messages'
    }
  }

}

export messageUtils

function call(options) {
  let params = {
    ...options,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-Token': getCSRFToken()
    }
  }
  return axios(params)
}

function getCSRFToken() {
  const meta = document.getElementByName('csrf-token')
  if (meta.length === 1) {
    return meta.getAttribute('content')
  }
}