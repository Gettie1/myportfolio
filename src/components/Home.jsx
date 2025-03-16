import profilePic from '../assets/profile.jpg'
import Footer from '../components/Footer.jsx';

function Home() {
  return (
   <> 
      
      <div className="home">
        <h2>
          {" "}
          <marquee>Welcome to my portfolio</marquee>
        </h2>
        <section className="profile">
          <img src={profilePic} alt="My profile" />

          <p>
            Hello,I am <b>Getrude Cheptoo</b> <br />
            <br />I am an enthusiastic Software Engineer and a Full Stack Web
            Developer, passionate about technology, creating innovative web
            applications and solving complex problems with code. With expertise
            in various modern technologies, I strive to build solutions that are
            both functional and user-friendly.
          </p>
        </section>
        <h3 className="deleting-text">An enthusiastic Software Engineer </h3>
    </div>
      <div>{<Footer/>}</div>
    </>
    
  );
};
export default Home;