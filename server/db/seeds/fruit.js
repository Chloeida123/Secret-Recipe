exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('foods')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {
          id: 1, name: 'Chicken Katsu', description: 'This is my family recipe for Chicken Katsu - Japanese style fried chicken. Can also be used to make Tonkatsu, just use pork cutlets instead of chicken. Serve with white rice and tonkatsu sauce.'
          , ingredients: '4 skinless, boneless chicken breast halves - pounded to 1/2 inch thickness, salt and pepper to taste, 2 tablespoons all-purpose flour, 1 egg beaten, 1 cup panko bread crumbs, 1 cup oil for frying or as needed',
          directions: 'Season the chicken breasts on both sides with salt and pepper, Place the flour and egg with panko crumbs into separate shallow dishes, Coat the chicken breasts in flour, Shaking off any excess, Dip them into the egg, Press into the panko crumbs until well coated on both sides, Heat 1/4 inch of oil in a large skillet over medium-high heat, Place chicken in the hot oil, Cook 3 or 4 minutes per side or until golden brown.',
          images: 'https://www.allrecipes.com/thmb/AZzudgGflpiylcndOsV3ePqVhYQ=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-2000-1-ed10b562f0a34901b18e8f931f0782ef.jpg'
        }
      ])
    })
}
