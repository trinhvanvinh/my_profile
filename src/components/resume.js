import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';

export class Resume extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} >
                        <div className="resume-left" style={{textAlign:'left'}} >
                            <img 
                                src=".../vinh.jpg"
                                alt="avata"
                                 style={{height:'210px', }}     
                            >
                            
                            </img>

                            <h2>Trinh Van Vinh</h2>
                            <h4 > Programmer </h4>
                            {/* <hr style={{borderTop: '3px solid grey', width:'50%' }} />  */}
                            <p>HTML/ CSS/ Javascipt/ NodeJS/ Mobile/ Game Client/ React/ Linux </p>
                            {/* <hr style={{borderTop: '3px solid grey', width:'50%' }} /> */}
                            <h4>Address</h4> 
                            <p> Country: Nam Sach, Hai Duong</p>
                            <h4>Phone</h4>
                            <p>0367.819.271</p>
                            <h4>Email</h4>
                            <p>trinhvanvinh018@gmail.com</p>
                            <h4>Linkedin</h4>
                            <p>https://www.linkedin.com/in/vinh-tr%E1%BB%8Bnh-v%C4%83n-485348128</p>
                            <h4>Skype</h4>
                            <p>vinhreal1995</p>
                            <h4>Telegram</h4>
                            <p>@trinhvanvinh</p>

                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8} >
                        <h2>Education</h2>
                        <Education 
                            startYear={2013}
                            endYear={2017}
                            schoolName={"HANOI UNIVERSITY OF INDUSTRY (HaUI)"}
                            schoolDescription={"Software Design"}
                         />
                          {/* <Education 
                            startYear={2016}
                            endYear={2017}
                            schoolName={"Developer Java-Android in FPT Software"}
                            schoolDescription={"Software Design"}
                         /> */}
                         <hr style={{borderTop:'3px solid #e22947'}} />
                         <h2>Experience</h2>
                         <Experience
                            startYear={2016}
                            endYear={2017}
                            jobName={"Development Java-Android in FPT Software"}
                            jobDescription={"Development Android Application for Pioneer Japan"}
                         />
                        <Experience
                            startYear={2017}
                            endYear={2019}
                            jobName={"Development Mobile & Web Game in SixWin (TamTayGlobal)"}
                            jobDescription={"Development Mobile & Web Game "}
                         />
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skill 
                         skill='HTML/CSS'
                         progress={90}
                         />
                         <Skill
                         skill='Javascript'
                         progress={90}
                         />
                         <Skill
                         skill='Flutter   '
                         progress={70}
                         />
                         <Skill
                         skill='React'
                         progress={80}
                         />
                         <Skill
                         skill='Android/IOS'
                         progress={70}
                         />
                          <Skill
                         skill='Linux'
                         progress={60}
                         />
                          <hr style={{borderTop:'3px solid #e22947'}} />
                          <h2>Activity</h2>
                          <p>Good good</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume; 
