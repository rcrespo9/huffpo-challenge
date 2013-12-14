var app = angular.module("myapp", ["firebase", "nvd3ChartDirectives"]);

app.controller('MessagesController', function ($scope, angularFire) { 
	var ref = new Firebase("https://huffpochallenge.firebaseio.com/");
		$scope.messages = [];
		angularFire(ref, $scope, "messages");
		$scope.addMessage = function(e) {
		if (e.keyCode != 13) return;
		$scope.messages.push({from: $scope.name, body: $scope.msg});
		$scope.msg = "";
	};

	$scope.article = {
		title: "The Sand Dunes",
		date: new Date(),

		paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales sapien massa, vel tristique augue sagittis varius. Nam vehicula quis elit dignissim hendrerit. In hac habitasse platea dictumst. In at vestibulum erat. Pellentesque scelerisque diam sit amet lacus gravida, sit amet venenatis tellus sollicitudin. Aliquam metus nisi, convallis quis condimentum quis, ultricies nec risus. Nunc et volutpat sem, quis semper neque. Aenean feugiat purus nec dictum condimentum. Cras nisi ligula, molestie ut elit ut, fermentum tristique turpis. Morbi lacinia diam quis lacus luctus, vitae imperdiet justo consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pellentesque est quis semper mattis. Curabitur pharetra vitae nunc ut ornare.",

		paragraph2: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce non ante tempor, placerat sapien consequat, pretium lorem. Ut placerat adipiscing volutpat. In molestie adipiscing dolor, consectetur volutpat felis vulputate sed. Curabitur porta neque et massa hendrerit tincidunt. Sed laoreet velit eget arcu ultricies, quis consequat nibh fermentum. Aenean ullamcorper tortor vitae orci ornare tincidunt. Fusce eget dui sagittis, auctor metus non, vulputate lacus. Quisque sit amet mi ultrices, dignissim nisi ut, fermentum urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ullamcorper lorem. Proin fermentum nibh nec sapien dignissim fringilla et et purus. Donec pretium eleifend interdum. Cras tortor nisl, sollicitudin a venenatis gravida, ultricies nec nulla. Mauris pulvinar turpis et lectus accumsan consectetur.",

		paragraph3: "Fusce ac tincidunt nibh, ultricies pulvinar nisl. In quam metus, mattis non tincidunt in, pharetra ut mauris. Phasellus aliquam, ligula in convallis faucibus, neque dolor mollis quam, sit amet venenatis massa sapien vel odio. Proin ultrices sapien sed tortor dictum euismod. Nullam varius convallis nisl, quis rutrum sem venenatis vitae. Etiam id arcu et neque convallis dignissim in sed orci. Suspendisse lacinia cursus justo et varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer non semper nibh."
	};

	setTimeout(function() {
		var total = $scope.messages.length;
		$scope.$apply(function() {
			$scope.messagesCount =  {
				"title": "Chat",
				"subtitle": "Away!",
				"ranges": [10, 30, 50],
				"measures": [total],
				"markers": [30]
		    };
	    });
    }, 1000);
});