import { MeganopteryxLogo } from './MeganopteryxLogo.tsx';
import { SloganRoulette } from './functionalbits/SloganRoulette.tsx';

//TODO: update types for this for some reason it's Any type

function QuickLinksLanding() {
    return (
        <div className="main">
            <div className="logo">
                <div className="logoGlyph">{MeganopteryxLogo()}</div>
                <h1 className="logoText">Meganopteryx<br className="hidden md:visible" />Design</h1>
            </div>
            <div className="slogan">{SloganRoulette()}</div>
            <div className="cardContainer">
                <div className="card">
                    <h2>See what I've made!</h2>
                    <ul>
                        <li><a href="https://github.com/meganopteryx">Github</a></li>
                        <li><a href="https://www.inaturalist.org/people/meganopteryx">iNaturalist</a> (Photography)</li>
                        <li><a href="https://www.instagram.com/meganopteryx/">Instagram</a></li>
                        <li><a href="https://www.tumblr.com/meganopteryx">Tumblr</a> (Old-ish art and worldbuilding)</li>
                        <li><a href="https://www.deviantart.com/meganbednarz">Deviantart</a> (EVEN OLDER art)</li>
                        <li><a href="https://meganopteryx-archive.netlify.app">Ye Olde Website</a> (SUPER OLD)</li>
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