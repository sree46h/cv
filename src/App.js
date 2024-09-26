import logo from './logo.svg';
import './App.css';
import Resume from './container/Resume';
// import { Image, Menu, MenuItem, Segment } from 'semantic-ui-react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import React, { useState,useRef,useEffect } from 'react'
import { Container, Header, List, Segment, Grid,Image,Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Experience from './container/Experience';
import Introduction from './container/Introduction';
import ContactForm from './container/Form';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [activeItem, setActiveItem] = useState('home');
  const [menuVisible, setMenuVisible] = useState(false);

  const handleItemClick = (name) => setActiveItem(name);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  let skills = ['React JS', 'Node JS', 'Kubernates', 'Docker', 'Kafka', 'Postman', 'NODE-RED', 'Java Script', 'Java', 'Python', 'R', 'Tensorflow','Mongo DB','SQL','Redux/Redux Toolkit','Responsive Design','Algorithms/Data Structres','AWS','Social Media/Web Analytics','Load Runner','Jira']
  let degree={"Masters Degreee":{university:"Florida Atlantic University, Boca Raton,FL",duration:'Aug 2023 - May 2025',about:'I joined Florida Atlantic University (FAU) as a computer science graduate student. It’s a wonderful college located in South Florida, known for its great weather and diverse community. The professors are friendly, and I gained valuable knowledge and experience from them. Additionally, I love watching football; we have a great stadium and an excellent library for studying.'},"Bachelors Degree":{university:'JNTU University, Anantapur,India',duration:'Apr 2016-2020',about:'I joined JNTU University for my bachelors degree, where I was first introduced to a world of opportunities and the various aspects of technology'}}
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const handleScrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(()=>{
    toast.info("Iam Still Developing site, sorry for terrible web design!", {
      autoClose: 30000, // Delay before auto-close (in milliseconds)
      delay: 1000, // Delay before the toast shows (in milliseconds)
    });
    toast.info("Also developing Codegram Workspace, i will release soon", {
      autoClose: 30000, // Delay before auto-close (in milliseconds)
      delay: 1000, // Delay before the toast shows (in milliseconds)
    });
  


  },[])
  const menuHandler=(data)=>{
    if(data=="about"){
      handleScrollToSection(section1Ref)
      setMenuVisible(!menuVisible)
    }
    else if(data=="projects"){
      handleScrollToSection(section2Ref)
      setMenuVisible(!menuVisible)
    }
    else if(data=="contact"){
      handleScrollToSection(section3Ref)
      setMenuVisible(!menuVisible)
    }
  }
  return (
    <div className="App">
      <div className='main-page'>
        <Segment inverted className='nav-segment'>
          <Menu className='desk-menu' inverted pointing secondary style={{ display: 'flex',margin:0 }}>
            <Menu.Item style={{ marginRight: 'auto',cursor:'pointer' }}>
              <div className='user-profile' id="/">
                <Image className='round-image' src='/my-img.jpeg' />
                <h1 className='user-name-styles'>Sreeharinaidu Rangani</h1>
              </div>
            </Menu.Item>
            <Menu.Item className='mob-menu-list'>
            <a href="/Sreeharinaidu_Resume.pdf" download="Sreehari_Resume.pdf">
            <p style={{ aliginSelf: 'center' }} className='nav-list-items'>Download Resume</p>
      </a>
      </Menu.Item>
            <Menu.Item className='desk-menu-list'>
              <p style={{ aliginSelf: 'center' }} className='nav-list-items' onClick={()=>handleScrollToSection(section1Ref)}>About</p>
            </Menu.Item>
            <Menu.Item className='desk-menu-list'>
              <p style={{ aliginSelf: 'center' }} className='nav-list-items' onClick={()=>handleScrollToSection(section2Ref)}>Projects</p>
            </Menu.Item>
            <Menu.Item className='desk-menu-list'>
              <p style={{ aliginSelf: 'center' }} className='nav-list-items' onClick={()=>handleScrollToSection(section3Ref)}>Contact</p>
            </Menu.Item>
          </Menu>
          <Menu inverted pointing secondary stackable className='mob-menu' style={{ display: 'flex',margin:0 }}>
            <Menu.Item
              onClick={() => handleItemClick('home')}
              style={{ marginRight: 'auto' }}
            >
              <div className='user-profile' id="/">
                <Image className='round-image' src='/my-img.jpeg' />
                <h1 className='user-name-styles'>Sreeharinaidu Rangani</h1>
                {menuVisible ? <MdOutlineCancel onClick={toggleMenu} className='cross-button'  style={{color:'white',fontSize:'2rem',transition: 'transform .7s ease-in-out',alignSelf:'center',cursor:'pointer'}}/> : <GiHamburgerMenu onClick={toggleMenu} width={100} height={100}   style={{color:'white',fontSize:'2rem',alignSelf:'center',cursor:'pointer'}}/>}
              </div>
            </Menu.Item>
            {menuVisible && <>
              <Menu.Item className='mob-menu-list'>
              <p style={{ aliginSelf: 'center' }} className='nav-list-items' onClick={()=>menuHandler("about")}>About</p>
            </Menu.Item>
            <Menu.Item className='mob-menu-list'>
              <p style={{ aliginSelf: 'center' }} className='nav-list-items' onClick={()=>menuHandler("projects")}>Projects</p>
            </Menu.Item>
            <Menu.Item className='mob-menu-list'>
              <p style={{ aliginSelf: 'center' }} className='nav-list-items' onClick={()=>menuHandler("contact")}>Contact</p>
            </Menu.Item>
            <Menu.Item className='mob-menu-list'>
            <a href="/sreehari_resume.pdf" download="Sreehari_Resume.pdf">
            <p style={{ aliginSelf: 'center' }} className='nav-list-items'>Download Resume</p>
      </a>
      </Menu.Item>
            </>}
          </Menu>
        </Segment>
{/* <Resume/> */}
<Container className='main-container' id="main-container" style={{ padding: 30, paddingTop: 130, width: "100%" }}>
      <p className='main-paragraph' style={{ fontStyle: 'italic' }}>"Everyday life is like programming, I guess. If you love something, you can put beauty into it."</p>
      <Introduction />
      <Header as='h2' textAlign='center' className='main-header-name'>I'M SREEHARI NAIDU RANGANI.</Header>

      <Header as='h1' textAlign='center'  style={{ paddingTop: '30px',color:'rgb(175 167 160)' }} >A Bit About Me....</Header>
      <div className='about-container' ref={section1Ref}>
        <div className='left-above'>
          <p className='main-paragraph' style={{ textAlign:'justify',padding:0,paddingBottom:'10px' }}>I am a <b style={{fontSize:'1.3rem'}}>Experienced Fullstack Web Developer and Computer Science Graduate</b> with extensive experience in developing front-end and back-end projects for various clients and organizations. In addition to my professional work, I actively contribute to public repositories supporting web development and regularly share insights on LinkedIn, feel free to connect with me on <a style={{display:'inline'}} href='https://www.linkedin.com/in/sreehari-naidu-r-636863167/'>Linkedin</a>!</p>
          <p className='main-paragraph' style={{ textAlign:'justify',padding:0 }}>I am currently pursuing my <b style={{fontSize:'1.2rem'}}>Master's degree and am actively seeking internship or full-time opportunities</b> that align with my expertise and skills. If you have an opportunity that matches, I would be glad to discuss how I can contribute to your team</p>
        </div>
        <div className='right-above'>
          <h1>Skills</h1>
          <div className='skill_styles'>
            {skills.map((val, i) => {
              return <span className='skill-span'>{val}</span>
            })}
          </div>
        </div>
      </div>

        <span ref={section2Ref}></span>
      <Experience/>
      <h1 style={{padding:'20px',display:'flex',justifyContent:'center'}}>Education</h1>
        <div>
        {Object.entries(degree).map(([company, { university, duration, about }]) => (
          <div key={company} style={{paddingBottom:'20px'}}>
            {/* <h2 className="company-title">{company}</h2>
            <p className="role-duration"><strong>Role:</strong> {role} ({duration})</p> */}
            <p style={{fontSize:'1.6rem',paddingBottom:'10px'}}>{company}</p>
            <p style={{fontSize:'1.1rem',color:'#f9e8e8',fontStyle:'italic'}} >{university} || {<span>{duration}</span>}</p>
            <p className='main-paragraph' style={{textAlign:'start',padding:0}}>{about}</p>

          </div>
        ))}
        </div>
      <h1 className="form-title" style={{ textAlign: 'center' }}>Contact</h1>
        <div className="contact-container" ref={section3Ref} style={{display:'flex',flexDirection:'column'}}>
        <p>if you want to contact me directly, please {<a href="mailto:sreeharinaidu46@gmail.com?subject=Hello&body=This is the body text" style={{}}>Mail me directly</a>}</p>

        <ContactForm/>
        </div>
   
       

     

      
    </Container>
      </div>
      <Segment inverted  className='nav-segment-footer'>
       
       <p style={{display:'flex',justifyContent:'center',fontSize:'1.1rem',alignItems:'flex-end',padding:'20px',height:'100%'}}>@Copyright 2024. Made by Sreeharinaidu Rangani</p>
      </Segment>
    </div>
  );
}

export default App;
