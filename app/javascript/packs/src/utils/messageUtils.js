import axios from 'axios'

export let messageUtils = {

  post: function(message) {
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
  },

  list: function(){
    let params = {
      method: 'get',
      url: '/messages'
    }

    return call(params)
  }

}


function call(options) {
  let defaultParams = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-Token': getCSRFToken()
    }
  }

  let params = Object.assign({}, defaultParams, options)
  return axios(params)
}

function getCSRFToken() {
  const meta = document.getElementsByName('csrf-token')
  if (meta.length === 1) {
    return meta[0].getAttribute('content')
  }
}




