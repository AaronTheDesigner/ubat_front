import Head from 'next/head';
import Layout from '../components/Layout';
import PostCard from '../components/pages/blog/PostCard';
import BlogFeature from '../components/pages/blog/BlogFeature';

type Post = {
    id: string,
    title: string,
    custom_excerpt: string,
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
      `${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&include=authors&include=tags&fields=id,title,custom_excerpt,primary_author,feature_image,slug&filter=featured:false`
    ).then((res) => res.json())
  
    const posts = res.posts;

    return posts
}

async function getFeatured() {
    const res = await fetch(
        `${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&include=authors&include=tags&fields=id,title,custom_excerpt,primary_author,feature_image,slug,uuid&filter=featured:true`
    ).then((res) => res.json())

    const featured = res.posts[0]

    return featured
}

export const getStaticProps = async ({ params }) => {
    const posts = await getPosts()
    const featured = await getFeatured()

    return {
        props: { posts, featured },
        revalidate: 10
    }
}


const Blog:React.FC<{ posts: Post[], featured: Post }> = (props) => {

    const { posts, featured } = props;

    return (
        <Layout className="overflow-hidden" >
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/assets/logo.svg" />
            </Head>
            <main>
                <BlogFeature 
                    title={featured.title}
                    image={featured.feature_image}
                    excerpt={featured.custom_excerpt}
                    tags={featured.tags}
                    author={featured.primary_author}
                    slug={featured.slug}
                />
                <div className="flex flex-wrap gap-3 justify-center py-5 sm:px-0 md:px-0 lg:px-28">
                    {posts.map(post => {
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
