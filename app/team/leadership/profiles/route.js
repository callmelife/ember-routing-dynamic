import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    const id = params.profile_id;
    const profiles = [
      {
        id: 1,
        name: 'Matt',
      },
      {
        id: 2,
        name: 'Julia',
      },
      {
        id: 3,
        name: 'Peter Pan the Handy Man',
      },
    ];
    return profiles.find((profile) => profile.id === +id);
  }
});
