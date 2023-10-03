import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import SeoHead from '../components/SeoHead';
import Offer from '../components/Offer';
import Team from '../components/Team';
import { useState } from 'react';

export default function Home() {
    const [activeLink, setActiveLink] = useState(null);

    return (
        <div
        // style={{
        //     backgroundColor: activeLink === 'team' ? 'black' : 'white',
        //     transition: 'background-color 1s ease',
        // }}
        >
            <SeoHead title="Projekt Plus" />
            <Layout activeLink={activeLink} setActiveLink={setActiveLink}>
                <Hero />
                <Offer />
                <Team />
            </Layout>
        </div>
    );
}
