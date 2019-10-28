import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

export class Contact extends Component {

    render() {
        return (
            <div className="contact-body" >
                <Grid className="contact-grid" >
                    <Cell col={6} >
                        <h2>Trịnh Văn Vinh</h2>
                        <img src="https://media.licdn.com/dms/image/C5103AQEWBJYWd4FeWg/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=-tWGeeR1aJfvrwFeWk9n9Y09-bOTLrLoiGMtcxqkXrs"
                        style={{height:'250px'}} alt="avatar"
                         />
                         <p style={{width: '75%' , margin:'auto' , paddingTop: '1em'  }} >I am Developer </p>
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
