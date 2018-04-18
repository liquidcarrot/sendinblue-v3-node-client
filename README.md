# sendinblue-v3-node-client

Unofficial SendinBlue V3 API Node.js Client

sendinblue-v3-node-client exposes the entire SendinBlue features via a standardized programmatic interface. Please refer to the full [documentation](https://developers.sendinblue.com) to learn more about official documentation.

This is the wrapper for the API. It implements all the features of the API v3. It supports promises.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://npmjs.org/doc/).

Then install it via:

```shell
npm install sendinblue-v3-node-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your sendinblue-v3-node-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('sendinblue-v3-node-client')` in javascript files from the directory you ran the last
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/luiscarbonell/sendinblue-v3-node-client
then install it via:

```shell
    npm install sendinblue/APIv3-nodejs-library --save
```

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SibApiV3Sdk = require('sendinblue-v3-node-client');

var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['api-key'] = "Token"

var api = new SibApiV3Sdk.AccountApi()
api.getAccount().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts.get**](https://developers.sendinblue.com/v3.0/reference#getaccount-7) | **GET** /account | Get your account informations, plans and credits details
[**createAttribute**](docs/AttributesApi.md#createAttribute) | **POST** /contacts/attributes/{attributeCategory}/{attributeName} | Creates contact attribute
[**deleteAttribute**](docs/AttributesApi.md#deleteAttribute) | **DELETE** /contacts/attributes/{attributeCategory}/{attributeName} | Deletes an attribute
[**getAttributes**](docs/AttributesApi.md#getAttributes) | **GET** /contacts/attributes | Lists all attributes
[**updateAttribute**](docs/AttributesApi.md#updateAttribute) | **PUT** /contacts/attributes/{attributeCategory}/{attributeName} | Updates contact attribute
[**addContactToList**](docs/ContactsApi.md#addContactToList) | **POST** /contacts/lists/{listId}/contacts/add | Add existing contacts to a list
[**createAttribute**](docs/ContactsApi.md#createAttribute) | **POST** /contacts/attributes/{attributeCategory}/{attributeName} | Creates contact attribute
[**createContact**](docs/ContactsApi.md#createContact) | **POST** /contacts | Create a contact
[**createFolder**](docs/ContactsApi.md#createFolder) | **POST** /contacts/folders | Create a folder
[**createList**](docs/ContactsApi.md#createList) | **POST** /contacts/lists | Create a list
[**deleteAttribute**](docs/ContactsApi.md#deleteAttribute) | **DELETE** /contacts/attributes/{attributeCategory}/{attributeName} | Deletes an attribute
[**deleteContact**](docs/ContactsApi.md#deleteContact) | **DELETE** /contacts/{email} | Deletes a contact
[**deleteFolder**](docs/ContactsApi.md#deleteFolder) | **DELETE** /contacts/folders/{folderId} | Delete a folder (and all its lists)
[**deleteList**](docs/ContactsApi.md#deleteList) | **DELETE** /contacts/lists/{listId} | Delete a list
[**getAttributes**](docs/ContactsApi.md#getAttributes) | **GET** /contacts/attributes | Lists all attributes
[**getContactInfo**](docs/ContactsApi.md#getContactInfo) | **GET** /contacts/{email} | Retrieves contact informations
[**getContactStats**](docs/ContactsApi.md#getContactStats) | **GET** /contacts/{email}/campaignStats | Get the campaigns statistics for a contact
[**getContacts**](docs/ContactsApi.md#getContacts) | **GET** /contacts | Get all the contacts
[**getContactsFromList**](docs/ContactsApi.md#getContactsFromList) | **GET** /contacts/lists/{listId}/contacts | Get the contacts in a list
[**getFolder**](docs/ContactsApi.md#getFolder) | **GET** /contacts/folders/{folderId} | Returns folder details
[**getFolderLists**](docs/ContactsApi.md#getFolderLists) | **GET** /contacts/folders/{folderId}/lists | Get the lists in a folder
[**getFolders**](docs/ContactsApi.md#getFolders) | **GET** /contacts/folders | Get all the folders
[**getList**](docs/ContactsApi.md#getList) | **GET** /contacts/lists/{listId} | Get the details of a list
[**getLists**](docs/ContactsApi.md#getLists) | **GET** /contacts/lists | Get all the lists
[**importContacts**](docs/ContactsApi.md#importContacts) | **POST** /contacts/import | Import contacts
[**removeContactFromList**](docs/ContactsApi.md#removeContactFromList) | **POST** /contacts/lists/{listId}/contacts/remove | Remove existing contacts from a list
[**requestContactExport**](docs/ContactsApi.md#requestContactExport) | **POST** /contacts/export | Export contacts
[**updateAttribute**](docs/ContactsApi.md#updateAttribute) | **PUT** /contacts/attributes/{attributeCategory}/{attributeName} | Updates contact attribute
[**updateContact**](docs/ContactsApi.md#updateContact) | **PUT** /contacts/{email} | Updates a contact
[**updateFolder**](docs/ContactsApi.md#updateFolder) | **PUT** /contacts/folders/{folderId} | Update a contact folder
[**updateList**](docs/ContactsApi.md#updateList) | **PUT** /contacts/lists/{listId} | Update a list
[**createEmailCampaign**](docs/EmailCampaignsApi.md#createEmailCampaign) | **POST** /emailCampaigns | Create an email campaign
[**deleteEmailCampaign**](docs/EmailCampaignsApi.md#deleteEmailCampaign) | **DELETE** /emailCampaigns/{campaignId} | Delete an email campaign
[**emailExportRecipients**](docs/EmailCampaignsApi.md#emailExportRecipients) | **POST** /emailCampaigns/{campaignId}/exportRecipients | Export the recipients of a campaign
[**getEmailCampaign**](docs/EmailCampaignsApi.md#getEmailCampaign) | **GET** /emailCampaigns/{campaignId} | Get campaign informations
[**getEmailCampaigns**](docs/EmailCampaignsApi.md#getEmailCampaigns) | **GET** /emailCampaigns | Return all your created campaigns
[**sendEmailCampaignNow**](docs/EmailCampaignsApi.md#sendEmailCampaignNow) | **POST** /emailCampaigns/{campaignId}/sendNow | Send an email campaign id of the campaign immediately
[**sendReport**](docs/EmailCampaignsApi.md#sendReport) | **POST** /emailCampaigns/{campaignId}/sendReport | Send the report of a campaigns
[**sendTestEmail**](docs/EmailCampaignsApi.md#sendTestEmail) | **POST** /emailCampaigns/{campaignId}/sendTest | Send an email campaign to your test list
[**updateCampaignStatus**](docs/EmailCampaignsApi.md#updateCampaignStatus) | **PUT** /emailCampaigns/{campaignId}/status | Update a campaign status
[**updateEmailCampaign**](docs/EmailCampaignsApi.md#updateEmailCampaign) | **PUT** /emailCampaigns/{campaignId} | Update a campaign
[**createFolder**](docs/FoldersApi.md#createFolder) | **POST** /contacts/folders | Create a folder
[**deleteFolder**](docs/FoldersApi.md#deleteFolder) | **DELETE** /contacts/folders/{folderId} | Delete a folder (and all its lists)
[**getFolder**](docs/FoldersApi.md#getFolder) | **GET** /contacts/folders/{folderId} | Returns folder details
[**getFolderLists**](docs/FoldersApi.md#getFolderLists) | **GET** /contacts/folders/{folderId}/lists | Get the lists in a folder
[**getFolders**](docs/FoldersApi.md#getFolders) | **GET** /contacts/folders | Get all the folders
[**updateFolder**](docs/FoldersApi.md#updateFolder) | **PUT** /contacts/folders/{folderId} | Update a contact folder
[**addContactToList**](docs/ListsApi.md#addContactToList) | **POST** /contacts/lists/{listId}/contacts/add | Add existing contacts to a list
[**createList**](docs/ListsApi.md#createList) | **POST** /contacts/lists | Create a list
[**deleteList**](docs/ListsApi.md#deleteList) | **DELETE** /contacts/lists/{listId} | Delete a list
[**getContactsFromList**](docs/ListsApi.md#getContactsFromList) | **GET** /contacts/lists/{listId}/contacts | Get the contacts in a list
[**getFolderLists**](docs/ListsApi.md#getFolderLists) | **GET** /contacts/folders/{folderId}/lists | Get the lists in a folder
[**getList**](docs/ListsApi.md#getList) | **GET** /contacts/lists/{listId} | Get the details of a list
[**getLists**](docs/ListsApi.md#getLists) | **GET** /contacts/lists | Get all the lists
[**removeContactFromList**](docs/ListsApi.md#removeContactFromList) | **POST** /contacts/lists/{listId}/contacts/remove | Remove existing contacts from a list
[**updateList**](docs/ListsApi.md#updateList) | **PUT** /contacts/lists/{listId} | Update a list
[**getProcess**](docs/ProcessApi.md#getProcess) | **GET** /processes/{processId} | Return the informations for a process
[**getProcesses**](docs/ProcessApi.md#getProcesses) | **GET** /processes | Return all the processes for your account
[**addCredits**](docs/ResellerApi.md#addCredits) | **POST** /reseller/children/{childAuthKey}/credits/add | Add Email and/or SMS credits to a specific child account
[**associateIpToChild**](docs/ResellerApi.md#associateIpToChild) | **POST** /reseller/children/{childAuthKey}/ips/associate | Associate a dedicated IP to the child
[**createResellerChild**](docs/ResellerApi.md#createResellerChild) | **POST** /reseller/children | Creates a reseller child
[**deleteResellerChild**](docs/ResellerApi.md#deleteResellerChild) | **DELETE** /reseller/children/{childAuthKey} | Deletes a single reseller child based on the childAuthKey supplied
[**dissociateIpFromChild**](docs/ResellerApi.md#dissociateIpFromChild) | **POST** /reseller/children/{childAuthKey}/ips/dissociate | Dissociate a dedicated IP to the child
[**getChildInfo**](docs/ResellerApi.md#getChildInfo) | **GET** /reseller/children/{childAuthKey} | Gets the info about a specific child account
[**getResellerChilds**](docs/ResellerApi.md#getResellerChilds) | **GET** /reseller/children | Gets the list of all reseller&#39;s children accounts
[**removeCredits**](docs/ResellerApi.md#removeCredits) | **POST** /reseller/children/{childAuthKey}/credits/remove | Remove Email and/or SMS credits from a specific child account
[**updateResellerChild**](docs/ResellerApi.md#updateResellerChild) | **PUT** /reseller/children/{childAuthKey} | Updates infos of reseller&#39;s child based on the childAuthKey supplied
[**createSmsCampaign**](docs/SMSCampaignsApi.md#createSmsCampaign) | **POST** /smsCampaigns | Creates an SMS campaign
[**deleteSmsCampaign**](docs/SMSCampaignsApi.md#deleteSmsCampaign) | **DELETE** /smsCampaigns/{campaignId} | Delete the SMS campaign
[**getSmsCampaign**](docs/SMSCampaignsApi.md#getSmsCampaign) | **GET** /smsCampaigns/{campaignId} | Get an SMS campaign
[**getSmsCampaigns**](docs/SMSCampaignsApi.md#getSmsCampaigns) | **GET** /smsCampaigns | Returns the informations for all your created SMS campaigns
[**requestSmsRecipientExport**](docs/SMSCampaignsApi.md#requestSmsRecipientExport) | **POST** /smsCampaigns/{campaignId}/exportRecipients | Exports the recipients of the specified campaign.
[**sendSmsCampaignNow**](docs/SMSCampaignsApi.md#sendSmsCampaignNow) | **POST** /smsCampaigns/{campaignId}/sendNow | Send your SMS campaign immediately
[**sendSmsReport**](docs/SMSCampaignsApi.md#sendSmsReport) | **POST** /smsCampaigns/{campaignId}/sendReport | Send report of SMS campaigns
[**sendTestSms**](docs/SMSCampaignsApi.md#sendTestSms) | **POST** /smsCampaigns/{campaignId}/sendTest | Send an SMS
[**updateSmsCampaign**](docs/SMSCampaignsApi.md#updateSmsCampaign) | **PUT** /smsCampaigns/{campaignId} | Updates an SMS campaign
[**updateSmsCampaignStatus**](docs/SMSCampaignsApi.md#updateSmsCampaignStatus) | **PUT** /smsCampaigns/{campaignId}/status | Update the campaign status
[**createSmtpTemplate**](docs/SMTPApi.md#createSmtpTemplate) | **POST** /smtp/templates | Create an smtp template
[**deleteHardbounces**](docs/SMTPApi.md#deleteHardbounces) | **POST** /smtp/deleteHardbounces | Delete hardbounces
[**deleteSmtpTemplate**](docs/SMTPApi.md#deleteSmtpTemplate) | **DELETE** /smtp/templates/{templateId} | Delete an inactive smtp template
[**getAggregatedSmtpReport**](docs/SMTPApi.md#getAggregatedSmtpReport) | **GET** /smtp/statistics/aggregatedReport | Get your SMTP activity aggregated over a period of time
[**getEmailEventReport**](docs/SMTPApi.md#getEmailEventReport) | **GET** /smtp/statistics/events | Get all your SMTP activity (unaggregated events)
[**getSmtpReport**](docs/SMTPApi.md#getSmtpReport) | **GET** /smtp/statistics/reports | Get your SMTP activity aggregated per day
[**getSmtpTemplate**](docs/SMTPApi.md#getSmtpTemplate) | **GET** /smtp/templates/{templateId} | Returns the template informations
[**getSmtpTemplates**](docs/SMTPApi.md#getSmtpTemplates) | **GET** /smtp/templates | Get the list of SMTP templates
[**sendTemplate**](docs/SMTPApi.md#sendTemplate) | **POST** /smtp/templates/{templateId}/send | Send a template
[**sendTestTemplate**](docs/SMTPApi.md#sendTestTemplate) | **POST** /smtp/templates/{templateId}/sendTest | Send a template to your test list
[**sendTransacEmail**](docs/SMTPApi.md#sendTransacEmail) | **POST** /smtp/email | Send a transactional email
[**updateSmtpTemplate**](docs/SMTPApi.md#updateSmtpTemplate) | **PUT** /smtp/templates/{templateId} | Updates an smtp templates
[**createSender**](docs/SendersApi.md#createSender) | **POST** /senders | Create a new sender
[**deleteSender**](docs/SendersApi.md#deleteSender) | **DELETE** /senders/{senderId} | Delete a sender
[**getIps**](docs/SendersApi.md#getIps) | **GET** /senders/ips | Return all the dedicated IPs for your account
[**getIpsFromSender**](docs/SendersApi.md#getIpsFromSender) | **GET** /senders/{senderId}/ips | Return all the dedicated IPs for a sender
[**getSenders**](docs/SendersApi.md#getSenders) | **GET** /senders | Get the list of all your senders
[**updateSender**](docs/SendersApi.md#updateSender) | **PUT** /senders/{senderId} | Update a sender
[**getSmsEvents**](docs/TransactionalSMSApi.md#getSmsEvents) | **GET** /transactionalSMS/statistics/events | Get all the SMS activity (unaggregated events)
[**getTransacAggregatedSmsReport**](docs/TransactionalSMSApi.md#getTransacAggregatedSmsReport) | **GET** /transactionalSMS/statistics/aggregatedReport | Get your SMS activity aggregated over a period of time
[**getTransacSmsReport**](docs/TransactionalSMSApi.md#getTransacSmsReport) | **GET** /transactionalSMS/statistics/reports | Get your SMS activity aggregated per day
[**sendTransacSms**](docs/TransactionalSMSApi.md#sendTransacSms) | **POST** /transactionalSMS/sms | Send the SMS campaign to the specified mobile number
[**createWebhook**](docs/WebhooksApi.md#createWebhook) | **POST** /webhooks | Create a webhook
[**deleteWebhook**](docs/WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{webhookId} | Delete a webhook
[**getWebhook**](docs/WebhooksApi.md#getWebhook) | **GET** /webhooks/{webhookId} | Get a webhook details
[**getWebhooks**](docs/WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get all webhooks
[**updateWebhook**](docs/WebhooksApi.md#updateWebhook) | **PUT** /webhooks/{webhookId} | Update a webhook


## Documentation for Models

 - [SibApiV3Sdk.AddContactToList](docs/AddContactToList.md)
 - [SibApiV3Sdk.AddCredits](docs/AddCredits.md)
 - [SibApiV3Sdk.CreateAttribute](docs/CreateAttribute.md)
 - [SibApiV3Sdk.CreateAttributeEnumeration](docs/CreateAttributeEnumeration.md)
 - [SibApiV3Sdk.CreateChild](docs/CreateChild.md)
 - [SibApiV3Sdk.CreateContact](docs/CreateContact.md)
 - [SibApiV3Sdk.CreateEmailCampaign](docs/CreateEmailCampaign.md)
 - [SibApiV3Sdk.CreateEmailCampaignRecipients](docs/CreateEmailCampaignRecipients.md)
 - [SibApiV3Sdk.CreateEmailCampaignSender](docs/CreateEmailCampaignSender.md)
 - [SibApiV3Sdk.CreateList](docs/CreateList.md)
 - [SibApiV3Sdk.CreateModel](docs/CreateModel.md)
 - [SibApiV3Sdk.CreateReseller](docs/CreateReseller.md)
 - [SibApiV3Sdk.CreateSender](docs/CreateSender.md)
 - [SibApiV3Sdk.CreateSenderIps](docs/CreateSenderIps.md)
 - [SibApiV3Sdk.CreateSenderModel](docs/CreateSenderModel.md)
 - [SibApiV3Sdk.CreateSmsCampaign](docs/CreateSmsCampaign.md)
 - [SibApiV3Sdk.CreateSmsCampaignRecipients](docs/CreateSmsCampaignRecipients.md)
 - [SibApiV3Sdk.CreateSmtpEmail](docs/CreateSmtpEmail.md)
 - [SibApiV3Sdk.CreateSmtpTemplate](docs/CreateSmtpTemplate.md)
 - [SibApiV3Sdk.CreateSmtpTemplateSender](docs/CreateSmtpTemplateSender.md)
 - [SibApiV3Sdk.CreateUpdateFolder](docs/CreateUpdateFolder.md)
 - [SibApiV3Sdk.CreateWebhook](docs/CreateWebhook.md)
 - [SibApiV3Sdk.CreatedProcessId](docs/CreatedProcessId.md)
 - [SibApiV3Sdk.DeleteHardbounces](docs/DeleteHardbounces.md)
 - [SibApiV3Sdk.EmailExportRecipients](docs/EmailExportRecipients.md)
 - [SibApiV3Sdk.ErrorModel](docs/ErrorModel.md)
 - [SibApiV3Sdk.GetAccountMarketingAutomation](docs/GetAccountMarketingAutomation.md)
 - [SibApiV3Sdk.GetAccountPlan](docs/GetAccountPlan.md)
 - [SibApiV3Sdk.GetAccountRelay](docs/GetAccountRelay.md)
 - [SibApiV3Sdk.GetAccountRelayData](docs/GetAccountRelayData.md)
 - [SibApiV3Sdk.GetAggregatedReport](docs/GetAggregatedReport.md)
 - [SibApiV3Sdk.GetAttributes](docs/GetAttributes.md)
 - [SibApiV3Sdk.GetAttributesAttributes](docs/GetAttributesAttributes.md)
 - [SibApiV3Sdk.GetAttributesEnumeration](docs/GetAttributesEnumeration.md)
 - [SibApiV3Sdk.GetCampaignOverview](docs/GetCampaignOverview.md)
 - [SibApiV3Sdk.GetCampaignRecipients](docs/GetCampaignRecipients.md)
 - [SibApiV3Sdk.GetCampaignStats](docs/GetCampaignStats.md)
 - [SibApiV3Sdk.GetChildInfoApiKeys](docs/GetChildInfoApiKeys.md)
 - [SibApiV3Sdk.GetChildInfoApiKeysV2](docs/GetChildInfoApiKeysV2.md)
 - [SibApiV3Sdk.GetChildInfoApiKeysV3](docs/GetChildInfoApiKeysV3.md)
 - [SibApiV3Sdk.GetChildInfoCredits](docs/GetChildInfoCredits.md)
 - [SibApiV3Sdk.GetChildInfoStatistics](docs/GetChildInfoStatistics.md)
 - [SibApiV3Sdk.GetChildrenList](docs/GetChildrenList.md)
 - [SibApiV3Sdk.GetClient](docs/GetClient.md)
 - [SibApiV3Sdk.GetContactCampaignStats](docs/GetContactCampaignStats.md)
 - [SibApiV3Sdk.GetContactCampaignStatsClicked](docs/GetContactCampaignStatsClicked.md)
 - [SibApiV3Sdk.GetContactCampaignStatsOpened](docs/GetContactCampaignStatsOpened.md)
 - [SibApiV3Sdk.GetContactCampaignStatsTransacAttributes](docs/GetContactCampaignStatsTransacAttributes.md)
 - [SibApiV3Sdk.GetContactCampaignStatsUnsubscriptions](docs/GetContactCampaignStatsUnsubscriptions.md)
 - [SibApiV3Sdk.GetContactDetails](docs/GetContactDetails.md)
 - [SibApiV3Sdk.GetContacts](docs/GetContacts.md)
 - [SibApiV3Sdk.GetEmailCampaigns](docs/GetEmailCampaigns.md)
 - [SibApiV3Sdk.GetEmailEventReport](docs/GetEmailEventReport.md)
 - [SibApiV3Sdk.GetEmailEventReportEvents](docs/GetEmailEventReportEvents.md)
 - [SibApiV3Sdk.GetExtendedCampaignOverviewSender](docs/GetExtendedCampaignOverviewSender.md)
 - [SibApiV3Sdk.GetExtendedCampaignStats](docs/GetExtendedCampaignStats.md)
 - [SibApiV3Sdk.GetExtendedCampaignStatsLinksStats](docs/GetExtendedCampaignStatsLinksStats.md)
 - [SibApiV3Sdk.GetExtendedClientAddress](docs/GetExtendedClientAddress.md)
 - [SibApiV3Sdk.GetExtendedContactDetailsStatistics](docs/GetExtendedContactDetailsStatistics.md)
 - [SibApiV3Sdk.GetExtendedContactDetailsStatisticsClicked](docs/GetExtendedContactDetailsStatisticsClicked.md)
 - [SibApiV3Sdk.GetExtendedContactDetailsStatisticsLinks](docs/GetExtendedContactDetailsStatisticsLinks.md)
 - [SibApiV3Sdk.GetExtendedContactDetailsStatisticsMessagesSent](docs/GetExtendedContactDetailsStatisticsMessagesSent.md)
 - [SibApiV3Sdk.GetExtendedContactDetailsStatisticsOpened](docs/GetExtendedContactDetailsStatisticsOpened.md)
 - [SibApiV3Sdk.GetExtendedContactDetailsStatisticsUnsubscriptions](docs/GetExtendedContactDetailsStatisticsUnsubscriptions.md)
 - [SibApiV3Sdk.GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription](docs/GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription.md)
 - [SibApiV3Sdk.GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription](docs/GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription.md)
 - [SibApiV3Sdk.GetExtendedListCampaignStats](docs/GetExtendedListCampaignStats.md)
 - [SibApiV3Sdk.GetFolder](docs/GetFolder.md)
 - [SibApiV3Sdk.GetFolderLists](docs/GetFolderLists.md)
 - [SibApiV3Sdk.GetFolders](docs/GetFolders.md)
 - [SibApiV3Sdk.GetIp](docs/GetIp.md)
 - [SibApiV3Sdk.GetIpFromSender](docs/GetIpFromSender.md)
 - [SibApiV3Sdk.GetIps](docs/GetIps.md)
 - [SibApiV3Sdk.GetIpsFromSender](docs/GetIpsFromSender.md)
 - [SibApiV3Sdk.GetList](docs/GetList.md)
 - [SibApiV3Sdk.GetLists](docs/GetLists.md)
 - [SibApiV3Sdk.GetProcess](docs/GetProcess.md)
 - [SibApiV3Sdk.GetProcesses](docs/GetProcesses.md)
 - [SibApiV3Sdk.GetReports](docs/GetReports.md)
 - [SibApiV3Sdk.GetReportsReports](docs/GetReportsReports.md)
 - [SibApiV3Sdk.GetSendersList](docs/GetSendersList.md)
 - [SibApiV3Sdk.GetSendersListIps](docs/GetSendersListIps.md)
 - [SibApiV3Sdk.GetSendersListSenders](docs/GetSendersListSenders.md)
 - [SibApiV3Sdk.GetSmsCampaignOverview](docs/GetSmsCampaignOverview.md)
 - [SibApiV3Sdk.GetSmsCampaignStats](docs/GetSmsCampaignStats.md)
 - [SibApiV3Sdk.GetSmsCampaigns](docs/GetSmsCampaigns.md)
 - [SibApiV3Sdk.GetSmsEventReport](docs/GetSmsEventReport.md)
 - [SibApiV3Sdk.GetSmsEventReportEvents](docs/GetSmsEventReportEvents.md)
 - [SibApiV3Sdk.GetSmtpTemplateOverview](docs/GetSmtpTemplateOverview.md)
 - [SibApiV3Sdk.GetSmtpTemplateOverviewSender](docs/GetSmtpTemplateOverviewSender.md)
 - [SibApiV3Sdk.GetSmtpTemplates](docs/GetSmtpTemplates.md)
 - [SibApiV3Sdk.GetStatsByDomain](docs/GetStatsByDomain.md)
 - [SibApiV3Sdk.GetTransacAggregatedSmsReport](docs/GetTransacAggregatedSmsReport.md)
 - [SibApiV3Sdk.GetTransacSmsReport](docs/GetTransacSmsReport.md)
 - [SibApiV3Sdk.GetTransacSmsReportReports](docs/GetTransacSmsReportReports.md)
 - [SibApiV3Sdk.GetWebhook](docs/GetWebhook.md)
 - [SibApiV3Sdk.GetWebhooks](docs/GetWebhooks.md)
 - [SibApiV3Sdk.ManageIp](docs/ManageIp.md)
 - [SibApiV3Sdk.PostContactInfo](docs/PostContactInfo.md)
 - [SibApiV3Sdk.PostContactInfoContacts](docs/PostContactInfoContacts.md)
 - [SibApiV3Sdk.PostSendFailed](docs/PostSendFailed.md)
 - [SibApiV3Sdk.PostSendSmsTestFailed](docs/PostSendSmsTestFailed.md)
 - [SibApiV3Sdk.RemainingCreditModel](docs/RemainingCreditModel.md)
 - [SibApiV3Sdk.RemainingCreditModelChild](docs/RemainingCreditModelChild.md)
 - [SibApiV3Sdk.RemainingCreditModelReseller](docs/RemainingCreditModelReseller.md)
 - [SibApiV3Sdk.RemoveContactFromList](docs/RemoveContactFromList.md)
 - [SibApiV3Sdk.RemoveCredits](docs/RemoveCredits.md)
 - [SibApiV3Sdk.RequestContactExport](docs/RequestContactExport.md)
 - [SibApiV3Sdk.RequestContactImport](docs/RequestContactImport.md)
 - [SibApiV3Sdk.RequestContactImportNewList](docs/RequestContactImportNewList.md)
 - [SibApiV3Sdk.RequestSmsRecipientExport](docs/RequestSmsRecipientExport.md)
 - [SibApiV3Sdk.SendEmail](docs/SendEmail.md)
 - [SibApiV3Sdk.SendEmailAttachment](docs/SendEmailAttachment.md)
 - [SibApiV3Sdk.SendReport](docs/SendReport.md)
 - [SibApiV3Sdk.SendReportEmail](docs/SendReportEmail.md)
 - [SibApiV3Sdk.SendSms](docs/SendSms.md)
 - [SibApiV3Sdk.SendSmtpEmail](docs/SendSmtpEmail.md)
 - [SibApiV3Sdk.SendSmtpEmailAttachment](docs/SendSmtpEmailAttachment.md)
 - [SibApiV3Sdk.SendSmtpEmailBcc](docs/SendSmtpEmailBcc.md)
 - [SibApiV3Sdk.SendSmtpEmailCc](docs/SendSmtpEmailCc.md)
 - [SibApiV3Sdk.SendSmtpEmailReplyTo](docs/SendSmtpEmailReplyTo.md)
 - [SibApiV3Sdk.SendSmtpEmailSender](docs/SendSmtpEmailSender.md)
 - [SibApiV3Sdk.SendSmtpEmailTo](docs/SendSmtpEmailTo.md)
 - [SibApiV3Sdk.SendTemplateEmail](docs/SendTemplateEmail.md)
 - [SibApiV3Sdk.SendTestEmail](docs/SendTestEmail.md)
 - [SibApiV3Sdk.SendTestSms](docs/SendTestSms.md)
 - [SibApiV3Sdk.SendTransacSms](docs/SendTransacSms.md)
 - [SibApiV3Sdk.UpdateAttribute](docs/UpdateAttribute.md)
 - [SibApiV3Sdk.UpdateAttributeEnumeration](docs/UpdateAttributeEnumeration.md)
 - [SibApiV3Sdk.UpdateCampaignStatus](docs/UpdateCampaignStatus.md)
 - [SibApiV3Sdk.UpdateChild](docs/UpdateChild.md)
 - [SibApiV3Sdk.UpdateContact](docs/UpdateContact.md)
 - [SibApiV3Sdk.UpdateEmailCampaign](docs/UpdateEmailCampaign.md)
 - [SibApiV3Sdk.UpdateEmailCampaignRecipients](docs/UpdateEmailCampaignRecipients.md)
 - [SibApiV3Sdk.UpdateEmailCampaignSender](docs/UpdateEmailCampaignSender.md)
 - [SibApiV3Sdk.UpdateList](docs/UpdateList.md)
 - [SibApiV3Sdk.UpdateSender](docs/UpdateSender.md)
 - [SibApiV3Sdk.UpdateSmsCampaign](docs/UpdateSmsCampaign.md)
 - [SibApiV3Sdk.UpdateSmtpTemplate](docs/UpdateSmtpTemplate.md)
 - [SibApiV3Sdk.UpdateSmtpTemplateSender](docs/UpdateSmtpTemplateSender.md)
 - [SibApiV3Sdk.UpdateWebhook](docs/UpdateWebhook.md)
 - [SibApiV3Sdk.GetChildInfo](docs/GetChildInfo.md)
 - [SibApiV3Sdk.GetExtendedCampaignOverview](docs/GetExtendedCampaignOverview.md)
 - [SibApiV3Sdk.GetExtendedClient](docs/GetExtendedClient.md)
 - [SibApiV3Sdk.GetExtendedContactDetails](docs/GetExtendedContactDetails.md)
 - [SibApiV3Sdk.GetExtendedList](docs/GetExtendedList.md)
 - [SibApiV3Sdk.GetSmsCampaign](docs/GetSmsCampaign.md)
 - [SibApiV3Sdk.GetAccount](docs/GetAccount.md)
 - [SibApiV3Sdk.GetEmailCampaign](docs/GetEmailCampaign.md)


## Documentation for Authorization

### api-key

- **Type**: API key
- **API key parameter name**: api-key
- **Location**: HTTP header

## Support and Feedback

Be sure to visit the SendinBlue official [documentation website](https://sendinblue.readme.io/docs) for additional information about their API.

If you find a bug, please post the issue on [Github](https://github.com/luiscarbonell/sendinblue-v3-node-client/issues).

As always, if you need additional assistance, drop SendinBlue a note [here](https://account.sendinblue.com/support).