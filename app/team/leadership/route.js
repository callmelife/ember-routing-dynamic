import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        name: 'Alex K',
      },
      {
        id: 2,
        name: 'Jon F',
      },
      {
        id: 3,
        name: 'Adam K',
      },
    ];
  }
});
