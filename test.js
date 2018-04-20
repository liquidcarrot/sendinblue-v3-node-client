'use strict'
let expect = require('chai').expect
let sendinblue = require('./index')("YOUR_API_KEY")

let models = {}

describe('SendInBlue', function() {
  //==================================
  // Account Tests ===================
  //==================================
  describe('account.get', function() {
    it('should not return an error', function() {
      sendinblue.account.get(function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END Account Tests ===============
  //==================================
  
  //==================================
  // Reseller Tests ==================
  //==================================
  models.resellers.children = {}
  describe('resellers.children.all', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.all(function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.create', function() {
    models.resellers.children.create = [{
      email: "johndoe@gmail.com",
      firstName: "John",
      lastName: "Doe",
      companyName: "Liquid Carrot",
      password: "MagicMike"
    }]
    it('should not return an error', function() {
      sendinblue.resellers.children.create(...models.resellers.children.create, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.get', function() {
    models.resellers.children.get = ["0"]
    it('should not return an error', function() {
      sendinblue.resellers.children.get(...models.resellers.children.get, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.update', function() {
    models.resellers.children.update = ["0", {
      email: "johndoe@gmail.com",
      firstName: "John",
      lastName: "Doe",
      companyName: "Liquid Carrot",
      password: "MagicMike"
    }]
    it('should not return an error', function() {
      sendinblue.resellers.children.update(...models.resellers.children.update, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.delete', function() {
    models.resellers.children.delete = ["0"]
    it('should not return an error', function() {
      sendinblue.resellers.children.delete(...models.resellers.children.delete, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  
  models.resellers.children.ips = {}
  describe('resellers.children.ips.associate', function() {
    models.resellers.children.ips.associate = ["0", {
      ip: "255.255.255.255"
    }]
    it('should not return an error', function() {
      sendinblue.resellers.children.ips.associate(...models.resellers.children.ips.associate, lorem.ip, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.ips.dissociate', function() {
    models.resellers.children.ips.dissociate = ["0", {
      ip: "255.255.255.255"
    }]
    it('should not return an error', function() {
      sendinblue.resellers.children.ips.dissociate(...models.resellers.children.ips.dissociate, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  
  models.resellers.children.credits = {}
  describe('resellers.children.credits.add', function() {
    models.resellers.children.credits.add = ["0", {
      email: "johndoe@gmail.com"
    }]
    it('should not return an error', function() {
      sendinblue.resellers.children.credits.add(...models.resellers.children.credits.add, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.credits.remove', function() {
    models.resellers.children.credits.remove = ["0", {
      email: "johndoe@gmail.com"
    }]
    it('should not return an error', function() {
      sendinblue.resellers.children.credits.remove(...models.resellers.children.credits.remove, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END Reseller Tests ==============
  //==================================
  
  //==================================
  // Sender Tests ====================
  //==================================
  models.senders = {}
  describe('senders.all', function() {
    models.senders.all = [{
      ip: "255.255.255.255",
      domain: "http://example.com"
    }]
    it('should not return an error', function() {
      sendinblue.senders.all(...models.senders.all, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('senders.create', function() {
    models.senders.create = [{
      name: "John Doe",
      email: "johndoe@gmail.com"
    }]
    it('should not return an error', function() {
      sendinblue.senders.create(...models.senders.create, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('senders.update', function() {
    models.senders.update = ["0", {
      name: "John Doe",
      email: "johndoe@gmail.com"
    }]
    it('should not return an error', function() {
      sendinblue.senders.update(...models.senders.update, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('senders.delete', function() {
    models.senders.delete = ["0"]
    it('should not return an error', function() {
      sendinblue.senders.delete(...models.senders.delete, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  
  models.senders.ips = {}
  describe('senders.ips.get', function() {
    models.senders.ips.get = ["0"]
    it('should not return an error', function() {
      sendinblue.senders.ips.get(...models.senders, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('senders.ips.all', function() {
    it('should not return an error', function() {
      sendinblue.senders.ips.all(function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END Sender Tests ================
  //==================================
  
  //==================================
  // Process Tests ===================
  //==================================
  models.processes = {}
  describe('processes.all', function() {
    models.processes.all = [{
      limit: 10,
      offset: 0
    }]
    it('should not return an error', function() {
      sendinblue.processes.all(...models.processes.all, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('processes.get', function() {
    models.processes.get = [{
      processId = ["0"]
    }]
    it('should not return an error', function() {
      sendinblue.processes.get(...models.processes.get, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END Process Tests ===============
  //==================================
  
  //==================================
  // Campaign Tests ==================
  //==================================
  models.campaigns = {}
  describe('campaigns.all', function() {
    models.campaigns.all = [{
      type: "classic",
      status: "queued",
      limit: 100,
      offset: 0
    }]
    it('should not return an error', function() {
      sendinblue.campaigns.all(...models.campaigns.all, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.get', function() {
    models.campaigns.get = ["0"]
    it('should not return an error', function() {
      sendinblue.campaigns.get(...models.campaigns.get, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.create', function() {
    models.campaigns.create = [{
      sender: {
        name: "John Doe",
        email: "johndoe@gmail.com"
      },
      name: "Example Campaign",
      htmlContent: "<p>This is an example text.</p>",
      subject: "Example Campaign Subject",
      type: "classic"
    }]
    it('should not return an error', function() {
      sendinblue.campaigns.create(...models.campaigns.create, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.update', function() {
    models.campaigns.update = ["0", {
      sender: {
        name: "John Doe",
        email: "johndoe@gmail.com"
      },
      name: "Example Campaign",
      htmlContent: "<p>This is an example text.</p>",
      subject: "Example Campaign Subject",
      type: "classic"
    }]
    it('should not return an error', function() {
      sendinblue.campaigns.update(...models.campaigns.update, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.delete', function() {
    models.campaigns.delete = ["0"]
    it('should not return an error', function() {
      sendinblue.campaigns.delete(...models.campaigns.delete, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.send', function() {
    models.campaigns.send = ["0"]
    it('should not return an error', function() {
      sendinblue.campaigns.send(...models.campaigns.send, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.test', function() {
    models.campaigns.test = ["0", {
      emailTo: ["johndoe@gmail.com", "magicmike@gmail.com"]
    }]
    it('should not return an error', function() {
      sendinblue.campaigns.test(...models.campaigns.test, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.export', function() {
    models.campaigns.export = ["0", {
      recipientsType: "all"
    }]
    it('should not return an error', function() {
      sendinblue.campaigns.export(...models.campaigns.export, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.report', function() {
    models.campaigns.report = ["0", {
      email: "johndoe@gmail.com"
    }]
    it('should not return an error', function() {
      sendinblue.campaigns.report(...models.campaigns.report, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.status', function() {
    models.campaigns.status = ["0", {
      status: "queued"
    }]
    it('should not return an error', function() {
      sendinblue.campaigns.status(...models.campaigns.status, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END Campaign Tests ==============
  //==================================
  
  //==================================
  // SMTP Tests ======================
  //==================================
  models.smtp.activity = {}
  describe('smtp.activity.day', function() {
    models.smtp.activity.day = [{
      limit: 50,
      offset: 0,
      days: 10
    }]
    it('should not return an error', function() {
      sendinblue.smtp.activity.day(...models.smtp.activity.day, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.activity.custom', function() {
    models.smtp.activity.custom = [{
      days: 10
    }]
    it('should not return an error', function() {
      sendinblue.smtp.activity.custom(...models.smtp.activity.custom, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.activity.all', function() {
    models.smtp.activity.all = [{
      limit: 50,
      offset: 0,
      days: 10
    }]
    it('should not return an error', function() {
      sendinblue.smtp.activity.all(...models.smtp.activity.all, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  
  models.smtp.templates = {}
  describe('smtp.templates.all', function() {
    models.smtp.templates.all = [{
      templateStatus: true,
      limit: 50,
      offset: 0
    }]
    it('should not return an error', function() {
      sendinblue.smtp.templates.all(...models.smtp.templates.all, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.create', function() {
    models.smtp.templates.create = [{
      sender: {
        name: "John Doe",
        email: "johndoe@gmail.com"
      },
      templateName: "Example Template",
      htmlContent: "<p>This is an example text.</p>",
      subject: "Example Template Subject",
      type: "classic"
    }]
    it('should not return an error', function() {
      sendinblue.smtp.templates.create(...models.smtp.templates.create, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.get', function() {
    models.smtp.templates.get = ["0"]
    it('should not return an error', function() {
      sendinblue.smtp.templates.get(...models.smtp.templates.get, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.update', function() {
    models.smtp.templates.update = ["0", {
      sender: {
        name: "John Doe",
        email: "johndoe@gmail.com"
      },
      templateName: "Example Template",
      htmlContent: "<p>This is an example text.</p>",
      subject: "Example Template Subject",
      type: "classic"
    }]
    it('should not return an error', function() {
      sendinblue.smtp.templates.update(...models.smtp.templates.update, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.delete', function() {
    models.smtp.templates.delete = ["0"]
    it('should not return an error', function() {
      sendinblue.smtp.templates.delete(...models.smtp.templates.delete, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.test', function() {
    models.smtp.templates.test = ["0", {
      emailTo: ["johndoe@gmail.com", "magicmike@gmail.com"]
    }]
    it('should not return an error', function() {
      sendinblue.smtp.templates.test(...models.smtp.templates.test, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.send', function() {
    models.smtp.templates.send = ["0", {
      emailTo: ["johndoe@gmail.com", "magicmike@gmail.com"]
    }]
    it('should not return an error', function() {
      sendinblue.smtp.templates.send(...models.smtp.templates.send, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  
  models.smtp.transactionals = {}
  describe('smtp.transactionals.send', function() {
    models.smtp.transactionals.send  = [{
      sender: {
        name: "John Doe",
        email: "johndoe@gmail.com"
      },
      replyTo: {
        email: "johndoe@gmail.com",
        name: "John Doe"
      },
      to: [{
        email: "johndoe@gmail.com",
        name: "John Doe"
      }, {
        email: "magicmike@gmail.com",
        name: "Magic Mike"
      }],
      htmlContent: "<p>This is an example text.</p>",
      subject: "Example Template Subject"
    }]
    it('should not return an error', function() {
      sendinblue.smtp.transactionals.send(...models.smtp.transactionals.send, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  
  models.smtp.hardbounces = {}
  describe('smtp.hardbounces.delete', function() {
    models.smtp.hardbounces.delete = [{
      startDate: "2018-01-01",
      endDate: "2018-01-31"
    }]
    it('should not return an error', function() {
      sendinblue.smtp.hardbounces.delete(...models.smtp.hardbounces.delete, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END SMTP Tests ==================
  //==================================
  
  //==================================
  // Webhook Tests ===================
  //==================================
  models.webhooks = {}
  describe('webhooks.all', function() {
    models.webhooks.all = [{
      type: "transactional"
    }]
    it('should not return an error', function() {
      sendinblue.webhooks.all(...models.webhooks.all, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('webhooks.create', function() {
    models.webhooks.create = [{
      url: "http://example.com/webhok",
      events: "click",
      type: "transactional"
    }]
    it('should not return an error', function() {
      sendinblue.webhooks.create(...models.webhooks.create, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('webhooks.get', function() {
    models.webhooks.get = ["0"]
    it('should not return an error', function() {
      sendinblue.webhooks.get(...models.webhooks.get, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('webhooks.update', function() {
    models.webhooks.update = ["0", {
      url: "http://example.com/webhok",
      events: "click",
      type: "transactional"
    }]
    it('should not return an error', function() {
      sendinblue.webhooks.update(...models.webhooks.update, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('webhooks.delete', function() {
    models.webhooks.delete = ["0"]
    it('should not return an error', function() {
      sendinblue.webhooks.delete(...models.webhooks.delete, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END Webhook Tests ===============
  //==================================
  
  //==================================
  // Contact Tests ===================
  //==================================
  models.contacts = {}
  describe('contacts.all', function() {
    models.contacts.all = [{
      limit: 50,
      offset: 0
    }]
    it('should not return an error', function() {
      sendinblue.contacts.all(...models.contacts.all, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.create', function() {
    models.contacts.create = [{
      email: "johndoe@gmail.com"
    }]
    it('should not return an error', function() {
      sendinblue.contacts.create(...models.contacts.create, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.get', function() {
    models.contacts.get = ["johndoe%40gmail.com"]
    it('should not return an error', function() {
      sendinblue.contacts.get(...models.contacts.get, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.update', function() {
    models.contacts.update = ["johndoe%40gmail.com", {
      email: "magicmike@gmail.com"
    }]
    it('should not return an error', function() {
      sendinblue.contacts.update(...models.contacts.update, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.delete', function() {
    models.contacts.delete = ["johndoe%40gmail.com"]
    it('should not return an error', function() {
      sendinblue.contacts.delete(...models.contacts.delete, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.statistics', function() {
    models.contacts.statistics = ["johndoe%40gmail.com"]
    it('should not return an error', function() {
      sendinblue.contacts.statistics(...models.contacts.statistics, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  
  models.contacts.attributes = {}
  describe('contacts.attributes.all', function() {
    it('should not return an error', function() {
      sendinblue.contacts.attributes.all(function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.attributes.create', function() {
    models.contacts.attributes.create = ["global", "ExampleAttribute", {
      value: "Blue",
      type: "text"
    }]
    it('should not return an error', function() {
      sendinblue.contacts.attributes.create(...models.contacts.attributes.create, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.attributes.update', function() {
    models.contacts.attributes.update = ["global", "ExampleAttribute", {
      value: "Blue",
      type: "text"
    }]
    it('should not return an error', function() {
      sendinblue.contacts.attributes.update(...models.contacts.attributes.update, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.attributes.delete', function() {
    models.contacts.attributes.delete = ["global", "ExampleAttribute"]
    it('should not return an error', function() {
      sendinblue.contacts.attributes.delete(...models.contacts.attributes.delete, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  
  models.contacts.folders = {}
  describe('contacts.folders.all', function() {
    models.contacts.folders.all = [{
      limit: 10,
      offset: 0
    }]
    it('should not return an error', function() {
      sendinblue.contacts.folders.all(...models.contacts.folders.all, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.folders.create', function() {
    models.contacts.folders.create = [{
      name: "Example Folder"
    }]
    it('should not return an error', function() {
      sendinblue.contacts.folders.create(...models.contacts.folders.create, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.folders.get', function() {
    models.contacts.folders.get = ["0"]
    it('should not return an error', function() {
      sendinblue.contacts.folders.get(...models.contacts.folders.get, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.folders.update', function() {
    models.contacts.folders.update = ["0", {
      name: "Second Example Folder"
    }]
    it('should not return an error', function() {
      sendinblue.contacts.folders.update(...models.contacts.folders.update, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.folders.delete', function() {
    models.contacts.folders.delete = ["0"]
    it('should not return an error', function() {
      sendinblue.contacts.folders.delete(...models.contacts.folders.delete, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.folders.lists', function() {
    models.contacts.folders.lists = ["0", {
      limit: 10,
      offset: 0
    }]
    it('should not return an error', function() {
      sendinblue.contacts.folders.lists(...models.contacts.folders.lists, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  
  models.contacts.lists = {}
  describe('contacts.lists.all', function() {
    models.contacts.lists.all = [{
      limit: 10,
      offset: 0
    }]
    it('should not return an error', function() {
      sendinblue.contacts.lists.all(...models.contacts.lists.all, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.lists.create', function() {
    models.contacts.lists.create = [{
      name: "New Example List",
      folderId: "0"
    }]
    it('should not return an error', function() {
      sendinblue.contacts.lists.create(...models.contacts.lists.create, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.lists.get', function() {
    models.contacts.lists.get = ["0"]
    it('should not return an error', function() {
      sendinblue.contacts.lists.get(...models.contacts.lists.get, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.lists.update', function() {
    models.contacts.lists.update = ["0", {
      name: "Another Example List",
      folderId: "1"
    }]
    it('should not return an error', function() {
      sendinblue.contacts.lists.update(...models.contacts.lists.update, lorem.webhook, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.lists.delete', function() {
    models.contacts.lists.delete = ["0"]
    it('should not return an error', function() {
      sendinblue.contacts.lists.delete(...models.contacts.lists.delete, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  
  models.contacts.lists.contacts = {}
  describe('contacts.lists.contacts.get', function() {
    models.contacts.lists.contacts.get = ["0", {
      limit: 10,
      offset: 0
    }]
    it('should not return an error', function() {
      sendinblue.contacts.lists.contacts.get(...models.contacts.lists.contacts.get, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.lists.contacts.add', function() {
    models.contacts.lists.contacts.add = ["0", {
      emails: ["johndoe@gmail.com", "magicmike@gmail.com"]
    }]
    it('should not return an error', function() {
      sendinblue.contacts.lists.contacts.add(...models.contacts.lists.contacts.add, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.lists.contacts.remove', function() {
    models.contacts.lists.contacts.remove = ["0", {
      emails: ["johndoe@gmail.com", "magicmike@gmail.com"]
    }]
    it('should not return an error', function() {
      sendinblue.contacts.lists.contacts.remove(...models.contacts.lists.contacts.remove, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.export', function() {
    models.contacts.export = [{
      contactFilter: {
        "blacklisted": 1
      }
    }]
    it('should not return an error', function() {
      sendinblue.contacts.export(...models.contacts.export, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('contacts.import', function() {
    models.contacts.import = [{
      fileUrl: "http://example.com/contacts.csv",
      listIds: ["0"]
    }]
    it('should not return an error', function() {
      sendinblue.contacts.import(...models.contacts.import, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END Contact Tests ===============
  //==================================
  
  //==================================
  // SMS Tests =======================
  //==================================
  models.sms = {}
  models.sms.send = [{
    sender: "12345",
    recipient: "555555555",
    content: "Example text"
  }]
  describe('sms.send', function() {
    it('should not return an error', function() {
      sendinblue.sms.send(...models.sms.send, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  models.sms.all = [{
    days: 10,
    limit: 10,
    offset: 0
  }]
  describe('sms.all', function() {
    it('should not return an error', function() {
      sendinblue.sms.all(...models.sms.all, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  models.sms.custom = [{
    days: 10
  }]
  describe('sms.custom', function() {
    it('should not return an error', function() {
      sendinblue.sms.custom(...models.sms.custom, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  models.sms.day = [{
    days: 10
  }]
  describe('sms.day', function() {
    it('should not return an error', function() {
      sendinblue.sms.day(...models.sms.day, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END SMS Tests ===================
  //==================================
})
