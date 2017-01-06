import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        name: 'Matt Sommers',
        manufacturer: 'Farberware',
        price: 40
      },
      {
        id: 2,
        name: 'Tupac S',
        manufacturer: 'Cuisinart',
        price: 25
      },
      {
        id: 3,
        name: 'Andre Nickatina',
        manufacturer: 'George Foreman Grills',
        price: 15
      },
    ];
  }
});
