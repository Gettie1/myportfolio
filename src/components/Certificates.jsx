import CsharpCert from '../assets/csharpcert.jpg';
import ReactCert from '../assets/reactcert.jpg';
import JsHtmlCssCert from '../assets/jshtmlcert.jpg';
import GithubGitCert from '../assets/githubcert.jpg';
import Footer from  '../components/Footer.jsx'

function Certificates() {
    return (
      <>
        <div>
                <h2>My Certificates</h2>
                <p>Below are some of the certificates I got from different sources and I really learnt alot and I am now appliying the skills I got from those trainings. </p>
          <section className="certificates">
            <img src={CsharpCert} alt="C-Sharp Certificate" />
            <img src={ReactCert} alt="React Certificate" />
            <img src={JsHtmlCssCert} alt="JS, HTML, CSS Certificate" />
            <img src={GithubGitCert} alt="Github, Git Certificate" />
          </section>
            </div>
            <div>{<Footer/>}</div>
      </>
    );
}
export default Certificates;