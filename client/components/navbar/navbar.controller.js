'use strict';

class NavbarController {
  //start-non-standard


  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $state) {
    this.menu = [
      {
        'title': 'Todas',
        'link': function(){return '/';},
        'show': function(){return true;},
      },
      {
        'title': 'Mías',
        'link': function(){return '/users/' + Auth.getCurrentUser()._id;},
        'show': Auth.isLoggedIn,
      },
      {
        'title': 'Con estrella',
        'link': function(){return '/users/' + Auth.getCurrentUser()._id + '/starred';},
        'show': Auth.isLoggedIn,
      },
    ];
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

    this.search = function(keyword) {
      $state.go('main', {keyword: keyword}, {reload: true});
    };
  }
}

angular.module('paizaqaApp')
  .controller('NavbarController', NavbarController);
