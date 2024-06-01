import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import SeoHead from '../components/SeoHead';
import Offer from '../components/Offer';
import Team from '../components/Team';
import { useState } from 'react';
import About from '@/components/About';

export default function Home() {
    const [activeLink, setActiveLink] = useState(null);

    return (
        <div>
            <SeoHead title="Projekt Plus" />
            <Layout activeLink={activeLink} setActiveLink={setActiveLink}>
                <About />
            </Layout>
        </div>
    );
}
