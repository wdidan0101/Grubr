(function() {
  var app = angular.module('Grubr', []);

  app.controller('SelectController', ['$scope','$http', function($scope, $http){

    $scope.term = ''
    $scope.list = [];
    $scope.meal = {};
    
    $scope.runSearch = function(term){
      $scope.selection = [];
      $http.get("https://api.nutritionix.com/v1_1/search/"+term+"?results=0:9&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,nf_saturated_fat,nf_trans_fatty_acid,nf_cholesterol,nf_sodium,nf_total_carbohydrate,nf_dietary_fiber,nf_sugars,nf_protein,nf_vitamin_a_dv,nf_vitamin_c_dv,nf_calcium_dv,nf_iron_dv,nf_serving_size_qty,nf_serving_size_unit&appId=5f122b83&appKey=911595347512d4f3ad996f7317a355f2")
      .success(function(data){
        $scope.selection = data['hits'];
      });
    };

    $scope.appendList = function(cell) {
        $scope.list.push(cell);
        console.log($scope.list);
    };

    $scope.myParse = function(list){
        var myList = [];
        for (i = 0; i < list.length; i++) {
            var item = list[i].fields;
            myList.push({
              brand: item.brand_name,
              name: item.item_name,
              calories: item.nf_calories,
              total_fat: item.nf_total_fat,
              saturated_fat: item.nf_saturated_fat,
              trans_fat: item.nf_trans_fatty_acid,
              cholesterol: item.nf_cholesterol,
              sodium: item.nf_sodium,
              total_carbs: item.nf_total_carbohydrate,
              fiber: item.nf_dietary_fiber,
              sugar: item.nf_sugars,
              protein: item.nf_protein,
              vitamin_a: item.nf_vitamin_a_dv,
              vitamin_c: item.nf_vitamin_c_dv,
              calcium: item.nf_calcium_dv,
              iron: item.nf_iron_dv
            })
        }
        return myList;
    };

    $scope.saveList = function() {
      if ($scope.list.length > 0){
        var menu = $scope.myParse($scope.list);
        $http.post("/menus", {'menu': menu});
        $scope.list = [];
      }
    };

    $scope.clearList = function() {
      $scope.list = [];
    };
  }]);

  app.controller('RecipesController', ['$scope','$http', function($scope, $http){
    $scope.recipes = [];
    $scope.recipe = {
      "title": "Fresh Ham Roasted With Rye Bread and Dried Fruit Stuffing",
      "prep": "1. Have your butcher bone and butterfly the ham and score the fat in a diamond pattern. ...",
      "yield": "About 15 servings",
      "ingr": [
        "1 fresh ham, about 18 pounds, prepared by your butcher (See Step 1)",
        "7 cloves garlic, minced",
        "1 tablespoon caraway seeds, crushed",
        "4 teaspoons salt",
        "Freshly ground pepper to taste",
        "1 teaspoon olive oil",
        "1 medium onion, peeled and chopped",
        "3 cups sourdough rye bread, cut into 1/2-inch cubes",
        "1 1/4 cups coarsely chopped pitted prunes",
        "1 1/4 cups coarsely chopped dried apricots",
        "1 large tart apple, peeled, cored and cut into 1/2-inch cubes",
        "2 teaspoons chopped fresh rosemary",
        "1 egg, lightly beaten",
        "1 cup chicken broth, homemade or low-sodium canned"
      ]
    };

    $scope.getInfo = function() {
      $http({
            url: "https://api.edamam.com/api/nutrient-info?extractOnly&app_id=494c4923&app_key=8b3e8fb54c99dba6de13a49c3f86da57",
            method: "POST",
            data: $scope.recipe,
            headers: {'Content-Type': 'application/json'}
        })
    };
  }]);

  app.controller('StatsController', ['$scope','$http', function($scope, $http){

      $http.get('/menus.json').success(function(data) {
        $scope.myMeals = data;
      });

      $scope.sumStatsOfMenu = function(menuHash) { // pass in an individual menu hash //
        var mySummedMenuHash = 
        {
          calories: 0,
          total_fat: 0,
          saturated_fat: 0,
          trans_fat: 0,
          cholesterol: 0,
          sodium: 0,
          total_carbs: 0,
          fiber: 0,
          sugar: 0,
          protein: 0,
          vitamin_a: 0,
          vitamin_c: 0,
          calcium: 0,
          iron: 0,
          all_meals: []
        };
        for(var i = 0; i < menuHash.meals.length; i++){
            mySummedMenuHash.calories += menuHash.meals[i].calories
            mySummedMenuHash.total_fat += menuHash.meals[i].total_fat
            mySummedMenuHash.saturated_fat += menuHash.meals[i].saturated_fat
            mySummedMenuHash.trans_fat += menuHash.meals[i].trans_fat
            mySummedMenuHash.cholesterol += menuHash.meals[i].cholesterol
            mySummedMenuHash.sodium += menuHash.meals[i].sodium
            mySummedMenuHash.total_carbs += menuHash.meals[i].total_carbs
            mySummedMenuHash.fiber += menuHash.meals[i].fiber
            mySummedMenuHash.sugar += menuHash.meals[i].sugar
            mySummedMenuHash.protein += menuHash.meals[i].protein

            mySummedMenuHash.vitamin_a += menuHash.meals[i].vitamin_a
            mySummedMenuHash.vitamin_c += menuHash.meals[i].vitamin_c
            mySummedMenuHash.calcium += menuHash.meals[i].calcium
            mySummedMenuHash.iron += menuHash.meals[i].iron

            mySummedMenuHash.all_meals.push(menuHash.meals[i].name+" - "+menuHash.meals[i].brand+" -");
        }
        return mySummedMenuHash;
      };

      $scope.getStats = function(myMeals) {
        $scope.myStats = [];
        for(var i = 0; i < myMeals.menus.length; i++){
          $scope.myStats.push($scope.sumStatsOfMenu(myMeals.menus[i]));
        }
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
})();
