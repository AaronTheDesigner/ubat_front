import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import BlogContainer from '../components/pages/blog/BlogContainer';

const blog = () => {
    return (
        <Layout className="overflow-hidden" >
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/assets/logo.svg" />
            </Head>
            <main>
                <BlogContainer />
            </main>
        </Layout>
    )
}

export default blog
