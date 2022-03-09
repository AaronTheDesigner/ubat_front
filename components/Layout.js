import Head from 'next/head';
import Nav from '../components/nav/Nav';
import MobileNav from '../components/nav/MobileNav';
import Footer from './nav/Footer';

const Layout = props => {

    return (
        <div>
            <Nav />
                <main className="px-5 sm:px-10 md:px-16 lg:px-28 xl:px-60">
                    {props.children}
                </main>
        </div>
    )
}

export default Layout;