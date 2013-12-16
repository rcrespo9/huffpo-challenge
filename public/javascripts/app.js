// router
var app = angular.module('myapp', ['ngRoute']);
 
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      otherwise({redirectTo: '/'});
  }]);


// controller
var app = angular.module("myapp", ["firebase", "nvd3ChartDirectives", "ngRoute"]);

app.controller('MessagesController', function ($scope, $route, angularFire) { 
	var ref = new Firebase("https://huffpochallenge.firebaseio.com/");
		$scope.messages = [];
		angularFire(ref, $scope, "messages");
		$scope.addMessage = function(e) {
			if (e.keyCode != 13) return;
			$scope.messages.push({from: $scope.name, body: $scope.msg});
			$scope.msg = "";
			$scope.loadChart(); //reloads bullet chart
		};


	$scope.article = {
		title: "Of Revenge",
		author: "Sir Francis Bacon (1561-1626)",
		date: new Date(),

		content: "Revenge is a kind of wild justice; which the more man's nature runs to, the more ought law to weed it out. For as for the first wrong, it doth but offend the law; but the revenge of that wrong, putteth the law out of office. Certainly, in taking revenge, a man is but even with his enemy; but in passing it over, he is superior; for it is a prince's part to pardon. And Solomon, I am sure, saith, 'It is the glory of a man, to pass by an offence.' That which is past is gone, and irrevocable; and wise men have enough to do, with things present and to come; therefore they do but trifle with themselves, that labor in past matters. There is no man doth a wrong, for the wrong's sake; but thereby to purchase himself profit, or pleasure, or honor, or the like. Therefore why should I be angry with a man, for loving himself better than me? And if any man should do wrong, merely out of ill-nature, why, yet it is but like the thorn or briar, which prick and scratch, because they can do no other. The most tolerable sort of revenge, is for those wrongs which there is no law to remedy; but then let a man take heed, the revenge be such as there is no law to punish; else a man's enemy is still before hand, and it is two for one. Some, when they take revenge, are desirous, the party should know, whence it cometh. This is the more generous. For the delight seemeth to be, not so much in doing the hurt, as in making the party repent. But base and crafty cowards, are like the arrow that flieth in the dark. Cosmus, duke of Florence, had a desperate saying against perfidious or neglecting friends, as if those wrongs were unpardonable; 'You shall read (saith he) that we are commanded to forgive our enemies; but you never read, that we are commanded to forgive our friends.' But yet the spirit of Job was in a better tune: 'Shall we (saith he) take good at God's hands, and not be content to take evil also?' And so of friends in a proportion. This is certain, that a man that studieth revenge, keeps his own wounds green, which otherwise would heal, and do well. Public revenges are for the most part fortunate; as that for the death of Caesar; for the death of Pertinax; for the death of Henry the Third of France; and many more. But in private revenges, it is not so. Nay rather, vindictive persons live the life of witches; who, as they are mischievous, so end they infortunate."
	};

	// bullet chart model reloads after messages are sent to reflect messageCount change
	$scope.loadChart = function() {
		$route.reload();
		setTimeout(function() {
			total = $scope.messages.length;
			$scope.$apply(function() {
				$scope.messagesCount =  {
					"header": "Live Discourse",
					"title": "Messages",
					"subtitle": "Sent",
					"ranges": [0, total * 5],
					"measures": [total],
					"markers": [0]
			    };
		    });
    	}, 1100);
	};

	// initializing controller and bullet chart
	var init = function () {
		$scope.loadChart();
	};

	init();
});

// custom scrollbar
$('#messagesDiv').mCustomScrollbar({
	theme:"dark"
});