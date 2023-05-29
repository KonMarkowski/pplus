import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import SeoHead from '../components/SeoHead';
import Offer from '../components/Offer';
import Team from '../components/Team';

export default function Home() {
    return (
        <>
            <SeoHead title="Projekt Plus" />
            <Layout>
                <Hero />
                <Offer />
                <Team />
            </Layout>
        </>
    );
}
