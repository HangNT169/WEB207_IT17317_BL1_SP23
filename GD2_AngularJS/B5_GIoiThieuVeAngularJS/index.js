// B1: Khoi tao module
var myApp = angular.module("myModule", []);

// B2: Khoi tao controller
// Co 2 cach khoi tao controller
// C1: Dung ham cu the
// Cu phap:
// tenBienCuaModule.controller("ten Controller",tenHam);
// myApp.controller("myController", myFunction1);

// // $scope: la 1 bien(service). Trung gian trao doi giua model va view
// function myFunction1($scope) {
//   $scope.message = "Hello Angular JS";
// }
// C2: Ham nac danh
myApp.controller("myController", function ($scope) {
  // code
  // Gia tri gan la 1 chuoi
  $scope.message = "Hello Angular JS";
  // Gia tri gan la 1 Object
  // Object {}
  // Mang []
  var employee = {
    firstName: "Hang",
    lastName: "Nguyen",
  };
  $scope.e = employee;

  //   $scope.a = {
  //     firstName: "Hang",
  //     lastName: "Nguyen",
  //   };
  // Gia tri gan la 1 mang String
  $scope.info = ["hihi", "hihi1"];
  // Gia tri gan 1 mang Object
  $scope.mangObject = [
    {
      firstName: "Hang",
      lastName: "Nguyen",
    },
    {
      firstName: "Hang",
      lastName: "Nguyen",
    },
    {
      firstName: "Hang",
      lastName: "Nguyen",
    },
  ];
  // Cach goi 1 ham
  $scope.tinhTong = function () {
    // code
    $scope.tong = $scope.number1 + $scope.number2;
  };
});
