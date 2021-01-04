
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "@reach/router"
import { get } from 'mongoose'
import AboutMe from './AboutMe'
import MainNav from '../components/MainNav'

const Projects = props => {

    // Effects

const [details, setDetails] = useState("")
const [projectsPage, setProjectsPage] = useState(true)
const [aboutMePage, setAboutMePage] = useState(false)




const mainNavHandler =(e) =>{
    setProjectsPage(!projectsPage)
    setAboutMePage(!aboutMePage)
    
}




const [project, setProject] = useState(null)

    const apiGetAllProjects = 'http://localhost:8000/api/project'

    useEffect(()=>{
        axios
        .get(apiGetAllProjects)
        .then((res) =>{
            setProject(res.data.Project)
            // console.log(res.data.Project);
        })
        .catch((err)=> {
            console.log(err);
        })
    })
    

    const showDetails = (data)=> {
   
        console.log(data._id);
        console.log("before",data.details);
        data.details = !data.details
        console.log("after",data.details);
        setDetails(" ")
        setDetails("change")
        // const updateBoolean = {
        //     details: data.details    
        // }
        const fd = new FormData();
        fd.append('details', data.details);

        axios
        .put("http://localhost:8000/api/project/update/" + data._id, fd)
        .then((res) =>{
            console.log("submitted");
            console.log(res);
            // console.log(updateBoolean);

        })
        .catch((err) =>{
            console.log("something went wrong");
            console.log(err);
        })
        
    }

        


 
    if(project === null){return(<h2>Loading...</h2>)}

    

    return (
        <div >

        <div 
        className="projectsPage-container"  
        style={ { display: projectsPage ? "grid" : "none" }}  > 
            <header>      
                <div className="slogan-container">  
                    <p>Dream it.</p>             
                    <p>Design it.</p>
                    <p>Code it.</p>
                </div>
           
                <img src="/img/portfolioImg.png" alt=""/>

            </header>

            <main>
                <picture class="headerImage-container">
                    <source media="(min-width: 1300px)" srcset="/img/desktopImg.png" />
                    <source media="(min-width: 725px)" srcset="/img/tabletImg.png" />
                    <img src="/img/mobileImgLarge.png" alt="" />
                </picture>
        
                <div className="cardItems">
                            
                    <ul>
                    {project.map((project)=>{
                        return(
                        <li className="project1-container">
                            {/* <h2>{project.title}</h2> */}
                            {(() =>{
                                    if (project.details === false) {
                                        return(
                                            <div>
                                                <h2>{project.title}</h2>
                                            </div>
                                        )}
                                })()}
                            

                            {(() =>{
                                    if (project.details === true) {
                                        return(
                                            <div>
                                                <h2>Web technology implemented</h2>
                                            </div>
                                        )}
                                })()}
                            
                            <img 
                            src={"/uploads/" + project.file}
                            style={{ filter: project.details ? "blur(5px)" : "blur(0px)" }}
                             />
      
                            <div  
                            style={ { display: project.details ? "grid" : "none" }} 
                            className="tools-container">
                        
                           

                            {(() =>{
                                    if (project.type === "c#Stack") {
                                        return(     
                                    <div id="icon-container">

                                        <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                        <p>Mockup UI</p>

                                        <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                        <p>Responsive Layout</p>

                                        <div><img src="/img/Icons/iconCSharp.png" alt=""/></div>
                                        <p>Logic</p>

                                        <div><img src="/img/Icons/iconNet.png" alt=""/></div>
                                        <p>Framework</p>
                                        
                                        <div><img src="/img/Icons/iconMySql.png" alt=""/></div>
                                        <p>Date Base</p>   
                                    </div>
                                        )}
                                          

                                
                                })()}

                                           
                           

                            {(() =>{
                                    if (project.type === "landingPage") {
                                        return(     
                                            <div id="icon-container">
                                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                            <p>Mockup UI</p>
            
                                            <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                            <p>Responsive Layout</p>
            
                                            <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                            <p>Behavior</p>
                                        </div>
                                        )}
                                          

                                
                                })()}


                            {(() =>{
                                    if (project.type === "pythonStack") {
                                        return(     
                                            <div id="icon-container">
                                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                            <p>Mockup UI</p>
            
                                            <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                            <p>Responsive Layout</p>
            
                                            <div><img src="/img/Icons/iconPython.png" alt=""/></div>
                                            <p>Logic</p>

                                              
                                            <div><img src="/img/Icons/iconDjango.png" alt=""/></div>
                                            <p>Framework</p>

                                              
                                            <div><img src="/img/Icons/iconJquiry.png" alt=""/></div>
                                            <p>Behavior</p>

                                        </div>
                                        )}
                                          

                                })()}
                        


                        {(() =>{
                                    if (project.type === "mernStack") {
                                        return(     
                                            <div id="icon-container">
                                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                            <p>Mockup UI</p>
            
                                            <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                            <p>Responsive Layout</p>
            
                                            <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                            <p>Logic</p>

                                              
                                            <div><img src="/img/Icons/iconReact.png" alt=""/></div>
                                            <p>Framework</p>

                                              
                                            <div><img src="/img/Icons/iconMongodb.png" alt=""/></div>
                                            <p>Date Base</p>

                                        </div>
                                        )}
                                          

                                })()}

                            </div>

                            
                            <footer>                       
                                <a  
                                name={project._id}
                                onClick={ () =>showDetails(project)}
                                onMouseEnter={ () =>showDetails(project)} 
                                onMouseLeave={ () =>showDetails(project)} 
                                style={{color: `#${project.color}` }  }
                                >Details</a>


                                <a href={project.urlLink}> 
                                <button style={{background: `#${project.color}`} }>{project.linkType }</button> 
                               </a>

                            </footer>
                        </li>


                        );})}
 
                    </ul>

                 
                </div>
               
            
            </main>


            </div>  
            
            <div 
            style={ { 
            display: aboutMePage ? "grid" : "none",
            marginLeft: aboutMePage ? "0" : "-1000%",

            transition: "1s"
                }}
           
            className="aboutMePage-container">
                        <AboutMe></AboutMe>
                </div>
           
            
        <div className="mainNav-container">        
            <nav> 
                <a 
                onClick={mainNavHandler}
                style={{ 
                    background: projectsPage ? "#A279A4" : "none", 
                    color: projectsPage ? "white" : "black",
                    height: projectsPage ? "90%" : "0",
                    boxShadow:  projectsPage ? "0 0 5px  rgba(0, 0, 0, 0.508)" : "none",
                    transition: ".3s"

                }}
                >Projects</a>


                <a 
                onClick={mainNavHandler}
                style={{ 
                    background: aboutMePage ? "#A279A4" : "none",
                    color: aboutMePage ? "white" : "black",
                    height: aboutMePage ? "90%" : "0",
                    boxShadow:  aboutMePage ? "0 0 5px  rgba(0, 0, 0, 0.508)" : "none",
                    transition: ".3s"

                  }}
      
                >About me</a>
            </nav>
            
            
        </div>
           
        </div>
    )
}



export default Projects
