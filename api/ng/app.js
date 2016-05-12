/* app.js
Angular code backing up the posts page.
*/

//var app = angular.module('app', []);

angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc) {
	PostsSvc.fetch().success(function (posts) {
		$scope.posts = posts;
	});

	$scope.addPost = function () {
		if ($scope.newBody) {
			PostsSvc.create({
				username: 'UserOne',
				body: $scope.newBody
			}).success(function (post) {
				$scope.posts.unshift(post);
				$scope.newBody = null;
			});
		}
	}
});

angular.module('app')
.service('PostsSvc', function ($http) {
	this.fetch = function () {
		return $http.get('/api/posts');
	}
	this.create = function (post) {
		return $http.post('/api/posts/', post);
	}
});
