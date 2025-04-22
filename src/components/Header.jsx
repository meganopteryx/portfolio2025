
//This should only get imported in non-landing pages
//Check state to track the currently selected page things
function Header() {
    return (
        <div className="header">
            <h1>Meganopteryx Design</h1>
            <navigator>
                <a>Art Gallery</a>
                <a>Design Philosophy</a>
                <a>Commission Pricing</a>
                <a>Store</a>
                <a>Affiliates</a>
            </navigator>
        </div>)
        //Some of these are wishful really
};

export default Header;