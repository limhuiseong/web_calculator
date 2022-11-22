/*
            var num =0 ;
            var symbol ;
            var operator_sc;
            var temp;
            var operator;
            var secNum;
            var firstNum;
            var operator_signal = 0;
            var temp;

            function comma(input)
            {
            var nToStr = input.toString();
            var isItDot = nToStr.indexOf('.');
            var resultOfComma = isItDot === -1 ? nToStr : nToStr.slice(0, isItDot);

            for (var i = resultOfComma.length - 3; i > 0; i -= 3)
            {
                resultOfComma = resultOfComma.slice(0, i) + ',' + resultOfComma.slice(i);
            }

            if (isItDot !== -1)
            {
                resultOfComma += nToStr.slice(isItDot);    
            }

            return resultOfComma;
            }
    
            function btn_click(a)
            {
                if(resultFld.value === '0')
                {
                    resultFld.value="";
                }
                
                resultFld.value += a;

                if(resultFld.value === '.')
                {
                    resultFld.value="0.";
                }


                RresultFld.value = comma((resultFld.value));
            }

            function operator(b)
            {
                operator_screen.value = b;
                firstNum = (document.getElementById("resultFld").value);
                num = firstNum;
                symbol = b ;

                RresultFld.value = comma((resultFld.value));

                return document.getElementById("resultFld").value = "";
            }

            function operator_percent(c,d)
            {
                operator_screen.value = c;
                secNum = resultFld.value;
                
                secNum = firstNum * secNum / 100;
                operator_signal++;


                RresultFld.value = comma((resultFld.value));
            }

            function ce()
            {
                resultFld.value = "0";

                RresultFld.value = comma((resultFld.value));
            }

            function back()
            {
                resultFld.value = resultFld.value.slice(0, -1)


                RresultFld.value = comma((resultFld.value));
            }
    
            function enter()
            {
                if(operator_signal == 0)
                {
                    secNum = resultFld.value;
                }
                else
                {
                    operator_signal = 0;
                }
                var result ;
                switch (symbol)
                {

                    case '+' : result = Number(firstNum) + Number(secNum) ; 
                    document.getElementById("resultFld").value = result; 
                    break;

                    case '-' : result = Number(firstNum) - Number(secNum) ; 
                    document.getElementById("resultFld").value = result;
                    break;

                    case '*' : result = Number(firstNum) * Number(secNum) ; 
                    document.getElementById("resultFld").value = result;
                    break;

                    case '/' : result = Number(firstNum) / Number(secNum) ; 
                    document.getElementById("resultFld").value = result;
                    break;

                }        

                RresultFld.value = comma((resultFld.value));
            }
    
            function del_all()
            {
                document.getElementById("resultFld").value = "0";
                num = 0;
                firstNum = 0;
                secNum = 0;
                symbol = "";
                
                operator_screen.value = "";
                RresultFld.value = comma((resultFld.value));
            }
*/
            var num =0 ;
            var symbol ;
            var operator_sc;
            var temp;
            var operator;
            var secNum;
            var firstNum;
            var operator_signal = 0;
            var temp;

            function comma(input)
            {
            var nToStr = input.toString();
            var isItDot = nToStr.indexOf('.');
            var resultOfComma = isItDot === -1 ? nToStr : nToStr.slice(0, isItDot);

            for (var i = resultOfComma.length - 3; i > 0; i -= 3)
            {
                resultOfComma = resultOfComma.slice(0, i) + ',' + resultOfComma.slice(i);
            }

            if (isItDot !== -1)
            {
                resultOfComma += nToStr.slice(isItDot);    
            }

            return resultOfComma;
            }
    
            function btn_click(a)
            {
                if(resultFld.value === '0')
                {
                    resultFld.value="";
                }
                
                resultFld.value += a;

                if(resultFld.value === '.')
                {
                    resultFld.value="0.";
                }


                RresultFld.value = comma((resultFld.value));
            }

            function operator(b)
            {
                operator_screen.value = b;
                firstNum = (document.getElementById("resultFld").value);
                num = firstNum;
                symbol = b ;

                RresultFld.value = comma((resultFld.value));

                return document.getElementById("resultFld").value = "";
            }

            function operator_percent(c,d)
            {
                operator_screen.value = c;
                secNum = resultFld.value;
                
                secNum = firstNum * secNum / 100;
                operator_signal++;


                RresultFld.value = comma((resultFld.value));
            }

            function ce()
            {
                resultFld.value = "0";

                RresultFld.value = comma((resultFld.value));
            }

            function back()
            {
                resultFld.value = resultFld.value.slice(0, -1)


                RresultFld.value = comma((resultFld.value));
            }
    
            function enter()
            {
                if(operator_signal == 0)
                {
                    secNum = resultFld.value;
                }
                else
                {
                    operator_signal = 0;
                }
                var result ;
                switch (symbol)
                {

                    case '+' : result = Number(firstNum) + Number(secNum) ; 
                    document.getElementById("resultFld").value = result; 
                    break;

                    case '-' : result = Number(firstNum) - Number(secNum) ; 
                    document.getElementById("resultFld").value = result;
                    break;

                    case '*' : result = Number(firstNum) * Number(secNum) ; 
                    document.getElementById("resultFld").value = result;
                    break;

                    case '/' : result = Number(firstNum) / Number(secNum) ; 
                    document.getElementById("resultFld").value = result;
                    break;

                }        

                RresultFld.value = comma((resultFld.value));
            }
    
            function del_all()
            {
                document.getElementById("resultFld").value = "0";
                num = 0;
                firstNum = 0;
                secNum = 0;
                symbol = "";
                
                operator_screen.value = "";
                RresultFld.value = comma((resultFld.value));
            }