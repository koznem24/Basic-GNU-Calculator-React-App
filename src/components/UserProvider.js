import React, {Component} from 'react';
import UserContext from './userContext';


class UserProvider extends Component{

	state = {
		error: '',
		inputText : '',
		outputTextPart1 : '',
		outputTextPart2 : '',
		renderEqual:''
		
	}

	inputTextController = (event) => {
		this.setState({inputText: event.target.value});
	}

// ******************* Output Number Functions ******************
	outputZero = () => {
		this.setState({
			inputText : this.state.inputText + '0'
		});
	}

	outputOne = () => {
		this.setState({
			inputText : this.state.inputText + '1'
		});
	}

	outputTwo = () => {
		this.setState({
			inputText : this.state.inputText + '2'
		});
	}

	outputThree = () => {
		this.setState({
			inputText : this.state.inputText + '3'
		});
	}

	outputFour = () => {
		this.setState({
			inputText : this.state.inputText + '4'
		});
	}

	outputFive = () => {
		this.setState({
			inputText : this.state.inputText + '5'
		});
	}

	outputSix = () => {
		this.setState({
			inputText : this.state.inputText + '6'
		});
	}

	outputSeven = () => {
		this.setState({
			inputText : this.state.inputText + '7'
		});
	}


	outputEight= () => {
		this.setState({
			inputText : this.state.inputText + '8'
		});
	}

	outputNine = () => {
		this.setState({
			inputText : this.state.inputText + '9'
		});
	}
//***************** OUTPUT OPERATIONS ***************
	
	outputDivide = () => {
		if(this.state.inputText.length !== 0){
			this.setState({
				inputText : this.state.inputText + '/'
			});
		}
		
	}

	performBackspace = () => {
		this.setState({
			inputText : this.state.inputText.slice(0,this.state.inputText.length-1)
		});
	}

	performClean = () => {
		this.setState({
			inputText : '',
			outputTextPart2:''
		});

	}

	outputMultiplication = () => {
		this.setState({
			inputText : this.state.inputText + '*'
		});
	}

	outputLeftParentheses = () => {
		this.setState({
			inputText : this.state.inputText + '('
		});
	}

	outputRightParentheses = () => {
		this.setState({
			inputText : this.state.inputText + ')'
		});
	}

	outputMinus = () => {
		this.setState({
			inputText : this.state.inputText + '-'
		});
	}

	outputSquare = () => {
		this.setState({
			inputText : this.state.inputText + '\u00B2'
		});
	}
	
	outputDot = () => {
		this.setState({
			inputText : this.state.inputText + '.'
		});
	}

	outputRadic = () => {
		this.setState({
			inputText : this.state.inputText + '\u23b7'
		});
	}

	outputPercentage = () => {
		this.setState({
			inputText : this.state.inputText + '\u0025'
		});
	}
	outputPlus= () => {
		this.setState({
			inputText : this.state.inputText + '+'
		});
	}
//**************** Calculations *************

	performCalculations = () =>{
		
		var intactText = this.state.inputText;
		var newText = '';
		for(var i = 0; i< intactText.length; i++){
			if (
					( 
						(  // if intactText[i] is equal to number
							intactText[i] >='0' && 
							intactText[i] <='9'
						) && ! // and if intactText[i+1] is not equal to number
						(
							intactText[i+1] >='0' && 
							intactText[i+1] <='9' 	
						)  &&
						(
							intactText[i+1] !== ' ' && // and if intactText[i+1] is not equal to free space
							intactText[i+1] !== '.'
						)
						
					)
					||
					(
						( // or if intactText[i] is equal to following operators
							(intactText[i] =='+') || 
							(intactText[i] =='-') || 
							(intactText[i] =='*') || 
							(intactText[i] =='/') ||
							(intactText[i] =='÷') ||
							(intactText[i] =='(') || 
							(intactText[i] ==')')
						)
						&& // and if intactText[i] is equal to number or parentheses
				 		(
				 			(
				 			intactText[i+1] >='0' && 
				 			intactText[i+1]<='9'
				 			)
				 			||
				 			(
				 				intactText[i+1]<='(' || 
				 				intactText[i+1]<=')'
				 			)
				 		)&&
				 		(
				 			intactText[i+1] !== ' ' &&
				 			intactText[i+1] !== '.'
				 		)
				 	)
				 	

			 	){
				newText += intactText[i] + ' ';
			}else{
				newText += intactText[i]; 
			}
		}
		// console.log(newText);


		
		var solution = this.evaluate(newText);
			this.setState({
				outputTextPart1: newText,
				renderEqual: ' = ',
				outputTextPart2: solution,
			});
		// this.setState({
		// 	inputText: solution
		// })
		
	
		
	}


	hasPrecedence = (op1, op2) =>{ 
  	  if (op2 == '(' || op2 == ')') 
            return false; 
        if ((op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-')) 
            return false; 
        else
            return true; 
	} 

	applyOp = (a, b, op) => { 

		var num2 = parseFloat(b);
		var num1 = parseFloat(a);
		
		console.log(num2-num1);
	    switch(op){ 
	        case '+': return num2 + num1; 
	        case '-': return num2 - num1; 
	        case '*': return num2 * num1; 
	        case '÷': return num2 / num1; 
	        case '/': return num2 / num1; 
	    } 
	}
//*****************************************************************************************
    evaluate = (tokens) => { 
      
    // stack to store integer values. 
   	var values = new Stack(); 
      
    // stack to store operators. 
    var ops = new Stack(); 

   for(var i = 0; i<tokens.length; i++){

   		if (tokens[i]===' ')
   			continue;

   		if (tokens[i] >= '0' && tokens[i] <= '9'){
   			var sbuf = '';
   			while (i < tokens.length && tokens[i] >= '0' && tokens[i] <= '9' || tokens[i] === '.') 
                sbuf+=tokens[i++];

                values.push(parseFloat(sbuf));
   		} else if (tokens[i] == '(') {
   			ops.push(tokens[i]);
   		}else if (tokens[i] == ')') { 
            while (ops.top() != '(') 
              values.push(this.applyOp( values.pop(), values.pop(),ops.pop())); 
            ops.pop(); 
     	}  else if (tokens[i] == '+' || tokens[i] == '-' || 
                    tokens[i] == '*' || tokens[i] == '/'){ 
                
	   		while (!ops.isEmpty() && this.hasPrecedence(tokens[i], ops.top())) 
	             values.push(this.applyOp(values.pop(), values.pop(), ops.pop())); 

	            // Push current token to 'ops'. 
	            ops.push(tokens[i]); 
       		} 
    	}
       
        while (!ops.isEmpty()) 
            values.push(this.applyOp(values.pop(), values.pop(), ops.pop())); 
  
        // Top of 'values' contains result, return it 
        return values.pop(); 

} 

//***************************************************************************************************


// **************** RENDER ******************
	render(){
		return <UserContext.Provider 
			value={{
					state: this.state, 
					_console :this.simpleFunction,
					inputTextController : this.inputTextController,
					outputOneFunc:this.outputOne,
					outputTwoFunc: this.outputTwo,
					outputThreeFunc:this.outputThree,
					outputFourFunc: this.outputFour,
					outputFiveFunc:this.outputFive,
					outputSixFunc: this.outputSix,
					outputSevenFunc:this.outputSeven,
					outputEightFunc: this.outputEight,
					outputNineFunc:this.outputNine,
					outputZeroFunc: this.outputZero,
					outputDivideFunc: this.outputDivide,
					performBackspaceFunc: this.performBackspace, 
					performCleanFunc: this.performClean,
					outputMultiplicationFunc: this.outputMultiplication,
					outputLeftParenthesesFunc: this.outputLeftParentheses,
					outputRightParenthesesFunc: this.outputRightParentheses,
					outputMinusFunc: this.outputMinus,
					outputSquareFunc: this.outputSquare,
					outputDotFunc: this.outputDot,
					outputRadicFunc: this.outputRadic,
					outputPercentageFunc: this.outputPercentage,
					outputPlusFunc: this.outputPlus,
					performCalculationsFunc: this.performCalculations
	}}>
					{this.props.children}
				</UserContext.Provider>
	}
}

// ************************* STACK Implementation******************************

function Stack() {
 
   var items = [];
 
   this.push = function(element){
       items.push(element);
   };
 
   this.pop = function(){
       return items.pop();
   };
 
   this.top = function(){
       return items[items.length-1];
   };
 
   this.isEmpty = function(){
       return items.length === 0;
   };
 
   this.size = function(){
       return items.length;
   };
 
   this.clear = function(){
       items = [];
   };
 
   this.print = function(){
       console.log(items.toString());
   };
}

export default UserProvider;