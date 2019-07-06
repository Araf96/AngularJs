/// <reference path = "angular.min.js"/>

var myApp = angular.module("myModule",[]);

var myController = function($scope){
	var students = [
		{studentId:"1405106",firstName : "Arafat",lastName : "Hossain",gender : "Male",section : "B",department : "CSE",university:"BUET"},
		{studentId:"1405101",firstName : "Jewel",lastName : "Rahman",gender : "Male",section : "B",department : "CSE",university:"BUET"},
		{studentId:"1410109",firstName : "Tanzid",lastName : "Hossain",gender : "Male",section : "A",department : "ME",university:"BUET"},
		{studentId:"1411127",firstName : "Tarikul",lastName : "Islam",gender : "Male",section : "C",department : "CE",university:"BUET"},
		{studentId:"1405032",firstName : "Ashfaq",lastName : "Russel",gender : "Male",section : "A",department : "CSE",university:"BUET"},
		{studentId:"1409011",firstName : "Zashid",lastName : "Iqbal",gender : "Male",section : "A",department : "ETE",university:"RUET"},
		{studentId:"1405116",firstName : "Akhtar",lastName : "Hossain",gender : "Male",section : "B",department : "CSE",university:"CUET"},
		{studentId:"1410153",firstName : "Sajid",lastName : "Hossain",gender : "Male",section : "C",department : "CE",university:"BUET"},
		{studentId:"1405108",firstName : "Salsabil",lastName : "Arabi",gender : "Female",section : "B",department : "CSE",university:"BUET"},
		{studentId:"1405097",firstName : "Shabuj",lastName : "Lashkar",gender : "Male",section : "B",department : "CSE",university:"BUET"},
		{studentId:"1405096",firstName : "Pranta",lastName : "Biswas",gender : "Male",section : "B",department : "CSE",university:"BUET"},
		{studentId:"1405100",firstName : "Tahrina",lastName : "Tasnim",gender : "Female",section : "B",department : "CSE",university:"BUET"},
		{studentId:"1405150",firstName : "Taslim",lastName : "Oyon",gender : "Male",section : "B",department : "CSE",university:"AIUB"},
		{studentId:"0605032",firstName : "Jhankar",lastName : "Mahbub",gender : "Male",section : "A",department : "CSE",university:"BUET"},
		{studentId:"1406101",firstName : "Tahmid",lastName : "Hasan",gender : "Male",section : "A",department : "EEE",university:"BUET"},
		{studentId:"1404022",firstName : "Shajon",lastName : "Das",gender : "Male",section : "A",department : "EEE",university:"AUST"}
	];
	$scope.students = students;
	//delete
	// $scope.students.shift(); // Removes the first element.
	// $scope.students.pop(); // Removes the last element.

	//add
	/* $scope.students.push({studentId:"0605032",firstName : "Hasan",lastName : "Murad",
	gender : "Male",section : "A",department : "CSE",university:"BUET"}); //appends new element*/
	/* $scope.students.unshift({studentId:"0605032",firstName : "Hasan",lastName : "Murad",
	gender : "Male",section : "A",department : "CSE",university:"BUET"}); //adds new element at the top of the table */
	
	//update
	//$scope.students[3].firstName = "Shabab"; //updates a specific information
	/*newObj = {studentId:"0605032",firstName : "Hasan",lastName : "Murad",
	gender : "Male",section : "A",department : "CSE",university:"BUET"};
	$scope.students[3] = newObj; //updates an entire row */

}

myApp.controller("myController",myController);

