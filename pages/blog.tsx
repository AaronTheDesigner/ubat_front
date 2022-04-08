import Head from 'next/head';
import Layout from '../components/Layout';
import PostCard from '../components/pages/blog/PostCard';
import BlogFeature from '../components/pages/blog/BlogFeature';

type Post = {
    id: string,
    title: string,
    custom_excerpt: string,
    featured: boolean,
    primary_author: {
        profile_image: string,
        name: string
    },
    feature_image: string
    slug: string
    tags: [{
        id: string,
        name: string,
        slug: string
    }]
}


async function getPosts() {
    const res = await fetch(
      `${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&include=authors&include=tags&fields=id,title,custom_excerpt,featured,primary_author,feature_image,slug&filter=tag:blog`
    ).then((res) => res.json())
  
    const posts = res.posts;

    return posts
}

export const getStaticProps = async () => {
    const posts = await getPosts()

    return {
        props: { posts },
        revalidate: 10
    }
}


const Blog:React.FC<{ posts: Post[] }> = (props) => {

    const { posts } = props;

    const standardPosts = posts.filter(post => {return post.featured === false})

    const featuredPost = posts.find(post => {return post.featured === true});

    return (
        <Layout className="overflow-hidden" >
            <Head>
                <title>Upgrades By Aaron Toliver: Blog</title>
                <meta name="description" content="Web Development, App Development, Blog"/>
                <meta name="theme" content="#0F1624"/>
                <meta name="msapplication-navbutton-color" content="#0F1624"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="#0F1624"/>
                <link rel="icon" href="/assets/UAT.svg" />
            </Head>
            <main className='px-2 sm:px-10 md:px-16 lg:px-28 xl:px-60'>                
                <div className="grid place-content-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-auto gap-5">
                    <div className="col-span-1 sm:col-span-2 xl:col-span-3">
                        <BlogFeature 
                            title={featuredPost.title}
                            image={featuredPost.feature_image}
                            excerpt={featuredPost.custom_excerpt}
                            tags={featuredPost.tags}
                            author={featuredPost.primary_author}
                            slug={featuredPost.slug}
                        />
                    </div>
                    
                    {standardPosts.map(post => {
                        return ( 
                        <div className="" key={post.id}>
                            <PostCard
                                title={post.title}
                                image={post.feature_image}
                                excerpt={post.custom_excerpt}
                                tags={post.tags}
                                author={post.primary_author}
                                slug={post.slug}
                            />
                        </div>
                        )
                    })}
                </div>
            </main>
        </Layout>
    )
}

export default Blog
