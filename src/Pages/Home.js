import React, { useRef } from 'react';
import { personalDetails } from '../Details';
import { RESUME_DRIVE_URL } from '../constants';

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  // useLayoutEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.from(
  //     h11.current,
  //     {
  //       x: "-100%",
  //       delay: 0.8,
  //       opacity: 0,
  //       duration: 2,
  //       ease: "Power3.easeOut",
  //     },
  //     "<"
  //   )
  //     .from(
  //       h12.current,
  //       {
  //         x: "-100%",
  //         delay: 0.5,
  //         opacity: 0,
  //         duration: 2,
  //         ease: "Power3.easeOut",
  //       },
  //       "<"
  //     )
  //     .from(
  //       h13.current,
  //       {
  //         x: "-100%",
  //         delay: 1,
  //         opacity: 0,
  //         duration: 2,
  //         ease: "Power3.easeOut",
  //       },
  //       "<"
  //     )
  //     .from(
  //       myimageref.current,
  //       {
  //         x: "200%",
  //         delay: 0,
  //         opacity: 0,
  //         duration: 2,
  //         ease: "Power3.easeOut",
  //       },
  //       "<"
  //     );
  // }, []);

  return (
    <div className='container mx-auto section max-width'>
      <main className='md:flex justify-between items-start min-h-[70vh]'>
        <div className='flex-1'>
          <h1
            // ref={h11}
            className='text-center sm:text-left text-2xl text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold'
          >
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1
            // ref={h12}
            className='text-center sm:text-left text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold'
          >
            {name}
          </h1>
          <h2
            // ref={h13}
            className='text-center sm:text-left text-2xl text-dark-heading  md:text-2xl xl:text-3xl xl:leading-tight font-bold'
          >
            {tagline}
          </h2>
          {/* button */}
          <a
            className='mx-auto sm:mx-0 bg-slate-900 mt-10 py-4 w-32 flex justify-center items-center rounded-lg shadow-md'
            href={RESUME_DRIVE_URL}
            target='_blank'
            rel='noreferrer'
          >
            <h4 className='text-white font-medium text-lg'>Resume</h4>
          </a>
        </div>
        {/* <div className='mt-5 md:mt-0 sm:w-[350px] w-[60%] mx-auto'> */}
        <div className='mt-5 md:mt-0 flex-1 mx-auto'>
          <img
            // ref={myimageref}
            // className="w-1/2 md:ml-auto animate-bounce"
            // className='md:ml-auto w-full rounded-full shadow-lg border-4  border-l-blue-400 border-b-blue-500 border-r-slate-600 border-t-slate-700'
            className='md:ml-auto w-full rounded-full'
            src={img}
            alt='Abhishek Patel'
          />
          {/* <div
          // className = "w-1/2 bg-slate-900 h-2 drop-shadow-2xl ml-auto rounded-lg"
          className=" bg-slate-900 h-2 drop-shadow-2xl ml-auto rounded-lg"
        /> */}
        </div>
      </main>
      <section className='pb-10 section'>
        <h1 className='text-2xl text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
          About Me
        </h1>
        <p className='text-content py-8 lg:max-w-3xl'>
          {personalDetails.about}
        </p>
      </section>
    </div>
  );
}

export default Home;
