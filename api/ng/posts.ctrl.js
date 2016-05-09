/* posts.ctrl.js
Angular code for post controller to be funneled via
Gulp into assets
*/

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
