'use strict'

module.exports = function(apiKey) {
  let clients = require('restify-clients')
  let querystring = require('querystring')
  
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
  
  sendinblue.senders = {}
  sendinblue.senders.all = function(queryParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/senders?' + querystring.stringify(queryParams), function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/senders?' + querystring.stringify(queryParams), function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.senders.create = function(bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/senders', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/senders', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.senders.update = function(senderId, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.put('/v3/senders/' + senderId, bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.put('/v3/senders/' + senderId, bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.senders.delete = function(senderId, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.del('/v3/senders/' + senderId, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.del('/v3/senders/' + senderId, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  sendinblue.senders.ips = {}
  sendinblue.senders.ips.get = function(senderId, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/senders/' + senderId + '/ips', function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/senders/' + senderId + '/ips', function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.senders.ips.all = function(callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/senders/ips', function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/senders/ips', function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  sendinblue.processes = {}
  sendinblue.processes.all = function(queryParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/processes?' + querystring.stringify(queryParams), function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/processes?' + querystring.stringify(queryParams), function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.processes.get = function(processId, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/processes/' + processId, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/processes/' + processId, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  sendinblue.campaigns = {}
  sendinblue.campaigns.all = function(queryParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/emailCampaigns?' + querystring.stringify(queryParams), function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/emailCampaigns?' + querystring.stringify(queryParams), function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.campaigns.get = function(campaignId, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/emailCampaigns/' + campaignId, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/emailCampaigns/' + campaignId, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.campaigns.create = function(bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/emailCampaigns', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/emailCampaigns', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.campaigns.update = function(campaignId, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.put('/v3/emailCampaigns/' + campaignId, bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.put('/v3/emailCampaigns/' + campaignId, bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.campaigns.delete = function(campaignId, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.del('/v3/emailCampaigns/' + campaignId, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.del('/v3/emailCampaigns/' + campaignId, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.campaigns.send = function(campaignId, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/emailCampaigns/' + campaignId + '/sendNow', function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/emailCampaigns/' + campaignId + '/sendNow', function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.campaigns.test = function(campaignId, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/emailCampaigns/' + campaignId + '/sendTest', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/emailCampaigns/' + campaignId + '/sendTest', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.campaigns.export = function(campaignId, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/emailCampaigns/' + campaignId + '/exportRecipients', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/emailCampaigns/' + campaignId + '/exportRecipients', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.campaigns.report = function(campaignId, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/emailCampaigns/' + campaignId + '/sendReport', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/emailCampaigns/' + campaignId + '/sendReport', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.campaigns.status = function(campaignId, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.put('/v3/emailCampaigns/' + campaignId + '/status', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.put('/v3/emailCampaigns/' + campaignId + '/status', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  sendinblue.smtp = {}
  sendinblue.smtp.activity = {}
  sendinblue.smtp.activity.day = function(queryParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/smtp/statistics/reports?' + querystring.stringify(queryParams), function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/smtp/statistics/reports?' + querystring.stringify(queryParams), function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.smtp.activity.custom = function(queryParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/smtp/statistics/aggregatedReports?' + querystring.stringify(queryParams), function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/smtp/statistics/aggregatedReports?' + querystring.stringify(queryParams), function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.smtp.activity.all = function(queryParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/smtp/statistics/events?' + querystring.stringify(queryParams), function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/smtp/statistics/events?' + querystring.stringify(queryParams), function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  sendinblue.smtp.templates = {}
  sendinblue.smtp.templates.all = function(queryParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/smtp/templates?' + querystring.stringify(queryParams), function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/smtp/templates?' + querystring.stringify(queryParams), function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.smtp.templates.create = function(bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/smtp/templates', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/smtp/templates', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.smtp.templates.get = function(templateId, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.get('/v3/smtp/templates/' + templateId, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.get('/v3/smtp/templates/' + templateId, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.smtp.templates.update = function(templateId, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.put('/v3/smtp/templates/' + templateId, bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.put('/v3/smtp/templates/' + templateId, bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.smtp.templates.delete = function(templateId, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.del('/v3/smtp/templates/' + templateId, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.del('/v3/smtp/templates/' + templateId, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.smtp.templates.test = function(templateId, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/smtp/templates/' + templateId + '/sendTest', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/smtp/templates/' + templateId + '/sendTest', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  sendinblue.smtp.templates.send = function(templateId, bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/smtp/templates/' + templateId + '/send', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/smtp/templates/' + templateId + '/send', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  sendinblue.smtp.transactionals = {}
  sendinblue.smtp.transactionals.send = function(bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/smtp/email', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/smtp/email', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  sendinblue.smtp.hardbounces = {}
  sendinblue.smtp.hardbounces.delete = function(bodyParams, callback) {
    if (!callback) return new Promise(function(resolve, reject) {
      client.post('/v3/smtp/deleteHardbounces', bodyParams, function(err, req, res, obj) {
        if (err) reject(err)
        else resolve(obj)
      })
    })
    else client.post('/v3/smtp/deleteHardbounces', bodyParams, function(err, req, res, obj) {
      if (err) callback(err)
      else callback(null, obj)
    })
  }
  
  return sendinblue
}