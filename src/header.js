import logo from "./images/logo.png"
export default function Header(){
    return (
    <div className="App-header">
        <div class="mt-2 text-5xl text-center text-black px-3 py-2 rounded-md text-sm font-medium">
            Welcome to Amazsoft
        </div>
    <nav class="dark:bg-gray-800  shadow ">
        <div class="px-8 mx-auto max-w-7xl">
            <div class="flex items-center justify-between h-16">
                <div class=" flex items-center">
                  <div>
                    <a class="flex-shrink-0" href="/">
                        <img class="w-8 h-8" src={logo} className="App-logo" alt="Workflow"/>
                    </a>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div>Amazsoft</div>
                    <div class="hidden md:block">
                        <div class="flex items-baseline ml-10 space-x-4">
                            <a class="text-purple-600 hover:text-gray-800 dark:hover:text-black px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Home
                            </a>
                            <a class="text-purple-600 hover:text-gray-800 dark:hover:text-black px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Gallery
                            </a>
                            <a class="text-purple-600 hover:text-gray-800 dark:hover:text-black px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Services
                            </a>
                            <a class="text-purple-600 hover:text-gray-800 dark:hover:text-black px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Contact us
                            </a>
                            <a class="text-purple-600 hover:text-gray-800 dark:hover:text-black px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                About
                            </a>
                            <a class="text-purple-600 hover:text-gray-800 dark:hover:text-black px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Product
                            </a>
                            <a class="absolute right-12 z-10 mt-0 w-25 origin-top-right text-gray-600 hover:text-gray-800 dark:hover:text-black px-3 py-0 rounded-md text-sm font-medium" href="/#">
                            Call Us: +91 6398657376
                            </a>
                            <a class="absolute right-12 z-10 mt-6 w-25 origin-top-right text-gray-600 hover:text-gray-800 dark:hover:text-black px-3 py-0 rounded-md text-sm font-medium" href="/#">
                            Mail:abhishek.sharma.devind@gmail.com
                            </a>
                            <a class="absolute right-3 z-10 mt-0 w-25 origin-top-right text-gray-600 hover:text-gray-800 dark:hover:text-black px-2 py-0 rounded-md text-sm font-medium" href="/#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                                      </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="flex items-center ml-4 md:ml-6">
                    </div>
                </div>
                <div class="flex -mr-2 md:hidden">
                    <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" class="w-8 h-8" viewBox="0 0 1792 1792" >
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a class="text-purple-500 hover:text-gray-800 dark:hover:text-black block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Home
                </a>
                <a class="text-purple-500 hover:text-gray-800 dark:hover:text-black block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Gallery
                </a>
                <a class="text-purple-500 hover:text-gray-800 dark:hover:text-black block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Services
                </a>
                <a class="text-purple-500 hover:text-gray-800 dark:hover:text-black block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Contact
                </a>
                <a class="text-purple-500 hover:text-gray-800 dark:hover:text-black block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    About
                </a>
            </div>
        </div>
    </nav>
</div>

    );
}