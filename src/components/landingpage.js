import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

export class Landingpage extends Component {

    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} >
                <Grid className="landing-grid" >
                    <Cell col={12} >
                        <img 
                        src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_960_720.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                       <div className="banner-text" >
                           <h1>Full Stack Developer</h1>
                           <hr/>

                            <p>HTML/CSS | Bootstrap | Javascript | ReactJS | React Native | Flutter | Java Android | NodeJS | MySQL | MongoDB | Cocos2d-js | Linux ... </p>

                            <div className="social-links" >
                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank"  >
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank"  >
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* freeCodeCamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank"  >
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                            </div>
                        </div> 
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landingpage; 
