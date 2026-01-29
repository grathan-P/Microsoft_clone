const slider = document.getElementById('slider');
const slidernav = document.getElementById('slidernav');
const slideToggle1 = document.getElementById('slideToggle1');
const slideToggle2 = document.getElementById('slideToggle2');
const hamburger = document.getElementById('hamburger');
const sliderbody = document.getElementById('sliderbody');
const showallcontent = document.getElementById('showallcontent');
const mdQuery = window.matchMedia("(min-width: 768px)");

let currentSlide = 0;
let isAnimating = false;

function getSlideMarkup(nextSlide) {
    return nextSlide === 1
        ? `
        <!-- slide 2 -->
        <div class="slider md:pb-2 flex flex-col-reverse md:relative lg:relative w-full lg:flex-row top-0 3xl:w-[90%] mx-auto">
        <div class="left border-b border-b-gray-500 md:border-l-gray-500 md:border-r-gray-500 lg:border-none md:absolute md:top-[85%] md:left-20 md:max-w-[75%] md:p-12 lg:absolute bg-white lg:bg-transparent lg:top-1/4 lg:left-20 pb-4 pl-10 pr-10 pt-5 lg:p-0 lg:max-w-[35%] flex flex-col gap-4  ">
            <h1 class="text-2xl lg:text-white xl:text-4xl font-medium">Microsoft 365</h1>
            <p class="texts lg:text-white ">Introducing Microsoft 365 Premium with our highest usage limits and exclusive Copilot features for AI power users..</p>
            <div class="buttons flex flex-col gap-2 lg:flex-col lg:gap-2 md:flex-row md:text-[14px] lg:text-[14px] sm:flex-row sm:gap-6">
            <button class="button bg-[#0067b8] w-fit p-2.5 text-white">Discover Microsoft 365 Premium</button>
            <div class="link text-blue-500 hover:underline mt-2">
                <a href="#">See other Microsoft 365 options ></a>
            </div>
            </div>
        </div>
        <div class="right w-full">
            <img class="w-full lg:hidden" src="./images/slider2_sm.png" alt="Slider Image"/>
            <img class="w-full  hidden lg:block" src="./images/slider2.avif" alt="Slider Image"/>
        </div>
    </div> `
        : `
        <!-- slide 1 -->
        <div class="slider md:pb-2 flex flex-col-reverse md:relative lg:relative w-full lg:flex-row top-0 3xl:w-[90%] mx-auto">
        <div class="left border-b border-b-gray-500 md:border-l-gray-500 md:border-r-gray-500 lg:border-none md:absolute md:top-[85%] md:left-20 md:max-w-[75%] md:p-12 lg:absolute bg-white lg:bg-transparent lg:top-1/4 lg:left-20 pb-4 pl-10 pr-10 pt-5 lg:p-0 lg:max-w-[35%] flex flex-col gap-4  ">
            <h1 class="text-2xl xl:text-4xl font-medium">Meet Surface Laptop</h1>
            <p class="texts ">Unlock AI features like Live Captions and Cocreator with this exceptionally powerful laptop.</p>
            <button class="button bg-[#0067b8] w-fit p-2.5 text-white">Learn more</button>
        </div>
        <div class="right w-full">
            <img class="w-full lg:hidden" src="./images/slider1_sm2.png" alt="Slider Image"/>
            <img class="w-full  hidden lg:block" src="./images/slider1.avif" alt="Slider Image"/>
        </div>
        </div>`;
}

function updateToggleState(nextSlide) {
    const onSecondSlide = nextSlide === 1;
    slideToggle1?.classList.toggle('bg-black', !onSecondSlide);
    slideToggle1?.classList.toggle('bg-gray-400', onSecondSlide);
    slideToggle2?.classList.toggle('bg-black', onSecondSlide);
    slideToggle2?.classList.toggle('bg-gray-400', !onSecondSlide);
}

function mountSlide(nextSlide) {
    slider.innerHTML = getSlideMarkup(nextSlide);
    const incoming = slider.firstElementChild;
    incoming?.classList.add('slider-fade-in');
    updateToggleState(nextSlide);
    currentSlide = nextSlide;
}

function changeSlide(){
    if (!slider || isAnimating) return;

    const nextSlide = currentSlide === 0 ? 1 : 0;
    const outgoing = slider.firstElementChild;

    if (outgoing) {
        isAnimating = true;
        outgoing.classList.add('slider-fade-out');
        outgoing.addEventListener('animationend', () => {
            mountSlide(nextSlide);
            isAnimating = false;
        }, { once: true });
    } else {
        mountSlide(nextSlide);
    }
}

// Auto slide change every 10 seconds
setInterval(changeSlide, 5000);

let clickCount = 0;

function toggleburer(){
    clickCount == 0 ? openmenu():closemenu();
}

function closemenu(){
    sliderbody.classList.add("hidden");
    clickCount=0;
    hamburger.innerHTML = 
    `<div id="hamburger" class="hamburger inline-block cursor-pointer md:hidden" >
                <div class="line h-0.5 w-6 my-1 bg-black"></div>
                <div class="line h-0.5 w-6 my-1 bg-black"></div>
                <div class="line h-0.5 w-6 my-1 bg-black"></div>
    </div>`

    showallcontent.classList.add("hidden");
    sliderbody.classList.remove("hidden");


    hamburger.onclick=showall;
}


function openmenu(){
    // const isMdUp = window.matchMedia("(min-width: 768px)").matches;

    // if (isMdUp) {
    //     return; // Block function on md and above
    // }

    sliderbody.classList.add("hidden");
    clickCount=1;
    hamburger.innerHTML = 
    `<div id="hamburger" class="hamburger inline-block cursor-pointer md:hidden">
                <div class=""><i class="fa-solid fa-xmark"></i></div>
    </div>`

    

    showallcontent.classList.remove("hidden");
    showallcontent.innerHTML=
    `
    <div class="allcontent">
            <div class="p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6]">Microsoft 365</div>
            <div class="p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6]">Teams</div>
            <div class="p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6]">Copilot</div>
            <div class="p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6]">Windows</div>
            <div class="p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6]">Surface</div>
            <div class="p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6]">Xbox</div>
            <div class="p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6]">Support</div>
            <div id="software" class="flex justify-between items-center p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6] dropdown">
                <div >Software</div>
                <div><i class="fa-solid fa-angle-down text-[#8e8787]"></i></div>
            </div>
            <div id="pcd" class="flex justify-between items-center p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6] dropdown">
                <div>PCs and devices</div>
                <div><i class="fa-solid fa-angle-down text-[#8e8787]"></i></div>
            </div>
            <div id="entertainment" class="flex justify-between items-center p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6] dropdown">
                <div>Entertainment</div>
                <div><i class="fa-solid fa-angle-down text-[#8e8787]"></i></div>
            </div>
            <div id="business" class="flex justify-between items-center p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6] dropdown">
                <div>Business</div>
                <div><i class="fa-solid fa-angle-down text-[#8e8787]"></i></div>
            </div>
            <div id="developer" class="flex justify-between items-center p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6] dropdown">
                <div>Developer and IT</div>
                <div><i class="fa-solid fa-angle-down text-[#8e8787]"></i></div>
            </div>
            <div id="other" class="flex justify-between items-center p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6]  dropdown">
                <div>Other</div>
                <div><i class="fa-solid fa-angle-down text-[#8e8787]"></i></div>
            </div>
            <div class="p-5 bg-[#f2f2f2] border-b-2 border-b-[#e6e6e6]">View Sitemap</div>
        </div>
    `

    hamburger.onclick=showall;
}

mdQuery.addEventListener("change", (e) => {
  if (e.matches) {
    // When entering md and above → force desktop state
    showallcontent.classList.add("hidden");
    sliderbody.classList.remove("hidden");

    clickCount = 0;

    hamburger.innerHTML = `
      <div id="hamburger" class="hamburger inline-block cursor-pointer md:hidden">
        <div class="line h-0.5 w-6 my-1 bg-black"></div>
        <div class="line h-0.5 w-6 my-1 bg-black"></div>
        <div class="line h-0.5 w-6 my-1 bg-black"></div>
      </div>
    `;

    hamburger.onclick = showall;
  }
});

function showall(){
    toggleburer();
}

