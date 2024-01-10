import './App.css';
import a from './images/24.jpg';
import b from './images/25.jpg';
import c from './images/26.jpg';
import iq from './images/sewingtechniques.jpg'
import aq from './images/sewingtech.jpg'
import cdq from './images/sewtech.jpg'
import Programmes from './programmes';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';


function Courses(){
        const navigate = useNavigate();
      
      const handleButtonClick = () => {
        navigate('/programmes');
        window.scrollTo({
          top: 950,
          left: 0,
          behavior: 'smooth'
        });
      }

      
    return(
        <>

        <div className="kontainer">

<a  href="/home">
      <button className="corner-button">Home</button>
    </a>

    </div>
        <div className="words">
        <h1>
           Pattern Making
        </h1>
        <p>
            Pattern making in fashion design is a crucial and highly skilled process that involves creating the blueprint for a garment.
It serves as a bridge function between design and production, allowing a designer's concept to be translated into a 
real piece of apparel that fits the human body. are you interested in learning pattern making? this course can be found in two of our programmes:


        </p>
    </div>


    <div className="img-container">
        <div className="green"></div>

        <div className="div3">
            <div className="prediv">
        <img src={c} alt="" className="pica3"/>
        <h1>COMPLETE FASHION DESIGN PROGRAMME</h1>
        <a href="/programmes">
              <button>Enroll here</button>
            </a>
    </div>
        </div>

        <div className="pic5">
        <div className="div4">
            <div className="prediv">
        <img src={a} alt="" className="pica4"/>
        <h1>SEWING TECHNIQUE AND PATTERN MAKING CLASS</h1>

        <button onClick={handleButtonClick}>Enroll here</button>
    </div>
        </div>
        </div>
       

            
            
        
    </div>













    <div className="kontainer">

<a  href="/home">
      <button className="corner-button">Home</button>
    </a>

    </div>
    
        <div className="words">
        <h1>
           Fashion Illustration
        </h1>
        <p>
            Fashion is an art, learn to create and express your fashion ideas in illustration. Have that edge in your fashion career, by being innovative.<br/> This course is designed to build students fashion drawing skills using various rendering mediums. Students will learn to find inspiration and build their design ideas.<br/> Through the course, student will complete practical assignments that will help develop and apply your new design and styling skills.

 
<br/>
<br/>
FULL TIME
<br/>
<br/>
DURATION   :  80hrs
<br/>
<br/>
SESSIONS    :  25-30sessions
<br/>
<br/>
COST              :  N60 000

 
<br/>
<br/>
 

 

ONLINE CLASS
<br/>
<br/>
 Personal convenient studying hours, as course materials are ebooks with extensive explanation, images, videos and notes. <br/>Tasks at the end of every topic. Students' level of competence is assessed on completion of practical assignments.
 <br/>
 <br/>
You will have access to study materials for 6month
<br/>
<br/>
QUALIFICATION : No sewing skill is required





Learn to make patterns with CAD. On this course you will learn to digitize your paper patterns. <br/> <br/>Create and modify your blocks with illustrator. This course is for students with atleast little of pattern drafting or cutting skills.

 

DURATION : 80hrs

SESSIONS  : 25-30sessions

COST            : N60 000
        </p>
    </div>


    













    <div className="kontainer">

<a  href="/home">
      <button className="corner-button">Home</button>
    </a>

    </div>



        <div className="words">
        <h1>
           Sewing Technique
        </h1>
        <p>
            Sewing techniques are essential skills for creating professional and flawless garments. Some key sewing techniques include:
            <br/>
<br/>
Threading Your Sewing Machine: Before stitching, it's important to properly thread your sewing machine.
<br/>
<br/>
Hemming: Hemming is the process of folding and sewing the edge of a piece of fabric to prevent it from unraveling. There are various types of hems, such as blind hems and rolled hems, each suitable for different applications.

<br/>
<br/>

Using a Rotary Cutter: A rotary cutter is a valuable tool for cutting fabric with precision and speed. It's important to use a cutting mat to protect the work surface.

<br/>
<br/>
Staystitching: This technique involves stitching along a single fabric layer to prevent stretching and distortion, commonly used on curved edges.

<br/>
<br/>
<b>And so on, are you interested in learning sewing techniques? we have the right programmes for you below:</b>

        </p>
    </div>


    

   


    <div className="img-container">
        <div className="green"></div>

        <div className="div3">
            <div className="prediv">
        <img src={c} alt="" className="pica3"/>
        <h1>COMPLETE FASHION DESIGN PROGRAMME</h1>
        <a href="/programmes">
              <button>Enroll here</button>
            </a>
    </div>
        </div>

        <div className="pic5">
        <div className="div4">
            <div className="prediv">
        <img src={a} alt="" className="pica4"/>
        <h1>SEWING TECHNIQUE AND PATTERN MAKING CLASS</h1>

        <button onClick={handleButtonClick}>Enroll here</button>
    </div>
        </div>
        </div>
        </div>







    <div className="kontainer">

<a  href="/home">
      <button className="corner-button">Home</button>
    </a>

    </div>

        <div className="words">
    <h1>Computer aided pattern drafting</h1>
    <p/>Learn to make patterns with CAD. On this course you will learn to digitize your paper patterns. <br/> <br/>Create and modify your blocks with illustrator. This course is for students with knowledge of pattern drafting or cutting skills.

 
        <br/> <br/>
        DURATION : 80hrs
        <br/> <br/>
        SESSIONS  : 25-30sessions
        <br/> <br/>
        COST            : N60 000

        <p/>
    </div>

    

        </>
    )
}


function routa() {
    return(
        <Routes>
        <Route path="/" element={<Courses />}/>
        <Route path="/programmes" element={<Programmes />}/>
        </Routes>
    )
}

export default routa;