import React, {Component} from 'react';
import { UserConsumer } from './userContext';
import '../styles/results.css';

class Results extends Component{
	render(){
		return(
				<UserConsumer>
					{
						(username) => {
							return(
								<div className='results'>
									<p className='elements'>
										<h1 className="firstH3">{username.state.outputTextPart2} </h1>
										{/*<h3 className="secondH3">{username.state.renderEqual} </h3> 
										<h3 className="thirdH3">{username.state.outputTextPart2} </h3>*/}
									</p>
								</div>
		
							);
						}
					}
				</UserConsumer>
			
			
		);
	}
}

export default Results;


