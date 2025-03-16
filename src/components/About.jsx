import Hacknight from '../assets/csk-hacknight.jpg'
import cskladies from '../assets/csk ladies.jpg'
import Footer from'../components/Footer.jsx'
function About() {
    return (
      <div className='about'>
        <div>
          <h1>About Me.</h1>
          <p>
            I am a second year student at Kirinyaga University
            pursuing Bachelor of Science in Software Engineering passionate
            about technology and more into Full Stack Web Development.{" "}
          </p>
          <p>
            Currently, I am diving into different technologies and a proud
            member of Computer Society of Kirinyaga.I like problem solving for
            example participating in group coding challenges and also taking
            part in different hackathons.Outside coding I enjoy listening to
            music, travelling and participating in Community Development.{" "}
          </p>
            </div><br />
            <h3>Below are some of the hackathons and coding challenges I took part in.</h3>
        <div className='gallery'>
          <div>
                    <img src={cskladies} alt="cskladies" />
                    <p>This is one of the meeting we had as Computy Society of Kirinyaga </p>
          </div>
          <div>
                    <img src={Hacknight} alt="cskhacknight" />
                    <p>This is one of the Hacknight we had as Computer Society of Kirinyaga</p>
          </div>
        </div>
        <div>{<Footer />}</div>
      </div>
    );

    
}
export default About;