const knex = require('./knex');

module.exports = {
  addNewBusiness: function(b) {
    return knex('business').insert({
      firstName: b.firstName,
      lastName: b.lastName,
      email: b.email,
      description: b.description,
      challenge: b.challenge,
      businessName: b.businessName,
      place_id: b.place_id,
      instagram: b.instagram,
      businessAddress: b.businessAddress,
      businessPhone: b.businessPhone,
      website: b.website
    })
  },

  getAllBusinesses: function() {
    return knex('business').select('*');
  }
};
