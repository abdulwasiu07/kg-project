import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function Sewingtechniques(){

    
    return(
        <>


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
        <img src="pexels-fuzail-ahmad-9208706.jpg" alt="" className="pica3"/>
        <a href="/complete">
              <button>Pattern making</button>
            </a>
    </div>
        </div>

        <div className="div4">
            <div className="prediv">
        <img src="pexels-fuzail-ahmad-9208706.jpg" alt="" className="pica4"/>
        <a href="/sewpat">
              <button>Sewing technique</button>
            </a>
    </div>
        </div>

        <img src="pexels-studio-art-smile-6396960.jpg" alt="" className="pic5"/>
    </div>
        </>
    )
}

export default Sewingtechniques;