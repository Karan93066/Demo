import React from "react";

function Footer() {
  return (
    <footer class="relative bg-[#000] text-white pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
        <div className="lg:w-4/12">
        <div class="w-full flex flex-col gap-5  px-4 ">
            <div className="w-full md:w-[200px] p-3 bg-white rounded-md flex justify-center">
            <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" srcset=""/>
            </div>
            <div>
            <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
              Learning often happens in classrooms but it doesn’t have to.
            </h5>
            </div>
            
          </div>
        <div class=" w-full flex items-center gap-2 mt-6 lg:mb-0 mb-6 px-4">
              <button
                class="w-10 h-10 rounded-full ease-in-out delay-150  bg-[#FD346E] hover:bg-[#7F54B3]  hover:scale-100 hover:-translate-y-1  text-white flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <i class="fab fa-twitter"></i>
              </button>
              <button
                class="w-10 h-10 rounded-full ease-in-out delay-150  bg-[#FD346E] hover:bg-[#7F54B3]  hover:scale-100 hover:-translate-y-1  text-white flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <i class="fab fa-facebook-square"></i>
              </button>
              <button
                class="w-10 h-10 rounded-full ease-in-out delay-150  bg-[#FD346E] hover:bg-[#7F54B3]  hover:scale-100 hover:-translate-y-1  text-white flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <i class="fab fa-youtube"></i>
              </button>
              <button
                class="w-10 h-10 rounded-full ease-in-out delay-150  bg-[#FD346E] hover:bg-[#7F54B3]  hover:scale-100 hover:-translate-y-1  text-white flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <i class="fab fa-instagram"></i>
              </button>
            </div>
        </div>
        
         
          <div class="w-full lg:w-8/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-blueGray-500 text-lg mb-2">
                  Explore
                </span>
                <ul class="list-unstyled uppercase">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Leadership Board
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Become a Affilate
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-blueGray-500 text-lg  mb-2">
                  Quick Links
                </span>
                <ul class="list-unstyled uppercase">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Risk Disclaimer
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Terms & Condition
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-blueGray-500 text-lg  mb-2">
                  Get In Touch
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      +91 1234567890
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      info@test.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-md text-blueGray-500  py-1">
              Copyright ©{" "}
              <span id="get-current-year">
                2021 Good Work Enterprises All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
