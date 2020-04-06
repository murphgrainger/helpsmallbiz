exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "goal"; ALTER SEQUENCE goal_id_seq RESTART WITH 1;')
    .then(function () {
      // Inserts seed entries
      return knex('goal').insert([
        {
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
          place_id: "ChIJdZJN7Ix4bIcR2qGBGL36KHE",
          instagram:"caskandcraft",
          amountRaised: 0,
          photoUrl: "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAmm9af6hT97tMGSgbMAnoIJPk59oUFrc-_wlKc-EOrJJAY8I7vlGgS6Xilkd-B84McqSQdTpP4g17dk9oQpbToSqZVHuawDBCvFLXqRH_bb_qjYB7465rSP7X1i0n0ZztEhAWTUX1nCNSK3SH_SchjYdBGhS_NDlmwFNF_zRnkDRvjEm1D4IrMg&3u4272&5m1&2e1&callback=none&key=AIzaSyDFw93MLRIha9qQPU_1Lr8GOPOdpAtOhsM&token=65420"
        },
        {
          created_at: new Date(),
          firstName: "Kiki",
          lastName: "Grainger",
          email: "kiki.grainger@gmail.com",
          description: "Great coffee shop, great owner, most passionate about his employees and has set up venmo funds each of them.",
          challenge: "I'll give a $3 tip for every bag of coffee delivery logged until they reopen.",
          businessName: "Method Collective",
          businessAddress: "2011 W 32nd Ave",
          businessPhone: "(303) 993-7027",
          website: "https://www.methodroasters.com",
          place_id: "ChIJpUIayyt5bIcRNzvQfJwPq28",
          instagram:"methodcollective",
          amountRaised: 100.00,
          photoUrl: "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAx3-pPWnOQ5bYuOXu6Q1Z57QO62lJmMki4SCUFYk0NE1guR8JMD0H68vuuyFFTSRrsK8DAOgBLznArqB7vw5ILvN9Embwg3fI0t8jhECzrKQINcvjlijkk3QO5qVQUZtEEhBfR3EeX898gYorB8y3hhNwGhShzulXQMT1J7pEHis06t7dGhF-sg&3u4608&5m1&2e1&callback=none&key=AIzaSyDFw93MLRIha9qQPU_1Lr8GOPOdpAtOhsM&token=117556"
        }
      ]);
    });
};
