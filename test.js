'use strict'
let expect = require('chai').expect
let sendinblue = require('./index')("YOUR_API_KEY")

let lorem = {
  resellerChild: {
    email: "johndoe@gmail.com",
    firstName: "John",
    lastName: "Doe",
    companyName: "Liquid Carrot",
    password: "MagicMike"
  },
  paramId: "0",
  resellerChildCredits: {
    sms: 0,
    email: 10
  },
  ip: {
    ip: "255.255.255.255"
  },
  senderQuery: {
    ip: "255.255.255.255",
    domain: "http://example.com"
  },
  processesQuery: {
    limit: 10,
    offset: 0
  },
  campaignQuery: {
    type: "classic",
    status: "sent",
    limit: 100,
    offset: 0
  },
  smtpQuery: {
    startDate: "2018-01-01",
    endDate: "2018-01-31",
  },
  templateQuery: {
    templateStatus: true,
    limit: 50,
    offset: 0
  },
  webhookQuery: {
    type: "marketing"
  },
  sender: {
    name: "Sender Example",
    email: "sender@example.com",
    ips: {
      ip: "255.255.255.255",
      domain: "http://example.com",
      weight: "1"
    }
  },
  campaign: {
    sender: {
      email: "people@liquidcarrot.io"
    },
    name: "Example Campaign",
    subject: "Example Subject",
    type: "classic"
  },
  testCampaign: {
    emailTo: ["johndoe@gmail.com", "magicmike@gmail.com"]
  },
  exportCampaign: {
    recipientsType: "all"
  },
  reportCampaign: {
    email: "johndoe@example.com"
  },
  campaignStatus: {
    status: "sent"
  },
  template: {
    sender: {
      email: "johndoe@gmail.com"
    },
    templateName: "Example Template",
    subject: "Example Template Subject"
  },
  transactional: {
    sender: {
      email: "johndoe@gmail.com"
    },
    to: "magicmike@gmail.com",
    replyTo: {
      email: "johndoe@gmail.com"
    }
  },
  webhook: {
    url: "http://example.com"
  }
}

let models = {}

describe('SendInBlue', function() {
  //==================================
  // Account Tests ===================
  //==================================
  describe('accounts.get', function() {
    it('should not return an error', function() {
      sendinblue.accounts.get(function(err, obj) {
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
  describe('resellers.children.all', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.all(function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.create', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.create(lorem.resellerChild, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.get', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.get(lorem.paramId, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.update', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.update(lorem.paramId, lorem.resellerChild, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.delete', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.delete(lorem.paramId, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.ips.associate', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.ips.associate(lorem.paramId, lorem.ip, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.ips.dissociate', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.ips.dissociate(lorem.paramId, lorem.ip, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.credits.add', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.credits.add(lorem.paramId, lorem.resellerChildCredits, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.credits.remove', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.credits.remove(lorem.paramId, lorem.resellerChildCredits, function(err, obj) {
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
  describe('senders.all', function() {
    it('should not return an error', function() {
      sendinblue.senders.all(lorem.senderQuery, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('senders.create', function() {
    it('should not return an error', function() {
      sendinblue.senders.create(lorem.sender, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('senders.update', function() {
    it('should not return an error', function() {
      sendinblue.senders.update(lorem.paramId, lorem.sender, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('senders.delete', function() {
    it('should not return an error', function() {
      sendinblue.senders.delete(lorem.paramId, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('senders.ips.get', function() {
    it('should not return an error', function() {
      sendinblue.senders.ips.get(lorem.paramId, function(err, obj) {
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
  describe('processes.all', function() {
    it('should not return an error', function() {
      sendinblue.processes.all(lorem.processesQuery, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('processes.get', function() {
    it('should not return an error', function() {
      sendinblue.processes.get(lorem.paramId, function(err, obj) {
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
  describe('campaigns.all', function() {
    it('should not return an error', function() {
      sendinblue.campaigns.all(lorem.campaignQuery, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.get', function() {
    it('should not return an error', function() {
      sendinblue.campaigns.get(lorem.paramId, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.create', function() {
    it('should not return an error', function() {
      sendinblue.campaigns.create(lorem.campaign, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.update', function() {
    it('should not return an error', function() {
      sendinblue.campaigns.update(lorem.paramId, lorem.campaign, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.delete', function() {
    it('should not return an error', function() {
      sendinblue.campaigns.delete(lorem.paramId, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.send', function() {
    it('should not return an error', function() {
      sendinblue.campaigns.send(lorem.paramId, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.test', function() {
    it('should not return an error', function() {
      sendinblue.campaigns.test(lorem.paramId, lorem.testCampaign, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.export', function() {
    it('should not return an error', function() {
      sendinblue.campaigns.export(lorem.paramId, lorem.exportCampaign, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.report', function() {
    it('should not return an error', function() {
      sendinblue.campaigns.report(lorem.paramId, lorem.reportCampaign, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('campaigns.status', function() {
    it('should not return an error', function() {
      sendinblue.campaigns.status(lorem.paramId, lorem.campaignStatus, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END Campaign Tests ==============
  //==================================
  
  //==================================
  // Campaign Tests ==================
  //==================================
  describe('smtp.activity.day', function() {
    it('should not return an error', function() {
      sendinblue.smtp.activity.day(lorem.smtpQuery, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.activity.custom', function() {
    it('should not return an error', function() {
      sendinblue.smtp.activity.custom(lorem.smtpQuery, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.activity.all', function() {
    it('should not return an error', function() {
      sendinblue.smtp.activity.all(lorem.smtpQuery, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.all', function() {
    it('should not return an error', function() {
      sendinblue.smtp.templates.all(lorem.templateQuery, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.create', function() {
    it('should not return an error', function() {
      sendinblue.smtp.templates.create(lorem.template, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.get', function() {
    it('should not return an error', function() {
      sendinblue.smtp.templates.get(lorem.paramId, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.update', function() {
    it('should not return an error', function() {
      sendinblue.smtp.templates.update(lorem.paramId, lorem.template, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.delete', function() {
    it('should not return an error', function() {
      sendinblue.smtp.templates.delete(lorem.paramId, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.test', function() {
    it('should not return an error', function() {
      sendinblue.smtp.templates.test(lorem.paramId, lorem.testCampaign, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.templates.send', function() {
    it('should not return an error', function() {
      sendinblue.smtp.templates.send(lorem.paramId, lorem.testCampaign, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.transactionals.send', function() {
    it('should not return an error', function() {
      sendinblue.smtp.transactionals.send(lorem.transactional, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('smtp.hardbounces.delete', function() {
    it('should not return an error', function() {
      sendinblue.smtp.hardbounces.delete(lorem.smtpQuery, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END Campaign Tests ==============
  //==================================
  
  //==================================
  // Webhook Tests ===================
  //==================================
  describe('webhooks.all', function() {
    it('should not return an error', function() {
      sendinblue.webhooks.all(lorem.webhookQuery, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('webhooks.create', function() {
    it('should not return an error', function() {
      sendinblue.webhooks.create(lorem.webhook, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('webhooks.get', function() {
    it('should not return an error', function() {
      sendinblue.webhooks.get(lorem.paramId, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('webhooks.update', function() {
    it('should not return an error', function() {
      sendinblue.webhooks.update(lorem.paramId, lorem.webhook, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('webhooks.delete', function() {
    it('should not return an error', function() {
      sendinblue.webhooks.delete(lorem.paramId, function(err, obj) {
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