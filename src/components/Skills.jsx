import htmllogo from '../assets/Html.jpg'
import csslogo from '../assets/CSS.jpg'
import jslogo from '../assets/JS.jpg'
import reactlogo from '../assets/Reactjs.jpg'
import typescriptlogo from '../assets/TypeScript.jpg'
import nodejslogo from '../assets/Nodejs.jpg'
import expresslogo from '../assets/ExpressJS.jpg'
import mongodblogo from '../assets/MongoDB.jpg'
import mysqllogo from '../assets/MySQL .jpg'
import csharplogo from '../assets/C-Sharp.jpg'
function Skills () {
    return (
        <div>
            <h2>My Skills</h2>
            <div className="skills">
            <div className='skills-content'>
            <img src={htmllogo} alt="Html Logo" />
            <h4>HTML</h4>
            <p>The standard markup language for creating web pages.</p>
            </div>
            <div className='skills-content'>
            <img src={csslogo} alt="CSS Logo" />
            <h4>CSS</h4>
            <p>Cascading Style Sheets used for describing the presentation of a document written in HTML.</p>
            </div>
            <div className='skills-content'>
            <img src={jslogo} alt="JS Logo" />
            <h4>JavaScript</h4>
            <p>A high-level programming language that enables web development.</p>
            </div>
            <div className='skills-content'>
            <img src={typescriptlogo} alt="TypeScript Logo" />
            <h4>TypeScript</h4>
            <p>A strongly typed programming language that builds on JavaScript.</p>
            </div>
            <div className='skills-content'>
            <img src={reactlogo} alt="React Logo" />
            <h4>React</h4>
            <p>A JavaScript library for building user interfaces.</p>
            </div>
            <div className='skills-content'>
            <img src={nodejslogo} alt="Nodejs Logo" />
            <h4>Node.js</h4>
            <p>A JavaScript runtime built on V8 JavaScript engine running in chrome.</p>
            </div>
            <div className='skills-content'>
            <img src={expresslogo} alt="Expressjs Logo" />
            <h4>Express</h4>
            <p>A fast, minimalist web framework for Node.js used to build web applications and APIs. </p>
            </div>
            <div className='skills-content'>
            <img src={mongodblogo} alt="MongoDB Logo" />
            <h4>MongoDB</h4>
            <p>A NoSQL database that stores data in a flexible, JSON-like document format instead of traditional rows and columns like relational databases.</p>
            </div>
            <div className='skills-content'>
            <img src={mysqllogo} alt="MySQL Logo" />
            <h4>MySQL</h4>
            <p>An open-source relational database management system (RDBMS) that stores and manages structured data using SQL (Structured Query Language</p>
            </div>
            <div className='skills-content'>
            <img src={csharplogo} alt="C-Sharp Logo" />
            <h4>C-Sharp</h4>
            <p>A modern, object-oriented programming language developed by Microsoft as part of the .NET framework.</p>
            </div>
            </div>
        </div>
    );
}
export default Skills;