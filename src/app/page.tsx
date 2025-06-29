import { Button } from "@/components/ui/button";
import Header from "./landingPage/header"
import { CircleArrowRight } from 'lucide-react';
import Timer from "@/components/timer";
import Dropdown from "@/components/Dropdown";
import FexInter from "@/components/FexInter";
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="bg-[url('/pictures/fexspaceimg1.jpg')] w-full pt-5">
        <div className="text-center mt-5 md:mt-15 space-y-2 md:space-y-5 mb-4 md:mb-10">
          <h1 className="text-white text-5xl md:text-5xl font-bold md:font-extrabold lg:text-6xl">
            Easily collaborate with your team
          </h1>
          <h1 className="text-blue-400 text-4xl md:text-6xl font-bold ">simplify how you work</h1>
          <p className="text-gray-200 hidden md:block">Enhance team collaboration and improve productivity  with<br />
            all your tools in one place</p>
          <div className="text-white md:hidden text-gray-200">
            <p>Enhance team collaboration and improve</p>
            <p>productivity with all your tools in one place</p>
          </div>
        </div>
        <div className="p-3 bg-white  w-[400px] item-center rounded-2xl mx-auto mb-3 hidden md:flex">
          <input className="outline-none w-[250px]" placeholder="Your email Address" />
          <Button className="bg-teal-400 text-md px-6 py-5">Try For Free</Button>
        </div>
        <div className=" w-[285px] mx-auto mb-3">
          <Button
            className="bg-teal-400 text-md px-25 py-6 text-white w-[285px] flex rounded-md md:hidden">
            <p>Try For Free</p> <CircleArrowRight />
          </Button>
        </div>
        <div className=" text-white flex space-x-1 w-65 m-auto pb-20 "> <span className="text-blue-300">or you can</span> <span className="underline ml-1"> Sign Up with Google</span><CircleArrowRight /></div>
      </div>
      <div className="relative mb-20">
        <div className="bg-[url('/pictures/fexspaceimg1.jpg')] w-[screen] md:w-[screen] lg:w-[screen] xl:w-[screen] h-[100px] md:h-[150px] skew-y-[-5deg] mt-[-60px] "></div>
        <div className=" border border-gray-300/25 border-9 rounded-xl absolute top-10 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] lg:w-[900px]">
          <video
            src="/video/fexspace-hero3.mp4"
            width="full" height="auto" loop muted autoPlay playsInline>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className=" mt-80 md:mt-110 lg:mt-180 mb-15 lg:mb-30">
        <h1 className="font-bold text-xl md:text-3xl lg:text-5xl text-center mb-5 md:mb-20">Your Work Files and Your Team, <br /> Anytime, Anywhere.</h1>
        <div>
          <Timer />
        </div>
      </div>
      <div className="w-[80vw] mx-auto mt-[-260px] md:mt-30 text-center md:text-left">
        <h1 className="font-bold text-xl md:text-4xl mb-10 md:mb-20">All Your Team and <br className="hidden md:block" />
          Project Needs are in One Place</h1>
        <div className="block md:flex mb-20 md:mb-50">
          <Dropdown />
          <div className="hidden md:block w-[45%]">
            <video src="/video/fex-world.mp4"
              className="w-full h-auto rounded-lg shadow-lg"
              autoPlay> Your browser doesn't support video</video>
          </div>
        </div>
      </div>
      <div className="bg-[url('/pictures/fexspaceimg1.jpg')] w-full h-[75px] md:h-[200px] skew-y-[-12deg] md:skew-y-[-8deg] mb-[-40px] md:mb-[-105px]"></div>
      <div className="bg-[url('/pictures/fexspaceimg1.jpg')] w-full h-auto">
        <div className="w-[80vw] md:w-[70vw] mx-auto pt-16 md:pt-40 pb-10">
          <FexInter />
        </div>
      </div>
      <div className="block md:flex p-5 md:p-20 mt-30 md:mt-50  md:w-[75vw] mx-auto space-x-10">
        <div className=" space-y-10 mb-30 md:mb-80 text-center md:text-left md:w-[50%] mx-auto mt-20">
        <h1 className="font-bold text-xl  md:text-4xl">Connect, share and <br className="hidden md:block" />
          work together with <br className="hidden md:block" />
          Fexspace Community.</h1>
        <p className="text-gray-600">Fexspace Community, where you can meet, join events, share <br className="hidden md:block" />
          projects and exchange tips and tricks with people across the <br className="hidden md:block" />
          community.</p>
        <button className="p-4 px-8 border border-teal-500 text-teal-500 rounded-lg">Learn More</button>
        </div>
        <div>
          <video src="/video/community_.mp4"
          autoPlay  loop muted playsInline 
          className="w-[300px] md:w-[600px]"
          ></video>
          </div>
      </div>
      <div  >
        <h1 className="font-bold text-xl  md:text-5xl text-center mb-15 w-[85vw] mx-auto">Trusted by leading organizations <br className="hidden md:block" />
          around the world</h1>
        <div>
          <div className=" hidden md:flex md:space-x-5 lg:space-x-15 w-[90vw] mx-auto item-center justify-center mb-30">
            <img src="/pictures/fexspace13.svg" alt="Your browser doesn't support this " className="md:w-[125px]" />
            <img src="/pictures/fexspace14.svg" alt="Your browser doesn't support this " className="md:w-[125px]" />
            <img src="/pictures/fexspace15.svg" alt="Your browser doesn't support this " className="md:w-[125px]" />
            <img src="/pictures/fexspace16.svg" alt="Your browser doesn't support this " className="md:w-[125px]" />
            <img src="/pictures/fexspace17.svg" alt="Your browser doesn't support this " className="md:w-[125px]" />
          </div>
          <div className="mb-10">
            <div className="flex md:hidden  space-x-5 w-full mb-10 item-center justify-center ">
              <img src="/pictures/fexspace13.svg" alt="Your browser doesn't support this " className="w-[90px] h-auto" />
              <img src="/pictures/fexspace14.svg" alt="Your browser doesn't support this " className="w-[90px] h-auto" />
              <img src="/pictures/fexspace15.svg" alt="Your browser doesn't support this " className="w-[90px] h-auto" />
            </div>
            <div className="flex md:hidden  space-x-5 w-[85vw] mx-auto item-center justify-center mb-20">
              <img src="/pictures/fexspace16.svg" alt="Your browser doesn't support this " className="w-[100px] h-auto" />
              <img src="/pictures/fexspace17.svg" alt="Your browser doesn't support this " className="w-[100px] h-auto" />
            </div>
            <div className="relative  mx-auto h-[500px] overflow-hidden">

              <div className="absolute inset-0 bg-[url('/pictures/fexspacebg2.jpg')] bg-cover bg-center skew-y-[-5deg] -z-10"></div>


              <div className="relative h-full flex flex-col justify-center items-center space-y-5 text-center px-4">

                <h1 className="text-xl md:text-4xl font-bold ">Get Started With Fexspace</h1>
                <p className="text-gray-400 md:text-black">
                  Join today and receive a 2-month subscription <br className="md:hidden" />
                  upgrade for any Fexspace plan, excluding the Fexspace Enterprise <br className="md:hidden" />
                  plan.
                </p>
                <button className="bg-teal-400 text-white w-full p-3 flex items-center justify-center space-x-1 font-bold rounded-md md:hidden mt-5 relative z-[60]">
                  <p>Try For Free</p> <CircleArrowRight />
                </button>
                <div className="p-6 bg-white  w-[600px] item-center rounded-2xl mx-auto mb-3 hidden md:flex justify-between  shadow-lg md:shadow-white/50  mt-10">
                  <input className="outline-none placeholder-teal-500" placeholder="Your email Address" />
                  <Button className="bg-teal-500 text-md  font-bold px-6 py-5 shadow-lg cursor-pointer hover:bg-teal-400 z-50">Try For Free</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-gray-900 skew-y-[-15deg] md:skew-y-[-5deg] h-[120px] mt-[-175px] md:mt-[-100px]  sm:block md:hidden lg:block relative z-10" ></div>
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
        <div className="grid grid-cols-2 w-[70vw] mx-auto pb-20 ">
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
          <div className="space-y-3 text-gray-300 text-sm pl-5">
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
        <hr className="border-gray-500" />
        <div className="bg-gray-900 mx-auto w-[90vw] pb-10">
          © 2025 Fexspace. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
