import { MeganopteryxLogo } from './MeganopteryxLogo.tsx';
import { SloganRoulette } from './functionalbits/SloganRoulette.tsx';

function QuickLinksLanding() {
    return (
        <div className="main">
            <div className="logo pageWidthLimiter">
                <div className="logoGlyph">{MeganopteryxLogo()}</div>
                <h1 className="logoText">Meganopteryx<br className="hidden md-visible" /> Design</h1>
            </div>
            <div className="slogan">{SloganRoulette()}</div>
            <div className="pageWidthLimiter">
                <p className="blurb">I've worked as a game developer, 2d animator, full-stack web developer, and artist! I specialize in art that draws on the beauty of the natural world in resin-cast insects and other little critters, including cicada wing earrings. I paint figurines and toys for all to enjoy, as well as create custom 3D printed things!</p>
            </div>
            <div className="pageWidthLimiter cardContainer">
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
    );
}

export { QuickLinksLanding };