'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data =[
  {
    "name": "Caffè Americanos",
    "price": 38000,
    "imgUrl": "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630",
    "description": "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.",
    "categoryId": 1,
    "authorId": 1
  },
  {
    "name": "Chai Tea Latte",
    "price": 41000,
    "imgUrl": "https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_wide_topcrop_630",
    "description": "Black tea infused with cinnamon, clove and other warming spices is combined with steamed milk and topped with foam for the perfect balance of sweet and spicy. An iconic chai cup.",
    "categoryId": 2,
    "authorId": 1
  },
  {
    "name": "Hot Chocolate",
    "price": 46000,
    "imgUrl": "https://globalassets.starbucks.com/assets/677d276173ec4bc192c2b9a21776339f.jpg?impolicy=1by1_wide_topcrop_630",
    "description": "Steamed milk with chocolate-flavored syrups. Topped with sweetened whipped cream and chocolate-flavored drizzle. A timeless classic made to sweeten your spirits.",
    "categoryId": 3,
    "authorId": 1
  }
]

    data.map(el=>{
      el.createdAt= new Date()
      el.updatedAt= new Date()
    })

    await queryInterface.bulkInsert('Items', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Items', null, {})
  }
};
