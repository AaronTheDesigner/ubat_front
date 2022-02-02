import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import MainStandard from '../components/MainStandard';
import Services from '../components/pages/main/Services';
import Experience from '../components/pages/main/Experience';
import Reviews from '../components/pages/main/Reviews';
import Contact from '../components/pages/main/Contact';
import Project from '../components/pages/main/Project';


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
  // const [_document, set_document] = useState(null)

  // const animation = () => {
  //   set_document(document)
  //   let path = document.querySelector('#path');
  //   console.log(path)
  //   let pathLength = path.getTotalLength();

  //   path.style.strokeDasharray = pathLength + ' ' + pathLength;
    
  //   let pathString: string = pathLength.toString() 
  //   path.style.strokeDashoffset = pathString;


  //   window.addEventListener('scroll', () => {

  //     let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  //     let drawLength = pathLength * scrollPercentage; 
      
  //     let result = pathLength - drawLength

  //     let resultString = result.toString()

  //     path.style.strokeDashoffset = resultString;

  //   })
  // }

  // useEffect(() => {
  //   animation();

  // }, [])


  const { projects } = props;

  return (
    // <Layout className="overflow-hidden">
    //   <div className="line-container">
    //     <svg viewBox="0 0 173 939" fill="none" preserveAspectRatio="xMidYMax meet">
    //       <path id="path" d="M168.5 2L44 204.5L156 314L44 470.5L168.5 585L5 707L122 770.5L168.5 892.5L44 936" stroke="black" strokeWidth="5"/>
    //     </svg>

    //   </div>

    //   <Head>
    //     <title>AT Upgrades Basic Website</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/assets/logo.svg" />
    //   </Head>
    //   <MainStandard />
    //   <Services />
    //   <Experience projects={projects} />
    //   <Reviews />
    //   <Contact />
    // </Layout>
        <div className='grid place-items-center p-3 h-screen'>
          <div className="flex flex-col w-9/12 items-center gap-y-7 logo">
            <div className="w-1/3 sm:w-1/4">
              <svg width="" height="" viewBox="0 0 105 68" fill="none">
                <path id="initials" d="M59.75 66.8281C60.2812 66.0469 60.3594 65.2344 59.9844 64.3906L32.8906 2.51562C32.4531 1.48438 31.6719 0.96875 30.5469 0.96875C29.4219 0.96875 28.625 1.48438 28.1562 2.51562L1.10938 64.3906C0.828125 65.0469 0.8125 65.7031 1.0625 66.3594C1.3125 67.0156 1.76562 67.4844 2.42188 67.7656C2.76562 67.9219 3.10938 68 3.45312 68C4.57812 68 5.375 67.4844 5.84375 66.4531L30.5469 9.96875L53.6562 62.8438H24.0781C23.3594 62.8438 22.75 63.0938 22.25 63.5938C21.75 64.0938 21.5 64.7031 21.5 65.4219C21.5 66.1406 21.75 66.75 22.25 67.25C22.75 67.75 23.3594 68 24.0781 68H57.5938C58.5312 68 59.25 67.6094 59.75 66.8281ZM75.0781 6.125V65.4219C75.0781 66.1406 75.3281 66.75 75.8281 67.25C76.3281 67.75 76.9375 68 77.6562 68C78.375 68 78.9844 67.75 79.4844 67.25C79.9844 66.75 80.2344 66.1406 80.2344 65.4219V6.125H101.516C102.203 6.125 102.812 5.875 103.344 5.375C103.844 4.875 104.094 4.26562 104.094 3.54688C104.094 2.82813 103.844 2.21875 103.344 1.71875C102.812 1.21875 102.203 0.96875 101.516 0.96875H53.7969C53.0781 0.96875 52.4688 1.21875 51.9688 1.71875C51.4688 2.21875 51.2188 2.82813 51.2188 3.54688C51.2188 4.26562 51.4688 4.875 51.9688 5.375C52.4688 5.875 53.0781 6.125 53.7969 6.125H75.0781Z" fill="black"/>
              </svg>
            </div>
            <div className='w-7/12 md:w-5/12'>
              <svg width="" height="" viewBox="0 0 278 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="name" d="M22.9062 25.5605C23.1055 25.2676 23.1348 24.9629 22.9941 24.6465L12.834 1.44336C12.6699 1.05664 12.377 0.863281 11.9551 0.863281C11.5332 0.863281 11.2344 1.05664 11.0586 1.44336L0.916016 24.6465C0.810547 24.8926 0.804688 25.1387 0.898438 25.3848C0.992188 25.6309 1.16211 25.8066 1.4082 25.9121C1.53711 25.9707 1.66602 26 1.79492 26C2.2168 26 2.51562 25.8066 2.69141 25.4199L11.9551 4.23828L20.6211 24.0664H9.5293C9.25977 24.0664 9.03125 24.1602 8.84375 24.3477C8.65625 24.5352 8.5625 24.7637 8.5625 25.0332C8.5625 25.3027 8.65625 25.5312 8.84375 25.7188C9.03125 25.9062 9.25977 26 9.5293 26H22.0977C22.4492 26 22.7188 25.8535 22.9062 25.5605ZM48.8867 25.5605C49.0859 25.2676 49.1152 24.9629 48.9746 24.6465L38.8145 1.44336C38.6504 1.05664 38.3574 0.863281 37.9355 0.863281C37.5137 0.863281 37.2148 1.05664 37.0391 1.44336L26.8965 24.6465C26.791 24.8926 26.7852 25.1387 26.8789 25.3848C26.9727 25.6309 27.1426 25.8066 27.3887 25.9121C27.5176 25.9707 27.6465 26 27.7754 26C28.1973 26 28.4961 25.8066 28.6719 25.4199L37.9355 4.23828L46.6016 24.0664H35.5098C35.2402 24.0664 35.0117 24.1602 34.8242 24.3477C34.6367 24.5352 34.543 24.7637 34.543 25.0332C34.543 25.3027 34.6367 25.5312 34.8242 25.7188C35.0117 25.9062 35.2402 26 35.5098 26H48.0781C48.4297 26 48.6992 25.8535 48.8867 25.5605ZM53.6855 26C53.9551 26 54.1836 25.9062 54.3711 25.7188C54.5586 25.5312 54.6523 25.3027 54.6523 25.0332V16.7539H60.9102L69.1543 25.6836C69.3418 25.8945 69.5762 26 69.8574 26C70.1152 26 70.3379 25.9121 70.5254 25.7363C70.7129 25.5605 70.8125 25.3379 70.8242 25.0684C70.8359 24.7988 70.7539 24.5703 70.5781 24.3828L63.4941 16.7012C65.4863 16.4785 67.1621 15.6172 68.5215 14.1172C69.8809 12.6055 70.5605 10.8359 70.5605 8.80859C70.5605 6.61719 69.7812 4.74219 68.2227 3.18359C66.6758 1.63672 64.8066 0.863281 62.6152 0.863281H53.6855C53.416 0.863281 53.1875 0.957031 53 1.14453C52.8125 1.33203 52.7188 1.56055 52.7188 1.83008C52.7188 2.09961 52.8125 2.32812 53 2.51562C53.1875 2.70313 53.416 2.79688 53.6855 2.79688H62.6152C64.2676 2.79688 65.6855 3.38281 66.8691 4.55469C68.041 5.72656 68.627 7.14453 68.627 8.80859C68.627 10.4609 68.041 11.8789 66.8691 13.0625C65.6855 14.2344 64.2676 14.8203 62.6152 14.8203H53.6855C53.416 14.8203 53.1875 14.9141 53 15.1016C52.8125 15.2891 52.7188 15.5176 52.7188 15.7871V25.0332C52.7188 25.3027 52.8125 25.5312 53 25.7188C53.1875 25.9062 53.416 26 53.6855 26ZM86.9434 24.0664C84.0137 24.0664 81.5059 23.0293 79.4199 20.9551C77.3457 18.8691 76.3086 16.3613 76.3086 13.4316C76.3086 10.502 77.3457 7.99414 79.4199 5.9082C81.5059 3.83398 84.0137 2.79688 86.9434 2.79688C89.873 2.79688 92.3809 3.83398 94.4668 5.9082C96.541 7.99414 97.5781 10.502 97.5781 13.4316C97.5781 16.3613 96.541 18.8691 94.4668 20.9551C92.3809 23.0293 89.873 24.0664 86.9434 24.0664ZM86.9434 0.863281C83.4746 0.863281 80.5098 2.08789 78.0488 4.53711C75.5996 6.99805 74.375 9.96289 74.375 13.4316C74.375 16.9004 75.5996 19.8652 78.0488 22.3262C80.5098 24.7754 83.4746 26 86.9434 26C90.4121 26 93.377 24.7754 95.8379 22.3262C98.2871 19.8652 99.5117 16.9004 99.5117 13.4316C99.5117 9.96289 98.2871 6.99805 95.8379 4.53711C93.377 2.08789 90.4121 0.863281 86.9434 0.863281ZM103.994 26C104.264 26 104.492 25.9062 104.68 25.7188C104.867 25.5312 104.961 25.3027 104.961 25.0332V4.66016L121.115 25.6309C121.314 25.877 121.572 26 121.889 26C121.994 26 122.094 25.9824 122.188 25.9473C122.633 25.7949 122.855 25.4902 122.855 25.0332V1.83008C122.855 1.56055 122.762 1.33203 122.574 1.14453C122.375 0.957031 122.146 0.863281 121.889 0.863281C121.619 0.863281 121.391 0.957031 121.203 1.14453C121.016 1.33203 120.922 1.56055 120.922 1.83008V22.2031L104.768 1.23242C104.486 0.869141 104.123 0.763672 103.678 0.916016C103.244 1.05664 103.027 1.36133 103.027 1.83008V25.0332C103.027 25.3027 103.121 25.5312 103.309 25.7188C103.496 25.9062 103.725 26 103.994 26ZM144.248 2.79688V25.0332C144.248 25.3027 144.342 25.5312 144.529 25.7188C144.717 25.9062 144.945 26 145.215 26C145.484 26 145.713 25.9062 145.9 25.7188C146.088 25.5312 146.182 25.3027 146.182 25.0332V2.79688H154.162C154.42 2.79688 154.648 2.70313 154.848 2.51562C155.035 2.32812 155.129 2.09961 155.129 1.83008C155.129 1.56055 155.035 1.33203 154.848 1.14453C154.648 0.957031 154.42 0.863281 154.162 0.863281H136.268C135.998 0.863281 135.77 0.957031 135.582 1.14453C135.395 1.33203 135.301 1.56055 135.301 1.83008C135.301 2.09961 135.395 2.32812 135.582 2.51562C135.77 2.70313 135.998 2.79688 136.268 2.79688H144.248ZM168.752 24.0664C165.822 24.0664 163.314 23.0293 161.229 20.9551C159.154 18.8691 158.117 16.3613 158.117 13.4316C158.117 10.502 159.154 7.99414 161.229 5.9082C163.314 3.83398 165.822 2.79688 168.752 2.79688C171.682 2.79688 174.189 3.83398 176.275 5.9082C178.35 7.99414 179.387 10.502 179.387 13.4316C179.387 16.3613 178.35 18.8691 176.275 20.9551C174.189 23.0293 171.682 24.0664 168.752 24.0664ZM168.752 0.863281C165.283 0.863281 162.318 2.08789 159.857 4.53711C157.408 6.99805 156.184 9.96289 156.184 13.4316C156.184 16.9004 157.408 19.8652 159.857 22.3262C162.318 24.7754 165.283 26 168.752 26C172.221 26 175.186 24.7754 177.646 22.3262C180.096 19.8652 181.32 16.9004 181.32 13.4316C181.32 9.96289 180.096 6.99805 177.646 4.53711C175.186 2.08789 172.221 0.863281 168.752 0.863281ZM202.238 26C202.508 26 202.736 25.9062 202.924 25.7188C203.111 25.5312 203.205 25.3027 203.205 25.0332C203.205 24.7637 203.111 24.5352 202.924 24.3477C202.736 24.1602 202.508 24.0664 202.238 24.0664H186.77V1.83008C186.77 1.56055 186.676 1.33203 186.488 1.14453C186.301 0.957031 186.072 0.863281 185.803 0.863281C185.533 0.863281 185.305 0.957031 185.117 1.14453C184.93 1.33203 184.836 1.56055 184.836 1.83008V25.0332C184.836 25.3027 184.93 25.5312 185.117 25.7188C185.305 25.9062 185.533 26 185.803 26H202.238ZM207.705 26C207.975 26 208.203 25.9062 208.391 25.7188C208.578 25.5312 208.672 25.3027 208.672 25.0332V1.83008C208.672 1.56055 208.578 1.33203 208.391 1.14453C208.203 0.957031 207.975 0.863281 207.705 0.863281C207.436 0.863281 207.207 0.957031 207.02 1.14453C206.832 1.33203 206.738 1.56055 206.738 1.83008V25.0332C206.738 25.3027 206.832 25.5312 207.02 25.7188C207.207 25.9062 207.436 26 207.705 26ZM222.488 25.4199C222.664 25.8066 222.963 26 223.385 26C223.807 26 224.1 25.8066 224.264 25.4199L234.424 2.2168C234.529 1.9707 234.535 1.72461 234.441 1.47852C234.336 1.23242 234.16 1.05078 233.914 0.933594C233.668 0.828125 233.422 0.828125 233.176 0.933594C232.93 1.02734 232.754 1.19727 232.648 1.44336L223.385 22.625L214.121 1.44336C214.004 1.19727 213.822 1.02734 213.576 0.933594C213.33 0.828125 213.084 0.828125 212.838 0.933594C212.592 1.05078 212.422 1.23242 212.328 1.47852C212.234 1.72461 212.24 1.9707 212.346 2.2168L222.488 25.4199ZM255.992 25.0332C255.992 24.7637 255.898 24.5352 255.711 24.3477C255.512 24.1602 255.283 24.0664 255.025 24.0664H239.064C238.795 24.0664 238.566 24.1602 238.379 24.3477C238.191 24.5352 238.098 24.7637 238.098 25.0332C238.098 25.3027 238.191 25.5312 238.379 25.7188C238.566 25.9062 238.795 26 239.064 26H255.025C255.283 26 255.512 25.9062 255.711 25.7188C255.898 25.5312 255.992 25.3027 255.992 25.0332ZM239.064 0.863281C238.795 0.863281 238.566 0.957031 238.379 1.14453C238.191 1.33203 238.098 1.56055 238.098 1.83008C238.098 2.09961 238.191 2.32812 238.379 2.51562C238.566 2.70313 238.795 2.79688 239.064 2.79688H255.025C255.283 2.79688 255.512 2.70313 255.711 2.51562C255.898 2.32812 255.992 2.09961 255.992 1.83008C255.992 1.56055 255.898 1.33203 255.711 1.14453C255.512 0.957031 255.283 0.863281 255.025 0.863281H239.064ZM239.064 12.4648C238.795 12.4648 238.566 12.5586 238.379 12.7461C238.191 12.9336 238.098 13.1621 238.098 13.4316C238.098 13.7012 238.191 13.9297 238.379 14.1172C238.566 14.3047 238.795 14.3984 239.064 14.3984H255.025C255.283 14.3984 255.512 14.3047 255.711 14.1172C255.898 13.9297 255.992 13.7012 255.992 13.4316C255.992 13.1621 255.898 12.9336 255.711 12.7461C255.512 12.5586 255.283 12.4648 255.025 12.4648H239.064ZM260.475 26C260.744 26 260.973 25.9062 261.16 25.7188C261.348 25.5312 261.441 25.3027 261.441 25.0332V16.7539H267.699L275.943 25.6836C276.131 25.8945 276.365 26 276.646 26C276.904 26 277.127 25.9121 277.314 25.7363C277.502 25.5605 277.602 25.3379 277.613 25.0684C277.625 24.7988 277.543 24.5703 277.367 24.3828L270.283 16.7012C272.275 16.4785 273.951 15.6172 275.311 14.1172C276.67 12.6055 277.35 10.8359 277.35 8.80859C277.35 6.61719 276.57 4.74219 275.012 3.18359C273.465 1.63672 271.596 0.863281 269.404 0.863281H260.475C260.205 0.863281 259.977 0.957031 259.789 1.14453C259.602 1.33203 259.508 1.56055 259.508 1.83008C259.508 2.09961 259.602 2.32812 259.789 2.51562C259.977 2.70313 260.205 2.79688 260.475 2.79688H269.404C271.057 2.79688 272.475 3.38281 273.658 4.55469C274.83 5.72656 275.416 7.14453 275.416 8.80859C275.416 10.4609 274.83 11.8789 273.658 13.0625C272.475 14.2344 271.057 14.8203 269.404 14.8203H260.475C260.205 14.8203 259.977 14.9141 259.789 15.1016C259.602 15.2891 259.508 15.5176 259.508 15.7871V25.0332C259.508 25.3027 259.602 25.5312 259.789 25.7188C259.977 25.9062 260.205 26 260.475 26Z" fill="black"/>
              </svg>
            </div>
            <div className='w-full lg:w-10/12'>
              <svg width="" height="" viewBox="0 0 479 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  id="title" d="M50.9844 3.54688C50.9844 2.82813 50.7344 2.21875 50.2344 1.71875C49.7031 1.21875 49.0938 0.96875 48.4062 0.96875C47.6875 0.96875 47.0781 1.21875 46.5781 1.71875C46.0781 2.21875 45.8281 2.82813 45.8281 3.54688V42.875C45.8281 48.375 43.875 53.0781 39.9688 56.9844C36.0625 60.8906 31.3438 62.8438 25.8125 62.8438C20.3125 62.8438 15.6094 60.8906 11.7031 56.9844C7.79688 53.0781 5.84375 48.375 5.84375 42.875V3.54688C5.84375 2.82813 5.59375 2.21875 5.09375 1.71875C4.59375 1.21875 3.98438 0.96875 3.26562 0.96875C2.54688 0.96875 1.9375 1.21875 1.4375 1.71875C0.9375 2.21875 0.6875 2.82813 0.6875 3.54688V42.875C0.6875 49.7812 3.14062 55.7031 8.04688 60.6406C12.9844 65.5469 18.9062 68 25.8125 68C32.75 68 38.6719 65.5469 43.5781 60.6406C48.5156 55.7031 50.9844 49.7812 50.9844 42.875V3.54688ZM65.5625 6.125H86.9375C91.3438 6.125 95.1094 7.6875 98.2344 10.8125C101.391 13.9375 102.969 17.7188 102.969 22.1562C102.969 26.5625 101.391 30.3438 98.2344 33.5C95.1094 36.625 91.3438 38.1875 86.9375 38.1875H65.5625V6.125ZM65.5625 43.3438H86.9375C92.7812 43.3438 97.7656 41.2656 101.891 37.1094C106.047 32.9844 108.125 28 108.125 22.1562C108.125 16.3125 106.047 11.3125 101.891 7.15625C97.7656 3.03125 92.7812 0.96875 86.9375 0.96875H62.9844C62.2656 0.96875 61.6562 1.21875 61.1562 1.71875C60.6562 2.21875 60.4062 2.82813 60.4062 3.54688V65.4219C60.4062 66.1406 60.6562 66.75 61.1562 67.25C61.6562 67.75 62.2656 68 62.9844 68C63.7031 68 64.3125 67.75 64.8125 67.25C65.3125 66.75 65.5625 66.1406 65.5625 65.4219V43.3438ZM151.016 68C160.266 68 168.172 64.7344 174.734 58.2031C175.234 57.6719 175.484 57.0625 175.484 56.375V34.4844C175.484 33.7656 175.234 33.1562 174.734 32.6562C174.234 32.1562 173.625 31.9062 172.906 31.9062H149.75C149.031 31.9062 148.422 32.1562 147.922 32.6562C147.422 33.1562 147.172 33.7656 147.172 34.4844C147.172 35.2031 147.422 35.8125 147.922 36.3125C148.422 36.8125 149.031 37.0625 149.75 37.0625H170.328V55.25C164.891 60.3125 158.453 62.8438 151.016 62.8438C143.172 62.8438 136.484 60.0781 130.953 54.5469C125.422 49.0156 122.656 42.3281 122.656 34.4844C122.656 26.6406 125.422 19.9531 130.953 14.4219C136.484 8.89062 143.172 6.125 151.016 6.125C158.859 6.125 165.547 8.89062 171.078 14.4219C171.578 14.9219 172.188 15.1719 172.906 15.1719C173.625 15.1719 174.234 14.9219 174.734 14.4219C175.234 13.9219 175.484 13.3125 175.484 12.5938C175.484 11.875 175.234 11.2656 174.734 10.7656C168.172 4.23438 160.266 0.96875 151.016 0.96875C141.766 0.96875 133.859 4.23438 127.297 10.7656C120.766 17.3281 117.5 25.2344 117.5 34.4844C117.5 43.7344 120.766 51.6406 127.297 58.2031C133.859 64.7344 141.766 68 151.016 68ZM190.062 6.125H211.297C215.703 6.125 219.484 7.6875 222.641 10.8125C225.766 13.9375 227.328 17.7188 227.328 22.1562C227.328 26.5625 225.766 30.3438 222.641 33.5C219.484 36.625 215.703 38.1875 211.297 38.1875H190.062V6.125ZM187.484 68C188.203 68 188.812 67.75 189.312 67.25C189.812 66.75 190.062 66.1406 190.062 65.4219V43.3438H206.75L228.734 67.1562C229.234 67.7188 229.859 68 230.609 68C231.297 68 231.891 67.7656 232.391 67.2969C232.891 66.8281 233.156 66.2344 233.188 65.5156C233.219 64.7969 233 64.1875 232.531 63.6875L213.641 43.2031C218.953 42.6094 223.422 40.3125 227.047 36.3125C230.672 32.2812 232.484 27.5625 232.484 22.1562C232.484 16.3125 230.406 11.3125 226.25 7.15625C222.125 3.03125 217.141 0.96875 211.297 0.96875H187.484C186.766 0.96875 186.156 1.21875 185.656 1.71875C185.156 2.21875 184.906 2.82813 184.906 3.54688V65.4219C184.906 66.1406 185.156 66.75 185.656 67.25C186.156 67.75 186.766 68 187.484 68ZM258.406 42.2188L272.516 9.96875L286.625 42.2188H258.406ZM274.859 2.51562C274.422 1.48438 273.641 0.96875 272.516 0.96875C271.391 0.96875 270.594 1.48438 270.125 2.51562L243.078 64.3906C242.797 65.0469 242.781 65.7031 243.031 66.3594C243.281 67.0156 243.734 67.4844 244.391 67.7656C244.734 67.9219 245.078 68 245.422 68C246.547 68 247.344 67.4844 247.812 66.4531L256.203 47.2344C256.484 47.3281 256.766 47.375 257.047 47.375H287.984C288.266 47.375 288.547 47.3281 288.828 47.2344L297.219 66.4531C297.5 67.1094 297.969 67.5625 298.625 67.8125C299.281 68.0625 299.938 68.0469 300.594 67.7656C301.25 67.4844 301.719 67.0156 302 66.3594C302.25 65.7031 302.234 65.0469 301.953 64.3906L274.859 2.51562ZM316.906 6.125H329.797C337.609 6.125 344.297 8.89062 349.859 14.4219C355.391 19.9844 358.156 26.6719 358.156 34.4844C358.156 42.2969 355.391 48.9844 349.859 54.5469C344.297 60.0781 337.609 62.8438 329.797 62.8438H316.906V6.125ZM329.797 68C339.047 68 346.953 64.7344 353.516 58.2031C360.047 51.6406 363.312 43.7344 363.312 34.4844C363.312 25.2344 360.047 17.3281 353.516 10.7656C346.953 4.23438 339.047 0.96875 329.797 0.96875H314.328C313.609 0.96875 313 1.21875 312.5 1.71875C312 2.21875 311.75 2.82813 311.75 3.54688V65.4219C311.75 66.1406 312 66.75 312.5 67.25C313 67.75 313.609 68 314.328 68H329.797ZM417.828 68C418.516 68 419.125 67.75 419.656 67.25C420.156 66.75 420.406 66.1406 420.406 65.4219C420.406 64.7031 420.156 64.0938 419.656 63.5938C419.125 63.0938 418.516 62.8438 417.828 62.8438H377.844V37.0625H407.516C408.203 37.0625 408.797 36.8125 409.297 36.3125C409.828 35.8125 410.094 35.2031 410.094 34.4844C410.094 33.7656 409.828 33.1562 409.297 32.6562C408.797 32.1562 408.203 31.9062 407.516 31.9062H377.844V6.125H417.828C418.516 6.125 419.125 5.875 419.656 5.375C420.156 4.875 420.406 4.26562 420.406 3.54688C420.406 2.82813 420.156 2.21875 419.656 1.71875C419.125 1.21875 418.516 0.96875 417.828 0.96875H375.266C374.547 0.96875 373.938 1.21875 373.438 1.71875C372.938 2.21875 372.688 2.82813 372.688 3.54688V65.4219C372.688 66.1406 372.938 66.75 373.438 67.25C373.938 67.75 374.547 68 375.266 68H417.828ZM447.828 62.8438C444.266 62.8438 441.234 61.5781 438.734 59.0469C436.203 56.5469 434.938 53.5156 434.938 49.9531C434.938 49.2344 434.688 48.625 434.188 48.125C433.688 47.625 433.078 47.375 432.359 47.375C431.641 47.375 431.031 47.625 430.531 48.125C430.031 48.625 429.781 49.2344 429.781 49.9531C429.781 54.9219 431.547 59.1719 435.078 62.7031C438.609 66.2344 442.859 68 447.828 68H460.109C465.109 68 469.359 66.2344 472.859 62.7031C476.391 59.1719 478.156 54.9219 478.156 49.9531C478.156 44.9844 476.391 40.7344 472.859 37.2031C469.359 33.6719 465.109 31.9062 460.109 31.9062H447.828C444.266 31.9062 441.234 30.6406 438.734 28.1094C436.203 25.6094 434.938 22.5781 434.938 19.0156C434.938 15.4531 436.203 12.4062 438.734 9.875C441.234 7.375 444.266 6.125 447.828 6.125H460.109C463.672 6.125 466.719 7.375 469.25 9.875C471.75 12.4062 473 15.4531 473 19.0156C473 19.7344 473.25 20.3438 473.75 20.8438C474.281 21.3438 474.891 21.5938 475.578 21.5938C476.297 21.5938 476.906 21.3438 477.406 20.8438C477.906 20.3438 478.156 19.7344 478.156 19.0156C478.156 14.0469 476.391 9.79687 472.859 6.26562C469.359 2.73438 465.109 0.96875 460.109 0.96875H447.828C442.859 0.96875 438.609 2.73438 435.078 6.26562C431.547 9.79687 429.781 14.0469 429.781 19.0156C429.781 23.9844 431.547 28.2344 435.078 31.7656C438.609 35.2969 442.859 37.0625 447.828 37.0625H460.109C463.672 37.0625 466.719 38.3281 469.25 40.8594C471.75 43.3594 473 46.3906 473 49.9531C473 53.5156 471.75 56.5469 469.25 59.0469C466.719 61.5781 463.672 62.8438 460.109 62.8438H447.828Z" fill="black"/>
              </svg>
            </div>
            <div className="flex mt-11 w-4/12 lg:w-3/12">
              <svg width="" height="" viewBox="0 0 118 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="date" d="M1.616 19C1.408 19 1.224 18.952 1.064 18.856C0.904 18.76 0.824 18.608 0.824 18.4V2.08C0.824 1.872 0.896 1.72 1.04 1.624C1.2 1.512 1.368 1.456 1.544 1.456H10.04C10.248 1.456 10.4 1.536 10.496 1.696C10.592 1.84 10.64 2 10.64 2.176C10.64 2.368 10.584 2.544 10.472 2.704C10.376 2.848 10.232 2.92 10.04 2.92H2.408V9.52H6.2C6.376 9.52 6.512 9.592 6.608 9.736C6.72 9.88 6.776 10.048 6.776 10.24C6.776 10.4 6.728 10.552 6.632 10.696C6.552 10.84 6.408 10.912 6.2 10.912H2.408V18.4C2.408 18.608 2.32 18.76 2.144 18.856C1.984 18.952 1.808 19 1.616 19ZM14.3806 19.168C13.3726 19.168 12.4766 18.976 11.6926 18.592C10.9246 18.208 10.3166 17.68 9.86863 17.008C9.43663 16.32 9.22063 15.52 9.22063 14.608V11.944C9.22063 11.144 9.42863 10.408 9.84463 9.736C10.2606 9.048 10.8126 8.504 11.5006 8.104C12.2046 7.704 12.9726 7.504 13.8046 7.504C14.6046 7.504 15.3406 7.696 16.0126 8.08C16.7006 8.448 17.2526 8.96 17.6686 9.616C18.0846 10.272 18.2926 11.032 18.2926 11.896C18.2926 12.504 18.1886 12.944 17.9806 13.216C17.7726 13.488 17.5086 13.656 17.1886 13.72C16.8846 13.768 16.5566 13.792 16.2046 13.792H10.7806V14.68C10.7806 15.64 11.1246 16.4 11.8126 16.96C12.5006 17.52 13.3726 17.8 14.4286 17.8C15.0686 17.8 15.5646 17.72 15.9166 17.56C16.2686 17.4 16.5406 17.24 16.7326 17.08C16.9406 16.92 17.1326 16.84 17.3086 16.84C17.4366 16.84 17.5486 16.888 17.6446 16.984C17.7566 17.064 17.8366 17.16 17.8846 17.272C17.9486 17.384 17.9806 17.488 17.9806 17.584C17.9806 17.76 17.8366 17.976 17.5486 18.232C17.2606 18.488 16.8446 18.712 16.3006 18.904C15.7566 19.08 15.1166 19.168 14.3806 19.168ZM10.7806 12.64H15.5806C16.0606 12.64 16.3806 12.592 16.5406 12.496C16.7006 12.384 16.7806 12.16 16.7806 11.824C16.7806 11.312 16.6526 10.832 16.3966 10.384C16.1406 9.92 15.7886 9.544 15.3406 9.256C14.8926 8.952 14.3726 8.8 13.7806 8.8C13.2366 8.8 12.7326 8.936 12.2686 9.208C11.8206 9.48 11.4606 9.832 11.1886 10.264C10.9166 10.696 10.7806 11.184 10.7806 11.728V12.64ZM25.4448 19.168C24.6928 19.168 24.0208 18.984 23.4288 18.616C22.8368 18.248 22.4128 17.816 22.1568 17.32V18.376C22.1568 18.536 22.0848 18.68 21.9408 18.808C21.7968 18.936 21.6208 19 21.4128 19C21.2048 19 21.0208 18.936 20.8608 18.808C20.7168 18.68 20.6448 18.536 20.6448 18.376V1.288C20.6448 1.096 20.7168 0.951999 20.8608 0.855999C21.0208 0.743999 21.2048 0.688 21.4128 0.688C21.6368 0.688 21.8208 0.743999 21.9648 0.855999C22.1248 0.951999 22.2048 1.096 22.2048 1.288V9.328C22.4768 8.864 22.8768 8.448 23.4048 8.08C23.9488 7.696 24.6128 7.504 25.3968 7.504C26.1808 7.504 26.8928 7.712 27.5328 8.128C28.1888 8.528 28.7088 9.072 29.0928 9.76C29.4928 10.432 29.6928 11.184 29.6928 12.016V14.608C29.6928 15.392 29.4928 16.136 29.0928 16.84C28.7088 17.544 28.1968 18.112 27.5568 18.544C26.9168 18.96 26.2128 19.168 25.4448 19.168ZM25.1568 17.728C25.7008 17.728 26.1968 17.584 26.6448 17.296C27.0928 16.992 27.4528 16.6 27.7248 16.12C27.9968 15.64 28.1328 15.136 28.1328 14.608V12.016C28.1328 11.488 27.9968 10.992 27.7248 10.528C27.4528 10.064 27.0928 9.688 26.6448 9.4C26.1968 9.096 25.6928 8.944 25.1328 8.944C24.6528 8.944 24.1888 9.072 23.7408 9.328C23.2928 9.568 22.9248 9.912 22.6368 10.36C22.3488 10.808 22.2048 11.36 22.2048 12.016V15.352C22.2048 15.592 22.3328 15.904 22.5888 16.288C22.8608 16.656 23.2208 16.992 23.6688 17.296C24.1168 17.584 24.6128 17.728 25.1568 17.728ZM33.0138 19C32.8058 19 32.6218 18.936 32.4618 18.808C32.3178 18.68 32.2458 18.536 32.2458 18.376V8.248C32.2458 8.056 32.3178 7.912 32.4618 7.816C32.6218 7.704 32.8058 7.648 33.0138 7.648C33.2218 7.648 33.3978 7.704 33.5418 7.816C33.6858 7.912 33.7578 8.056 33.7578 8.248V9.424C33.9338 9.088 34.1738 8.776 34.4778 8.488C34.7818 8.2 35.1418 7.968 35.5578 7.792C35.9738 7.6 36.4458 7.504 36.9738 7.504H37.8138C37.9898 7.504 38.1338 7.576 38.2458 7.72C38.3738 7.864 38.4378 8.032 38.4378 8.224C38.4378 8.432 38.3738 8.608 38.2458 8.752C38.1338 8.88 37.9898 8.944 37.8138 8.944H36.9738C36.4458 8.944 35.9338 9.088 35.4378 9.376C34.9578 9.664 34.5658 10.064 34.2618 10.576C33.9578 11.088 33.8058 11.712 33.8058 12.448V18.376C33.8058 18.536 33.7258 18.68 33.5658 18.808C33.4218 18.936 33.2378 19 33.0138 19ZM44.6557 19.168C43.8077 19.168 43.0317 18.96 42.3277 18.544C41.6397 18.128 41.0877 17.576 40.6717 16.888C40.2717 16.184 40.0717 15.44 40.0717 14.656V8.272C40.0717 8.112 40.1517 7.968 40.3117 7.84C40.4717 7.712 40.6557 7.648 40.8637 7.648C41.0717 7.648 41.2477 7.712 41.3917 7.84C41.5517 7.968 41.6317 8.112 41.6317 8.272V14.656C41.6317 15.184 41.7677 15.68 42.0397 16.144C42.3117 16.608 42.6717 16.992 43.1197 17.296C43.5677 17.584 44.0717 17.728 44.6317 17.728C45.2077 17.728 45.7197 17.584 46.1677 17.296C46.6157 17.008 46.9677 16.632 47.2237 16.168C47.4957 15.688 47.6317 15.184 47.6317 14.656V8.248C47.6317 8.072 47.7117 7.928 47.8717 7.816C48.0317 7.704 48.2157 7.648 48.4237 7.648C48.6637 7.648 48.8477 7.704 48.9757 7.816C49.1197 7.928 49.1917 8.072 49.1917 8.248V14.656C49.1917 15.472 48.9837 16.224 48.5677 16.912C48.1677 17.584 47.6157 18.128 46.9117 18.544C46.2237 18.96 45.4717 19.168 44.6557 19.168ZM54.5939 19.168C53.6819 19.168 52.9059 18.912 52.2659 18.4C51.6419 17.872 51.3299 17.072 51.3299 16C51.3299 15.12 51.5619 14.448 52.0259 13.984C52.5059 13.504 53.1619 13.176 53.9939 13C54.8419 12.808 55.8179 12.712 56.9219 12.712H58.1459V12.16C58.1459 11.632 58.0499 11.12 57.8579 10.624C57.6819 10.112 57.3859 9.696 56.9699 9.376C56.5699 9.04 56.0179 8.872 55.3139 8.872C54.7859 8.872 54.3539 8.928 54.0179 9.04C53.6819 9.152 53.4179 9.272 53.2259 9.4C53.0339 9.512 52.8739 9.568 52.7459 9.568C52.5539 9.568 52.3939 9.472 52.2659 9.28C52.1539 9.088 52.0979 8.912 52.0979 8.752C52.0979 8.528 52.2659 8.328 52.6019 8.152C52.9379 7.96 53.3539 7.808 53.8499 7.696C54.3619 7.568 54.8659 7.504 55.3619 7.504C56.4339 7.504 57.2819 7.728 57.9059 8.176C58.5459 8.608 59.0019 9.176 59.2739 9.88C59.5619 10.584 59.7059 11.336 59.7059 12.136V18.376C59.7059 18.552 59.6339 18.704 59.4899 18.832C59.3619 18.944 59.1779 19 58.9379 19C58.7459 19 58.5699 18.944 58.4099 18.832C58.2659 18.704 58.1939 18.552 58.1939 18.376V17.32C57.7939 17.8 57.2979 18.232 56.7059 18.616C56.1139 18.984 55.4099 19.168 54.5939 19.168ZM54.9779 17.848C55.5059 17.848 56.0099 17.712 56.4899 17.44C56.9699 17.168 57.3619 16.84 57.6659 16.456C57.9859 16.056 58.1459 15.68 58.1459 15.328V13.792H57.1379C56.4179 13.792 55.7299 13.84 55.0739 13.936C54.4339 14.016 53.9059 14.2 53.4899 14.488C53.0899 14.776 52.8899 15.232 52.8899 15.856C52.8899 16.544 53.0899 17.048 53.4899 17.368C53.9059 17.688 54.4019 17.848 54.9779 17.848ZM63.3654 19C63.1574 19 62.9734 18.936 62.8134 18.808C62.6694 18.68 62.5974 18.536 62.5974 18.376V8.248C62.5974 8.056 62.6694 7.912 62.8134 7.816C62.9734 7.704 63.1574 7.648 63.3654 7.648C63.5734 7.648 63.7494 7.704 63.8934 7.816C64.0374 7.912 64.1094 8.056 64.1094 8.248V9.424C64.2854 9.088 64.5254 8.776 64.8294 8.488C65.1334 8.2 65.4934 7.968 65.9094 7.792C66.3254 7.6 66.7974 7.504 67.3254 7.504H68.1654C68.3414 7.504 68.4854 7.576 68.5974 7.72C68.7254 7.864 68.7894 8.032 68.7894 8.224C68.7894 8.432 68.7254 8.608 68.5974 8.752C68.4854 8.88 68.3414 8.944 68.1654 8.944H67.3254C66.7974 8.944 66.2854 9.088 65.7894 9.376C65.3094 9.664 64.9174 10.064 64.6134 10.576C64.3094 11.088 64.1574 11.712 64.1574 12.448V18.376C64.1574 18.536 64.0774 18.68 63.9174 18.808C63.7734 18.936 63.5894 19 63.3654 19ZM70.1113 24.568C69.9033 24.568 69.7273 24.512 69.5833 24.4C69.4393 24.304 69.3673 24.128 69.3673 23.872C69.3673 23.68 69.4073 23.512 69.4873 23.368C69.5673 23.224 69.6953 23.152 69.8713 23.152C70.2553 23.152 70.6233 23.032 70.9753 22.792C71.3273 22.552 71.6553 22.208 71.9593 21.76C72.2633 21.328 72.5353 20.832 72.7753 20.272C73.0153 19.728 73.2073 19.144 73.3513 18.52L69.4153 8.488C69.3833 8.392 69.3673 8.312 69.3673 8.248C69.3673 8.104 69.4153 7.984 69.5113 7.888C69.6233 7.776 69.7513 7.688 69.8953 7.624C70.0553 7.544 70.1993 7.504 70.3273 7.504C70.4553 7.504 70.5673 7.536 70.6633 7.6C70.7753 7.648 70.8473 7.728 70.8793 7.84L74.1673 16.672L77.2633 7.84C77.3113 7.728 77.3833 7.648 77.4793 7.6C77.5753 7.536 77.6793 7.504 77.7913 7.504C77.9193 7.504 78.0553 7.536 78.1993 7.6C78.3593 7.664 78.4873 7.752 78.5833 7.864C78.6953 7.976 78.7513 8.112 78.7513 8.272C78.7513 8.352 78.7353 8.424 78.7033 8.488L74.9833 18.544C74.7433 19.184 74.4873 19.856 74.2153 20.56C73.9433 21.264 73.6233 21.912 73.2553 22.504C72.9033 23.112 72.4713 23.608 71.9593 23.992C71.4473 24.376 70.8313 24.568 70.1113 24.568ZM87.0821 19C86.8741 19 86.6901 18.952 86.5301 18.856C86.3701 18.744 86.2901 18.584 86.2901 18.376V4.168L85.3301 5.704C85.2661 5.8 85.1941 5.872 85.1141 5.92C85.0341 5.968 84.9541 5.992 84.8741 5.992C84.6981 5.992 84.5461 5.92 84.4181 5.776C84.3061 5.632 84.2501 5.472 84.2501 5.296C84.2501 5.184 84.2901 5.056 84.3701 4.912C84.4501 4.752 84.5221 4.64 84.5861 4.576L86.5781 1.792C86.6581 1.696 86.7381 1.616 86.8181 1.552C86.8981 1.472 87.0181 1.432 87.1781 1.432C87.3541 1.432 87.5141 1.488 87.6581 1.6C87.8021 1.696 87.8741 1.848 87.8741 2.056V18.376C87.8741 18.584 87.7861 18.744 87.6101 18.856C87.4501 18.952 87.2741 19 87.0821 19ZM97.2191 19C97.0271 19 96.8431 18.952 96.6671 18.856C96.5071 18.744 96.4271 18.584 96.4271 18.376V14.872H90.3311C90.1391 14.872 89.9871 14.816 89.8751 14.704C89.7631 14.576 89.7071 14.416 89.7071 14.224C89.7071 14.144 89.7151 14.072 89.7311 14.008C89.7471 13.944 89.7711 13.88 89.8031 13.816L95.8271 1.96C95.9071 1.768 96.0111 1.64 96.1391 1.576C96.2831 1.496 96.4271 1.456 96.5711 1.456C96.6831 1.456 96.7951 1.488 96.9071 1.552C97.0351 1.6 97.1391 1.672 97.2191 1.768C97.2991 1.864 97.3391 1.976 97.3391 2.104C97.3391 2.184 97.3151 2.288 97.2671 2.416L91.7471 13.36H96.4271V8.728C96.4271 8.52 96.5071 8.376 96.6671 8.296C96.8431 8.2 97.0271 8.152 97.2191 8.152C97.4271 8.152 97.6111 8.2 97.7711 8.296C97.9311 8.376 98.0111 8.52 98.0111 8.728V13.36H99.3311C99.5391 13.36 99.6911 13.44 99.7871 13.6C99.8991 13.744 99.9551 13.912 99.9551 14.104C99.9551 14.296 99.8911 14.472 99.7631 14.632C99.6511 14.792 99.5071 14.872 99.3311 14.872H98.0111V18.376C98.0111 18.584 97.9311 18.744 97.7711 18.856C97.6111 18.952 97.4271 19 97.2191 19ZM105.459 19C104.227 19 103.283 18.72 102.627 18.16C101.971 17.6 101.643 16.704 101.643 15.472V2.848C101.643 2.656 101.723 2.512 101.883 2.416C102.059 2.304 102.235 2.248 102.411 2.248C102.619 2.248 102.803 2.304 102.963 2.416C103.123 2.512 103.203 2.656 103.203 2.848V7.648H106.323C106.483 7.648 106.611 7.712 106.707 7.84C106.803 7.968 106.851 8.12 106.851 8.296C106.851 8.472 106.803 8.624 106.707 8.752C106.611 8.88 106.483 8.944 106.323 8.944H103.203V15.472C103.203 16.256 103.371 16.808 103.707 17.128C104.043 17.432 104.627 17.584 105.459 17.584H106.131C106.355 17.584 106.523 17.656 106.635 17.8C106.763 17.928 106.827 18.088 106.827 18.28C106.827 18.472 106.763 18.64 106.635 18.784C106.523 18.928 106.355 19 106.131 19H105.459ZM109.561 19C109.353 19 109.169 18.936 109.009 18.808C108.865 18.68 108.793 18.536 108.793 18.376V1.288C108.793 1.096 108.865 0.951999 109.009 0.855999C109.169 0.743999 109.353 0.688 109.561 0.688C109.785 0.688 109.969 0.743999 110.113 0.855999C110.273 0.951999 110.353 1.096 110.353 1.288V9.328C110.625 8.864 111.025 8.448 111.553 8.08C112.081 7.696 112.737 7.504 113.521 7.504C114.289 7.504 114.993 7.712 115.633 8.128C116.289 8.528 116.809 9.072 117.193 9.76C117.577 10.432 117.769 11.184 117.769 12.016V18.376C117.769 18.584 117.689 18.744 117.529 18.856C117.369 18.952 117.185 19 116.977 19C116.801 19 116.625 18.952 116.449 18.856C116.289 18.744 116.209 18.584 116.209 18.376V12.016C116.209 11.488 116.073 10.992 115.801 10.528C115.529 10.064 115.169 9.688 114.721 9.4C114.273 9.096 113.777 8.944 113.233 8.944C112.753 8.944 112.289 9.072 111.841 9.328C111.409 9.568 111.049 9.912 110.761 10.36C110.489 10.808 110.353 11.36 110.353 12.016V18.376C110.353 18.536 110.273 18.68 110.113 18.808C109.969 18.936 109.785 19 109.561 19Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>    
 
  )
}

export default Home
