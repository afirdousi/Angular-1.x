/**
 * Created by Anas on 10/2/2015.
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
    myApp.directive('knob',[MyJqueryKnob]);

    function MyJqueryKnob(){
        return{
            restrict:'EA',
            require:'ngModel',
            link:function(iScope,iElement,iAttribute,ngModel){
                console.log(iAttribute.myJqueryAngularMashup1);

                iElement.knob({
                   fgColor:iAttribute.fgColor,
                    //change( ) callback is jQuery knob plugin's specific called automatically whenever the knob values changes
                   change:function(newValue){

                       //Calling $apply and %setViewValue to change the actual ngModel value for this angular element.
                       iScope.$apply(function(){
                            ngModel.$setViewValue(newValue);

                       });
                    }
                });


                //If we want to 2 way binding from view to directive model,
                //for example if we change value in text box, the knob changes its position
                //and also the model gets upadted, we need to do the following:
                //If we dont do the following
                ngModel.$render=function(){
                    //calling the .val( ) here is a jQuery plugin specific thing. Chceck plugin documentation
                    //on how to set value for the specific jQuery plugin you are using.
                    iElement.val(ngModel.$viewValue)
                        .trigger('change');
                }
            }
        }
    }



})();