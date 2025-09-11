import { MeganopteryxLogo } from './MeganopteryxLogo'

//Landing page displays differently than sub pages. Maybe a different component idk
function Header() {
    return (
        <div className="logo pageWidthLimiter">
            <div className="logoGlyph">{MeganopteryxLogo()}</div>
            <h1 className="logoText">Meganopteryx<br className="hidden md-visible" /> Design</h1>
        </div>
        )
};

export { Header };