import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

export class Contact extends Component {

    render() {
        return (
            <div className="contact-body" >
                <Grid className="contact-grid" >
                    <Cell col={6} >
                        <h2>Trịnh Văn Vinh</h2>
                        <img src="" />
                    </Cell>
                    <Cell col={6} > half pager </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact; 
