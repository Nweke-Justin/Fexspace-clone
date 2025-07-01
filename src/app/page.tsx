import { Button } from "@/components/ui/button";
import Header from "./landingPage/header"
import { CircleArrowRight } from 'lucide-react';
import Timer from "@/app/Components/timer";
import Dropdown from "@/app/Components/Dropdown";
import FexInter from "@/app/Components/FexInter";
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="">
      <Header  />
      <div className="bg-[url('/pictures/fexspaceimg1.jpg')] w-full pt-5 bg-cover bg-center">
        <div className="text-center mt-5 md:mt-15 space-y-2 md:space-y-5 mb-4 md:mb-10 px-4">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold md:font-extrabold lg:text-6xl leading-tight">
            Easily collaborate with your team
          </h1>
          <h1 className="text-blue-400 text-2xl md:text-4xl lg:text-5xl font-bold">
            simplify how you work
          </h1>
          <p className="text-gray-200 hidden md:block">
            Enhance team collaboration and improve productivity  with<br />
            all your tools in one place
          </p>
          <div className="text-white md:hidden text-gray-200 text-sm space-y-1">
            <p>Enhance team collaboration and improve</p>
            <p>productivity with all your tools in one place</p>
          </div>
        </div>

        <div className="p-3 bg-white w-full max-w-md items-center rounded-2xl mx-auto mb-3 hidden md:flex justify-between shadow-md">
          <input className="outline-none w-full max-w-[250px]" placeholder="Your email Address" />
          <Button className="bg-teal-400 text-md px-6 py-3">Try For Free</Button>
        </div>

        <div className="w-[90vw] mx-auto mb-3 md:hidden px-4">
          <Button className="bg-teal-400 text-md px-6 py-4 text-white w-full flex justify-center items-center rounded-md">
            <p className="mr-2">Try For Free</p> <CircleArrowRight />
          </Button>
        </div>

        <div className="text-white flex flex-wrap justify-center items-center gap-2 text-sm pb-20 px-4">
          <span className="text-blue-300">or you can</span>
          <span className="underline">Sign Up with Google</span>
          <CircleArrowRight />
        </div>
      </div>

      <div className="bg-[url('/pictures/fexspaceimg1.jpg')] bg-cover bg-center h-[70px] md:h-[200px] skew-y-[-5deg] mt-[-20px] md:mt-[-60px] relative z-10"></div>
      <div
        className="border border-gray-300/25 rounded-xl mx-auto w-[90vw] md:w-[600px] lg:w-[900px] relative z-60 mt-[-50px] md:mt-[-80px] lg:mt-[-180px]"
        style={{ borderWidth: '10px' }}
      >

        <video src="/video/fexspace-hero3.mp4" className="w-full h-auto rounded-xl" loop muted autoPlay playsInline>
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mt-[50px] md:mt-[60px] lg:mt-[65px] mb-10 px-4">
        <h1 className="font-bold text-xl md:text-3xl lg:text-5xl text-center mb-5 md:mb-20">
          Your Work Files and Your Team, <br /> Anytime, Anywhere.
        </h1>
        <Timer />
      </div>

      <div className="w-[90vw] mx-auto mt-[-200px] md:mt-20 text-center md:text-left px-4">
        <h1 className="font-bold text-xl md:text-4xl mb-10 md:mb-20 leading-tight">
          All Your Team and <br className="hidden md:block" />
          Project Needs are in One Place
        </h1>
        <div className="block md:flex mb-10 md:mb-20">
          <Dropdown />
          <div className="hidden md:block w-full md:w-[45%]">
            <video src="/video/fex-world.mp4" className="w-full h-auto rounded-lg shadow-lg" autoPlay muted loop playsInline />
          </div>
        </div>
      </div>

      <div className="bg-[url('/pictures/fexspaceimg1.jpg')] w-full h-auto bg-cover bg-center">
        <div className="w-[90vw] md:w-[70vw] mx-auto pt-16 md:pt-40 pb-10 px-4">
          <FexInter />
        </div>
      </div>

      <div className="block md:flex p-5 md:p-20 mt-10 md:mt-20 w-[90vw] mx-auto gap-10 items-center">
        <div className="space-y-6 mb-10 md:mb-0 text-center md:text-left md:w-1/2">
          <h1 className="font-bold text-xl md:text-4xl leading-snug">
            Connect, share and <br className="hidden md:block" />
            work together with <br className="hidden md:block" />
            Fexspace Community.
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Fexspace Community, where you can meet, join events, share <br className="hidden md:block" />
            projects and exchange tips and tricks with people across the <br className="hidden md:block" />
            community.
          </p>
          <button className="p-3 px-6 border border-teal-500 text-teal-500 rounded-lg text-sm md:text-base">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <video src="/video/community_.mp4" autoPlay loop muted playsInline className="w-full max-w-[600px] rounded-lg" />
        </div>
      </div>

      <div className="px-4">
        <h1 className="font-bold text-xl md:text-5xl text-center mb-10">Trusted by leading organizations <br className="hidden md:block" />
          around the world</h1>
        <div>
          <div className="hidden md:flex flex-wrap gap-5 justify-center items-center w-[90vw] mx-auto mb-10">
            <img src="/pictures/fexspace13.svg" className="w-[100px] lg:w-[125px]" />
            <img src="/pictures/fexspace14.svg" className="w-[100px] lg:w-[125px]" />
            <img src="/pictures/fexspace15.svg" className="w-[100px] lg:w-[125px]" />
            <img src="/pictures/fexspace16.svg" className="w-[100px] lg:w-[125px]" />
            <img src="/pictures/fexspace17.svg" className="w-[100px] lg:w-[125px]" />
          </div>

          <div className="flex md:hidden flex-wrap justify-center gap-5 px-4 mb-10">
            <img src="/pictures/fexspace13.svg" className="w-[80px]" />
            <img src="/pictures/fexspace14.svg" className="w-[80px]" />
            <img src="/pictures/fexspace15.svg" className="w-[80px]" />
            <img src="/pictures/fexspace16.svg" className="w-[80px]" />
            <img src="/pictures/fexspace17.svg" className="w-[80px]" />
          </div>

          <div className="relative mx-auto h-[500px] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pictures/fexspacebg2.jpg')] bg-cover bg-center skew-y-[-5deg] -z-10"></div>

            <div className="relative h-full flex flex-col justify-center items-center space-y-5 text-center px-4">
              <h1 className="text-xl md:text-4xl font-bold">Get Started With Fexspace</h1>
              <p className="text-gray-400 md:text-black text-sm md:text-base">
                Join today and receive a 2-month subscription <br className="md:hidden" />
                upgrade for any Fexspace plan, excluding the Fexspace Enterprise <br className="md:hidden" />
                plan.
              </p>
              <button className="bg-teal-400 text-white w-full max-w-xs p-3 flex items-center justify-center space-x-1 font-bold rounded-md md:hidden mt-5 z-10">
                <p>Try For Free</p> <CircleArrowRight />
              </button>
              <div className="p-6 bg-white w-full max-w-2xl items-center rounded-2xl mx-auto mb-3    hidden md:flex justify-between  mt-10 shadow-md md:shadow-lg md:shadow-white-500/50">
                <input className="outline-none placeholder-teal-500 w-full max-w-xs" placeholder="Your email Address" />
                <Button className="bg-teal-500 text-md font-bold px-6 py-4 hover:bg-teal-400">
                  Try For Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skew footer transition */}
      <div className="bg-gray-900 skew-y-[-15deg] sm:block md:hidden lg:block lg:skew-y-[-5deg] h-[120px] sm:mt-[-175px] md:mt-[20px] lg:mt-[50px] block relative z-10"></div>

      <div className="bg-gray-900 pb-20 mt-[-190px] lg:mt-[-60px] hidden md:block">
        <div className="pt-30 text-white w-[90vw] lg:w-[90vw] mx-auto  hidden md:flex justify-between">
          <img src="https://fexspace.com/_nuxt/img/logo-wht.a88553c.svg" alt="oy" className='w-[103px] h-[23.22px] md:w-[140px] md:h-[31.58px] hidden lg:block' />
          <div className="space-y-6 text-gray-300 font-semibold w-[25%] ">
            <h1 className="font-bold text-xl lg:text-2xl text-white">Features</h1>
            <p>Secured Team Shared Folder</p>
            <p>Remote Work</p>
            <p>Collaboration</p>
            <p>Document Management</p>
            <p>Shared Calendar</p>
            <p>File Security</p>
            <p>Cloud Storage</p>
            <p>Chat</p>
            <p>Video Conferencing</p>
            <p>Projects</p>
            <p>Team</p>
            <p>Tasks</p>
          </div>
          <div className="space-y-6 text-gray-300 font-semibold  w-[25%] ">
            <h1 className="font-bold text-xl lg:text-2xl text-white">Company</h1>
            <p>About Us</p>
            <p>Careers</p>
            <p>Testimonials</p>
            <p>Blog</p>
            <p>Feedback</p>
          </div>
          <div className="space-y-6 text-gray-300 font-semibold  w-[25%] ">
            <h1 className="font-bold text-xl lg:text-2xl text-white">Support</h1>
            <p>FAQ</p>
            <p>Articles</p>
            <p>Contact us</p>
          </div>
          <div className="space-y-6 text-gray-300 font-semibold  w-[25%] ">
            <h1 className="font-bold text-xl lg:text-2xl text-white">Terms</h1>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Cookies Notification</p>
            <p>Subscription and Payments</p>
            <p>Abuse</p>
          </div>
          <div className="space-y-6 text-gray-300 font-semibold  w-[25%] ">
            <h1 className="font-bold text-xl lg:text-2xl text-white">International Sites</h1>
            <p>United Kingdom (English)</p>
            <p>France (Francais)</p>
          </div>
        </div>
        <div className="w-[90vw] mx-auto mt-20 block md:flex justify-between bg-gray-900 text-gray-500">
          <div className="w-[70%]">© 2025 Fexspace. All Rights Reserved.</div>
          <div className="flex justify-between w-[30%]">
            < Facebook />
            <Linkedin />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 md:hidden mt-[-60px] relative z-[60] space-y-10 text-gray-500">
        <div className="pt-20">
          <img src="https://fexspace.com/_nuxt/img/logo-wht.a88553c.svg" alt="oy" className='w-[130px] h-[35px] mx-auto' />
        </div>
        <div className="flex justify-between w-[80%] mx-auto">
          < Facebook />
          <Linkedin />
          <Twitter />
          <Instagram />
        </div>
        <div className="flex w-[90vw] mx-auto space-x-4 pb-20 ">
          <div className="space-y-8">
            <div className="space-y-3 text-gray-300 text-sm ">
              <h1 className="font-bold  text-white">Features</h1>
              <p>Secured Team Shared Folder</p>
              <p>Remote Work</p>
              <p>Collaboration</p>
              <p>Document Management</p>
              <p>Shared Calendar</p>
              <p>File Security</p>
              <p>Cloud Storage</p>
              <p>Chat</p>
              <p>Video Conferencing</p>
              <p>Projects</p>
              <p>Team</p>
              <p>Tasks</p>
            </div>
            <div className="space-y-3 text-gray-300 text-sm ">
              <h1 className="font-bold text-white">Terms</h1>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p>Cookies Notification</p>
              <p>Subscription and Payments</p>
              <p>Abuse</p>
            </div>
            <div className="space-y-3 text-gray-300 text-sm ">
              <h1 className="font-bold text-white">International Sites</h1>
              <p>United Kingdom (English)</p>
              <p>France (Francais)</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-3 text-gray-300 text-sm ">
              <h1 className="font-bold  text-white">Company</h1>
              <p>About Us</p>
              <p>Careers</p>
              <p>Testimonials</p>
              <p>Blog</p>
              <p>Feedback</p>
            </div>
            <div className="space-y-3 text-gray-300 text-sm ">
              <h1 className="font-bold text-white">Support</h1>
              <p>FAQ</p>
              <p>Articles</p>
              <p>Contact us</p>
            </div>
          </div>


        </div>
        <hr className="border-gray-500" />
        <div className="bg-gray-900 mx-auto w-[90vw] pb-10">
          © 2025 Fexspace. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
