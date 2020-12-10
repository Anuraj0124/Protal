import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import {
  withStyles,
} from '@material-ui/core/styles';
import './login.css';
const btnTheme = createMuiTheme({ palette: { primary: {main:'#fff703'} } });
const formTheme = createMuiTheme({ palette: { primary: {main:'#ffffff'} } });

export class login extends Component{
	render(){


		return(
			<div className="login_container">
				<div className="login_head">
					<span className="bold">Pro</span>ducing
					<span className="bold"> Tal</span>ents
				</div>
				<div className="subhead">
					Join the new talent community.
				</div>
    				<ThemeProvider theme={btnTheme}>
					<Button 
						variant="outlined" 
						color="primary"
						style={{ borderRadius:'10px' , fontSize:'1.3vw' , textTransform: 'none' , width:'11vw' , border: '3px solid' }}
					>
					  Login
					</Button>
				</ThemeProvider>
				<ThemeProvider theme={btnTheme}>
					<Button 
						variant="contained" 
						color="primary"
						style={{ borderRadius:'10px' , margin:'1vw 3vw' , fontSize:'1.3vw' , textTransform: 'none' , width:'13vw' , border: '3px solid' }}
					>
					  Sign Up
					</Button>
				</ThemeProvider>
				<br />	
				<br />
    				<ThemeProvider theme={formTheme}>
    				<div className="txt">
				<TextField
			              placeholder="Your Name"
			              autoFocus="true"
			              color="primary"
			              variant="outlined"
			              defaultValue=""
			              inputProps={{ style: { color: 'gray'}}}
			        />
				</div>
    				<div className="txt">
			        <TextField
			              placeholder="Your Email ID"
			              autoFocus="true"
			              color="primary"
			              variant="outlined"
			              defaultValue=""
			              inputProps={{ style: { color: 'gray'}}}
			              // style={{borderRadius: '25'}}
			        />
				</div>
    				<div className="txt">
			        <TextField
			              placeholder="Your Password"
			              autoFocus="true"
			              color="primary"
			              variant="outlined"
			              defaultValue=""
			              type="password"
			              inputProps={{ style: { color: 'gray'}}}
			              // style={{borderRadius: '25'}}
			        />
			        </div>
			        </ThemeProvider>
			        <ThemeProvider theme={btnTheme}>
			        	<Link to='/feed' style={{textDecoration:'none'}}>
					<Button 
						variant="contained" 
						color="primary"
						style={{ borderRadius:'10px' , margin:'1vw 7vw' , fontSize:'1.3vw' , textTransform: 'none' , width:'11vw' , border: '3px solid' }}
					>
					  Next
					</Button>
					</Link>
				</ThemeProvider>
			</div>

		);
	}
}
export default login;