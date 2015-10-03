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

    myApp.controller('Controller2',[Controller2]);
    function Controller2(){
        this.message = "Hello from Controller 2";
    }


    /////////////
    //Angular Directive
    ////////////
    myApp.directive('myFirstDirective',[MyFirstDirective]);

    function MyFirstDirective(){
        return{
            restrict:'EACM',
            template:'<p>Hello From My First Directive</p>',
            replace:true
        }
    }

    myApp.directive('myDirectiveWithExternalTemplate',[MyDirectiveWithExternalTemplate]);

    function MyDirectiveWithExternalTemplate(){
        return {
            templateUrl:'simple-directive-template.html'
        }
    }

    myApp.directive('myInpageTemplateDirective',[MyInpageTemplateDirective]);

    function MyInpageTemplateDirective(){
        return {
            templateUrl:'simple-directive-template.html'
        }
    }




})();