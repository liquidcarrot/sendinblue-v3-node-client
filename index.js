'use strict'

module.exports = function(apiKey) {
  let clients = require('restify-clients')
  
  let client = clients.createJsonClient({
    url: 'https://api.sendinblue.com',
    headers: {
      "api-key": apiKey
    }
  })
  
  let sendinblue = {}
  sendinblue.accounts = {}
  
  sendinblue.accounts.get = function(callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/account', function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/account', function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  return sendinblue
}