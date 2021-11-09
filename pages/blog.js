import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import BlogContainer from '../components/pages/blog/BlogContainer';
import BlogFeature from '../components/pages/blog/BlogFeature';

const blog = () => {
    return (
        <Layout className="overflow-hidden" >
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/assets/logo.svg" />
            </Head>
            <main>
                <BlogFeature />
                <BlogContainer />
            </main>
        </Layout>
    )
}

export default blog
