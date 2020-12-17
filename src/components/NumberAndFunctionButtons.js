import React, {Component} from 'react';
import '../styles/numberAndFunctionButtons.css'
import { UserConsumer } from './userContext';

const NumberAndFunctionButtons = () => {
		return(
			<UserConsumer>

				{
					(username)=>{
						return  (
							<div className="numAndFuncButs">
								<button className="designedButton" onClick={username.outputSevenFunc}>7</button>
								<button className="designedButton" onClick={username.outputEightFunc}>8</button>
								<button className="designedButton" onClick={username.outputNineFunc}>9</button>
								<button className="designedButton" onClick={username.outputDivideFunc}>&divide;</button>
								<button className="designedButton" onClick={username.performBackspaceFunc}>&crarr;</button>
								<button className="designedButton" onClick={username.performCleanFunc}>C</button>
								<button className="designedButton" onClick={username.outputFourFunc}>4</button>
								<button className="designedButton" onClick={username.outputFiveFunc}>5</button>
								<button className="designedButton" onClick={username.outputSixFunc}>6</button>
								<button className="designedButton" onClick={username.outputMultiplicationFunc}>x</button>
								<button className="designedButton" onClick={username.outputLeftParenthesesFunc}>(</button>
								<button className="designedButton" onClick={username.outputRightParenthesesFunc}>)</button>
								<button className="designedButton" onClick={username.outputOneFunc}>1</button>
								<button className="designedButton" onClick={username.outputTwoFunc}>2</button>
								<button className="designedButton" onClick={username.outputThreeFunc}>3</button>
								<button className="designedButton" onClick={username.outputMinusFunc}>-</button>
								<button className="designedButton" onClick={username.outputSquareFunc} disabled>x<sup>2</sup></button>
								<button className="designedButton" onClick={username.outputRadicFunc} disabled>&radic;</button>
								<button className="designedButton" onClick={username.outputZeroFunc}>0</button>
								<button className="designedButton" onClick={username.outputDotFunc}>.</button>
								<button className="designedButton" onClick={username.outputPercentageFunc} disabled>%</button>
								<button className="designedButton" onClick={username.outputPlusFunc}>+</button>
								<button className="designedBigButton" onClick={username.performCalculationsFunc}>=</button>
							</div>);
					}
				}
				
			</UserConsumer>
			
			
		);
}

export default NumberAndFunctionButtons;
