import CsharpCert from '../assets/csharpcert.jpg';
import ReactCert from '../assets/reactcert.jpg';
import JsHtmlCssCert from '../assets/jshtmlcert.jpg';
import GithubGitCert from '../assets/githubcert.jpg';

function Certificates() {
    return (
        <div>
            <h2>My Certificates</h2>
            <section className="certificates">
                <img src={CsharpCert} alt="C-Sharp Certificate" />
                <img src={ReactCert} alt="React Certificate" />
                <img src={JsHtmlCssCert} alt="JS, HTML, CSS Certificate" />
                <img src={GithubGitCert} alt="Github, Git Certificate" />
            </section>
        </div>
    );
}
export default Certificates;