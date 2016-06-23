var Backbone = require('backbone');
var contact = require('../templates/contact.hbs');
var newContactForm = require('../templates/newcontact.hbs');
var $ = require('jquery');

var ContactList = Backbone.View.extend({
  tagName: 'ul',
  className: 'contact-list col-md-8',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderNewContact);
  },

  render: function(){
    return this;
  },

  renderNewContact: function(contactInfo){
    var newContact = new NewContact({'model': contactInfo});
    this.$el.append(newContact.render().el);
  }
})

var NewContactForm = Backbone.View.extend({
  tagName: 'form',
  className: 'new-contact-form col-md-4',
  template: newContactForm,
  events: {
    'submit' : 'addNewContact'
  },

  render: function(){
    this.$el.append(this.template());
    return this;
  },

  addNewContact: function(event){
    event.preventDefault();
    this.collection.create({'name': $('#new-contact-name').val(),'email': $('#new-contact-email').val(),
                    'phone': $('#new-contact-phone').val(), 'twitter': $('#new-contact-twitter').val(),
                    'linkedin': $('#new-contact-linkedin').val(), 'info': $('#new-contact-info').val()});
  }

});

var NewContact = Backbone.View.extend({
  tagName: 'li',
  className: 'new-contact',
  template: contact,
  events: {
    'click .delete-button': 'deleteContact',
    'click .edit-button': 'edit'
  },

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.removeContact);

  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  deleteContact: function(){
    this.model.destroy();
  },

  removeContact: function(){
    this.$el.remove();
  }

});

module.exports = {
  'ContactList': ContactList,
  'NewContactForm': NewContactForm,
}
