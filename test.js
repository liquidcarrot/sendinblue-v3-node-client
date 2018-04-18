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
  paramId: "some_param_id",
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
  sender: {
    name: "Sender Example",
    email: "sender@example.com",
    ips: {
      ip: "255.255.255.255",
      domain: "http://example.com",
      weight: "1"
    }
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
        if(error) console.log("Error :" + err)
        else console.log(JSON.stringify(obj, null, 2))
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
})