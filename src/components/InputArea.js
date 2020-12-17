import React, {Component} from 'react';
import '../styles/inputArea.css'
import { UserConsumer } from './userContext';

const InputArea = () => {
		return(
			<UserConsumer>

				{
					(username)=>{
						return  (<div>
									<input 
										className="inputArea" type="text"
										value={username.state.inputText} 
										onChange = {username.inputTextController}/>
									<label className="labelArea">{username.state.error}</label>
						    	</div>);
					}
				}
				
			</UserConsumer>
			
		);
}

export default InputArea;