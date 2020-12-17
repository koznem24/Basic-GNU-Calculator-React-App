import React, {Component} from 'react';
import '../styles/topBar.css'

const TopBar = () => {
		return(
			<div className="topBar">
				<button className="buttonToggle"><b>Basic Mode</b></button>
				{/*<button className="buttonHamburgerStyle"><i className="fas fa-bars"></i></button>
				<button className="buttonStyle"><i className="far fa-window-minimize"></i></button>
				<button className="buttonStyle"><i className="far fa-window-maximize"></i></button>
				<button className="buttonStyle"><i className="fas fa-times"></i></button>*/}
			</div>
		);
}

export default TopBar;

