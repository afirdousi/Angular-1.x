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
                //console.log(iAttribute.myJqueryAngularMashup1);

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


    myApp.directive('complexify',[MyJqueryComplexify]);

    function MyJqueryComplexify(){
        return{
            link:function(iScope,iElement,iAttribute){

                var progressBar = "</br><div class='progress'><div id='complexity-bar' class='progress-bar' role='progressbar'></div></div><h3 id='strength-number'></h3>";
                
                iElement.after(progressBar);
                iElement.complexify(
                    {
                        bannedPasswords:"000000|111111|11111111|112233|121212|123123|123456|1234567|12345678|123456789|131313|232323|654321|666666|696969|777777|7777777|8675309|987654|nnnnnn|nop123|nopqrs|noteglh|npprff|npprff14|npgvba|nyoreg|nyoregb|nyrkvf|nyrwnaqen|nyrwnaqeb|nznaqn|nzngrhe|nzrevpn|naqern|naqerj|natryn|natryf|navzny|nagubal|ncbyyb|nccyrf|nefrany|neguhe|nfqstu|nfuyrl|nffubyr|nhthfg|nhfgva|onqobl|onvyrl|onanan|onearl|onfronyy|ongzna|orngevm|ornire|ornivf|ovtpbpx|ovtqnqql|ovtqvpx|ovtqbt|ovtgvgf|oveqvr|ovgpurf|ovgrzr|oynmre|oybaqr|oybaqrf|oybjwbo|oybjzr|obaq007|obavgn|obaavr|obbobb|obbtre|obbzre|obfgba|oenaqba|oenaql|oenirf|oenmvy|oebapb|oebapbf|ohyyqbt|ohfgre|ohggre|ohggurnq|pnyiva|pnzneb|pnzreba|pnanqn|pncgnva|pneybf|pnegre|pnfcre|puneyrf|puneyvr|purrfr|puryfrn|purfgre|puvpntb|puvpxra|pbpnpbyn|pbssrr|pbyyrtr|pbzcnd|pbzchgre|pbafhzre|pbbxvr|pbbcre|pbeirggr|pbjobl|pbjoblf|pelfgny|phzzvat|phzfubg|qnxbgn|qnyynf|qnavry|qnavryyr|qroovr|qraavf|qvnoyb|qvnzbaq|qbpgbe|qbttvr|qbycuva|qbycuvaf|qbanyq|qentba|qernzf|qevire|rntyr1|rntyrf|rqjneq|rvafgrva|rebgvp|rfgeryyn|rkgerzr|snypba|sraqre|sreenev|sveroveq|svfuvat|sybevqn|sybjre|sylref|sbbgonyy|sberire|serqql|serrqbz|shpxrq|shpxre|shpxvat|shpxzr|shpxlbh|tnaqnys|tngrjnl|tngbef|trzvav|trbetr|tvnagf|tvatre|tvmzbqb|tbyqra|tbysre|tbeqba|tertbel|thvgne|thaare|unzzre|unaanu|uneqpber|uneyrl|urngure|uryczr|uragnv|ubpxrl|ubbgref|ubearl|ubgqbt|uhagre|uhagvat|vprzna|vybirlbh|vagrearg|vjnagh|wnpxvr|wnpxfba|wnthne|wnfzvar|wnfcre|wraavsre|wrerzl|wrffvpn|wbuaal|wbuafba|wbeqna|wbfrcu|wbfuhn|whavbe|whfgva|xvyyre|xavtug|ynqvrf|ynxref|ynhera|yrngure|yrtraq|yrgzrva|yvggyr|ybaqba|ybiref|znqqbt|znqvfba|znttvr|zntahz|znevar|znevcbfn|zneyobeb|znegva|zneiva|znfgre|zngevk|znggurj|znirevpx|znkjryy|zryvffn|zrzore|zreprqrf|zreyva|zvpunry|zvpuryyr|zvpxrl|zvqavtug|zvyyre|zvfgerff|zbavpn|zbaxrl|zbafgre|zbetna|zbgure|zbhagnva|zhssva|zhecul|zhfgnat|anxrq|anfpne|anguna|anhtugl|app1701|arjlbex|avpubynf|avpbyr|avccyr|avccyrf|byvire|benatr|cnpxref|cnagure|cnagvrf|cnexre|cnffjbeq|cnffjbeq1|cnffjbeq12|cnffjbeq123|cngevpx|crnpurf|crnahg|crccre|cunagbz|cubravk|cynlre|cyrnfr|cbbxvr|cbefpur|cevapr|cevaprff|cevingr|checyr|chffvrf|dnmjfk|djregl|djreglhv|enoovg|enpury|enpvat|envqref|envaobj|enatre|enatref|erorppn|erqfxvaf|erqfbk|erqjvatf|evpuneq|eboreg|eboregb|ebpxrg|ebfrohq|ehaare|ehfu2112|ehffvn|fnznagun|fnzzl|fnzfba|fnaqen|fnghea|fpbbol|fpbbgre|fpbecvb|fpbecvba|fronfgvna|frperg|frkfrk|funqbj|funaaba|funirq|fvreen|fvyire|fxvccl|fynlre|fzbxrl|fabbcl|fbppre|fbcuvr|fcnaxl|fcnexl|fcvqre|fdhveg|fevavinf|fgnegerx|fgnejnef|fgrryref|fgrira|fgvpxl|fghcvq|fhpprff|fhpxvg|fhzzre|fhafuvar|fhcrezna|fhesre|fjvzzvat|flqarl|grdhvreb|gnlybe|graavf|grerfn|grfgre|grfgvat|gurzna|gubznf|guhaqre|guk1138|gvssnal|gvtref|gvttre|gbzpng|gbctha|gblbgn|genivf|gebhoyr|gehfgab1|ghpxre|ghegyr|gjvggre|havgrq|intvan|ivpgbe|ivpgbevn|ivxvat|ibbqbb|iblntre|jnygre|jneevbe|jrypbzr|jungrire|jvyyvnz|jvyyvr|jvyfba|jvaare|jvafgba|jvagre|jvmneq|knivre|kkkkkk|kkkkkkkk|lnznun|lnaxrr|lnaxrrf|lryybj|mkpioa|mkpioaz|mmmmmm|password|1234|pussy|12345|dragon|qwerty|mustang|letmein|baseball|master|michael|football|shadow|monkey|abc123|pass|fuckme|6969|jordan|harley|ranger|iwantu|jennifer|hunter|fuck|2000|test|batman|trustno1|thomas|tigger|robert|access|love|buster|soccer|hockey|killer|george|sexy|andrew|charlie|superman|asshole|fuckyou|dallas|jessica|panties|pepper|1111|austin|william|daniel|golfer|summer|heather|hammer|yankees|joshua|maggie|biteme|enter|ashley|thunder|cowboy|silver|richard|fucker|orange|merlin|michelle|corvette|bigdog|cheese|matthew|patrick|martin|freedom|ginger|blowjob|nicole|sparky|yellow|camaro|secret|dick|falcon|taylor|bitch|hello|scooter|please|porsche|guitar|chelsea|black|diamond|nascar|jackson|cameron|computer|amanda|wizard|xxxxxxxx|money|phoenix|mickey|bailey|knight|iceman|tigers|purple|andrea|horny|dakota|aaaaaa|player|sunshine|morgan|starwars|boomer|cowboys|edward|charles|girls|booboo|coffee|xxxxxx|bulldog|ncc1701|rabbit|peanut|john|johnny|gandalf|spanky|winter|brandy|compaq|carlos|tennis|james|mike|brandon|fender|anthony|blowme|ferrari|cookie|chicken|maverick|chicago|joseph|diablo|sexsex|hardcore|willie|welcome|chris|panther|yamaha|justin|banana|driver|marine|angels|fishing|david|maddog|hooters|wilson|butthead|dennis|fucking|captain|bigdick|chester|smokey|xavier|steven|viking|snoopy|blue|eagles|winner|samantha|house|miller|flower|jack|firebird|butter|united|turtle|steelers|tiffany|zxcvbn|tomcat|golf|bond007|bear|tiger|doctor|gateway|gators|angel|junior|thx1138|porno|badboy|debbie|spider|melissa|booger|1212|flyers|fish|porn|matrix|teens|scooby|jason|walter|cumshot|boston|braves|yankee|lover|barney|victor|tucker|princess|mercedes|5150|doggie|zzzzzz|gunner|horney|bubba|2112|fred|johnson|xxxxx|tits|member|boobs|donald|bigdaddy|bronco|penis|voyager|rangers|birdie|trouble|white|topgun|bigtits|bitches|green|super|qazwsx|magic|lakers|rachel|slayer|scott|2222|asdf|video|london|7777|marlboro|srinivas|internet|action|carter|jasper|monster|teresa|jeremy|bill|crystal|peter|pussies|cock|beer|rocket|theman|oliver|prince|beach|amateur|muffin|redsox|star|testing|shannon|murphy|frank|hannah|dave|eagle1|11111|mother|nathan|raiders|steve|forever|angela|viper|ou812|jake|lovers|suckit|gregory|buddy|whatever|young|nicholas|lucky|helpme|jackie|monica|midnight|college|baby|cunt|brian|mark|startrek|sierra|leather|4444|beavis|bigcock|happy|sophie|ladies|naughty|giants|booty|blonde|fucked|golden|fire|sandra|pookie|packers|einstein|dolphins|chevy|winston|warrior|sammy|slut|zxcvbnm|nipples|power|victoria|asdfgh|vagina|toyota|travis|hotdog|paris|rock|xxxx|extreme|redskins|erotic|dirty|ford|freddy|arsenal|access14|wolf|nipple|iloveyou|alex|florida|eric|legend|movie|success|rosebud|jaguar|great|cool|cooper|1313|scorpio|mountain|madison|brazil|lauren|japan|naked|squirt|stars|apple|alexis|aaaa|bonnie|peaches|jasmine|kevin|matt|qwertyui|danielle|beaver|4321|4128|runner|swimming|dolphin|gordon|casper|stupid|shit|saturn|gemini|apples|august|3333|canada|blazer|cumming|hunting|kitty|rainbow|arthur|cream|calvin|shaved|surfer|samson|kelly|paul|mine|king|racing|5555|eagle|hentai|newyork|little|redwings|smith|sticky|cocacola|animal|broncos|private|skippy|marvin|blondes|enjoy|girl|apollo|parker|qwert|time|sydney|women|voodoo|magnum|juice|abgrtyu|dreams|maxwell|music|rush2112|russia|scorpion|rebecca|tester|mistress|phantom|billy|6666|albert|abcdef|password1|password12|password123|twitter".split('|')
                    },
                    function(valid, complexity){
                           // console.log(complexity);
                            var progressBar = $('#complexity-bar');

                            progressBar.toggleClass('progress-bar-success', valid);
                            progressBar.toggleClass('progress-bar-danger', !valid);
                            progressBar.css({'width': complexity + '%'});

                            $("#strength-number").html(complexity.toFixed(2)  +"%");
                    }
                )

            }

        }
    }

    myApp.directive('alertify',[MyJqueryAlertify]);

    function MyJqueryAlertify(){
        return{
            link:function(iScope,iElement,iAttribute){

                var typeOfAlert = iAttribute.type;
                var message =  iAttribute.message;

                if(typeOfAlert==="success"){
                    iElement.on('click',function(){
                        alertify.set('notifier','position', 'top-right');
                        alertify.success(message);
                    });
                }else if(typeOfAlert==="prompt"){
                    iElement.on('click',function(){
                        alertify.prompt(message).set('labels', {ok:'Alright!', cancel:'Naa!'});
                    });
                }else if(typeOfAlert==="confirm"){
                    iElement.on('click',function(){
                        alertify.confirm(message).set('labels', {ok:'Alright!', cancel:'Naa!'});
                    });
                }

            }

        }
    }


})();