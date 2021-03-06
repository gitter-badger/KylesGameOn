Router.setTemplateNameConverter(function (str) { return str; });


Router.configure({
  layoutTemplate: 'layout',
  //loadingTemplate: 'loading',
  //not_foundTemplate: 'not_found',
  //waitOn: function () {
  //  return _.map(Telescope.subscriptions, function(sub){
  //    // can either pass strings or objects with subName and subArguments properties
  //    if (typeof sub === 'object'){
  //      Meteor.subscribe(sub.subName, sub.subArguments);
  //    }else{
  //      Meteor.subscribe(sub);
  //    }
  //  });
  //}
});
App.controllers.index = App.controllers.AppController.extend({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'not_found'
});


App.subsManager = new SubsManager({
  // cache recent 50 subscriptions
  cacheLimit: 50,
  // expire any subscription after 30 minutes
  expireIn: 30
});
