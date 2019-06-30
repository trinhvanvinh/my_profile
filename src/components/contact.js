import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

export class Contact extends Component {

    render() {
        return (
            <div className="contact-body" >
                <Grid className="contact-grid" >
                    <Cell col={6} >
                        <h2>Trinh Van Vinh</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        style={{height:'250px'}} alt="avatar"
                         />
                         <p style={{width: '75%' , margin:'auto' , paddingTop: '1em'  }} >Full Stack Developer </p>
                    </Cell>
                    <Cell col={6} >
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list" >
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontWeight:'bold' }} >
                                    <i className="fa fa-phone-square" ></i>
                                    0367.819.271
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontWeight:'bold' }} >
                                    <i className="fa fa-envelope" ></i>
                                    trinhvanvinh018@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontWeight:'bold' }} >
                                    <i className="fa fa-skype" ></i>
                                    vinhreal1995
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontWeight:'bold' }} >
                                    <i className="fa fa-telegram" ></i>
                                    @trinhvanvinh | 0367819271
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact; 
