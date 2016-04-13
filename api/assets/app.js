var app = angular.module('app', []);

app.controller('PostsCtrl', function ($scope, $http) {
	$http.get('http://localhost:3000/api/posts')
	.success(function (posts) {
		$scope.posts = posts;
	});

	$scope.addPost = function () {
		if ($scope.newBody) {
			$http.post('/api/posts/',  {
				username: 'newPerson',
				body: $scope.newBody
			}).success(function (post) {
				$scope.posts.unshift(post);
				$scope.newBody = null;
			})
		}
	}
});
