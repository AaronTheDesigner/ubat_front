import Head from 'next/head';
import Layout from '../components/Layout';
import PostCard from '../components/pages/blog/PostCard';
import BlogFeature from '../components/pages/blog/BlogFeature';

type Post = {
    id: string,
    title: string,
    custom_excerpt: string,
    featured,
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
                <title>Blog</title>
                <link rel="icon" href="/assets/logo.svg" />
            </Head>
            <main>
                <BlogFeature 
                    title={featuredPost.title}
                    image={featuredPost.feature_image}
                    excerpt={featuredPost.custom_excerpt}
                    tags={featuredPost.tags}
                    author={featuredPost.primary_author}
                    slug={featuredPost.slug}
                />
                <div className="flex flex-wrap gap-3 justify-center py-5 sm:px-0 md:px-0 lg:px-28">
                    {standardPosts.map(post => {
                        return ( 
                        <div className="flex flex-col w-80 bg-gray-200 p-3 rounded-lg w shadow-md justify-between items-center" key={post.id}>
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
