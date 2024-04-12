import logo from "./images/logo.png"

export default function Header(){
    return (
   
    <nav class="bg-gray-300 dark:bg-gray-800 shadow ">
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
                                Projects
                            </a>
                            {/* <a class="absolute right-12 z-10 mt-0 w-25 origin-top-right text-gray-600 hover:text-gray-800 dark:hover:text-black px-3 py-0 rounded-md text-sm font-medium" href="/#">
                            Call Us: +91 6398657376
                            </a>
                            <a class="absolute right-12 z-10 mt-6 w-25 origin-top-right text-gray-600 hover:text-gray-800 dark:hover:text-black px-3 py-0 rounded-md text-sm font-medium" href="/#">
                            Mail:abhishek.sharma.devind@gmail.com
                            </a> */}
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
        <div class="hidden ">
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

    );
}