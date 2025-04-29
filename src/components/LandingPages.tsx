import { MeganopteryxLogo } from './MeganopteryxLogo.tsx';
import { SloganRoulette } from './functionalbits/SloganRoulette.tsx'

//TODO: update types for this for some reason it's Any type

function QuickLinksLanding(){
    return (
        <div className="main">
            <div className="logo">
                <div className="logoGlyph">{MeganopteryxLogo()}</div>
                <h1 className="logoText">Meganopteryx<br className="hidden md:visible"/>Design</h1></div>
            <div className="slogan">{SloganRoulette()}</div>
            <div className="card">
                <h2>See what I've made!</h2>
                <ul>
                    <li><a href="https://github.com/meganopteryx">Github</a></li>
                    <li><a href="https://www.inaturalist.org/people/meganopteryx">iNaturalist</a></li>
                    <li><a href="https://www.instagram.com/meganopteryx/">Instagram</a></li>
                    <li><a href="https://www.tumblr.com/meganopteryx">Tumblr (probably has the most art content, but somewhat old)</a></li>
                    <li><a href="https://www.deviantart.com/meganbednarz">Deviantart (EVEN OLDER art)</a></li>
                    <li><a href="https://meganopteryx.com/archive">Ye Olde Website</a> Warning: SUPER OLD DESIGN AND NOT MOBILE FRIENDLY</li>
                </ul>
            </div>
            <div className="card">
                <h2>Buy my stuff!</h2>
                <ul>
                    <li><a href="https://www.teepublic.com/user/meganopteryx">Teepublic</a></li>
                    <li><a href="https://meganopteryx.etsy.com">Etsy Shop</a></li> 
                </ul>
            </div>
            <div className="card">
                <h2>Talk to me!</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/megan-kossa-a0a4351">LinkedIn</a></li>
                    <li><a href="https://x.com/meganopteryx"><s>Twi</s></a><a href="https://bsky.app/profile/meganopteryx.bsky.social"> Bluesky</a></li>
                    <li><a href="https://www.twitch.tv/meganopteryx">Twitch (for the occasional stream)</a></li>
                    <li>Discord @Meganopteryx</li>
                </ul>
            </div>
{/*             
            <h2>Quick Links</h2>
            <ul>
                <li><a href="https://github.com/meganopteryx">Github</a></li>
                <li><a href="https://www.teepublic.com/user/meganopteryx">Teepublic</a></li>
                <li><a href="https://meganopteryx.etsy.com">Etsy Shop</a></li> 
                <li><a href="https://x.com/meganopteryx"><s>Twi</s></a><a href="https://bsky.app/profile/meganopteryx.bsky.social"> Bluesky</a></li>
                <li><a href="https://www.inaturalist.org/people/meganopteryx">iNaturalist</a></li>
                <li><a href="https://www.instagram.com/meganopteryx/">Instagram</a></li>
                <li><a href="https://www.twitch.tv/meganopteryx">Twitch (for the occasional stream)</a></li>
                <li><a href="https://www.tumblr.com/meganopteryx">Tumblr (probably has the most art content, but somewhat old)</a></li>
                <li><a href="https://www.deviantart.com/meganbednarz">Deviantart (EVEN OLDER art)</a></li>
            </ul> */}
            {/* <p>Warning: Here be dragons.... do you dare enter <a href="/archive">ye olde website???</a> (not all content migrated here yet!)</p> */}
            <h2>Chatter</h2>
            <h3>What I'm up to nowadays</h3>
            <p>Let's see... I got into bullet journaling and started collecting Way Too Many stickers, but some of the pages turned out pretty good. I used to do resin casting but haven't had much time for it lately, as it seems I need chunks of uninterrupted time which just doesn't happen as a mom of young kids. I'm doing occasional art commissions and attempting to break into the world of illustration but it's slow going so far. Dipping my feet back into programming, as evidenced here. We got a 3D printer for Christmas and HOLY CRAP I forgot how much work 3D modeling is. I'm much better at painting, so I've been printing things I find and painting them afterwards. It's pretty fun! I might get into tabletop wargaming at some point.</p>
            <p>Otherwise I'm mostly trying to be a good mom of an autistic 5yo and a stay-at-home 1yo, and a good wife for a somewhat-overworked programmer husband. For breaks I do some drawing and crafting and nature photography (which I usually post on <a href="">iNaturalist!</a>). And of course, video games. Can't forget the video games.</p>
            <h3>Where am I most active</h3>
            <p>Discord, no doubt about it. As usual, you can find me as Meganopteryx. Here are a few of my favorite public discords. If you share some of my interests I'd love to see you there! {/* INSERT LINKS HERE */}I'm also occasionally on FFXIV, Crystal DC. You can also find me on Steam. Just plain old texting works great if you know my number! The most consistent way to message me, especially in long-form is email, as follows: meganopteryx at gmail dot com</p>
            <p>See you at church on Sunday, and at the Rattler's Den on Wednesday!</p>
        </div>
    )
};

export { QuickLinksLanding };