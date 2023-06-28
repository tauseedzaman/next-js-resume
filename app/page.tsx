import Image from 'next/image'
import { FaMailBulk } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='bg-gray-100'>
      <section id="home" className="grid grid-cols-2 gap-4 mb-3 space-x-4 border-b-2">
        <div className="py-24 ">
          <h1 className="mb-4 text-3xl text-center sm:text-4xl">Hi,</h1>
          <h2 className="mb-6 text-4xl text-center sm:text-5xl">I'm <span className="text-pink-500">Tauseed</span></h2>
          <h3 className="mb-8 text-xl italic text-center sm:text-2xl">Software Engineer and Freelancer at @<a className="text-pink-500 hover:underline" href="https://www.fiverr.com/users/towsed">Fiverr</a></h3>
          <div className="px-3 mb-8 text-center text-gray-700 ">
            Meet Tauseed, the website wizard and automation ninja. Building the coolest websites and creating scripts that take care of all the tedious tasks - just like magic!
          </div>
          <div className="flex justify-center ml-4">
            <a href="mailto:tauseedzaman@pm.me" className="flex items-center justify-center w-40 p-2 ml-3 font-semibold text-white align-middle bg-pink-500 rounded-lg h-15">
              <FaMailBulk />
              <span className='pl-2'>Say Hello</span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center h-screen">
          <Image
            width={50}
            height={50}
            src="/images/me.jpg"
            alt="me"
            layout="responsive"
            // style=""
            className="rounded-full my_image "
          />

        </div>
      </section>


      <h2 className='py-4 text-2xl text-center '>Some Of My Projects</h2>
      <hr className="w-20 pb-2 mx-auto shadow" />


      <p className='px-12 py-3 text-center'>
        Check out these personal projects I've been cooking up! They're like my own personal experiments in awesomeness. From creating websites to automating tasks, I'm always pushing the limits of what's possible.
        You can find more on  <a href="">GitHub</a>.
      </p>
      <section className='grid grid-cols-2 gap-4 pb-12 mb-3 border-b-2'>
        <div className="w-5/6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="w-full rounded-t-lg" src="/images/me.jpg" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
        <div className="w-5/6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="/images/me.jpg" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </section>

      <h2 className='py-4 text-2xl text-center '>Client Reviews</h2>
      <hr className="w-20 pb-2 mx-auto shadow" />

      <p className='px-12 py-3 text-center'>
        Discover our outstanding client reviews, showcasing our commitment to client satisfaction.. <br />
        You can find more on  <a href="">Fiverr</a>.
      </p>
      <div className="grid grid-cols-2 gap-4 pb-12">

        <figure className="w-5/6 p-2 mx-auto text-center border-2 border-l-8 rounded-lg shadow">
          <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
          </figcaption>
        </figure>


        <figure className="w-5/6 p-2 mx-auto text-center border-2 border-l-8 rounded-lg shadow">
          <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
          </figcaption>
        </figure>


        <figure className="w-5/6 p-2 mx-auto text-center border-2 border-l-8 rounded-lg shadow">
          <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
          </figcaption>
        </figure>


        <figure className="w-5/6 p-2 mx-auto text-center border-2 border-l-8 rounded-lg shadow">
          <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
          </figcaption>
        </figure>
      </div>

    </main>
  )
}
