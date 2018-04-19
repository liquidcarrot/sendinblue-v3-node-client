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

[**getResellerChilds**](docs/ResellerApi.md#getResellerChilds) | **GET** /reseller | Gets the list of all reseller&#39;s children accounts
[**createResellerChild**](docs/ResellerApi.md#createResellerChild) | **POST** /reseller | Creates a reseller child
[**getChildInfo**](docs/ResellerApi.md#getChildInfo) | **GET** /reseller | Gets the info about a specific child account
[**updateResellerChild**](docs/ResellerApi.md#updateResellerChild) | **PUT** /reseller | Updates infos of reseller&#39;s child based on the childAuthKey supplied
[**deleteResellerChild**](docs/ResellerApi.md#deleteResellerChild) | **DELETE** /reseller | Deletes a single reseller child based on the childAuthKey supplied
[**associateIpToChild**](docs/ResellerApi.md#associateIpToChild) | **POST** /reseller | Associate a dedicated IP to the child
[**dissociateIpFromChild**](docs/ResellerApi.md#dissociateIpFromChild) | **POST** /reseller | Dissociate a dedicated IP to the child
[**addCredits**](docs/ResellerApi.md#addCredits) | **POST** /reseller | Add Email and/or SMS credits to a specific child account
[**removeCredits**](docs/ResellerApi.md#removeCredits) | **POST** /reseller | Remove Email and/or SMS credits from a specific child account
[**getIps**](docs/SendersApi.md#getIps) | **GET** /senders | Return all the dedicated IPs for your account
[**createSender**](docs/SendersApi.md#createSender) | **POST** /senders | Create a new sender
[**updateSender**](docs/SendersApi.md#updateSender) | **PUT** /senders | Update a sender
[**deleteSender**](docs/SendersApi.md#deleteSender) | **DELETE** /senders | Delete a sender
[**getIpsFromSender**](docs/SendersApi.md#getIpsFromSender) | **GET** /senders | Return all the dedicated IPs for a sender
[**getSenders**](docs/SendersApi.md#getSenders) | **GET** /senders | Get the list of all your senders
[**getProcess**](docs/ProcessApi.md#getProcess) | **GET** /processes | Return the informations for a process
[**getProcesses**](docs/ProcessApi.md#getProcesses) | **GET** /processes | Return all the processes for your account
[**getEmailCampaigns**](docs/EmailCampaignsApi.md#getEmailCampaigns) | **GET** /emailCampaigns | Return all your created campaigns
[**getEmailCampaign**](docs/EmailCampaignsApi.md#getEmailCampaign) | **GET** /emailCampaigns | Get campaign informations
[**createEmailCampaign**](docs/EmailCampaignsApi.md#createEmailCampaign) | **POST** /emailCampaigns | Create an email campaign
[**updateEmailCampaign**](docs/EmailCampaignsApi.md#updateEmailCampaign) | **PUT** /emailCampaigns | Update a campaign
[**deleteEmailCampaign**](docs/EmailCampaignsApi.md#deleteEmailCampaign) | **DELETE** /emailCampaigns | Delete an email campaign
[**sendEmailCampaignNow**](docs/EmailCampaignsApi.md#sendEmailCampaignNow) | **POST** /emailCampaigns | Send an email campaign id of the campaign immediately
[**sendTestEmail**](docs/EmailCampaignsApi.md#sendTestEmail) | **POST** /emailCampaigns | Send an email campaign to your test list
[**emailExportRecipients**](docs/EmailCampaignsApi.md#emailExportRecipients) | **POST** /emailCampaigns | Export the recipients of a campaign
[**sendReport**](docs/EmailCampaignsApi.md#sendReport) | **POST** /emailCampaigns | Send the report of a campaigns
[**updateCampaignStatus**](docs/EmailCampaignsApi.md#updateCampaignStatus) | **PUT** /emailCampaigns | Update a campaign status
[**getSmtpReport**](docs/SMTPApi.md#getSmtpReport) | **GET** /smtp | Get your SMTP activity aggregated per day
[**getAggregatedSmtpReport**](docs/SMTPApi.md#getAggregatedSmtpReport) | **GET** /smtp | Get your SMTP activity aggregated over a period of time
[**getEmailEventReport**](docs/SMTPApi.md#getEmailEventReport) | **GET** /smtp | Get all your SMTP activity (unaggregated events)
[**getSmtpTemplates**](docs/SMTPApi.md#getSmtpTemplates) | **GET** /smtp | Get the list of SMTP templates
[**createSmtpTemplate**](docs/SMTPApi.md#createSmtpTemplate) | **POST** /smtp | Create an smtp template
[**getSmtpTemplate**](docs/SMTPApi.md#getSmtpTemplate) | **GET** /smtp | Returns the template informations
[**updateSmtpTemplate**](docs/SMTPApi.md#updateSmtpTemplate) | **PUT** /smtp | Updates an smtp templates
[**deleteSmtpTemplate**](docs/SMTPApi.md#deleteSmtpTemplate) | **DELETE** /smtp | Delete an inactive smtp template
[**sendTestTemplate**](docs/SMTPApi.md#sendTestTemplate) | **POST** /smtp | Send a template to your test list
[**sendTemplate**](docs/SMTPApi.md#sendTemplate) | **POST** /smtp | Send a template
[**sendTransacEmail**](docs/SMTPApi.md#sendTransacEmail) | **POST** /smtp | Send a transactional email
[**deleteHardbounces**](docs/SMTPApi.md#deleteHardbounces) | **POST** /smtp | Delete hardbounces

[**createWebhook**](docs/WebhooksApi.md#createWebhook) | **POST** /webhooks | Create a webhook
[**deleteWebhook**](docs/WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks | Delete a webhook
[**getWebhook**](docs/WebhooksApi.md#getWebhook) | **GET** /webhooks | Get a webhook details
[**getWebhooks**](docs/WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get all webhooks
[**updateWebhook**](docs/WebhooksApi.md#updateWebhook) | **PUT** /webhooks | Update a webhook
[**createAttribute**](docs/AttributesApi.md#createAttribute) | **POST** /contacts | Creates contact attribute
[**deleteAttribute**](docs/AttributesApi.md#deleteAttribute) | **DELETE** /contacts | Deletes an attribute
[**getAttributes**](docs/AttributesApi.md#getAttributes) | **GET** /contacts | Lists all attributes
[**updateAttribute**](docs/AttributesApi.md#updateAttribute) | **PUT** /contacts | Updates contact attribute
[**addContactToList**](docs/ContactsApi.md#addContactToList) | **POST** /contacts | Add existing contacts to a list
[**createAttribute**](docs/ContactsApi.md#createAttribute) | **POST** /contacts | Creates contact attribute
[**createContact**](docs/ContactsApi.md#createContact) | **POST** /contacts | Create a contact
[**createFolder**](docs/ContactsApi.md#createFolder) | **POST** /contacts | Create a folder
[**createList**](docs/ContactsApi.md#createList) | **POST** /contacts | Create a list
[**deleteAttribute**](docs/ContactsApi.md#deleteAttribute) | **DELETE** /contacts | Deletes an attribute
[**deleteContact**](docs/ContactsApi.md#deleteContact) | **DELETE** /contacts | Deletes a contact
[**deleteFolder**](docs/ContactsApi.md#deleteFolder) | **DELETE** /contacts | Delete a folder (and all its lists)
[**deleteList**](docs/ContactsApi.md#deleteList) | **DELETE** /contacts | Delete a list
[**getAttributes**](docs/ContactsApi.md#getAttributes) | **GET** /contacts | Lists all attributes
[**getContactInfo**](docs/ContactsApi.md#getContactInfo) | **GET** /contacts | Retrieves contact informations
[**getContactStats**](docs/ContactsApi.md#getContactStats) | **GET** /contacts | Get the campaigns statistics for a contact
[**getContacts**](docs/ContactsApi.md#getContacts) | **GET** /contacts | Get all the contacts
[**getContactsFromList**](docs/ContactsApi.md#getContactsFromList) | **GET** /contacts | Get the contacts in a list
[**getFolder**](docs/ContactsApi.md#getFolder) | **GET** /contacts | Returns folder details
[**getFolderLists**](docs/ContactsApi.md#getFolderLists) | **GET** /contacts | Get the lists in a folder
[**getFolders**](docs/ContactsApi.md#getFolders) | **GET** /contacts | Get all the folders
[**getList**](docs/ContactsApi.md#getList) | **GET** /contacts | Get the details of a list
[**getLists**](docs/ContactsApi.md#getLists) | **GET** /contacts | Get all the lists
[**importContacts**](docs/ContactsApi.md#importContacts) | **POST** /contacts | Import contacts
[**removeContactFromList**](docs/ContactsApi.md#removeContactFromList) | **POST** /contacts | Remove existing contacts from a list
[**requestContactExport**](docs/ContactsApi.md#requestContactExport) | **POST** /contacts | Export contacts
[**updateAttribute**](docs/ContactsApi.md#updateAttribute) | **PUT** /contacts | Updates contact attribute
[**updateContact**](docs/ContactsApi.md#updateContact) | **PUT** /contacts | Updates a contact
[**updateFolder**](docs/ContactsApi.md#updateFolder) | **PUT** /contacts | Update a contact folder
[**updateList**](docs/ContactsApi.md#updateList) | **PUT** /contacts | Update a list
[**createFolder**](docs/FoldersApi.md#createFolder) | **POST** /contacts | Create a folder
[**deleteFolder**](docs/FoldersApi.md#deleteFolder) | **DELETE** /contacts | Delete a folder (and all its lists)
[**getFolder**](docs/FoldersApi.md#getFolder) | **GET** /contacts | Returns folder details
[**getFolderLists**](docs/FoldersApi.md#getFolderLists) | **GET** /contacts | Get the lists in a folder
[**getFolders**](docs/FoldersApi.md#getFolders) | **GET** /contacts | Get all the folders
[**updateFolder**](docs/FoldersApi.md#updateFolder) | **PUT** /contacts | Update a contact folder
[**addContactToList**](docs/ListsApi.md#addContactToList) | **POST** /contacts | Add existing contacts to a list
[**createList**](docs/ListsApi.md#createList) | **POST** /contacts | Create a list
[**deleteList**](docs/ListsApi.md#deleteList) | **DELETE** /contacts | Delete a list
[**getContactsFromList**](docs/ListsApi.md#getContactsFromList) | **GET** /contacts | Get the contacts in a list
[**getFolderLists**](docs/ListsApi.md#getFolderLists) | **GET** /contacts | Get the lists in a folder
[**getList**](docs/ListsApi.md#getList) | **GET** /contacts | Get the details of a list
[**getLists**](docs/ListsApi.md#getLists) | **GET** /contacts | Get all the lists
[**removeContactFromList**](docs/ListsApi.md#removeContactFromList) | **POST** /contacts | Remove existing contacts from a list
[**updateList**](docs/ListsApi.md#updateList) | **PUT** /contacts | Update a list
[**getSmsEvents**](docs/TransactionalSMSApi.md#getSmsEvents) | **GET** /transactionalSMS | Get all the SMS activity (unaggregated events)
[**getTransacAggregatedSmsReport**](docs/TransactionalSMSApi.md#getTransacAggregatedSmsReport) | **GET** /transactionalSMS | Get your SMS activity aggregated over a period of time
[**getTransacSmsReport**](docs/TransactionalSMSApi.md#getTransacSmsReport) | **GET** /transactionalSMS | Get your SMS activity aggregated per day
[**sendTransacSms**](docs/TransactionalSMSApi.md#sendTransacSms) | **POST** /transactionalSMS | Send the SMS campaign to the specified mobile number
[**createSmsCampaign**](docs/SMSCampaignsApi.md#createSmsCampaign) | **POST** /smsCampaigns | Creates an SMS campaign
[**deleteSmsCampaign**](docs/SMSCampaignsApi.md#deleteSmsCampaign) | **DELETE** /smsCampaigns | Delete the SMS campaign
[**getSmsCampaign**](docs/SMSCampaignsApi.md#getSmsCampaign) | **GET** /smsCampaigns | Get an SMS campaign
[**getSmsCampaigns**](docs/SMSCampaignsApi.md#getSmsCampaigns) | **GET** /smsCampaigns | Returns the informations for all your created SMS campaigns
[**requestSmsRecipientExport**](docs/SMSCampaignsApi.md#requestSmsRecipientExport) | **POST** /smsCampaigns | Exports the recipients of the specified campaign.
[**sendSmsCampaignNow**](docs/SMSCampaignsApi.md#sendSmsCampaignNow) | **POST** /smsCampaigns | Send your SMS campaign immediately
[**sendSmsReport**](docs/SMSCampaignsApi.md#sendSmsReport) | **POST** /smsCampaigns | Send report of SMS campaigns
[**sendTestSms**](docs/SMSCampaignsApi.md#sendTestSms) | **POST** /smsCampaigns | Send an SMS
[**updateSmsCampaign**](docs/SMSCampaignsApi.md#updateSmsCampaign) | **PUT** /smsCampaigns | Updates an SMS campaign
[**updateSmsCampaignStatus**](docs/SMSCampaignsApi.md#updateSmsCampaignStatus) | **PUT** /smsCampaigns | Update the campaign status

## Documentation for Authorization

### api-key

- **Type**: API key
- **API key parameter name**: api-key
- **Location**: HTTP header

## Support and Feedback

Be sure to visit the SendinBlue official [documentation website](https://sendinblue.readme.io/docs) for additional information about the official API.

If you find a bug, please post the issue on [Github](https://github.com/luiscarbonell/sendinblue-v3-node-client/issues).

If you have any questions or comments, feel free to drop us a note [here](mailto:people@liquidcarrot.io).
