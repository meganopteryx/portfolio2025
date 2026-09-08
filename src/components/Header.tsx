import { MeganopteryxLogo } from './MeganopteryxLogo'
import './Header.css'

function Header() {
    return (
        <header className="siteHeader">
            <div className="siteHeader-logo">
                <div className="siteHeader-glyph"><MeganopteryxLogo /></div>
                <h1 className="siteHeader-title">Meganopteryx<br />Design</h1>
            </div>
            <p className="siteHeader-tagline">3D Printing ∙ Product Design ∙ Illustration ∙ Web Development</p>
        </header>
    )
};

export { Header };
