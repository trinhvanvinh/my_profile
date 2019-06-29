import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

export class Project extends Component {

    constructor(props){
       super(props);
       this.state={
           activeTab:0
       } 
    }

    toggleCategories(){
        if(this.state.activeTab === 0 ){
            return (
                <div className="projects-grid" >

                 {/* project 1 */}
               <Card shadow={5} style={{minWidth:'450', margin:'auto'}} >
                   <CardTitle style={{color:'#black', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover '}} >
                        React Project #1
                   </CardTitle>
                   <CardText>
                        This is Project ReactJS
                   </CardText>
                   <CardActions border >
                        <Button colored >GitHub</Button>
                        <Button colored >CodePen</Button>
                        <Button colored >LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#black'}} >
                        <IconButton name="share"  />
                   </CardMenu>
               </Card>

                {/*  project 2 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}} >
                <CardTitle style={{color:'#black', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover '}} >
                     React Project #1
                </CardTitle>
                <CardText>
                     This is Project ReactJS
                </CardText>
                <CardActions border >
                     <Button colored >GitHub</Button>
                     <Button colored >CodePen</Button>
                     <Button colored >Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#black'}} >
                     <IconButton name="share"  />
                </CardMenu>
                 </Card>

                  {/*  project 3 */}
               <Card shadow={5} style={{minWidth:'450', margin:'auto'}} >
               <CardTitle style={{color:'#black', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover '}} >
                    React Project #1
               </CardTitle>
               <CardText>
                    This is Project ReactJS
               </CardText>
               <CardActions border >
                    <Button colored >GitHub</Button>
                    <Button colored >CodePen</Button>
                    <Button colored >LiveDemo</Button>
               </CardActions>
               <CardMenu style={{color: '#black'}} >
                    <IconButton name="share"  />
               </CardMenu>
           </Card>
                               
           </div>
            )
        }else if(this.state.activeTab === 1 ){
            return (
                <div><h1>This is Angular</h1></div>
            )
        }else if(this.state.activeTab ===2 ){
            return (
                <div><h1>This is VueJS</h1></div>
            )
        }else {
            return (
            <div><h1>This is MongoDB</h1></div>
            )
        }
    
    }

    render() {
        return (
            <div className="category-tabs" >
                <Tabs  activeTab={this.state.activeTab} onChange={(tabId)=>{this.setState({activeTab: tabId})}} ripple >
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <Grid  >
                    <Cell col={12} >
                        <div className="content" >
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
                    
            </div>
        )
    }
}

export default Project; 
