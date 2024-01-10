import logo from './logo.svg';
import kg from './images/kg.jpg';
import hg from './images/mikasa.png';
import a from './images/fashionschool.jpg';
import AJ from './images/kglogo.png'
import b from './images/2.jpg';
import c from './images/3.jpg';
import d from './images/4.jpg';
import e from './images/5.jpg';
import f from './images/6.jpg';
import g from './images/13.mp4';
import h from './images/8.mp4';
import i from './images/9.jpg';
import j from './images/10.jpg';
import Patternmaking from './patternmaking';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import Sewingtechniques from './sewingtechniques';
import Fashionillsutration from './fashionillustraion';
import Cad from './cad';
import Complete from './complete';
import Sewingtechnique from './sewpat';
import t from './images/gashionillustration.jpg';
import u from './images/fashionillustration.jpg';
import v from './images/sewingtechniques.jpg';
import w from './images/patternmaking.jpg';

import './App.css';
import Programmes from './programmes';

import Courses from './courses';

import Appa from './button';


function Home() {
  const navigate = useNavigate();

const handleButtonClick = () => {
  navigate('/courses');
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // optional, adds smooth scrolling effect
  });
}

  const handleButtonClick2 = () => {
    navigate('/programmes');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // optional, adds smooth scrolling effect
    })
}
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
    <>

    <nav>
        
    <ul className="ulOne">
        <li><img src="kg-project\src\logo.svg" className="logoImage"></img></li>
        <li> <a href="#">Live</a></li>
        <li> <a href="#">Push</a></li>
        <li> <a href="#">Note</a></li>
        <li> <a href="#">Link</a></li>
        <li> <a href="#">Shop</a></li>
        <li> <a href="#">Packs</a></li>
        <li> <a href="#">Help</a></li>
      
        <li><button onclick="myFunction()">More</button></li>
    </ul>

    <ul>
        <li><span>Try Live for free</span></li>
        <li>Log in or register</li>
    </ul>
</nav>

<h1> More about Ableton:</h1>
        <div className="two">
        <ul>
            <li><span>Learning Music</span></li>
            <li> <a href="#">Watch Talks, Performances and Features from Ableton's Summit for Music Makers</a></li>
        </ul>

        <ul>
            <li><span>Learning Synths</span></li>
            <li> <a href="#">Get started with synthesis using a web right in your browser.</a></li>
        </ul>

        <ul>
            <li><span>loop</span></li>
            <li> <a href="#">Watch Talks, Performances and Features from Ableton's Summit for Music Makers</a></li>
        </ul>


        <ul>
            <li><span>Making Music</span></li>
            <li> <a href="#">Some tips from 74 Creative Strategies for Electronic Producers.</a></li>
        </ul>
        </div>
         <div className="words">
        <h1>We make <span>Live</span>, <span>Push</span> and <span>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h1>

        <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
    </div>



    <div className="words">
        <h1>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h1>
        <p>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
    </div>


    <div className="img-container">
        <div className="green"></div>
        <img src="pexels-fuzail-ahmad-9208706.jpg" alt="" className="pic3"/>
        <img src="pexels-gábor-balázs-17939623.jpg" alt="" className="pic4"/>
        <img src={h} alt="" className="pic5"/>
    </div>

        
        <div className="words">
        <h1>We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</h1>
        <p>Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</p>
    </div>

    <div className="img-container2">
        <video src={g} type="video/mp4" className="pic6"/>
    </div>


    <div className="words">
        <h1>We’re passionate about what we do, but we’re equally passionate about improving who we are.</h1>
        <p>We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.

            Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.</p>
    </div>

    <div className=" img-container link">
        <img src={b} alt="" className="pic9"/>
        <div className="Packs">
            <div className="skr">
            
            <h1> We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h1>
            <br/>
        <a href=""> See latest Jobs </a>  </div>
            </div>
    </div>








    <div className="gallery-item">
            <img src={u} alt="Image 1"/>
            <h5>Fashion illustration</h5>
            <Link to="/fashionillustration">
              <button>click to learn more</button>
            </Link>
          </div>
          
          <div className="gallery-item">
            <img src={t} alt="Image 1"/>
            <h5>Computer aided pattern drafting</h5>
            <Link to="/cad">
              <button>enroll now</button>
            </Link>
          </div>
        
        */
<>
        <div className="container">
        <img src={hg} alt='p'></img>
        <div className="center">
          <h1>Welcome</h1> 
          <p>To KG school of fashion</p>​
            ​</div>
    </div>

    <div className="words">
        <h1> Learn Fashion Design the Right Way</h1>

        <p>We train interested individuals in the arts of Pattern drafting, designing, measuring, cuttings. We blend the western fashion styles with our own kind of African fashion style. Its all about innovation and creativity.

             You will enjoy the pride of designing and sewing your own clothes,and also become a professional designer depending on your aims and aspirations. 
             </p>
             
    </div>
    

    <div className="img-container">
        <div className="pic1">
            <h1> Design Your Career  With Our Fashion Design School

            </h1>
            
            <p> 
One of today’s hottest careers is Fashion designing, apparel manufacturing, creating trendy designs of men, women, and children, and clothings  for the mass market.
Here, we will help you break into this exciting industry.

            </p>
            </div>

        <div className="yellow"></div>
        <img className="pic2" src={a}/>
        </div>

        <div className="words">
        <h1>What courses do we offer? and what programmes are available?</h1>

        <p>we offer are a total of four courses and you can enroll into our four programmes, which are:
             </p>
             
    </div>



    <div className="img-container">
        <div className="purple"></div>
        <div className="pic7">
          <h1>
            courses
          </h1>
          <p>
            :pattern making
            <br/><br/>
            :Sewingtechniques
            <br/><br/>
            :Fashion illsutration
            <br/><br/>
            :Computer aided pattern drafting
            <br/><br/>
            <br/><br/>

            <b>scroll below to view courses</b>

          </p>
        </div>

        <div className="pic8">
          <h1>
            Programmes
          </h1>
          <p>
          :COMPLETE FASHION DESIGN PROGRAMME
            <br/><br/>
            :SEWING TECHNIQUE AND PATTERN MAKING CLASS
            <br/><br/>
            :Fashion illustration class
            <br/><br/>
            :Computer aided pattern drafting class

          </p>
        </div>
      
    </div>

    <div className="words">
        <h1>Courses:</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>  
    </div>

    




  
<div className='gba'>

    <div className="gallery">
        <div className="gallery-item">
          <img src={w} alt="Image 1"/>
          <h5>Courses</h5>
          <button onClick={handleButtonClick}>click to learn more</button>
          
        </div>

        <div className="gallery-item">
          <img src={v} alt="Image 2"/>
          <h5>Programmes</h5>
          
        
          <button onClick={handleButtonClick2}>click to learn more</button>
              
            
        </div>

      
        
          </div>
          
          </div>

      
      


   

    


    

    

    


    <hr/>
    

    <div className="kontainer">
    
<a  href="/courses">
      <button className="corner-button"> Courses </button>
    </a>

    </div>

    <div className="kontainer">

<a  href="/programmes">
      <button className="corner-button2"> Programmes </button>
    </a>

    </div>

    <div className="corner-button3">

    <img src={AJ} className="logoImage"></img>

    </div>
</>
  );
}





 



/*const OtherPage = () => {
return (
  <div>
    <h1>Other Page</h1>
    {/* Content of the other page }
  </div>
);
};

const App = () => {
return (
  <Router>
    <Route exact path="/" component={HomePage} />
    <Route path="/otherpage" component={OtherPage} />
  </Router>
);
};*/





function App(){
  return (
  <section className="main-continer">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path='/sewingtechniques' element={<Sewingtechniques />}/>
      <Route path="/patternmaking" element={<Patternmaking />}/>
      <Route path="/fashionillustration" element={<Fashionillsutration />}/>
      <Route path="/complete" element={<Complete />}/>
      <Route path="/programmes" element={<Programmes />}/>
      <Route path="/sewpat" element={<Sewingtechnique />}/>
      <Route path="/courses" element={<Courses />}/>
      <Route path="/cad" element={<Cad />}/>
    </Routes>
  </section>
  )
}

/*document.querySelector('big4').addEventListener('click', function() {
  // Scroll the page to the top
  window.scrollTo(0, 0);
});*/


export default App;


