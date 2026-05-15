//import { MeganopteryxLogo } from '../components/MeganopteryxLogo'
import { Header } from '../components/Header'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import useModal from '../hooks/useModal'
import ContactModal from '../components/modals/ContactModal'

function HomePage() {
    const { openModal } = useModal();

    return (
        <Layout showNav={false}>
        <div className="main">
            <Header />
            <div className="pageWidthLimiter cardContainer">
                <Link className="fancy card portfolioCard" to="/portfolio">
                    <h2>Portfolio</h2>
                </Link>
                <Link className="fancy card aboutMeCard" to="/about">
                    <h2>About Me</h2>
                </Link>
                <button className="fancy card contactCard" onClick={() => openModal(<ContactModal />)}>
                    <h2>Contact Me</h2>
                </button>
                <a href="https://meganopteryx-archive.netlify.app" className='card'><h2>Old Website (2015)</h2></a>
                <div className="card">
                    <h2>Buy my stuff!</h2>
                    <ul>
                        <li><a href="https://www.teepublic.com/user/meganopteryx">Teepublic</a></li>
                        <li><a href="https://meganopteryx.etsy.com">Etsy Shop</a></li>
                        <li><a href="mailto:meganopteryx@gmail.com">Commission me!</a></li>
                        {/* TODO: Make the commission form if needed*/}
                    </ul>
                </div>
                <a href="/Megan Kossa - Developer and Designer - May 2026.pdf" className="card"><h2>Download Resume</h2></a>
            </div>
        </div>
        </Layout>
    );
}

export { HomePage };