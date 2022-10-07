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
        },
        {
          id: 2, name: 'Bakso', description: 'This is the famous everday street food in Indonesia: Bakso. You will find it everywhere in the whole nation !! Once you taste it, you will never get enough!!. In Indonesia Bakso will be eaten anywhere, anyplace, anytime, starting from early morning as breakfast until midnight as a supper soup'
          , ingredients: '500 gr beef, good quality without fat minced, 100 gr tapioca flour or corn starch, 1 pc egg, 3 tbsp fried shallots, 2 gloves garlic, ½ tsp pepper, 1 tsp salt or to taste, 1 tsp sugar or to taste, 150 ml ice water',
          directions: 'Put seasoning ingredients and grind until smooth, Transfer the spice mixture into a large bowl, Add the tapioca flour or corn starch, Mix well with with a wooden spoon, Put the sliced beef & egg into the food processor and blend until smooth, Mix the tapioca mixture and beef paste, Add the remaining ice water and process once again until the dough well mixed,Form one of a meatball let it boil & cook, Taste it and adjust the seasoning accordingly as I explain on the above tips  ',
          images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllTaUaLbFX_upc5YSdZCpwd6ETNZm91vITw&usqp=CAU'
        }
      ])
    })
}
