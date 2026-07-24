import PageHeader from '../components/PageHeader';
import ShopCard from '../components/ShopCard';
import custom3dPrints from '../assets/shop/custom-3d-prints.jpg';
import etsyShop from '../assets/shop/etsy-shop.jpg';
import teepublicShop from '../assets/home/shop-panel.png';
import './Shop.css';

// Wrapped in <Layout> by its route in App.tsx, matching CaseStudies/Portfolio
// (not wrapped internally, unlike About.tsx).
function Shop() {
    return (
        <div className="pageWidthLimiter shopPage">
            <PageHeader title="Shop" />
            <ShopCard
                size="hero"
                title="Custom 3D Prints"
                description="Custom 3D prints for any purpose: data visualizations, articulated creatures, jewelry components, dice, and more. If you can imagine it and it fits on a print bed, let's talk!"
                image={custom3dPrints}
                cta={{ label: 'Request a Quote', href: 'mailto:meganopteryx@gmail.com' }}
            />
            <div className="shopCard-grid-row">
                <ShopCard
                    size="grid"
                    title="Etsy Shop"
                    description="Hand-made jewelry, 3D printed articulated critters, and hand-painted dice! Stock changes regularly so check back often for new products and sales!"
                    image={etsyShop}
                    href="https://meganopteryx.etsy.com"
                />
                <ShopCard
                    size="grid"
                    title="Teepublic Shop"
                    description="Print-to-order T-shirts, mugs, hats, stickers, and more! Put my fun animal drawings on your stuff! If you'd like to see something on here I sometimes take requests! Shoot me an email or a Discord message and I'll see what I can do."
                    image={teepublicShop}
                    href="https://www.teepublic.com/user/meganopteryx"
                />
            </div>
        </div>
    );
}

export default Shop;
