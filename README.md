# sendinblue-v3-node-client

The Best Unofficial SendinBlue V3 API Node.js Client

sendinblue-v3-node-client exposes the entire SendinBlue API. Please refer to the full official [documentation](https://developers.sendinblue.com) to learn more.

This is an unofficial wrapper for the API. It implements all the features of the API v3. It supports promises and callbacks.

## Installation

If you are unfamiliar with npm, see the [npm docs](https://npmjs.org/doc/).

```shell
npm i -S sendinblue-v3-node-client
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
let sib = require('sendinblue-v3-node-client')("YOUR_API_KEY")

sib.account.get(function(error, account) {
  if(error) console.log("Error: ", error)
  else console.log("Your Account Object: ", account)
})
```

## Documentation for API Endpoints

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**account.get**](https://developers.sendinblue.com/v3.0/reference#getaccount-7) | **GET** /account | Get your account informations, plans and credits details
[**resellers.children.all**]() | **GET** /reseller | Gets the list of all reseller&#39;s children accounts
[**resellers.children.create**]() | **POST** /reseller | Creates a reseller child
[**resellers.children.get**]() | **GET** /reseller | Gets the info about a specific child account
[**resellers.children.update**]() | **PUT** /reseller | Updates infos of reseller&#39;s child based on the childAuthKey supplied
[**resellers.children.delete**]() | **DELETE** /reseller | Deletes a single reseller child based on the childAuthKey supplied
[**resellers.children.ips.associate**]() | **POST** /reseller | Associate a dedicated IP to the child
[**resellers.children.ips.dissociate**]() | **POST** /reseller | Dissociate a dedicated IP to the child
[**resellers.children.credits.add**]() | **POST** /reseller | Add Email and/or SMS credits to a specific child account
[**resellers.children.credits.remove**]() | **POST** /reseller | Remove Email and/or SMS credits from a specific child account
[**senders.all**]() | **GET** /senders | Return all the dedicated IPs for your account
[**senders.create**]() | **POST** /senders | Create a new sender
[**senders.update**]() | **PUT** /senders | Update a sender
[**senders.delete**]() | **DELETE** /senders | Delete a sender
[**senders.ips.get**]() | **GET** /senders | Return all the dedicated IPs for a sender
[**senders.ips.all**]() | **GET** /senders | Get the list of all your senders
[**processes.all**]() | **GET** /processes | Return all the processes for your account
[**processes.get**]() | **GET** /processes | Return the informations for a process
[**campaigns.all**]() | **GET** /emailCampaigns | Return all your created campaigns
[**campaigns.get**]() | **GET** /emailCampaigns | Get campaign informations
[**campaigns.create**]() | **POST** /emailCampaigns | Create an email campaign
[**campaigns.update**]() | **PUT** /emailCampaigns | Update a campaign
[**campaigns.delete**]() | **DELETE** /emailCampaigns | Delete an email campaign
[**campaigns.send**]() | **POST** /emailCampaigns | Send an email campaign id of the campaign immediately
[**campaigns.test**]() | **POST** /emailCampaigns | Send an email campaign to your test list
[**campaigns.export**]() | **POST** /emailCampaigns | Export the recipients of a campaign
[**campaigns.report**]() | **POST** /emailCampaigns | Send the report of a campaigns
[**campaigns.status**]() | **PUT** /emailCampaigns | Update a campaign status
[**smtp.activity.day**]() | **GET** /smtp | Get your SMTP activity aggregated per day
[**smtp.activity.custom**]() | **GET** /smtp | Get your SMTP activity aggregated over a period of time
[**smtp.activity.all**]() | **GET** /smtp | Get all your SMTP activity (unaggregated events)
[**smtp.templates.all**]() | **GET** /smtp | Get the list of SMTP templates
[**smtp.templates.create**]() | **POST** /smtp | Create an smtp template
[**smtp.templates.get**]() | **GET** /smtp | Returns the template informations
[**smtp.templates.update**]() | **PUT** /smtp | Updates an smtp templates
[**smtp.templates.delete**]() | **DELETE** /smtp | Delete an inactive smtp template
[**smtp.templates.test**]() | **POST** /smtp | Send a template to your test list
[**smtp.templates.send**]() | **POST** /smtp | Send a template
[**smtp.transactionals.send**]() | **POST** /smtp | Send a transactional email
[**smtp.hardbounces.delete**]() | **POST** /smtp | Delete hardbounces
[**webhooks.all**]() | **GET** /webhooks | Get all webhooks
[**webhooks.create**]() | **POST** /webhooks | Create a webhook
[**webhooks.get**]() | **GET** /webhooks | Get a webhook details
[**webhooks.update**]() | **PUT** /webhooks | Update a webhook
[**webhooks.delete**]() | **DELETE** /webhooks | Delete a webhook
[**contacts.all**]() | **GET** /contacts | Get all the contacts
[**contacts.create**]() | **POST** /contacts | Create a contact
[**contacts.get**]() | **GET** /contacts | Retrieves contact informations
[**contacts.update**]() | **PUT** /contacts | Updates a contact
[**contacts.delete**]() | **DELETE** /contacts | Deletes a contact
[**contacts.statistics**]() | **GET** /contacts | Get the campaigns statistics for a contact
[**contacts.attributes.all**]() | **GET** /contacts | Lists all attributes
[**contacts.attributes.create**]() | **POST** /contacts | Creates contact attribute
[**contacts.attributes.update**]() | **PUT** /contacts | Updates contact attribute
[**contacts.attributes.delete**]() | **DELETE** /contacts | Deletes an attribute
[**contacts.folders.all**]() | **GET** /contacts | Get all the folders
[**contacts.folders.create**]() | **POST** /contacts | Create a folder
[**contacts.folders.get**]() | **GET** /contacts | Returns folder details
[**contacts.folders.update**]() | **PUT** /contacts | Update a contact folder
[**contacts.folders.delete**]() | **DELETE** /contacts | Delete a folder (and all its lists)
[**contacts.folders.lists**]() | **GET** /contacts | Get the lists in a folder
[**contacts.lists.all**]() | **GET** /contacts | Get all the lists
[**contacts.lists.create**]() | **POST** /contacts | Create a list
[**contacts.lists.get**]() | **GET** /contacts | Get the details of a list
[**contacts.lists.update**]() | **PUT** /contacts | Update a list
[**contacts.lists.delete**]() | **DELETE** /contacts | Delete a list
[**contacts.lists.contacts.get**]() | **GET** /contacts | Get the contacts in a list
[**contacts.lists.contacts.add**]() | **POST** /contacts | Add existing contacts to a list
[**contacts.lists.contacts.remove**]() | **POST** /contacts | Remove existing contacts from a list
[**contacts.export**]() | **POST** /contacts | Export contacts
[**contacts.import**]() | **POST** /contacts | Import contacts
[**contacts.lists.contacts.get**]() | **GET** /contacts | Get the contacts in a list
[**contacts.lists.contacts.add**]() | **POST** /contacts | Add existing contacts to a list
[**contacts.lists.contacts.remove**]() | **POST** /contacts | Remove existing contacts from a list
[**contacts.export**]() | **POST** /contacts | Export contacts
[**contacts.import**]() | **POST** /contacts | Import contacts
[**sms.send**]() | **POST** /transactionalSMS | Send the SMS campaign to the specified mobile number
[**sms.all**]() | **GET** /transactionalSMS | Get all the SMS activity (unaggregated events)
[**sms.custom**]() | **GET** /transactionalSMS | Get your SMS activity aggregated over a period of time
[**sms.day**]() | **GET** /transactionalSMS | Get your SMS activity aggregated per day

## Documentation for Authorization

### api-key

- **Type**: API key
- **API key parameter name**: api-key
- **Location**: HTTP header

## Support and Feedback

Be sure to visit the SendinBlue official [documentation website](https://sendinblue.readme.io/docs) for additional information about the official API.

If you find a bug, please post the issue on [Github](https://github.com/luiscarbonell/sendinblue-v3-node-client/issues).

If you have any questions or comments, feel free to drop us a note [here](mailto:people@liquidcarrot.io).