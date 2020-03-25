exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('business').del()
    .then(function () {
      // Inserts seed entries
      return knex('business').insert([
        {id: 1,
          created_at: new Date(),
          firstName: "Murph",
          lastName: "Grainger",
          email: "murph.grainger@gmail.com",
          description: "The owner Jason is the bomb. These guys started this shop with zero capital and are cutting it close but just starting to ramp up. Come here for the best fricking za ever.",
          challenge: "I will match every $ pledged to this business up to a cap of $1000.",
          businessName: "Cask and Craft",
          businessAddress: "123 South Tejon Street",
          businessPhone: "303-399-3939",
          website: "https://cask-and-craft.com",
          place_id: "fdjkalf;djsakfl;ja;kldfjasl;f",
          instagram:"caskandcraft"
        },
        {id: 2,
          created_at: new Date(),
          firstName: "Kiki",
          lastName: "Grainger",
          email: "kiki.grainger@gmail.com",
          description: "Great coffee shop, great owner, most passionate about his employees and has set up venmo funds each of them.",
          challenge: "I'll give a $3 tip for every bag of coffee delivery logged until they reopen.",
          businessName: "Method Collective",
          businessAddress: "123 South Tejon Street",
          businessPhone: "303-399-3939",
          website: "https://cask-and-craft.com",
          place_id: "fdjkalf;djsakfl;ja;kldfjasl;f",
          instagram:"caskandcraft"
        }
      ]);
    });
};
