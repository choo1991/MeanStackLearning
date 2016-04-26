var app = angular.module('app', []);

app.controller('PostsCtrl', function ($scope, PostsSvc) {
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

app.service('PostsSvc', function ($http) {
	this.fetch = function () {
		return $http.get('/api/posts');
	}
	this.create = function (post) {
		return $http.post('/api/posts/', post);
	}
});
