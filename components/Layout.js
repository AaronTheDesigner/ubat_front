import Nav from '../components/nav/Nav';
import Footer from './nav/Footer';
import Form from './Form'

const Layout = props => {

    return (
        <div>
            <Nav />
                <main className="">
                    {props.children}                
                </main>
            <Form />
            <Footer />
        </div>
    )
}

export default Layout;