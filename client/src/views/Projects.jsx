
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Projects = props => {

    // Effects

const [details, setDetails] = useState(true)
const [projectsPage, setProjectsPage] = useState(true)

    

    const showDetails = (data, e)=> {
         
        // change between true or false 
        data.details = !data.details
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
            console.log("show detail");

        })
        .catch((err) =>{
            console.log("something went wrong");
            console.log(err);
        })

        setDetails(!details)

        console.log(`${like}`);

     
        
    }


    // likeHandler
    const [like, setLike] = useState(true)
    const projectLikeHandler =(data, e)=>{

        if (like === true) {
        if (e.target.innerText === "like") {
            e.target.innerText = "undo"
            // increases the likes
            data.like = !data.like
            data.likeCount = data.likeCount + 1
    
            
            const fd = new FormData();
            fd.append('likeCount', data.likeCount);
            fd.append('like', data.like)
    
            axios
            .put("http://localhost:8000/api/project/update/" + data._id, fd)
            .then((res) =>{
                console.log("Like");
                console.log(`${like}`);
    
            })
            .catch((err) =>{
                console.log("something went wrong");
                console.log(err);
            })


           // easterEgg
           if (data.likeCount === data.easterEgg) {
            alert(data.easterEggMsg)
            }               

            }
           
        }

        if (like === false) {
        if (e.target.innerText === "undo") {
            e.target.innerText = "like"

            // subtract the likes
            data.like = !data.like
            data.likeCount = data.likeCount - 1
            
            const fd = new FormData();
            fd.append('likeCount', data.likeCount);
            fd.append('like', data.like)
    
            axios
            .put("http://localhost:8000/api/project/update/" + data._id, fd)
            .then((res) =>{
                console.log("Unlike");
                console.log(`${like}`);
    
            })
            .catch((err) =>{
                console.log("something went wrong");
                console.log(err);
            })  
            
                
            }

    
        }


        setLike(!like)

            
    }


    // const projectUndoHandler =(data)=>{
    //     setLike(false)
    //     console.log(data.likeCount);
    //     console.log(data._id);
        
    //     data.like = !data.like
    //     data.likeCount = data.likeCount - 1

        
    //     const fd = new FormData();
    //     fd.append('likeCount', data.likeCount);
    //     fd.append('like', data.like)

    //     axios
    //     .put("http://localhost:8000/api/project/update/" + data._id, fd)
    //     .then((res) =>{
    //         console.log("submitted");
    //         console.log(res);
    //         // console.log(updateBoolean);

    //     })
    //     .catch((err) =>{
    //         console.log("something went wrong");
    //         console.log(err);
    //     })

    // }

        
    const baseUrl = "../../server/uploads/";

    const [project, setProject] = useState(null)

    const apiGetAllProjects = 'http://localhost:8000/api/project'

    useEffect(()=>{
        axios
        .get(apiGetAllProjects)
        .then((res) =>{
            setProject(res.data.Project)
            console.log(res.data.Project);
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [details])

 
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
                        <li 
                        
                        className="project1-container">
                            {/* <h2>{project.title}</h2> */}
                            {(() =>{
                                    if (project.details === false) {
                                        return(
                                            <aside>
                                                <h2>{project.title}</h2>
                                            </aside>
                                        )}
                                })()}
                            

                            {(() =>{
                                    if (project.details === true) {
                                        return(
                                            <div className="likeProjects-container">
                                                <h2>{project.type}</h2>
                                                <aside
                                                style={{background: `#${project.color}` }  }
                                                >
                                                    <img id="heartIcon"src="/img/Icons/heart.png" alt=""/>
                                                    <h4>{project.likeCount}</h4>

                                                </aside>

                                                <a
                                                // value={like}
                                                style={{color: `#${project.color}` }  }
                                                onClick={ (e) => projectLikeHandler(project, e)}
                                                >like</a>
                                
                                            
                                            </div>
                                        )}
                                })()}
                            
                            {/* <img 
                            src={"/uploads/" + project.file}
                            style={{ filter: project.details ? "blur(5px)" : "blur(0px)" }}
                             /> */}
                             {(() =>{
                                    if (project.name === "Progressly Page") {
                                        return(

                             <img 
                             style={{ filter: project.details ? "blur(3px)" : "blur(0px)"}}
                             src="img/projects/progresslyPage.png"/>

                             )}
                            })()}

                            {(() =>{
                                    if (project.name === "Garage Sally") {
                                        return(

                             <img 
                             style={{ filter: project.details ? "blur(3px)" : "blur(0px)"}}
                             src="img/projects/garageSally.png"/>

                             )}
                            })()}


                            {(() =>{
                                    if (project.name === "Budget Box") {
                                        return(

                             <img
                             style={{ filter: project.details ? "blur(3px)" : "blur(0px)"}}
                              src="img/projects/budgetBox.png"/>

                             )}
                            })()}

                            {(() =>{
                                    if (project.name === "Delta Sports Bar") {
                                        return(

                             <img
                             style={{ filter: project.details ? "blur(3px)" : "blur(0px)"}}
                              src="img/projects/deltaSportsBar.png"/>

                             )}
                            })()}

                            {(() =>{
                                    if (project.name === "Pace Builders") {
                                        return(

                             <img
                             style={{ filter: project.details ? "blur(3px)" : "blur(0px)"}}
                              src="img/projects/paceBuilders.png"/>

                             )}
                            })()}

                            
                            {(() =>{
                                    if (project.name === "JR Landscaping") {
                                        return(

                             <img
                             style={{ filter: project.details ? "blur(3px)" : "blur(0px)"}}
                              src="img/projects/jrlandScaping.png"/>

                             )}
                            })()}

                               {(() =>{
                                    if (project.name === "Luie Design") {
                                        return(

                             <img
                             style={{ filter: project.details ? "blur(3px)" : "blur(0px)"}}
                              src="img/projects/luieDesign.png"/>

                             )}
                            })()}



      
                            <div  
                            style={ { display: project.details ? "grid" : "none" }} 
                            className="tools-container">
                        
                           

                            {(() =>{
                                    if (project.type === "C#") {
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
                                    if (project.type === "Website") {
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
                                    if (project.type === "Python") {
                                        return(     
                                            <div id="icon-container">
                                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                            <p>Mockup UI</p>
            
                                            <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                            <p>Responsive Layout</p>
            
                                            <div><img src="/img/Icons/iconPython.png" alt=""/></div>
                                            <p>Logic</p>

                                              
                                            <div><img src="/img/Icons/IconDjango.png" alt=""/></div>
                                            <p>Framework</p>

                                              
                                            <div><img src="/img/Icons/iconJquiry.png" alt=""/></div>
                                            <p>Behavior</p>

                                        </div>
                                        )}
                                          

                                })()}
                        


                        {(() =>{
                                    if (project.type === "MERN") {
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
                            {(() =>{
                                    if (project.details === false) {
                                        return(
                                           
                                            <a  
                                            name={project._id}
                                            onClick={ (e) =>showDetails(project, e)}
                                            onMouseEnter={ (e) =>showDetails(project, e)} 
                                            style={{color: `#${project.color}` }  }
                                            >Details</a>
                                        )}
                                })()}
                            

                            {(() =>{
                                    if (project.details === true) {
                                        return(
                                            <a  
                                            name={project._id}
                                            onClick={ (e) =>showDetails(project, e)}
                                            onMouseEnter={ (e) =>showDetails(project, e)} 
                                            style={{color: `#${project.color}` }  }
                                            >Image</a>
                                          
                                        )}
                                })()}

                                                  
                             


                                <a href={project.urlLink} target="blank"> 
                                <button style={{background: `#${project.color}`} }>{project.linkType }</button> 
                               </a>

                            </footer>
                        </li>


                        );})}
 

                                <li></li>
                    </ul>

                 
                </div>
               
            
            </main>


            </div>  
            
          
            
       
           
        </div>
    )
}



export default Projects
