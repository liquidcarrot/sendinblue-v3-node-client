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
  
  sendinblue.resellers = {}
  sendinblue.resellers.children = {}
  
  sendinblue.resellers.children.all = function(callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/reseller/children', function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/reseller/children', function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.resellers.children.create = function(bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/reseller/children', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/reseller/children', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.resellers.children.get = function(childAuthKey, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/reseller/children/' + childAuthKey, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/reseller/children/' + childAuthKey, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.resellers.children.update = function(childAuthKey, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.put('/v3/reseller/children/' + childAuthKey, bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.put('/v3/reseller/children/' + childAuthKey, bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.resellers.children.delete = function(childAuthKey, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.del('/v3/reseller/children/' + childAuthKey, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.del('/v3/reseller/children/' + childAuthKey, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  sendinblue.resellers.children.ips = {}
  
  sendinblue.resellers.children.ips.associate = function(childAuthKey, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/reseller/children/' + childAuthKey + '/ips/associate', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/reseller/children/' + childAuthKey + '/ips/associate', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.resellers.children.ips.dissociate = function(childAuthKey, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/reseller/children/' + childAuthKey + '/ips/dissociate', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/reseller/children/' + childAuthKey + '/ips/dissociate', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  sendinblue.resellers.children.credits = {}
  
  sendinblue.resellers.children.credits.add = function(childAuthKey, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/reseller/children/' + childAuthKey + '/credits/add', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/reseller/children/' + childAuthKey + '/credits/add', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.resellers.children.credits.remove = function(childAuthKey, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/reseller/children/' + childAuthKey + '/credits/remove', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/reseller/children/' + childAuthKey + '/credits/remove', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  return sendinblue
}