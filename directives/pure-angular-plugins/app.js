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

        this.names = [
            {name:"Anas",gender:"Male"},
            {name:"Saman",gender:"Female"},
            {name:"Akhter",gender:"Male"},
            {name:"Zeenat",gender:"Female"},
            {name:"Barirah",gender:"Female"}
        ]

    }

    /////////////
    //Angular Directive
    ////////////
    myApp.directive('mySearchHighlighter',['$timeout',MySearchHighlighter]);

    function MySearchHighlighter($timeout){
        return {
            restrict: 'A',
            scope: {
                textMatch: '=mySearchHighlighter'
            },
            link: function (scope, element) {
                scope.$watch('textMatch', function (textMatch) {
                    $timeout(function () {
                        var list, regex;

                        list = element.find("td").has("em");
                        list.find("em").contents().unwrap();
                        list.each(function () {
                            var node = angular.element(this);
                            node.text(_.map(node.contents(), function (n) {
                                return n.textContent;
                            }).join(""));
                        });

                        if (textMatch) {
                            regex = new RegExp(_.escapeRegExp(textMatch), "gi");
                            list = element
                                .find("td")
                                .contents()
                                .filter(function () {
                                    return this.nodeType === 3 && this.textContent && regex.test(this.textContent);
                                })
                                .each(function () {
                                    var node = angular.element(this);
                                    var content = node.text();
                                    content = content.replace(regex, '<em>$&</em>');
                                    node.replaceWith(content);
                                });
                        }
                    });
                });
            }
        };

    }


})();