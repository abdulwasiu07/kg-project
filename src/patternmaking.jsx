import './App.css';
import a from './images/24.jpg';
import b from './images/25.jpg';
import c from './images/26.jpg';




function Patternmaking(){
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
        <a href="/complete">
              <button>Click to know more</button>
            </a>
    </div>
        </div>

        <div className="div4">
            <div className="prediv">
        <img src={a} alt="" className="pica4"/>
        <h1>SEWING TECHNIQUE AND PATTERN MAKING CLASS</h1>
        <a href="/sewpat">
              <button>Click to know more</button>
            </a>
    </div>
        </div>

            
            
        <img src={b} alt="" className="pic5"/>
    </div>
    </>
    )
}

export default Patternmaking;