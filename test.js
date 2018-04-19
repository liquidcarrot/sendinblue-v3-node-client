'use strict'
let expect = require('chai').expect
let sendinblue = require('./index')("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")
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
  }
}

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
})