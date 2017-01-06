import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
      return [
        {
          id: 1,
          name: 'Marshal Mathers',
        },
        {
          id: 2,
          name: 'Al Gore',
        },
        {
          id: 3,
          name: 'Donald Trump',
        },
      ];
    }
});
