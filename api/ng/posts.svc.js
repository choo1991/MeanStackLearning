/* posts.svc.js
Angular code for post service. Funnels into assets via Gulp
*/

angular.module('app')
.service('PostsSvc', function ($http) {
	this.fetch = function () {
		return $http.get('/api/posts');
	}
	this.create = function (post) {
		return $http.post('/api/posts/', post);
	}
});
