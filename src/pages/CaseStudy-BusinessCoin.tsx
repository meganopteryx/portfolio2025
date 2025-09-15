import { MeganopteryxLogo } from '../components/MeganopteryxLogo'

function BusinessCoin() {
    return (
        <div className="main">
            {/* TODO: make this into a complete component - small logo header */}
            <div className="logo pageWidthLimiter">
                <div className="logoGlyph">{MeganopteryxLogo()}</div>
                <h1 className="logoText">Meganopteryx<br className="hidden md-visible" /> Design</h1>
            </div></div>
        );
};

export default BusinessCoin; 