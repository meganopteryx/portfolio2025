import { Header } from '../components/Header'
import Layout from '../components/Layout'
import HomeCard from '../components/HomeCard'
import Footer from '../components/Footer'
import aboutImage from '../assets/home/about-panel.jpg'
import shopImage from '../assets/home/shop-panel.png'

// Public-folder asset — referenced by URL, not imported (Vite doesn't bundle files under public/)
const portfolioImage = '/case-studies/business-coin/cover.webp'

function HomePage() {
    return (
        <Layout footer={<Footer />}>
            <Header />
            <div className="homeCardGrid">
                <HomeCard title="Portfolio" to="/portfolio" image={portfolioImage} bgColor="#d0b89c" />
                <HomeCard title="About" to="/about" image={aboutImage} bgColor="#ffffff" />
                <HomeCard title="Shop" to="/shop" image={shopImage} bgColor="var(--teal-grey)" />
            </div>
        </Layout>
    );
}

export default HomePage;
