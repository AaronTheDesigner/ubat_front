import Head from 'next/head';
import Nav from '../components/nav/Nav';
import MobileNav from '../components/nav/MobileNav';
import Footer from './nav/Footer';

const Layout = props => {

    return (
        <div>
            <Nav />
            <MobileNav />
                <main className="pt-16 container mx-auto">
                    {props.children}
                </main>
            <Footer />
        </div>
    )
}

export default Layout;