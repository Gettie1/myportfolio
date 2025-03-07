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
            <p className='skill-title'>HTML</p>
            <p>The standard markup language for creating web pages.</p>
            </div>
            <div className='skills-content'>
            <img src={csslogo} alt="CSS Logo" />
            <p className='skill-title'>CSS</p>
            <p>Cascading Style Sheets used for describing the presentation of a document written in HTML.</p>
            </div>
            <div className='skills-content'>
            <img src={jslogo} alt="JS Logo" />
            <p className="skill-title">JavaScript</p>
            <p>A high-level programming language that enables web development.</p>
            </div>
            <div className='skills-content'>
            <img src={typescriptlogo} alt="TypeScript Logo" />
            <p className="skill-title">TypeScript</p>
            <p>A strongly typed programming language that builds on JavaScript.</p>
            </div>
            <div className='skills-content'>
            <img src={reactlogo} alt="React Logo" />
            <p className="skill-title">React</p>
            <p>A JavaScript library for building user interfaces.</p>
            </div>
            <div className='skills-content'>
            <img src={nodejslogo} alt="Nodejs Logo" />
            <p className="skill-title">Node.js</p>
            <p>A JavaScript runtime built on V8 JavaScript engine running in chrome.</p>
            </div>
            <div className='skills-content'>
            <img src={expresslogo} alt="Expressjs Logo" />
            <p className="skill-title">Express</p >
            <p>A fast, minimalist web framework for Node.js used to build web applications and APIs. </p>
            </div>
            <div className='skills-content'>
            <img src={mongodblogo} alt="MongoDB Logo" />
            <p className="skill-title">MongoDB</p>
            <p>A NoSQL database that stores data in a flexible, JSON-like document format instead of traditional rows and columns like relational databases.</p>
            </div>
            <div className='skills-content'>
            <img src={mysqllogo} alt="MySQL Logo" />
            <p className="skill-title">MySQL</p>
            <p>An open-source relational database management system (RDBMS) that stores and manages structured data using SQL (Structured Query Language</p>
            </div>
            <div className='skills-content'>
            <img src={csharplogo} alt="C-Sharp Logo" />
            <p className="skill-title">C-Sharp</p>
            <p>A modern, object-oriented programming language developed by Microsoft as part of the .NET framework.</p>
            </div>
            </div>
        </div>
    );
}
export default Skills;