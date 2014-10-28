// angular.module('AngularRails', [
//         'ngRoute',
//         'templates'
//     ]).config(function ($routeProvider, $locationProvider) {

//         $routeProvider
//             .when('/', {
//                 templateUrl: 'home.html',
//                 controller: 'HomeCtrl'
//             });
//         $locationProvider.html5Mode(true);
//     });

(function() {
  var app = angular.module('Grubr', []);

  app.controller('SelectController', ['$scope','$http', function($scope, $http){

    $scope.store.term = 'something'

    this.runSearch = function(term){
      var store = this;
      $scope.store.selection = [];
      $http.get("https://api.nutritionix.com/v1_1/search/"+term+"?results=0:10&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,nf_saturated_fat,nf_trans_fatty_acid,nf_cholesterol,nf_sodium,nf_total_carbohydrate,nf_dietary_fiber,nf_sugars,nf_protein,nf_vitamin_a_dv,nf_vitamin_c_dv,nf_calcium_dv,nf_iron_dv,nf_serving_size_qty,nf_serving_size_unit&appId=5f122b83&appKey=911595347512d4f3ad996f7317a355f2")
      .success(function(data){
        $scope.store.selection = data['hits'];
      });
    };
  }]);


  app.controller('TabController', function(){
    this.tab = 1;
    this.setTab = function(selectedTab){
        this.tab = selectedTab;
    };
   this.isSet = function(checkTab){
      return this.tab === checkTab;
    };
  });
  // var items = data['hits'];
})();


      //   brand: 'Outback Steakhouse',
      //   name: 'Sirloin Steak',
      //   calories: 0,
      //   total_fat: 0,
      //   saturated_fat: 0,
      //   trans_fat: 0,
      //   cholesterol: 0,
      //   total_carbs: 0,
      //   fiber: 0,
      //   sugar: 0,
      //   protein: 0,
      //   vitamin_c: 0,
      //   vitamin_a: 0,
      //   calcium: 0,
      //   iron: 0
      // },
      // {
      //   brand: 'Burger King',
      //   name: 'Whopper',
      //   calories: 0,
      //   total_fat: 0,
      //   saturated_fat: 0,
      //   trans_fat: 0,
      //   cholesterol: 0,
      //   total_carbs: 0,
      //   fiber: 0,
      //   sugar: 0,
      //   protein: 0,
      //   vitamin_c: 0,
      //   vitamin_a: 0,
      //   calcium: 0,
      //   iron: 0
      // },
      // {
      //   brand: 'Carl\'s Jr.',
      //   name: 'Famous Star',
      //   calories: 0,
      //   total_fat: 0,
      //   saturated_fat: 0,
      //   trans_fat: 0,
      //   cholesterol: 0,
      //   total_carbs: 0,
      //   fiber: 0,
      //   sugar: 0,
      //   protein: 0,
      //   vitamin_c: 0,
      //   vitamin_a: 0,
      //   calcium: 0,
      //   iron: 0
      // }




  // app.controller('SelectController', ['$scope','$http', function($scope, $http){
  //   // this.selection = items;
  //   $scope.store.term = 'whatever'
  //   $scope.$watch('store.term', function(newValue, oldValue){
  //     if (newValue !== oldValue) {
  //       var store = this;
  //       $scope.store.selection = [];
  //       $http.get("https://api.nutritionix.com/v1_1/search/"+newValue+"?results=0:50&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,nf_saturated_fat,nf_trans_fatty_acid,nf_cholesterol,nf_sodium,nf_total_carbohydrate,nf_dietary_fiber,nf_sugars,nf_protein,nf_vitamin_a_dv,nf_vitamin_c_dv,nf_calcium_dv,nf_iron_dv,nf_serving_size_qty,nf_serving_size_unit&appId=5f122b83&appKey=911595347512d4f3ad996f7317a355f2")
  //         .success(function(data){
  //           $scope.store.selection = data['hits'];
  //         });
  //     }
  //   });
  // }]);