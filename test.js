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
  resellerChildAuthKey: "some_auth_key",
  resellerChildCredits: {
    sms: 0,
    email: 10
  },
  ip: {
    ip: "255.255.255.255"
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
      sendinblue.resellers.children.get(lorem.resellerChildAuthKey, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.update', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.update(lorem.resellerChildAuthKey, lorem.resellerChild, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.delete', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.delete(lorem.resellerChildAuthKey, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.ips.associate', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.ips.associate(lorem.resellerChildAuthKey, lorem.ip, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.ips.dissociate', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.ips.dissociate(lorem.resellerChildAuthKey, lorem.ip, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.credits.add', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.credits.add(lorem.resellerChildAuthKey, lorem.resellerChildCredits, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  describe('resellers.children.credits.remove', function() {
    it('should not return an error', function() {
      sendinblue.resellers.children.credits.remove(lorem.resellerChildAuthKey, lorem.resellerChildCredits, function(err, obj) {
        expect(err).to.not.exist
      })
    })
  })
  //==================================
  // END Reseller Tests ==============
  //==================================
})