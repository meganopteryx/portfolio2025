//import { MeganopteryxLogo } from '../components/MeganopteryxLogo'
import { Header } from '../components/Header'
import Layout from '../components/Layout'
import useModal from '../hooks/useModal'
import ModalExample from '../components/examples/ModalExample'
import AboutModal from '../components/examples/AboutModal'

function HomePage() {
    const { openModal } = useModal();

    return (
        <Layout showNav={false}>
        <div className="main">
            <Header />
            {/* <div className="pageWidthLimiter"> TODO: put this in a modal
              <h2>Product Designer & Full-Stack Developer seeking new opportunities.</h2>
                <p className="blurb">I'm a full-stack developer with deep front-end expertise actively pursuing product designer roles. My unique background spans user experience, visual design, and technical implementation, giving me a rare understanding of what's possible and practical in digital products.</p>
                <p>My design philosophy centers on making complex ideas accessible and beautiful. Whether I'm crafting user interfaces or handcrafting art pieces that transform fear of insects into fascination, I focus on bridging gaps: between users and technology, between form and function.</p>
                <p>My artistic practice in resin casting and jewelry design has sharpened my eye for detail, color theory, and user psychology. This hands-on creative work translates directly into stronger visual design skills and deeper empathy for crafting experiences that truly resonate with people.</p>
                <p className='italic'>Currently seeking full-time product design opportunities. Available for contract development work and custom art commissions.</p>
            </div> */}
            <div className="pageWidthLimiter cardContainer">
                                <button
                                                    className="fancy card portfolioCard"
                                                    onClick={() => openModal(<ModalExample />)}
                                                >
                                                    <h2>Portfolio</h2>
                                                </button>
                                <button className="fancy card aboutMeCard" onClick={() => openModal(<AboutModal />)}>
                                    <h2>About Me</h2>
                                </button>
                                <button className="fancy card contactCard" onClick={() => openModal(<ModalExample />)}>
                                    <h2>Contact Me</h2>
                                </button>
                <div className="card">
                    <h2>See what I've made!</h2>
                    <ul>
                        <li><a href="https://github.com/meganopteryx">Github</a></li>
                        <li><a href="https://www.instagram.com/meganopteryx/">Instagram</a></li>
                        <li><a href="https://www.tumblr.com/meganopteryx">Tumblr</a> (Art and worldbuilding)</li>
                        <li><a href="https://www.deviantart.com/meganbednarz">Deviantart</a> (EVEN OLDER art)</li>
                        <li><a href="https://meganopteryx-archive.netlify.app">Ye Olde Website</a> (SUPER OLD)</li>
                        <li><a href="https://www.inaturalist.org/people/meganopteryx">iNaturalist</a> (Photography)</li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Buy my stuff!</h2>
                    <ul>
                        <li><a href="https://www.teepublic.com/user/meganopteryx">Teepublic</a></li>
                        <li><a href="https://meganopteryx.etsy.com">Etsy Shop</a></li>
                        <li><a href="mailto:meganopteryx@gmail.com">Commission me!</a></li>
                        {/* TODO: Make the commission form */}
                    </ul>
                </div>
                <div className="card">
                    <h2>Talk to me!</h2>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/megan-kossa-a0a4351">LinkedIn</a></li>
                        <li>
                            <a href="https://x.com/meganopteryx"><s>Twi</s></a>
                            <a href="https://bsky.app/profile/meganopteryx.bsky.social"> Bluesky</a>
                        </li>
                        <li><a href="https://www.twitch.tv/meganopteryx">Twitch (for the occasional stream)</a></li>
                        <li>Discord @Meganopteryx</li>
                    </ul>
                </div>
            </div>
        </div>
        </Layout>
    );
}

export { HomePage };