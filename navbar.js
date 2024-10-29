// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `

  

<!-- Trigger Button For Setting's Section -->


<!-- Modal -->
<div 
  id="settingsModal" 
  class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 hidden"
>
  <div class="bg-white w-full max-w-4xl mx-auto rounded-lg shadow-lg p-6 flex">
    <!-- Vertical Navigation -->
    <div class="w-1/4 border-r pr-4">
      <h2 class="text-lg font-semibold mb-4">Settings</h2>
      <ul>
        <li>
          <button 
            class="flex gap-2.5 items-center px-4 py-2.5 w-full text-lg  tracking-tight leading-loose text-justify  rounded min-h-[48px]" 
            onclick="showTab('tab1')" 
            id="tab1Button"
          >
          <img loading="lazy" src="/assests/user-pen 1.png" alt="" class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
          <span>Account Settings</span>
          </button>
        </li>
        <li>
          <button 
            class="block w-full text-left py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-md mb-2 focus:outline-none" 
            onclick="showTab('tab2')" 
            id="tab2Button"
          >
          <span class="flex gap-2.5 items-center self-stretch my-auto">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/161dc6b9ea6e8e1af1b730e29656c7a6a2a1bf919045b890351bfec8b6bac5ad?placeholderIfAbsent=true&apiKey=349b113878b744f099d317749eba7c77" alt="" class="object-contain self-stretch my-auto w-4 aspect-square stroke-[1.5px] stroke-gray-500" />
            <span class="self-stretch my-auto text-lg font-medium tracking-tight leading-loose text-justify text-gray-500">Subscription</span>
          </span>
        </li>
        <li>
          <button 
            class="flex gap-2.5 items-center px-4 py-2.5 mt-1 w-full text-lg font-medium tracking-tight leading-loose text-justify text-gray-500 rounded min-h-[48px]" 
            onclick="showTab('tab3')" 
            id="tab3Button"
          >
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b6469a3488f52cb3313658abc04a464554c8adc8af4ca53157149bc05c3a59?placeholderIfAbsent=true&apiKey=349b113878b744f099d317749eba7c77" alt="" class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
          <span>Privacy and Data</span>
          </button>
        </li>
        <li>
          <button 
            class="flex gap-2.5 items-center px-4 py-2.5 mt-1 w-full text-lg font-medium tracking-tight leading-loose text-justify text-gray-500 rounded min-h-[48px]" 
            onclick="showTab('tab4')" 
            id="tab4Button"
          >
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/08636a36a0776bb7ca09ff1e41c4cb0bab8ddbe667d67974a3428be1ffc7c593?placeholderIfAbsent=true&apiKey=349b113878b744f099d317749eba7c77" alt="" class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
          <span>Help & Support</span>
          </button>
        </li>
        <li>
          <button 
            class="flex gap-2.5 items-center py-2.5 pl-4 mt-1 w-full text-lg font-medium tracking-tight leading-loose text-justify text-gray-500 whitespace-nowrap rounded min-h-[48px]" 
            onclick="showTab('tab5')" 
            id="tab5Button"
          >
     
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/07e2e973ae9ef0f0490c9dffbfa80d618d24e84a943bb3fdcc900a6d133b6c16?placeholderIfAbsent=true&apiKey=349b113878b744f099d317749eba7c77" alt="" class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
            <span>Theme</span>
       
          </button>
        </li>
        <li>
          <button class="overflow-hidden gap-2 self-stretch px-5 py-3.5 mt-5 w-full text-base font-medium leading-none text-center text-indigo-500 whitespace-nowrap bg-white rounded-lg border border-indigo-500 border-solid">
            Logout
          </button>
        </li>
        
      </ul>
    </div>

    <!-- Modal Content -->
    <div class="w-3/4 pl-6">
      <div id="tab1" class="tab-content">
     
                        <!-- Content Section -->
                        <div class="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
                            <!-- Account Settings -->
                            <section id="account-settings" class="content-section flex flex-col w-full min-h-[256px] max-md:max-w-full">
                              <main class="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
                                <section class="flex flex-col w-full h-[229px] max-md:max-w-full">
                                  <header class="flex gap-10 justify-between items-center py-1.5 w-full border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full">
                                    <h2 class="flex gap-2 items-center self-stretch my-auto text-lg font-semibold tracking-tight leading-loose text-justify text-gray-900 w-[221px]">
                                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3320eb917301fc55188877183aed51279d9d5a9092e72bd4408ca931a0cafb50?placeholderIfAbsent=true&apiKey=349b113878b744f099d317749eba7c77" alt="" class="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" />
                                      <span>Personal Information</span>
                                    </h2>
                                    <div class="flex gap-2 items-center self-stretch my-auto font-medium text-center text-indigo-500 whitespace-nowrap">
                                      <span class="self-stretch px-3.5 my-auto text-lg tracking-tight leading-loose bg-indigo-50 border-2 border-gray-50 border-solid h-[46px] rounded-[400px] w-[46px]">
                                        SF
                                      </span>
                                      <button class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto text-base leading-none bg-white rounded-lg border border-indigo-500 border-solid">
                                        Upload
                                      </button>
                                    </div>
                                  </header>
                                  <div class="flex gap-10 justify-between items-center py-2.5 py-4 pr-0 pl-3 w-full border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full">
                                    <label for="firstName" class="self-stretch my-auto text-base text-justify text-gray-900">First Name</label>
                                    <div class="flex gap-2 items-center self-stretch my-auto">
                                      <span id="firstName" class="self-stretch my-auto text-base text-justify text-gray-400">User</span>
                                      <button class="flex overflow-hidden gap-2.5 justify-center items-center self-stretch my-auto rounded-md bg-white bg-opacity-10 h-[26px] min-h-[26px] w-[26px]" aria-label="Copy first name">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3060e10177af4214b510196d930dd7941326f094eeb7bc5e000698cbd7226e9d?placeholderIfAbsent=true&apiKey=349b113878b744f099d317749eba7c77" alt="" class="object-contain self-stretch my-auto w-3 aspect-square fill-gray-900" />
                                      </button>
                                    </div>
                                  </div>
                                  <div class="flex gap-10 justify-between items-center py-2.5 py-4 pr-0 pl-3 w-full border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full">
                                    <label for="lastName" class="self-stretch my-auto text-base text-justify text-gray-900">Last Name</label>
                                    <div class="flex gap-2 items-center self-stretch my-auto">
                                      <span id="lastName" class="self-stretch my-auto text-base text-justify text-gray-400">Name</span>
                                      <button class="flex overflow-hidden gap-2.5 justify-center items-center self-stretch my-auto rounded-md bg-white bg-opacity-10 h-[26px] min-h-[26px] w-[26px]" aria-label="Copy last name">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3060e10177af4214b510196d930dd7941326f094eeb7bc5e000698cbd7226e9d?placeholderIfAbsent=true&apiKey=349b113878b744f099d317749eba7c77" alt="" class="object-contain self-stretch my-auto w-3 aspect-square fill-gray-900" />
                                      </button>
                                    </div>
                                  </div>
                                  <div class="flex gap-10 justify-between items-center py-2.5 pl-3 w-full text-base max-md:max-w-full">
                                    <label for="email" class="self-stretch my-auto text-justify text-gray-900">Email</label>
                                    <div class="flex gap-2 items-center self-stretch my-auto min-w-[240px]">
                                      <span id="email" class="self-stretch my-auto text-justify text-gray-400">johndoe@gmail.com</span>
                                      <button class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto font-medium leading-none text-center text-indigo-500 bg-white rounded-lg border border-indigo-500 border-solid">
                                        Verify Account
                                      </button>
                                    </div>
                                  </div>
                                </section>
                                <section class="flex flex-col mt-5 w-full text-base text-justify text-gray-900 h-[229px] max-md:max-w-full">
                                  <header class="flex gap-10 justify-between items-center py-3.5 w-full text-lg font-semibold tracking-tight leading-loose border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full">
                                    <h2 class="flex gap-2 items-center self-stretch my-auto w-[221px]">
                                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/79f15d320548c680ae04390c51b7aa3fedaa7fbab12215c940188aeebd0844a2?placeholderIfAbsent=true&apiKey=349b113878b744f099d317749eba7c77" alt="" class="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]" />
                                      <span>Change password</span>
                                    </h2>
                                  </header>
                                  <form>
                                    <div class="flex gap-10 justify-between items-center py-2.5 py-4 pr-0 pl-3 w-full border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full">
                                      <label for="currentPassword" class="self-stretch my-auto">Enter Current Password</label>
                                      <input type="password" id="currentPassword" value="********" class="gap-2 self-stretch my-auto whitespace-nowrap bg-transparent border-none" aria-label="Current password" />
                                    </div>
                                    <div class="flex gap-10 justify-between items-center py-2.5 py-4 pr-0 pl-3 w-full border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full">
                                      <label for="newPassword" class="self-stretch my-auto">Enter New Password</label>
                                      <input type="password" id="newPassword" value="********" class="gap-2 self-stretch my-auto whitespace-nowrap bg-transparent border-none" aria-label="New password" />
                                    </div>
                                    <div class="flex gap-2.5 items-center py-2.5 w-full font-medium leading-none text-center text-indigo-500 max-md:max-w-full">
                                      <button type="submit" class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto bg-white rounded-lg border border-indigo-500 border-solid">
                                        Update Password
                                      </button>
                                    </div>
                                  </form>
                                </section>
                                <div class="flex gap-2.5 items-center py-1.5 mt-5 w-full text-base font-medium leading-none text-center text-indigo-500 whitespace-nowrap min-h-[56px] max-md:max-w-full">
                                  <button class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto bg-white rounded-lg border border-indigo-500 border-solid">
                                    Logout
                                  </button>
                                </div>
                              </main>
                            </section>
                            </section>
        
                            <!-- Subscription Section -->
                            <section id="subscription" class="content-section hidden flex-col w-full min-h-[256px] max-md:max-w-full">
                                <header class="flex gap-10 justify-between items-center py-3.5 w-full border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full">
                                    <h2 class="flex gap-2 items-center self-stretch my-auto">
                                        <span class="flex gap-2.5 justify-center items-center self-stretch my-auto w-5 min-h-[20px]">
                                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ea79454e68a64ed57871b3cd519734b5b0c3015de8af4797b014684cae4078?placeholderIfAbsent=true&apiKey=3879a18f49be423fa8a3d20e87653b85" alt="" class="object-contain self-stretch my-auto w-4 aspect-square stroke-[1.5px] stroke-gray-900" />
                                        </span>
                                        <span class="self-stretch my-auto text-lg font-semibold tracking-tight leading-loose text-justify text-gray-900">Subscription Details</span>
                                    </h2>
                                </header>
                                <div class="flex gap-10 justify-between items-center py-2.5 pl-3 w-full text-base max-md:max-w-full">
                                    <p class="self-stretch my-auto text-justify text-gray-900">Your subscription is active.</p>
                                    <div class="flex gap-2 items-center self-stretch my-auto font-medium leading-none text-center text-gray-50">
                                        <button class="gap-2 self-stretch px-5 py-3.5 my-auto bg-red-500 rounded-lg border border-red-500 border-solid">Cancel Subscription</button>
                                    </div>
                                </div>
                            </section>
        
                            <!-- Privacy and Data Section -->
                            <section id="privacy" class="content-section hidden flex-col w-full min-h-[256px] max-md:max-w-full">
                                <header class="flex gap-10 justify-between items-center py-3.5 w-full border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full">
                                    <h2 class="flex gap-2 items-center self-stretch my-auto">
                                        <span class="flex gap-2.5 justify-center items-center self-stretch my-auto w-5 min-h-[20px]">
                                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/66075d7c13ca95fd9c7fc61987852750455a0a69ab1b5428de20e1d545eeeb8f?placeholderIfAbsent=true&apiKey=3879a18f49be423fa8a3d20e87653b85" alt="" class="object-contain self-stretch my-auto w-4 aspect-square stroke-[1.5px] stroke-gray-900" />
                                        </span>
                                        <span class="self-stretch my-auto text-lg font-semibold tracking-tight leading-loose text-justify text-gray-900">Privacy and Data</span>
                                    </h2>
                                </header>
                                <div class="flex gap-10 justify-between items-center py-2.5 pl-3 w-full text-base max-md:max-w-full">
                                    <p class="self-stretch my-auto text-justify text-gray-900">Manage your privacy settings.</p>
                                    <div class="flex gap-2 items-center self-stretch my-auto font-medium leading-none text-center text-gray-50">
                                        <button class="gap-2 self-stretch px-5 py-3.5 my-auto bg-gray-500 rounded-lg border border-gray-500 border-solid">Update Privacy Settings</button>
                                    </div>
                                </div>
                            </section>
        
                            <!-- Help & Support Section -->
                            <section id="support" class="content-section hidden flex-col w-full min-h-[256px] max-md:max-w-full">
                                <header class="flex gap-10 justify-between items-center py-3.5 w-full border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full">
                                    <h2 class="flex gap-2 items-center self-stretch my-auto">
                                        <span class="flex gap-2.5 justify-center items-center self-stretch my-auto w-5 min-h-[20px]">
                                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/160f39ebd71d5168325d907d6a0631b1dc5c2ae69a663b4bb9d76c265ab3a8b9?placeholderIfAbsent=true&apiKey=3879a18f49be423fa8a3d20e87653b85" alt="" class="object-contain self-stretch my-auto w-4 aspect-square stroke-[1.5px] stroke-gray-900" />
                                        </span>
                                        <span class="self-stretch my-auto text-lg font-semibold tracking-tight leading-loose text-justify text-gray-900">Help & Support</span>
                                    </h2>
                                </header>
                                <div class="flex gap-10 justify-between items-center py-2.5 pl-3 w-full text-base max-md:max-w-full">
                                    <p class="self-stretch my-auto text-justify text-gray-900">Need assistance? Contact our support team.</p>
                                    <div class="flex gap-2 items-center self-stretch my-auto font-medium leading-none text-center text-gray-50">
                                        <button class="gap-2 self-stretch px-5 py-3.5 my-auto bg-blue-500 rounded-lg border border-blue-500 border-solid">Contact Support</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                  
                
 
        
      </div>
      <div id="tab4" class="tab-content hidden">
  
      
         
          
              <div class="flex flex-col w-full max-md:max-w-full">
                <header
                  class="flex gap-10 justify-between items-center py-3.5 w-full text-lg font-semibold tracking-tight leading-loose text-justify text-gray-900 border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full"
                >
                  <h2 class="flex gap-2 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb2f75687d3fa49c0f622e9eff402d2cb04cab04767a0e6ac23c618d95b40a35?placeholderIfAbsent=true&apiKey=3879a18f49be423fa8a3d20e87653b85"
                      class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                      alt=""
                    />
                    <span class="self-stretch my-auto">Help & Support</span>
                  </h2>
                  <div
                    class="flex gap-2 self-stretch my-auto min-h-[16px]"
                  ></div>
                </header>
                <div
                  class="flex gap-10 justify-between items-center py-2.5 pl-3 w-full text-base max-md:max-w-full"
                >
                  <p class="self-stretch my-auto text-justify text-gray-900">
                    hello@beyondhapiness
                  </p>
                  <div
                    class="flex gap-2 items-center self-stretch my-auto font-medium leading-none text-center text-indigo-500"
                  >
                    <button
                      class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto bg-white rounded-lg border border-indigo-500 border-solid"
                    >
                      Send Email
                    </button>
                  </div>
                </div>
                <div
                  class="flex gap-10 justify-between items-center py-2.5 pl-3 w-full max-md:max-w-full"
                >
                  <div
                    class="flex gap-3 items-center self-stretch my-auto w-[216px]"
                  >
                    <p
                      class="self-stretch my-auto text-base text-justify text-gray-900"
                    >
                      Chat Us
                    </p>
                    <span
                      class="gap-1 self-stretch px-1.5 my-auto text-xs font-semibold tracking-wider leading-loose text-gray-50 uppercase bg-indigo-500 rounded-sm h-[18px]"
                    >
                      24/7 Support
                    </span>
                  </div>
                  <div
                    class="flex gap-2 items-center self-stretch my-auto text-base font-medium leading-none text-center text-indigo-500"
                  >
                    <button
                      class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto bg-white rounded-lg border border-indigo-500 border-solid"
                    >
                      Chat Us
                    </button>
                  </div>
                </div>
              </div>
      </div>
      <div id="tab3" class="tab-content hidden">


   
    
        <h2 class="flex gap-2 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e011a5464c4dace8870af75f21dacbba6c85283eb86fbf0dd43214bbcaaf8857?placeholderIfAbsent=true&apiKey=3879a18f49be423fa8a3d20e87653b85"
            alt=""
            class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <span class="self-stretch my-auto">History</span>
        </h2>
        <div class="flex gap-2 self-stretch my-auto min-h-[16px]"></div>
      </header>
      <div
        class="flex flex-col py-3 w-full text-xs text-start leading-loose text-gray-900 max-md:max-w-full"
      >
        <p class="max-md:max-w-full">
          Are you sure you want to delete your chat history?
        </p>
        <p class="mt-2 leading-5 max-md:max-w-full">
          Once deleted, all conversations will be permanently removed from
          your account and cannot be recovered. This action will also erase
          any associated data, including media and files shared in chats.
        </p>
        <p class="mt-2 max-md:max-w-full">
          If you're certain, please confirm below.
        </p>
      </div>
      <div
        class="flex gap-10 justify-between items-center py-2.5 pl-3 w-full text-base max-md:max-w-full"
      >
        <span class="self-stretch my-auto text-justify text-gray-900"
          >History</span
        >
        <button
          class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto bg-white rounded-lg border border-indigo-500 border-solid text-indigo-500 font-medium leading-none text-center"
        >
          Clear Chat History
        </button>
      </div>
    </section>
    <section
      class="flex flex-col mt-5 w-full min-h-[117px] max-md:max-w-full"
    >
      <header
        class="flex gap-10 justify-between items-center py-3.5 w-full border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full"
      >
        <h2 class="flex gap-2 items-center self-stretch my-auto">
          <div
            class="flex gap-2.5 justify-center items-center self-stretch my-auto w-5 min-h-[20px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ea79454e68a64ed57871b3cd519734b5b0c3015de8af4797b014684cae4078?placeholderIfAbsent=true&apiKey=3879a18f49be423fa8a3d20e87653b85"
              alt=""
              class="object-contain self-stretch my-auto w-4 aspect-square stroke-[1.5px] stroke-gray-900"
            />
          </div>
          <span
            class="self-stretch my-auto text-lg font-semibold tracking-tight leading-loose text-justify text-gray-900"
            >Legal</span
          >
        </h2>
        <div class="flex gap-2 self-stretch my-auto min-h-[16px]"></div>
      </header>
      <div
        class="flex gap-10 justify-between items-center pt-4 pl-3 w-full h-14 text-base max-md:max-w-full"
      >
        <span class="self-stretch my-auto text-justify text-gray-900"
          >Privacy Statement / Policy</span
        >
        <button
          class="overflow-hidden  gap-2 self-stretch px-5 py-3.5 my-auto bg-white rounded-lg border border-indigo-500 border-solid text-indigo-500 font-medium leading-none text-center whitespace-nowrap"
        >
          Read
        </button>
      </div>
 


      </div>
      <div id="tab2" class="tab-content hidden">
      
             
           
                <h2 class="flex gap-2 items-center self-stretch my-auto">
                  <span
                    class="flex gap-2.5 justify-center items-center self-stretch my-auto w-5 min-h-[20px]"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ea79454e68a64ed57871b3cd519734b5b0c3015de8af4797b014684cae4078?placeholderIfAbsent=true&apiKey=3879a18f49be423fa8a3d20e87653b85"
                      alt=""
                      class="object-contain self-stretch my-auto w-4 aspect-square stroke-[1.5px] stroke-gray-900"
                    />
                  </span>
                  <span
                    class="self-stretch my-auto text-lg font-semibold tracking-tight leading-loose text-justify text-gray-900"
                    >Account Subscription</span
                  >
                </h2>
              </header>
              <div
                class="flex gap-10 justify-between items-center py-2.5 pl-3 w-full text-base max-md:max-w-full"
              >
                <p class="self-stretch my-auto text-justify text-gray-900">
                  Free Tier
                </p>
                <div
                  class="flex gap-2 items-center self-stretch my-auto font-medium leading-none text-center text-gray-50"
                >
                  <button
                    class="gap-2 self-stretch px-5 py-3.5 my-auto bg-indigo-500 rounded-lg border border-indigo-500 border-solid"
                  >
                    Upgrade to Premium
                  </button>
                </div>
              </div>
            </section>
            <section
              class="flex flex-col mt-5 w-full min-h-[256px] max-md:max-w-full"
            >
              <header
                class="flex gap-10 justify-between items-center py-3.5 w-full text-lg font-semibold tracking-tight leading-loose text-justify text-gray-900 border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full"
              >
                <h2 class="flex gap-2 items-center self-stretch my-auto w-[221px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/79f15d320548c680ae04390c51b7aa3fedaa7fbab12215c940188aeebd0844a2?placeholderIfAbsent=true&apiKey=3879a18f49be423fa8a3d20e87653b85"
                    alt=""
                    class="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]"
                  />
                  <span class="self-stretch my-auto">Payment Methods</span>
                </h2>
              </header>
              <div
                class="flex gap-2.5 items-center py-2.5 w-full text-base font-medium leading-none text-center text-indigo-500 max-md:max-w-full"
              >
                <button
                  class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto bg-white rounded-lg border border-indigo-500 border-solid"
                >
                  Add Payment Method
                </button>
              </div>
            </section>
     
      </div>
      <div id="tab5" class="tab-content hidden">
       
         
        
              <div class="flex flex-col w-full max-md:max-w-full">
                <header
                  class="flex gap-10 justify-between items-center py-3.5 w-full text-lg font-semibold tracking-tight leading-loose text-justify text-gray-900 whitespace-nowrap border-b border-solid border-b-gray-300 min-h-[56px] max-md:max-w-full"
                >
                  <h2 class="flex gap-2 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1306a82a0a34b897f656787220d0f75f52105f3f1d4eb01c85039f023ae56ab3?placeholderIfAbsent=true&apiKey=3879a18f49be423fa8a3d20e87653b85"
                      class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                      alt=""
                    />
                    <span>Theme</span>
                  </h2>
                </header>
                <div
                  class="flex gap-10 justify-between items-center py-2.5 pl-3 w-full text-base max-md:max-w-full"
                >
                  <span class="self-stretch my-auto text-justify text-gray-900"
                    >Light Mode</span
                  >
                  <div
                    class="flex gap-3 items-center self-stretch my-auto font-medium leading-none text-center text-indigo-500 whitespace-nowrap min-w-[240px]"
                  >
                    <button
                      class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto bg-white rounded-lg border border-indigo-500 border-solid"
                    >
                      Light
                    </button>
                    <button
                      class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto bg-white rounded-lg border border-indigo-500 border-solid"
                    >
                      Dark
                    </button>
                    <button
                      class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto bg-white rounded-lg border border-indigo-500 border-solid"
                    >
                      System
                    </button>
                  </div>
                </div>
              </div>

            </div>
     
     



      <div id="tab6" class="tab-content hidden">
        <h3 class="text-xl font-semibold mb-2">Language Settings</h3>
        <p>Content for Language settings goes here.</p>
      </div>
      <div id="tab7" class="tab-content hidden">
        <h3 class="text-xl font-semibold mb-2">Security Settings</h3>
        <p>Content for Security settings goes here.</p>
      </div>
      <div id="tab8" class="tab-content hidden">
        <h3 class="text-xl font-semibold mb-2">Accessibility Settings</h3>
        <p>Content for Accessibility settings goes here.</p>
      </div>

      <!-- Modal Footer -->
      <div class="mt-6 flex justify-end">
        <button 
          class="overflow-hidden gap-2 me-5 self-stretch px-5 py-3.5 my-auto font-medium leading-none text-center text-indigo-500 bg-white rounded-lg border border-indigo-500 border-solid" 
          onclick="saveSettings()"
        >
          Save
        </button>
        <button 
          class="overflow-hidden gap-2 self-stretch px-5 py-3.5 my-auto font-medium leading-none text-center text-indigo-500 bg-white rounded-lg border border-indigo-500 border-solid" 
          onclick="toggleModal(false)"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript for Tab Switching and Modal Toggling -->
<script>
  function toggleModal(show) {
    const modal = document.getElementById('settingsModal');
    modal.classList.toggle('hidden', !show);
  }

  function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach((tab) => {
      tab.classList.add('hidden');
    });

    // Show the selected tab
    document.getElementById(tabId).classList.remove('hidden');

    // Reset active button styles
    document.querySelectorAll('button[id$="Button"]').forEach((btn) => {
      btn.classList.remove('bg-gray-200');
    });

    // Highlight the active tab button
    document.getElementById(tabId + 'Button').classList.add('bg-gray-200');
  }

  function saveSettings() {
    // Logic for saving settings
    alert('Settings Saved!');
  }
</script>





    
    `;
    document.getElementById("navbar").innerHTML = navbarHTML;
  });
  







