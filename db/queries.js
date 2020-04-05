const knex = require('./knex');

module.exports = {
  addNewGoal: function(b) {
    return knex('goal').insert({
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
      website: b.website,
      photoUrl: b.photoUrl
    })
  },

  getAllGoals: function() {
    return knex('goal')
    .select('*')
  },

  addSupport: function(id, data) {
    return knex('pledge').insert({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      description: data.description,
      amount: Number(data.amount),
      type: data.type,
      instagram: data.instagram,
      anonymous: data.anonymous,
      goal_id: id
    })
  },

  updateGoalAmount: function(id, amount) {
    return knex('goal').select('amountRaised').where('id',id).first()
    .then(oldAmount => {
      const newTotal = parseFloat(amount) + parseFloat(oldAmount.amountRaised);
      return knex('goal').update({
        amountRaised: newTotal
      }).where('id',id)
    })
  },

  getGoalPledges: function(id) {
    return knex('pledge')
      .select('*')
      .where('goal_id', id)
  }
};
