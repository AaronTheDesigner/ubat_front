import { useRouter } from "next/router";
import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

//const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPost(slug: string) {
    const res = await fetch(
        `${process.env.BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${process.env.CONTENT_API_KEY}&fields=title,slug,html,feature_image`
    ).then((res) => res.json())

    const posts = res.posts;

    return posts[0]
}

export const getStaticProps = async ({ params }) => {

    const post = await getPost(params.slug)  
    return {
      props: { post },
      revalidate: 10 // at most one request every 10 seconds
    }
  
  }

export const getStaticPaths = () => {

    // paths => slugs are allowed
    // fallback => attempt to retrieve data
    return {
        paths: [],
        fallback: true
    }
}

type Post = {
    title: string,
    slug: string,
    html: string,
    feature_image: string
}

const Post: React.FC<{post: Post}> = (props) => {

    const { post } = props;
    const { title, slug, html, feature_image } = post;

    console.log(feature_image)
    const [enableLoadComments, setEnableLoadComments] = useState<boolean>(true)


    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    const loadComments = () => {    
        setEnableLoadComments(false)
        ;(window as any).disqus_config = function () {
        this.page.url = window.location.href  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = post.slug // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
    
        const script = document.createElement('script')
        script.src = 'https://upgradesbyat.disqus.com/embed.js'
        script.setAttribute('data-timestamp', Date.now().toString())
    
        document.body.appendChild(script);
    }
    // px-5 sm:px-10 md:px-16 lg:px-28 xl:px-60
    return(
        <Layout>
            <div className=" text-gray-100 text-opacity-90 px-2 sm:px-10 md:px-16 lg:px-28 xl:px-60">
            <Button href="/" name="back" />
                <div className="gh-content text-lg tracking-wider md:text-xl xl:text-2xl">                    
                    <div className="grid place-items-center" >
                        <h1>{title}</h1>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: html}} ></div>

                    {enableLoadComments && (
                        <button onClick={loadComments} className="bg-orange text-black rounded-lg p-2 hover:text-white transition-all">
                            Load Comments
                        </button>
                    )}        
                    <div id="disqus_thread"></div>
                </div>                
            </div>

        </Layout>
    )
}

export default Post;