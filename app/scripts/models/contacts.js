var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  defaults: {
    'name': 'Anonymous',
    'email': 'No Email Account',
    'phone': 'No Phone Number',
    'twitter': 'No Twitter Account',
    'linkedin': 'No LinkedIn Account',
    'info': 'No Other Information'
  },
  idAttribute: '_id',
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,

  url: 'https://tiny-lasagna-server.herokuapp.com/collections/andy',

})

module.exports = {
  'Contact': Contact,
  'ContactCollection': ContactCollection
}
