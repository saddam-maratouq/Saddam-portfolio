import React from 'react'
import '../Home/home.css'  
import {FaGithub}  from 'react-icons/fa'  
import {FaLinkedin}  from 'react-icons/fa'  




const Home = () => {
    return (
       <section className='home' id='Main-page'>  
           <nav>
           <h2> Saddam <span> maratouq </span>  </h2>  
           <ul> 
               <li> <a href=""> Home </a> </li>
               <li> <a href=""> Project  </a> </li>
               <li> <a href="">  Resume </a> </li>
           </ul>
           </nav> 

           <div className="container"> 
            <div className="content">
                <h3>  Hello there,  🤝 I'm  </h3> <br /> <br />
                <h1> Saddam <span> maratouq</span> </h1> <br /> <br /> 
                <h2> I'm <span> Frontend  </span> develober   </h2>  
                <a href="" className="btn"> Download CV </a> 
                <br /> <br /> 
               <div className='icon' >      
          
                <a href=" https://github.com/saddam-maratouq?tab=repositories" target='_blank' >   <FaGithub size='3em'/>  </a>  
                <a href="https://www.linkedin.com/in/saddam-maratouq-51838a206/"  target='_blank'>      <FaLinkedin size='3em'/>  </a>  

               </div>  

               <div className='Imgs' > 
                    <img src="images/home-right.png" alt="codeing person" />
                </div>
               
            </div> 
           </div>
       </section>
    )
}

export default Home
