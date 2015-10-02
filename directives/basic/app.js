/**
 * Created by Anas on 9/30/2015.
 */
(function(){

    var myApp = angular.module("myApp", []);



    /////////////
    //Angular Controller
    ////////////
    myApp.controller('Controller1',[Controller1]);
    function Controller1(){
    }

    /////////////
    //Angular Directive
    ////////////
    myApp.directive('myFirstDirective',[MyFirstDirective]);

    function MyFirstDirective(){
        return{
            restrict:'EAC',
            template:'<p>Hello From My First Directive</p>'
        }
    }

    myApp.directive('myDirectiveWithExternalTemplate',[MyDirectiveWithExternalTemplate]);

    function MyDirectiveWithExternalTemplate(){
        return {
            templateUrl:'simple-directive-template.html'
        }
    }




})();