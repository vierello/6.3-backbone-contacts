var $ = require('jquery');
var views = require('./views/contacts');
var ContactCollection = require('./models/contacts').ContactCollection;

var contactCollection = new ContactCollection();

var contactList = new views.ContactList({'collection': contactCollection})
  $('.app').append(contactList.render().el);

var newContactForm = new views.NewContactForm({'collection': contactCollection});
  $('.app').append(newContactForm.render().el);

contactCollection.fetch();
