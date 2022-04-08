import Head from 'next/head';
import Layout from '../components/Layout';
import MainStandard from '../components/MainStandard';
import Services from '../components/Services';
import Experience from '../components/pages/main/Experience';
import Project from '../components/pages/main/Project';
import CTASection from '../components/CTASection';
import Benefits from '../components/Benefits';
import Reviews from '../components/pages/main/Reviews';



type Project = {
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
    `${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&include=authors&include=tags&fields=id,title,custom_excerpt,featured,primary_author,feature_image,slug&filter=tag:experience`
  ).then((res) => res.json())

  const projects = res.posts;

  return projects
}

export const getStaticProps = async () => {
  const projects = await getPosts()

  return {
      props: { projects },
      revalidate: 10
  }
}

const Home:React.FC<{ projects: Project[] }> = (props) => {

  const { projects } = props;

  return (
    <Layout className="overflow-hidden">

      <Head>
        <title>Upgrades By Aaron Toliver: Web Development, App Development</title>
        <meta name="description" content="Web Development, App Development"/>
        <meta name="theme" content="#0F1624"/>
        <meta name="msapplication-navbutton-color" content="#0F1624"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#0F1624"/>
        <link rel="icon" href="/assets/UAT.svg" />
      </Head>
      <MainStandard/>
      <Services />
      <Experience projects={projects} />
      <CTASection />
      <Benefits />
      <Reviews />
    </Layout> 
  )
}

export default Home
