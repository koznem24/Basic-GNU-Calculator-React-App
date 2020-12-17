import React, {Component} from 'react';
import TopBar from './TopBar';
import Results from './Results';
import InputArea from './InputArea';
import NumberAndFunctionButtons from './NumberAndFunctionButtons';
import '../styles/main.css'

class Main extends Component{
	render(){
		return(
			<div className="mainPage">
				<TopBar />
				<Results />
				<InputArea />
				<NumberAndFunctionButtons />						
			</div>
		)
	}
}

export default Main;