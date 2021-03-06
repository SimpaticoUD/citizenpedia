'use strict';

(function() {

function UserResource($resource) {
  return $resource('/citizenpedia/api/users/:id/:controller', {
    id: '@_id'
  }, {
    changePassword: {
      method: 'PUT',
      params: {
        controller: 'password'
      }
    },
    get: {
      method: 'GET',
      params: {
        id: 'me'
      }
    }
  });
}

angular.module('paizaqaApp.auth')
  .factory('User', UserResource);

})();
