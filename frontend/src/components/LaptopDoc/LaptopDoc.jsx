import React,{ useRef, useState } from 'react';
import { assets } from '../../assets/assests.js';
import { NavLink } from 'react-router-dom';

const LaptopDoc = () => {
  const arr = ['CPU', 'GPU', 'RAM', 'Storage', 'Display', 'Battery', 'Connectivity', 'Dolby', 'Games', 'Keyboard', 'Benchmarks', 'Used For', 'Rest Spec'];
  const imgarr = [assets.CPU,assets.GPU,assets.RAM,assets.Storage,assets.Display,assets.Battery,assets.Connectivity,assets.Dolby,assets.Games,assets.Keyboard,assets.Benchmarks,assets.UsedFor,assets.RestSpec]


  // Initialize state array for accordion open states
  const [accordionOpen, setAccordionOpen] = useState(Array(arr.length).fill(false));
  const accordionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // Function to toggle accordion
  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Function to scroll to the specified accordion
  const scrollToAccordion = (index) => {
    accordionRefs[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='max-w-[95vw] p-11'>
      <div class="flex items-start p-5">
        <NavLink to="/categories/laptops" // Set the target route here
          className="flex items-center text-base text-white bg-orange-500 rounded-full py-2 px-5 hover:text-orange-500 hover:bg-white border border-transparent transition duration-300">
            <span class="mr-2">Take me to Laptops</span>
          <div class="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full transition duration-300">
            <svg class="w-4 h-4 text-white transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </NavLink>
      </div>

      <div className="overflow-x-auto explore-menu">
      <style>
        {`
          .explore-menu::-webkit-scrollbar {
            display: none;
          }
          .explore-menu {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
        <div className="flex flex-nowrap gap-4 px-4">
          {arr.map((item, index) => (
            <div key={index} className="relative inline-block mx-auto min-w-[200px]">
              {/* Button with sliding image effect */}
              <button 
                className="relative w-full px-8 py-6 sm:px-10 sm:py-8 md:px-12 md:py-10 bg-[#2d1a3f] text-white font-bold rounded-lg overflow-hidden group"
                onClick={() => scrollToAccordion(index)}
              >
                {/* Button Text */}
                <span className="relative z-2">{item}</span>

                {/* The Hover Animation Image */}
                <div className="absolute inset-0 w-full h-full transition-transform transform translate-x-full group-hover:translate-x-0 duration-500 ease-out">
                  <img 
                    src={imgarr[index]} 
                    alt={`${item} Image`} 
                    className="w-full h-full object-cover opacity-80" 
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      
      {/* CPU Accordion */}
      <div className='px-0 py-4 sm:p-4 mt-10' ref={accordionRefs[0]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(0)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>CPU</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[0] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[0] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[0] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
            <div className='overflow-hidden'>
              <div className='px-0 sm:p-4'>
                <h2 className='text-2xl text-[#F3C623]'>Understanding Laptop CPUs: The Basics to Make an Informed Choice</h2>

                <h3 className='text-[#D4BEE4] text-xl mt-4'>1. What is a CPU?</h3>
                <p className='text-white text-base pl-5'>
                  The <strong className='text-[#D4BEE4]'>Central Processing Unit (CPU)</strong> is the "brain" of your laptop. It handles all the instructions your laptop receives, and its performance directly impacts how fast tasks are completed, from simple browsing to high-end gaming or video editing.
                </p>

                <h3 className='text-[#D4BEE4] text-xl mt-4'>2. Key CPU Concepts to Know:</h3>

                <h4 className='text-[#EEEEEE] text-lg pl-5'>Cores</h4>
                <p className='text-white text-base pl-9'>
                  A <strong className='text-[#D4BEE4]'>core</strong> is an individual processing unit within the CPU. More cores mean the CPU can handle more tasks simultaneously.
                </p>
                <ul className='list-disc text-white text-base pl-14'>
                  <li>
                    <strong className='text-[#AB886D]'>Dual-core CPUs</strong>: Can handle two tasks at once, suited for basic tasks like browsing and word processing.
                  </li>
                  <li>
                    <strong className='text-[#AB886D]'>Quad-core CPUs</strong>: Can handle four tasks, perfect for more intensive work like photo editing or light gaming.
                  </li>
                  <li>
                    <strong className='text-[#AB886D]'>Hexa-core, Octa-core, and Higher</strong>: More cores are ideal for heavy multitasking, gaming, and content creation (e.g., video editing or 3D rendering).
                  </li>
                </ul>

                <h4 className='text-[#EEEEEE] text-lg pl-5'>Threads</h4>
                <p className='text-white text-base pl-9'>
                  <strong className='text-[#D4BEE4]'>Threads</strong> are the virtual processing units that split the workload across the physical cores. A higher number of threads means better multitasking performance.
                </p>
                <p className='text-white text-base pl-9'>
                  <strong className='text-[#D4BEE4]'>Hyper-threading/Simultaneous Multithreading (SMT)</strong>: Allows each core to run two threads simultaneously. For example, a 4-core processor with hyper-threading will handle 8 threads.
                </p>

                <h4 className='text-[#EEEEEE] text-lg pl-5'>Performance (P) and Efficiency (E) Cores</h4>
                <p className='text-white text-base pl-9'>
                  Modern CPUs, like Intel’s <strong className='text-[#D4BEE4]'>12th and 13th Gen</strong> processors, have <strong className='text-[#D4BEE4]'>P-cores</strong> (Performance) and <strong className='text-[#D4BEE4]'>E-cores</strong> (Efficiency):
                </p>
                <ul className='list-disc text-white text-base pl-14'>
                  <li>
                    <strong className='text-[#AB886D]'>P-Cores</strong>: Designed for tasks that require high performance, like gaming or video editing. They prioritize raw power.
                  </li>
                  <li>
                    <strong className='text-[#AB886D]'>E-Cores</strong>: Focus on energy efficiency and handle background tasks like web browsing or system updates, improving battery life.
                  </li>
                </ul>
                <p className='text-white text-base pl-9'>
                  This architecture allows the CPU to balance high performance with low power consumption, especially in laptops where battery life matters.
                </p>

                <h3 className='text-[#D4BEE4] text-xl mt-4'>3. Clock Speed (GHz)</h3>
                <p className='text-white text-base pl-9'>
                  <strong className='text-[#D4BEE4]'>Clock speed</strong> measures how fast a CPU can execute instructions, expressed in <strong className='text-[#D4BEE4]'>GHz (Gigahertz)</strong>.
                </p>
                <ul className='list-disc text-base pl-14 text-white'>
                  <li>
                    <strong className='text-[#AB886D]'>Base Clock</strong>: The standard speed the CPU operates at during light workloads.
                  </li>
                  <li>
                    <strong className='text-[#AB886D]'>Boost Clock/Turbo Boost</strong>: When the CPU encounters a demanding task, it can "boost" to higher speeds for short periods.
                  </li>
                </ul>
                <p className='text-white text-base pl-9'>
                  Example: A CPU with a base clock of <strong className='text-[#D4BEE4]'>2.4 GHz</strong> and a boost clock of <strong className='text-[#D4BEE4]'>4.2 GHz</strong> will speed up to 4.2 GHz when needed, offering more power for demanding tasks.
                </p>

                <h3 className='text-[#D4BEE4] text-xl mt-4'>5. Integrated vs. Dedicated Graphics</h3>
                <p className='text-white text-base pl-9'>
                  Many CPUs (especially Intel and AMD mobile processors) have built-in graphics capabilities called <strong className='text-[#D4BEE4]'>integrated graphics</strong>.
                </p>
                <ul className='list-disc text-base pl-14 text-white'>
                  <li>
                    <strong className='text-[#AB886D]'>Integrated Graphics (iGPU)</strong>: Suitable for basic tasks, video streaming, and light gaming. Common in Intel and AMD Ryzen 5 processors.
                  </li>
                  <li>
                    <strong className='text-[#AB886D]'>Dedicated Graphics (GPU)</strong>: Laptops with powerful GPUs (e.g., NVIDIA, AMD Radeon) are better for gaming, 3D rendering, and heavy video editing.
                  </li>
                </ul>

                <h3 className='text-[#D4BEE4] text-xl mt-4'>7. CPU Generations</h3>
                <p className='text-white text-base pl-9'>
                  The <strong className='text-[#D4BEE4]'>generation</strong> of a CPU refers to its design and technological advancements. For example:
                </p>
                <ul className='list-disc text-base pl-14 text-white'>
                  <li>
                    <strong className='text-[#AB886D]'>Intel 10th Gen vs. 13th Gen</strong>: The 13th Gen has more efficient cores, better battery management, and higher performance compared to the 10th Gen.
                  </li>
                  <li>
                    <strong className='text-[#AB886D]'>AMD Ryzen 4000 vs. Ryzen 7000</strong>: The newer Ryzen 7000 series has better multitasking, faster clock speeds, and improved power efficiency compared to older models.
                  </li>
                </ul>

                <h3 className='text-[#D4BEE4] text-xl mt-4'>8. Intel vs. AMD: What’s the Difference?</h3>
                <p className='text-white text-base pl-9'>
                  Both Intel and AMD make high-quality laptop processors, but they excel in different areas:
                </p>

                <h4 className='text-[#EEEEEE] text-lg pl-9'>Intel (Core i5, i7, i9)</h4>
                <ul className='list-disc text-base pl-14 text-white'>
                  <li>
                    <strong className='text-[#AB886D]'>Strengths</strong>: Excellent single-core performance, ideal for gaming and applications that depend on raw power. The new Intel CPUs, especially those with <strong className='text-[#D4BEE4]'>P and E cores</strong>, offer a great balance between performance and battery life.
                  </li>
                  <li>
                    <strong className='text-[#AB886D]'>Best For</strong>: Gamers, professionals, and users needing the latest technology and high performance.
                  </li>
                </ul>

                <h4 className='text-[#EEEEEE] text-lg pl-9'>AMD (Ryzen 5, 7, 9)</h4>
                <ul className='list-disc text-base pl-14 text-white'>
                  <li>
                    <strong className='text-[#AB886D]'>Strengths</strong>: Known for multi-core performance, which is great for multitasking and creative tasks like video editing. Ryzen processors often offer better value in terms of price-to-performance.
                  </li>
                  <li>
                    <strong className='text-[#AB886D]'>Best For</strong>: Multitasking, content creation, and users looking for powerful CPUs at competitive prices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GPU Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[1]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(1)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>GPU</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[1] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[1] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[1] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                  <h2 className='text-2xl text-[#F3C623]'>Understanding Laptop GPUs: A Comprehensive Guide</h2>

                  <h3 className='text-xl text-[#D4BEE4] mt-4'>1. What is a GPU?</h3>
                  <p className='text-base pl-5 text-white'>
                    A <strong className='text-[#D4BEE4]'>GPU (Graphics Processing Unit)</strong> is the processor responsible for rendering images, videos, and animations, making it essential for tasks like gaming, video editing, and 3D modeling. It offloads these tasks from the CPU, allowing smoother performance for graphic-intensive applications.
                  </p>

                  <h3 className='text-xl text-[#D4BEE4] mt-4'>2. Types of Laptop GPUs: Integrated vs. Dedicated</h3>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>
                      <strong className='text-[#AB886D]'>Integrated GPU (iGPU)</strong>: Built into the CPU and shares system memory. It's more power-efficient but less powerful, ideal for general productivity tasks and light gaming. Examples: Intel Iris Xe, AMD Radeon integrated graphics.
                    </li>
                    <li>
                      <strong className='text-[#AB886D]'>Dedicated GPU (dGPU)</strong>: A separate GPU with its own VRAM, providing higher performance for gaming, video editing, and 3D rendering. Examples: NVIDIA GeForce GTX/RTX series, AMD Radeon RX series.
                    </li>
                  </ul>

                  <h3 className='text-xl text-[#D4BEE4] mt-4'>3. VRAM (Video RAM)</h3>
                  <p className='text-base pl-9 text-white'>
                    VRAM is the memory used by the GPU to store image data. More VRAM allows the GPU to handle larger textures and more complex scenes. 
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li><strong className='text-[#AB886D]'>2GB to 4GB VRAM</strong>: Suitable for light gaming and basic video editing.</li>
                    <li><strong className='text-[#AB886D]'>6GB VRAM</strong>: Great for gaming at higher settings or 1080p video editing.</li>
                    <li><strong className='text-[#AB886D]'>8GB VRAM and Above</strong>: Necessary for AAA gaming titles, 4K video editing, and 3D rendering.</li>
                  </ul>

                  <h3 className='text-xl text-[#D4BEE4] mt-4'>5. GPU Models</h3>
                  <p className='text-base pl-9 text-white'>
                    Different GPU series are designed for various tasks:
                  </p>

                  <ul className="list-disc text-base pl-14 text-white">
                    <li><strong className='text-[#AB886D]'>NVIDIA GTX Series</strong>: Budget-friendly, suitable for 1080p gaming (e.g., GTX 1650).</li>
                    <li><strong className='text-[#AB886D]'>NVIDIA RTX Series</strong>: High-end gaming with ray tracing and AI-enhanced features (e.g., RTX 3050, RTX 3060).</li>
                    <li><strong className='text-[#AB886D]'>AMD RX Series</strong>: Competitive with NVIDIA for gaming and productivity (e.g., RX 6600M).</li>
                  </ul>

                  <h3 className='text-xl text-[#D4BEE4] mt-4'>7. Performance for Gaming</h3>
                  <p className='text-base pl-9 text-white'>
                    Here's a quick guide based on the gaming resolution:
                  </p>
                  <ul className='list-disc text-base pl-14 text-white'>
                    <li><strong className='text-[#AB886D]'>1080p Gaming</strong>: Look for mid-range GPUs like GTX 1650, RTX 3050 with 4GB to 6GB VRAM.</li>
                    <li><strong className='text-[#AB886D]'>1440p or 4K Gaming</strong>: High-end GPUs like RTX 3070 or 3080 with 8GB VRAM or more.</li>
                  </ul>

                  <h3 className='text-xl text-[#D4BEE4] mt-4'>8. Content Creation & Professional Use</h3>
                  <p className='text-base pl-9 text-white'>
                    For video editing, 3D rendering, or animation, GPUs like the <strong className='text-[#D4BEE4]'>RTX 3060</strong> or <strong className='text-[#D4BEE4]'>AMD RX 6600M</strong> with at least 6GB VRAM will provide the best performance.
                  </p>

                  <h3 className='text-xl text-[#D4BEE4] mt-4'>9. Power Efficiency and Battery Life</h3>
                  <p className='text-base pl-9 text-white'>
                    Integrated GPUs offer better battery life, while dedicated GPUs use more power but provide greater performance for demanding tasks. For professionals on the go, balance battery life and performance carefully.
                  </p>

                  <h3 className='text-xl text-[#D4BEE4] mt-4'>10. Popular Laptop GPU Recommendations Based on Use Cases</h3>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>
                      <strong className='text-[#AB886D]'>Casual Use</strong>: Integrated GPUs like Intel Iris Xe or AMD Vega.
                    </li>
                    <li>
                      <strong className='text-[#AB886D]'>Mid-range Gaming & Productivity</strong>: NVIDIA GTX 1650 or RTX 3050 with 4GB to 6GB VRAM.
                    </li>
                    <li>
                      <strong className='text-[#AB886D]'>High-End Gaming & Content Creation</strong>: RTX 3060, RTX 3070, or AMD RX 6600M.
                    </li>
                    <li>
                      <strong className='text-[#AB886D]'>Extreme Gaming & Professional Work</strong>: RTX 3080 or AMD RX 6800M with 8GB VRAM or more.
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* RAM Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[2]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(2)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>RAM</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[2] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[2] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[2] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                  <h2 className='text-2xl text-[#F3C623]'>RAM Guide: Everything You Need to Know</h2>

                  <h3 className='text-xl text-[#D4BEE4] mt-4'>1. What is RAM?</h3>
                  <p className='text-base pl-5 text-white'>
                    RAM (Random Access Memory) is a form of temporary storage that your laptop uses to store data that is actively being used or processed.
                    Unlike your laptop’s storage (SSD or HDD), RAM is much faster but only holds data temporarily while your laptop is powered on. RAM is critical for multitasking, running multiple applications at once, and keeping your laptop responsive. The more RAM your laptop has, the more smoothly it can run multiple programs simultaneously.
                  </p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">2. How Much RAM Do You Need?</h3>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li><strong className="text-[#AB886D]">4GB RAM:</strong> Suitable for basic tasks like browsing, emailing, and light document editing. It may struggle with modern multitasking and demanding apps.</li>
                    <li><strong className="text-[#AB886D]">8GB RAM:</strong> Ideal for most users. Handles web browsing with many tabs, light gaming, and basic productivity tasks smoothly.</li>
                    <li><strong className="text-[#AB886D]">16GB RAM:</strong> Recommended for power users, gamers, or professionals using resource-heavy applications (video editing, 3D rendering). Great for heavy multitasking and demanding software.</li>
                    <li><strong className="text-[#AB886D]">32GB+ RAM:</strong> Primarily for professionals working with large files (e.g., 4K video editing, complex simulations). This is more than most users need.</li>
                  </ul>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">3. RAM Frequency (MHz)</h3>
                  <p className="text-base pl-5 text-white">
                    RAM speed is measured in MHz (megahertz) and determines how fast data can be read or written to the RAM. The higher the MHz, the faster the performance.
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li><strong className="text-[#AB886D]">2400 MHz:</strong> Common in budget laptops. Works for basic tasks but may lag in demanding apps.</li>
                    <li><strong className="text-[#AB886D]">2666 MHz - 3200 MHz:</strong> Standard in mid-range and high-performance laptops. Provides smooth performance for gaming and productivity tasks.</li>
                    <li><strong className="text-[#AB886D]">3600 MHz+:</strong> Found in high-end gaming or professional laptops. Useful for resource-heavy tasks like video editing or gaming.</li>
                  </ul>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">4. RAM Types</h3>
                  <p className="text-base pl-5 text-white">
                    Different types of RAM offer different performance and power efficiency. Here’s a breakdown:
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li><strong className="text-[#AB886D]">DDR4:</strong> The most common RAM in laptops today. It provides a balance of performance and energy efficiency.</li>
                    <li><strong className="text-[#AB886D]">DDR5:</strong> The next generation of RAM, offering higher speeds and better performance. Found in newer high-end laptops.</li>
                    <li><strong className="text-[#AB886D]">LPDDR4X / LPDDR5:</strong> Low-power RAM designed for ultrabooks and thin laptops, offering good performance and better battery life.</li>
                  </ul>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">5. Single vs. Dual-Channel RAM</h3>
                  <p className="text-base pl-5 text-white">
                    How your RAM is configured can also impact performance:
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li><strong className="text-[#AB886D]">Single-Channel RAM:</strong> If your laptop uses one stick of RAM, it operates in single-channel mode, which can limit performance, especially in gaming or resource-heavy apps.</li>
                    <li><strong className="text-[#AB886D]">Dual-Channel RAM:</strong> A laptop with two sticks of RAM (even with the same total capacity) operates in dual-channel mode, improving performance and multitasking capabilities.</li>
                  </ul>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">6. Upgradable vs. Soldered RAM</h3>
                  <p className="text-base pl-5 text-white">
                    Some laptops allow RAM upgrades, while others come with soldered RAM that can't be replaced or upgraded:
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li><strong className="text-[#AB886D]">Upgradable RAM:</strong> Laptops with RAM slots allow for future upgrades, letting you add more RAM as needed.</li>
                    <li><strong className="text-[#AB886D]">Soldered RAM:</strong> In ultrabooks and thin laptops, the RAM is often soldered to the motherboard, meaning it cannot be upgraded later. Choose the right amount of RAM upfront if this is the case.</li>
                  </ul>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">7. RAM Latency (CL)</h3>
                  <p className="text-base pl-5 text-white">
                    RAM latency, or CAS Latency (CL), is the delay between a request and the moment the data is available. Lower latency is better, but RAM frequency (MHz) often has a bigger impact on performance.
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li><strong className="text-[#AB886D]">DDR4 CL14 to CL16:</strong> Typical for high-performance laptops.</li>
                    <li><strong className="text-[#AB886D]">DDR5:</strong> Higher CAS Latency (e.g., CL18), but overall performance is better due to higher frequencies.</li>
                  </ul>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">8. RAM and Gaming</h3>
                  <p className="text-base pl-5 text-white">
                    RAM plays a crucial role in gaming performance:
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>8GB RAM is typically the minimum for gaming, but 16GB is recommended for newer AAA games.</li>
                    <li>Faster RAM speeds (e.g., 3200 MHz or 3600 MHz) can reduce loading times and improve frame rates.</li>
                    <li>Dual-channel RAM can also improve gaming performance by allowing more data to be processed simultaneously.</li>
                  </ul>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">9. Choosing the Right RAM for Your Laptop</h3>
                  <p className="text-base pl-5 text-white">
                    When choosing RAM for your laptop, consider:
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li><strong className="text-[#AB886D]">Usage:</strong> Casual users can get by with 8GB and 2400-2666 MHz, while power users and gamers may need 16GB and higher speeds (3200 MHz+).</li>
                    <li><strong className="text-[#AB886D]">Upgradability:</strong> If you plan to keep your laptop for several years, consider models with upgradable RAM slots.</li>
                    <li><strong className="text-[#AB886D]">Budget:</strong> More RAM means better performance, but balance the cost with your actual needs.</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Storage Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[3]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(3)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Storage</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[3] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[3] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[3] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                  <h2 className='text-2xl text-[#F3C623]'>Understanding Storage: From Basics to Buying Choices</h2>

                  <h3 className='text-xl text-[#D4BEE4] mt-4'>1. What is Storage?</h3>
                  <p className='text-base pl-5 text-white'>
                  Storage refers to the components in a laptop that hold data, including the operating system, applications, and files like photos and documents. It’s crucial for determining how fast your laptop runs and how much data it can hold.
                  </p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">2. Types of Storage</h3>
                  <h3 className="text-xl text-[#D4BEE4] mt-4">a. Hard Disk Drives (HDD)</h3>
                  <p className="text-base pl-5 text-white">
                    HDDs are traditional storage devices that use spinning disks to read/write data.
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>Pros:
                      <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                        <li>Larger storage capacities (up to several terabytes).</li>
                        <li>Cost-effective, providing more storage for less money.</li>
                      </ul>
                    </li>
                    <li>Cons:
                      <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                        <li>Slower read/write speeds compared to SSDs, leading to longer boot times and slower file transfers.</li>
                        <li>More prone to physical damage due to moving parts.</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="text-base pl-5 text-white">Best For: Users who need large storage at a low cost and who don’t mind slower performance (e.g., media libraries, backups).</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">b. Solid State Drives (SSD)</h3>
                  <p className="text-base pl-5 text-white">
                    SSDs use flash memory to store data, offering much faster speeds than HDDs.
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>Pros:
                      <ul className="list-disc text-base sm:pl-14 pl-5">
                        <li>Very fast read/write speeds (up to 5 times faster than HDDs), leading to quick boot times and rapid file access.</li>
                        <li>More durable, as there are no moving parts.</li>
                        <li>Less power consumption, leading to longer battery life in laptops.</li>
                      </ul>
                    </li>
                    <li>Cons:
                      <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                        <li>Higher cost per gigabyte compared to HDDs.</li>
                        <li>Limited storage capacity options (although this is improving).</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="text-base pl-5 text-white">Best For: Users who prioritize speed and performance, such as gamers, content creators, and professionals working with large files.</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">3. Generations of SSDs</h3>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">a. SATA SSD (SATA III)</h3>
                  <p className="text-base pl-5 text-white">The first generation of SSDs, using the same interface as HDDs.</p>
                  <p className="text-base pl-5 text-white">Speed: Offers read speeds of up to <strong className='text-[#D4BEE4]'>550 MB/s</strong>.</p>
                  <p className="text-base pl-5 text-white">Best For: Basic upgrades from HDDs for better performance without needing a complete overhaul.</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">b. NVMe SSD (Non-Volatile Memory Express)</h3>
                  <p className="text-base pl-5 text-white">A newer standard that connects directly to the motherboard, allowing for faster data transfer.</p>
                  <p className="text-base pl-5 text-white">Speed: Read speeds can exceed <strong className='text-[#D4BEE4]'>3,000 MB/s</strong> or more.</p>
                  <p className="text-base pl-5 text-white">Best For: High-performance laptops, gaming, and tasks that require rapid data access (e.g., video editing).</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">c. Gen 3 vs. Gen 4 SSD</h3>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>
                      <strong>Gen 3 NVMe SSDs</strong>:
                      <ul className="list-disc text-base sm:pl-14 pl-5">
                        <li>Speed: Typically offers speeds up to <strong className='text-[#D4BEE4]'>3,500 MB/s</strong>.</li>
                        <li>Compatibility: Most laptops with NVMe slots can support these drives.</li>
                      </ul>
                    </li>
                    <li>
                      <strong className='text-[#D4BEE4]'>Gen 4 NVMe SSDs</strong>:
                      <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                        <li>Speed: Can achieve speeds over <strong className='text-[#D4BEE4]'>7,000 MB/s</strong>, significantly improving performance.</li>
                        <li>Compatibility: Requires a compatible motherboard (PCIe 4.0). Generally found in newer laptops and high-end models.</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="text-base pl-5 text-white">Best For: Gamers and professionals requiring top-tier performance and speed for tasks like gaming, rendering, and data-intensive applications.</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">d. Gen 5 SSD</h3>
                  <p className="text-base pl-5 text-white">The latest generation of SSDs, featuring further improvements in speed and efficiency.</p>
                  <p className="text-base pl-5 text-white">Speed: Capable of read speeds exceeding <strong className='text-[#D4BEE4]'>14,000 MB/s</strong>.</p>
                  <p className="text-base pl-5 text-white">Best For: Cutting-edge laptops designed for the most demanding tasks, such as 8K video editing, heavy gaming, and large-scale data processing.</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">4. How to Choose the Right Storage for Your Needs</h3>
                  <p className="text-base pl-5 text-white">Determine Your Storage Needs:</p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>
                      <strong className='text-[#D4BEE4]'>Casual Users</strong>: If you primarily browse the web, use office applications, and store a few photos and videos, an <strong className='text-[#D4BEE4]'>HDD</strong> or a <strong className='text-[#D4BEE4]'>SATA SSD</strong> (for better speed) might suffice.
                    </li>
                    <li>
                      <strong className='text-[#D4BEE4]'>Gamers</strong>: Look for <strong className='text-[#D4BEE4]'>NVMe SSDs</strong> (Gen 3 or Gen 4) to reduce loading times and improve overall gaming performance.
                    </li>
                    <li>
                      <strong className='text-[#D4BEE4]'>Content Creators</strong>: High-capacity <strong className='text-[#D4BEE4]'>NVMe SSDs</strong> (Gen 4) are ideal for video editing, 3D rendering, and handling large files efficiently.
                    </li>
                  </ul>
                  <p className="text-base pl-5 text-white">Consider Capacity:</p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li><strong className='text-[#D4BEE4]'>256GB</strong>: Suitable for basic users; may fill up quickly with games or large applications.</li>
                    <li><strong className='text-[#D4BEE4]'>512GB</strong>: Good for casual gamers and productivity users; offers ample space for applications and files.</li>
                    <li><strong className='text-[#D4BEE4]'>1TB and Above</strong>: Ideal for serious gamers, content creators, and users with large media libraries.</li>
                  </ul>
                  <p className="text-base pl-5 text-white">Future-Proofing: If you plan on keeping your laptop for several years, consider investing in a <strong className='text-[#D4BEE4]'>higher-capacity NVMe SSD</strong> to accommodate future software and file sizes.</p>

                  <h3 className="text-xl text-[#D4BEE4]">5. Conclusion: Making an Informed Choice</h3>
                  <p className="text-base pl-5 text-white">Understanding the types of storage, their pros and cons, and the latest advancements in technology will empower you to make the right choice when purchasing a laptop. Focus on your specific needs—be it speed, capacity, or cost—and choose a storage solution that will enhance your overall experience.</p>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Displays Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[4]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(4)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Display</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[4] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[4] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[4] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                <h2 className="text-[#F3C623] text-2xl">Understanding Laptop Displays</h2>
                    <p className="text-white text-base pl-5">
                        Choosing the right display is crucial when buying a laptop, as it directly impacts your viewing experience for work, gaming, and multimedia consumption. Here’s what you need to know:
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">1. Display Size</h3>
                    <p className="text-white text-base pl-5">
                        Laptop screens range from <strong className="text-[#AB886D]">11 inches</strong> to <strong className="text-[#AB886D]">17 inches</strong> or more.
                    </p>
                    <ul className="text-white list-disc text-base pl-14">
                        <li><strong className="text-[#AB886D]">11-13 inches:</strong> Highly portable, ideal for students and frequent travelers who prioritize lightweight designs.</li>
                        <li><strong className="text-[#AB886D]">14-15 inches:</strong> The sweet spot for balance between portability and usability, suitable for general users and professionals.</li>
                        <li><strong className="text-[#AB886D]">16 inches and above:</strong> Great for creative professionals and gamers who benefit from larger screens for better visibility and multitasking.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">2. Resolution</h3>
                    <p className="text-white text-base pl-5">
                        The number of pixels displayed on the screen, usually denoted as width × height (e.g., <strong className="text-[#AB886D]">1920 x 1080</strong>).
                    </p>
                    <ul className="text-white list-disc text-base pl-14">
                        <li><strong className="text-[#AB886D]">HD (1366 x 768):</strong> Basic quality, suitable for simple tasks but not ideal for detailed work.</li>
                        <li><strong className="text-[#AB886D]">Full HD (1920 x 1080):</strong> Standard for most laptops, providing a good balance for everyday use, gaming, and watching videos.</li>
                        <li><strong className="text-[#AB886D]">QHD (2560 x 1440):</strong> Offers sharper images and more screen real estate, ideal for professional tasks and gaming.</li>
                        <li><strong className="text-[#AB886D]">4K (3840 x 2160):</strong> Excellent for high-end gaming and creative work, providing stunning clarity but requiring more powerful hardware.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">3. Refresh Rate</h3>
                    <p className="text-white text-base pl-5">
                        The number of times per second the display refreshes its image, measured in hertz (Hz).
                    </p>
                    <ul className="text-white list-disc text-base pl-14">
                        <li><strong className="text-[#AB886D]">60 Hz:</strong> Standard for most laptops, sufficient for general use and watching videos.</li>
                        <li><strong className="text-[#AB886D]">120 Hz or 144 Hz:</strong> Ideal for gamers, providing smoother visuals and improved responsiveness during fast-paced action.</li>
                        <li><strong className="text-[#AB886D]">240 Hz or higher:</strong> Offers ultra-smooth motion, mainly found in high-end gaming laptops.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">4. Panel Type</h3>
                    <p className="text-white text-base pl-5">
                        There are several types of display panels that affect color accuracy, viewing angles, and response times.
                    </p>
                    <ul className="text-white list-disc text-base pl-14">
                        <li><strong className="text-[#AB886D]">IPS (In-Plane Switching):</strong> Excellent color reproduction and wider viewing angles, suitable for designers and photographers.</li>
                        <li><strong className="text-[#AB886D]">TN (Twisted Nematic):</strong> Faster response times and lower cost but limited color accuracy and narrow viewing angles, great for budget gaming.</li>
                        <li><strong className="text-[#AB886D]">VA (Vertical Alignment):</strong> Good contrast and decent color reproduction, best for general use and media consumption.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">5. Anti-Glare vs. Glossy Screens</h3>
                    <p className="text-white text-base pl-5">
                        Understanding the difference can help you choose the right display for your environment.
                    </p>
                    <ul className="text-white list-disc text-base pl-14">
                        <li><strong className="text-[#AB886D]">Anti-Glare (Matte) Displays:</strong> Reduce reflections and glare, making them suitable for bright environments but may have slightly less vibrant colors.</li>
                        <li><strong className="text-[#AB886D]">Glossy Displays:</strong> Richer colors and better contrast, enhancing media consumption but can be reflective in bright conditions.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">6. Brightness</h3>
                    <p className="text-white text-base pl-5">
                        Measured in nits, a higher number indicates a brighter screen.
                    </p>
                    <ul className="text-white list-disc text-base pl-14">
                        <li><strong className="text-[#AB886D]">200-300 nits:</strong> Sufficient for indoor use.</li>
                        <li><strong className="text-[#AB886D]">300-400 nits:</strong> Good for general outdoor visibility and bright environments.</li>
                        <li><strong className="text-[#AB886D]">400 nits and above:</strong> Ideal for professionals who work outdoors or in very bright conditions.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">7. Color Coverage</h3>
                    <p className="text-white text-base pl-5">
                        Determines how accurately a display can reproduce colors, important for tasks like photo editing.
                    </p>
                    <ul className="text-white list-disc text-base pl-14">
                        <li><strong className="text-[#AB886D]">sRGB:</strong> Standard for web content; laptops with 100% sRGB coverage are good for most users.</li>
                        <li><strong className="text-[#AB886D]">Adobe RGB:</strong> Wider color gamut, preferred for photographers and designers; look for higher coverage (e.g., 90% or more).</li>
                        <li><strong className="text-[#AB886D]">NTSC:</strong> Used for measuring color in the film industry; 72% NTSC coverage is standard for many laptops.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">8. Other Important Features</h3>
                    <p className="text-white text-base pl-5">
                        Consider additional features that can enhance your display experience.
                    </p>
                    <ul className="text-white list-disc text-base pl-14">
                        <li><strong className="text-[#AB886D]">Touchscreen Capability:</strong> Useful for certain tasks, especially if you prefer a more interactive experience.</li>
                        <li><strong className="text-[#AB886D]">Blue Light Filtering:</strong> Helps reduce eye strain during extended use.</li>
                        <li><strong className="text-[#AB886D]">Variable Refresh Rate (VRR):</strong> Useful for gaming, allowing the display to adjust its refresh rate dynamically to reduce screen tearing.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">Making the Right Choice</h3>
                    <p className="text-white text-base pl-5">
                        When selecting a laptop based on its display, consider the following:
                    </p>
                    <ul className="text-white list-disc text-base pl-14">
                        <li><strong className="text-[#AB886D]">For General Use:</strong> Look for a 14-15 inch laptop with a Full HD IPS display (anti-glare) and decent brightness (250-300 nits).</li>
                        <li><strong className="text-[#AB886D]">For Gaming:</strong> Choose a 15-17 inch laptop with a high refresh rate (144 Hz or more), Full HD or QHD resolution, and an IPS panel for vibrant colors.</li>
                        <li><strong className="text-[#AB886D]">For Creative Work:</strong> Opt for a larger display (15-17 inches) with high resolution (QHD or 4K), wide color coverage (Adobe RGB), and a good brightness level (300+ nits).</li>
                    </ul>

                    <p className="text-white text-base pl-5">
                        By understanding these display features, users can make informed decisions that cater to their specific needs, ensuring an enjoyable and efficient computing experience.
                    </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Batteries Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[5]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(5)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Battery</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[5] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[5] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[5] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                <h2 className="text-[#F3C623] text-2xl">Understanding Laptop Batteries: A Comprehensive Guide</h2>
                    <h3 className="text-[#D4BEE4] text-xl mt-4">1. What is a Laptop Battery?</h3>
                    <p className="text-white text-base pl-5">
                        A laptop battery is a rechargeable power source that allows your device to function without being plugged into an electrical outlet. It provides the necessary energy for your laptop's components to operate, enabling portability and convenience.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">2. Battery Types</h3>
                    <ul className="list-disc text-white text-base pl-14">
                        <li>
                            <strong className="text-[#AB886D]">Lithium-Ion (Li-ion)</strong>: The most common type of battery in laptops, known for its high energy density, lightweight, and ability to retain charge over time. Li-ion batteries have a longer lifespan and are generally more efficient than older technologies.
                        </li>
                        <li>
                            <strong className="text-[#AB886D]">Lithium Polymer (LiPo)</strong>: Similar to Li-ion but uses a gel-like electrolyte, allowing for more flexible shapes and sizes. LiPo batteries can be lighter and thinner, making them ideal for ultra-thin laptops.
                        </li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">3. Battery Capacity: Watt-Hours (Wh)</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#AB886D]">What is Wh?</strong> Watt-hours measure the energy capacity of the battery. It indicates how much energy the battery can store and how long it can power your device. A higher Wh rating means longer battery life.
                    </p>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#AB886D]">Typical Capacities:</strong>
                    </p>
                    <ul className="list-disc text-white text-base pl-14">
                        <li><strong className="text-[#AB886D]">30 Wh</strong>: Suitable for light tasks and basic use (web browsing, streaming).</li>
                        <li><strong className="text-[#AB886D]">40-50 Wh</strong>: Good for standard use, including moderate multitasking and casual gaming.</li>
                        <li><strong className="text-[#AB886D]">60 Wh and above</strong>: Ideal for heavy users, gaming, video editing, and demanding applications.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">4. Battery Life: What to Expect</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#AB886D]">Factors Influencing Battery Life:</strong>
                    </p>
                    <ul className="list-disc text-white text-base pl-14">
                        <li><strong className="text-[#AB886D]">Screen Brightness:</strong> Higher brightness consumes more power.</li>
                        <li><strong className="text-[#AB886D]">Running Applications:</strong> Resource-intensive apps (like video games or editing software) drain battery faster.</li>
                        <li><strong className="text-[#AB886D]">Background Processes:</strong> Applications running in the background can consume battery life even when not actively used.</li>
                        <li><strong className="text-[#AB886D]">Hardware Specifications:</strong> Powerful CPUs and GPUs tend to consume more energy.</li>
                    </ul>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#AB886D]">Typical Battery Life Ranges:</strong>
                    </p>
                    <ul className="list-disc text-white text-base pl-14">
                        <li><strong className="text-[#AB886D]">Basic Laptops:</strong> 8 to 12 hours (ideal for students and office workers).</li>
                        <li><strong className="text-[#AB886D]">Mid-range Laptops:</strong> 6 to 8 hours (suitable for general use and light gaming).</li>
                        <li><strong className="text-[#AB886D]">Gaming and High-Performance Laptops:</strong> 3 to 5 hours (generally less efficient due to high power consumption).</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">5. Charging and Battery Maintenance</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#AB886D]">Charging Practices:</strong>
                    </p>
                    <ul className="list-disc text-white text-base pl-14">
                        <li>Avoid letting the battery fully discharge frequently. It's better to keep the battery charged between 20% and 80% for optimal lifespan.</li>
                        <li>Use the charger that comes with your laptop to prevent damage and ensure efficient charging.</li>
                    </ul>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#AB886D]">Battery Health Tips:</strong>
                    </p>
                    <ul className="list-disc text-white text-base pl-14">
                        <li>Keep your laptop in a cool, dry place to prevent overheating, which can damage the battery.</li>
                        <li>Regularly update your laptop’s software and drivers for better battery performance.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">6. Additional Features to Look For</h3>
                    <ul className="list-disc text-white text-base pl-14">
                        <li><strong className="text-[#AB886D]">Fast Charging:</strong> Some laptops come with fast-charging technology that can significantly reduce charging time.</li>
                        <li><strong className="text-[#AB886D]">Battery Life Indicators:</strong> Look for laptops with software that provides accurate battery life predictions and usage statistics.</li>
                        <li><strong className="text-[#AB886D]">Removable Batteries:</strong> Some laptops allow for battery replacement, which can be advantageous for users who require extended usage.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">7. Making Your Choice</h3>
                    <p className="text-white text-base pl-5">
                        When buying a laptop, consider your typical usage:
                    </p>
                    <ul className="list-disc text-white text-base pl-14">
                        <li>If you need portability and long battery life: Look for laptops with higher Wh ratings (50 Wh or more) and good battery life (8 hours+).</li>
                        <li>For gaming or high-performance tasks: Be prepared for shorter battery life (3 to 5 hours) and ensure it has a robust cooling system.</li>
                        <li>Check Reviews: Look for user reviews or professional tests that detail real-world battery performance, as manufacturer claims can sometimes be misleading.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">Conclusion</h3>
                    <p className="text-white text-base pl-5">
                        Understanding battery specifications and features can help you make an informed decision when choosing a laptop. By considering your specific needs and usage patterns, you can find a device that offers the right balance of performance and battery life to suit your lifestyle.
                    </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Connectivty Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[6]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(6)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Connectivity</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[6] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[6] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[6] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                <h2 className="text-[#F3C623] text-2xl">Laptop Connectivity: What to Look For</h2>
                    
                    <h3 className="text-[#D4BEE4] text-xl mt-4">1. USB Ports: The Basics</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">USB Type-A:</strong> This is the classic rectangular USB port, still found in many laptops. It's great for connecting peripherals like mice, keyboards, and external storage. There are different versions:
                    </p>
                    <ul className="list-disc text-white text-base pl-14">
                        <li><strong className="text-[#AB886D]">USB 2.0:</strong> Older, slower standard (up to 480 Mbps).</li>
                        <li><strong className="text-[#AB886D]">USB 3.0/3.1/3.2:</strong> Faster data transfer speeds (up to 5-20 Gbps, depending on the version).</li>
                    </ul>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">USB Type-C:</strong> A newer, smaller, and reversible port, quickly becoming the standard for data, power delivery, and video output in laptops.
                    </p>
                    
                    <h3 className="text-[#D4BEE4] text-xl mt-4">2. Thunderbolt: High-Speed Performance</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">Thunderbolt 3/4:</strong> A high-speed, versatile port that uses the same connector as USB-C but offers much higher data transfer rates (up to 40 Gbps).
                    </p>
                    <ul className="list-disc text-white text-base pl-14">
                        <li><strong className="text-[#AB886D]">Power Delivery:</strong> Thunderbolt can provide up to 100W of power, which allows it to charge the laptop.</li>
                        <li><strong className="text-[#AB886D]">Display Output:</strong> Supports multiple 4K displays or a single 8K display.</li>
                        <li><strong className="text-[#AB886D]">External GPU Support:</strong> Thunderbolt allows connecting an external GPU to boost performance.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">3. HDMI and DisplayPort: Video Output</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">HDMI:</strong> A common port for connecting external displays. HDMI 2.0 or 2.1 supports 4K at 60Hz and even 8K.
                    </p>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">Mini DisplayPort:</strong> Found in some laptops, this smaller version of DisplayPort can handle high resolutions (up to 8K) and high refresh rates.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">4. USB Power Delivery (USB-PD)</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">Power Delivery:</strong> This feature allows laptops to be charged via a USB-C port, making it a versatile solution for both charging and data transfer.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">5. Power-Off USB Charging</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">What It Is:</strong> This feature allows a laptop to charge devices via its USB ports even when the laptop is turned off.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">6. Ethernet Port (RJ-45)</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">Wired Connectivity:</strong> Ethernet ports provide fast, stable internet connections, especially for business or gaming environments.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">7. SD and MicroSD Card Slots</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">For Photographers & Media Creators:</strong> SD card slots are essential for those who need to transfer media from cameras to laptops.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">8. Audio Jacks: Headphone and Microphone Combo</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">3.5mm Audio Jack:</strong> This combo jack allows you to plug in headphones, microphones, or headsets for audio input and output.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">9. VGA (Legacy Port)</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">For Older Displays:</strong> VGA is an older port used to connect to older monitors or projectors, though it’s less common today.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">10. Other Specialty Ports</h3>
                    <ul className="list-disc text-white text-base pl-14">
                        <li><strong className="text-[#AB886D]">Kensington Lock:</strong> A slot to secure your laptop physically to a desk.</li>
                        <li><strong className="text-[#AB886D]">SIM Slot:</strong> Allows users to insert a SIM card for mobile data access.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">Wireless Connectivity</h3>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">1. Wi-Fi Standards</h3>
                    <ul className="list-disc text-white text-base pl-14">
                        <li><strong className="text-[#AB886D]">Wi-Fi 5 (802.11ac):</strong> Decent speeds for most tasks, like streaming and gaming.</li>
                        <li><strong className="text-[#AB886D]">Wi-Fi 6 (802.11ax):</strong> Faster, more stable, and better for crowded networks.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">2. Bluetooth</h3>
                    <p className="text-white text-base pl-5">
                        <strong className="text-[#D4BEE4]">Bluetooth 5.0 and above:</strong> Provides better range and supports multiple connected devices.
                    </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Dolby Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[7]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(7)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Dolby</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[7] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[7] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[7] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                  <h2 className="text-[#F3C623] text-2xl font-bold">What is Dolby?</h2>
                    <p className="text-white text-base pl-5">
                        Dolby is a brand known for enhancing audio quality in various devices, including laptops. Dolby technologies aim to deliver immersive, cinema-like sound experiences.
                    </p>
                    <p className="text-white text-base pl-5">
                        High-quality audio is crucial for entertainment (movies, music, gaming) and professional work like video conferencing or content creation. Dolby helps transform laptop speakers and headphones into powerful sound systems.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl font-bold mt-4">Dolby Audio: Basics</h3>
                    <p className="text-white text-base pl-5">
                        Dolby Audio is a suite of technologies designed to improve audio clarity, deliver balanced sound, and enhance loudness without distortion.
                    </p>
                    <p className="text-white text-base pl-5">
                        Most mid-range to high-end laptops, particularly those designed for media consumption or gaming, come with Dolby Audio.
                    </p>
                    <p className="text-white text-base pl-5">Best for: Everyday users who enjoy movies, music, and casual gaming.</p>

                    <h3 className="text-[#D4BEE4] text-xl font-bold mt-4">Dolby Atmos: Immersive 3D Sound</h3>
                    <p className="text-white text-base pl-5">
                        Dolby Atmos is an advanced audio format that creates a 3D sound experience, adding height and depth to the audio, making it feel like sound is coming from all around you.
                    </p>
                    <p className="text-white text-base pl-5">
                        In laptops, Dolby Atmos simulates this immersive audio even with smaller built-in speakers or headphones. For users who watch movies, play immersive games, or listen to music, Atmos enhances the overall experience.
                    </p>
                    <ul className="list-disc text-white text-base pl-14">
                        <li>Best for: Movie lovers, audiophiles, and gamers.</li>
                        <li>Provides a spatial experience with or without headphones.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl font-bold mt-4">Dolby Vision: A Visual Partner</h3>
                    <p className="text-white text-base pl-5">
                        While Dolby Vision enhances visuals with richer colors and deeper contrasts, it often pairs with Dolby Audio or Atmos for a complete multimedia experience.
                    </p>
                    <p className="text-white text-base pl-5">
                        Paired with Dolby Atmos, Dolby Vision ensures maximum impact for both sound and picture quality.
                    </p>
                    <p className="text-white text-base pl-5">Best for: Users who prioritize high-quality content viewing.</p>

                    <h3 className="text-[#D4BEE4] text-xl font-bold mt-4">How to Choose the Right Laptop for Audio</h3>
                    <ul className="list-disc text-white text-base pl-14">
                        <li><strong className="text-[#D4BEE4]">What You Use It For</strong>: Gamers should look for Dolby Atmos, while movie lovers will appreciate Dolby Audio.</li>
                        <li><strong className="text-[#D4BEE4]">Speaker Quality</strong>: Dolby helps, but the quality of the speakers also plays a big role.</li>
                        <li><strong className="text-[#D4BEE4]">Headphone Experience</strong>: Dolby Atmos for Headphones offers immersive sound on the go.</li>
                        <li><strong className="text-[#D4BEE4]">Software Support</strong>: Laptops with Dolby Access allow fine-tuning of sound for the best experience.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl font-bold mt-4">Summary: Choosing the Right Dolby Laptop</h3>
                    <p className="text-white text-base pl-5">
                        Basic users should look for laptops with Dolby Audio for enhanced media experiences. Advanced users and gamers should consider Dolby Atmos for a more immersive experience.
                    </p>
                    <p className="text-white text-base pl-5">
                        For those who love customizing their sound preferences, Dolby Access adds the flexibility to personalize your audio settings.
                    </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Games Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[8]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(8)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Games</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[8] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[8] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[8] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                  <h2 className="text-[#F3C623] text-2xl">Understanding Gaming Performance: Key Concepts</h2>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">FPS (Frames Per Second)</h3>
                  <p className="text-white text-base pl-5">
                      FPS measures how many individual images (frames) a game displays per second. Higher FPS means smoother gameplay, while lower FPS can cause stuttering or lag.
                  </p>
                  <p className="text-white text-base pl-5">
                      For most gamers, 60 FPS is considered the standard for smooth gameplay. However, competitive gamers often prefer 120 FPS or even 144 FPS. Higher frame rates require a powerful CPU, GPU, and display that supports higher refresh rates (like 120Hz or 144Hz screens).
                  </p>
                  <ul className="list-disc text-white text-base pl-14">
                      <li><strong className="text-[#AB886D]">30 FPS</strong>: Playable but not ideal for fast-paced games.</li>
                      <li><strong className="text-[#AB886D]">60 FPS</strong>: Smooth gameplay for most games.</li>
                      <li><strong className="text-[#AB886D]">120+ FPS</strong>: Ideal for competitive gaming, providing a significant edge in responsiveness.</li>
                  </ul>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">Resolution and Its Impact</h3>
                  <p className="text-white text-base pl-5">
                      Resolution refers to the number of pixels on the screen. Higher resolutions result in better image quality but significantly affect FPS. Common resolutions are:
                  </p>
                  <ul className="list-disc text-white text-base pl-14">
                      <li><strong className="text-[#AB886D]">1080p (Full HD)</strong>: Standard for most gaming laptops.</li>
                      <li><strong className="text-[#AB886D]">1440p (2K/QHD)</strong>: Offers sharper images, but requires more GPU power.</li>
                      <li><strong className="text-[#AB886D]">2160p (4K)</strong>: Ultra-high-definition, but demands a top-tier GPU for smooth gameplay.</li>
                  </ul>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">Advanced Technologies in Gaming Laptops</h3>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">Ray Tracing (RT)</h3>
                  <p className="text-white text-base pl-5">
                      Ray tracing simulates how light behaves in the real world, creating realistic lighting, shadows, and reflections. It significantly enhances a game’s visuals but requires a powerful GPU to run smoothly.
                  </p>
                  <p className="text-white text-base pl-5">
                      <strong className="text-[#D4BEE4]">RT On</strong>: Enables realistic lighting effects, making games visually stunning, especially in scenes with reflections and shadows. However, it’s very demanding and can reduce FPS.
                  </p>
                  <p className="text-white text-base pl-5">
                      <strong className="text-[#D4BEE4]">RT Off</strong>: Disables advanced lighting, focusing instead on traditional rendering methods. While the game may not look as realistic, it runs much smoother and with higher FPS.
                  </p>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">DLSS (Deep Learning Super Sampling)</h3>
                  <p className="text-white text-base pl-5">
                      DLSS is a technology developed by NVIDIA that uses AI to upscale lower-resolution images, making them look as good as native resolution, while requiring less GPU power.
                  </p>
                  <p className="text-white text-base pl-5">
                      DLSS allows gamers to run games at lower resolutions (e.g., 1080p) but still enjoy the visual quality of higher resolutions (e.g., 1440p or 4K). It boosts performance (higher FPS) without sacrificing visual quality.
                  </p>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">Frame Generation (FG)</h3>
                  <p className="text-white text-base pl-5">
                      Frame Generation is a technique where additional frames are generated between the real frames rendered by the GPU, increasing the perceived frame rate. This is often paired with DLSS.
                  </p>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">Refresh Rate</h3>
                  <p className="text-white text-base pl-5">
                      The refresh rate of your laptop’s display refers to how many times the screen updates with a new image each second. For gaming, higher refresh rates lead to smoother, more responsive gameplay. Competitive gamers prefer 120Hz or 144Hz displays.
                  </p>
                  <ul className="list-disc text-white text-base pl-14">
                      <li><strong className="text-[#AB886D]">60Hz</strong>: Standard for most laptops, fine for casual gamers.</li>
                      <li><strong className="text-[#AB886D]">120Hz to 144Hz</strong>: Ideal for competitive and high-FPS gaming.</li>
                      <li><strong className="text-[#AB886D]">240Hz or higher</strong>: Ultra-high refresh rate for extreme responsiveness.</li>
                  </ul>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">What to Look for When Buying a Gaming Laptop</h3>
                  <ul className="list-disc text-white text-base pl-14">
                      <li><strong className="text-[#AB886D]">GPU and CPU</strong>: Ensure you have a strong GPU (e.g., NVIDIA RTX 3060 or AMD RX 6600M) and CPU (Intel i7 or Ryzen 7).</li>
                      <li><strong className="text-[#AB886D]">RAM</strong>: 16GB of RAM is recommended for smooth multitasking and modern gaming.</li>
                      <li><strong className="text-[#AB886D]">Storage</strong>: Go for an SSD with at least 512GB to 1TB of space for fast load times.</li>
                      <li><strong className="text-[#AB886D]">Cooling</strong>: A good cooling system is essential for long gaming sessions.</li>
                      <li><strong className="text-[#AB886D]">Battery Life</strong>: Gaming laptops are best used plugged in, but 3-5 hours of battery life is typical for gaming.</li>
                      <li><strong className="text-[#AB886D]">Ports</strong>: Ensure the laptop has the right ports, such as USB-C, HDMI, and Thunderbolt.</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Keyboard Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[9]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(9)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Keyboard</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[9] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[9] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[9] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                  <h2 className="text-[#F3C623] text-2xl">Keyboard Types & Sizes: What to Look For</h2>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">1. Full-Size Keyboard</h3>
                  <p className="text-white text-base pl-5">
                      A full-size keyboard includes all the keys you'd expect on a desktop keyboard, including a <strong className="text-[#D4BEE4]">numeric keypad (numpad)</strong> on the right.
                  </p>
                  <p className="text-white text-base pl-5">
                      <strong className="text-[#D4BEE4]">Who it's for:</strong> Users who work with numbers frequently, like accountants, data entry professionals, or those who need quick access to numeric keys.
                  </p>
                  <ul className="list-disc text-white text-base pl-14">
                      <li><strong className="text-[#AB886D]">Pros:</strong> Full layout with dedicated function keys, arrow keys, and a numpad.</li>
                      <li><strong className="text-[#AB886D]">Pros:</strong> Better productivity for users who need to enter data or use shortcuts.</li>
                      <li><strong className="text-[#AB886D]">Cons:</strong> Larger size makes laptops bulkier and heavier.</li>
                  </ul>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">2. Tenkeyless (TKL) Keyboard</h3>
                  <p className="text-white text-base pl-5">
                      A TKL keyboard removes the <strong className="text-[#D4BEE4]">numeric keypad</strong>, making the keyboard more compact.
                  </p>
                  <p className="text-white text-base pl-5">
                      <strong className="text-[#D4BEE4]">Who it's for:</strong> Gamers, travelers, and professionals who want a more portable laptop and don’t frequently use the numpad.
                  </p>
                  <ul className="list-disc text-white text-base pl-14">
                      <li><strong className="text-[#AB886D]">Pros:</strong> Saves space, allowing for a more compact and lightweight laptop.</li>
                      <li><strong className="text-[#AB886D]">Pros:</strong> Gives more room for a larger trackpad or better cooling.</li>
                      <li><strong className="text-[#AB886D]">Cons:</strong> No numpad, which may be inconvenient for users who deal with a lot of numbers.</li>
                  </ul>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">RGB Lighting & Customization</h3>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">1. Single-Color Backlighting</h3>
                  <p className="text-white text-base pl-5">
                      All the keys are lit by a single, non-changeable color (e.g., white, red, or blue).
                  </p>
                  <p className="text-white text-base pl-5">
                      <strong className="text-[#D4BEE4]">Who it’s for:</strong> Users who don’t care much about lighting effects and just need basic backlighting for working in low light.
                  </p>
                  <ul className="list-disc text-white text-base pl-14">
                      <li><strong className="text-[#AB886D]">Pros:</strong> Simple and functional.</li>
                      <li><strong className="text-[#AB886D]">Pros:</strong> Usually more power-efficient compared to RGB options.</li>
                      <li><strong className="text-[#AB886D]">Cons:</strong> No customization. Just one static color.</li>
                  </ul>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">2. Zone RGB Backlighting</h3>
                  <p className="text-white text-base pl-5">
                      The keyboard is divided into different <strong className="text-[#D4BEE4]">lighting zones</strong>, each of which can be customized to a specific color. Typically, there are 3 to 4 zones.
                  </p>
                  <p className="text-white text-base pl-5">
                      <strong className="text-[#D4BEE4]">Who it’s for:</strong> Gamers and users who want some customization but don’t need per-key control.
                  </p>
                  <ul className="list-disc text-white text-base pl-14">
                      <li><strong className="text-[#AB886D]">Pros:</strong> Adds a bit of personalization without being overwhelming.</li>
                      <li><strong className="text-[#AB886D]">Pros:</strong> Less expensive than per-key RGB.</li>
                      <li><strong className="text-[#AB886D]">Cons:</strong> Less precise control over lighting. Zones are fixed.</li>
                  </ul>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">3. Per-Key RGB Backlighting</h3>
                  <p className="text-white text-base pl-5">
                      Each key can be individually customized to any color or lighting effect.
                  </p>
                  <p className="text-white text-base pl-5">
                      <strong className="text-[#D4BEE4]">Who it’s for:</strong> Gamers, streamers, and RGB enthusiasts who want full control over their keyboard lighting.
                  </p>
                  <ul className="list-disc text-white text-base pl-14">
                      <li><strong className="text-[#AB886D]">Pros:</strong> Highly customizable. You can set different colors for different games, applications, or workflows.</li>
                      <li><strong className="text-[#AB886D]">Pros:</strong> Can be synchronized with other RGB peripherals.</li>
                      <li><strong className="text-[#AB886D]">Cons:</strong> Can drain battery faster, as it consumes more power. Often comes at a higher price point.</li>
                  </ul>

                  <h3 className="text-[#D4BEE4] text-xl mt-4">4. Customizable Single-Color Backlighting</h3>
                  <p className="text-white text-base pl-5">
                      The keyboard is backlit in a single color, but you can change this color to your preference, such as switching between red, blue, and green.
                  </p>
                  <p className="text-white text-base pl-5">
                      <strong className="text-[#D4BEE4]">Who it’s for:</strong> Users who prefer a simple backlit keyboard but want the option to switch colors.
                  </p>
                  <ul className="list-disc text-white text-base pl-14">
                      <li><strong className="text-[#AB886D]">Pros:</strong> Offers customization without the complexity of full RGB.</li>
                      <li><strong className="text-[#AB886D]">Pros:</strong> More affordable and often more power-efficient than per-key RGB.</li>
                      <li><strong className="text-[#AB886D]">Cons:</strong> Limited color options compared to full RGB.</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Benchmarks Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[10]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(10)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Benchmarks</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[10] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[10] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[10] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                  <h2 className="text-2xl text-[#F3C623]">Understanding Laptop Benchmarks</h2>
                  <p className="text-base pl-5 text-white">
                    Benchmarks are standardized tests used to measure the performance of hardware components in laptops. They provide valuable insights into how a laptop will perform in real-world tasks, whether it's gaming, productivity, or creative work. By understanding these benchmarks, you can make a more informed choice when purchasing a laptop.
                  </p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">Key Benchmark Types</h3>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>
                      <strong className="text-[#AB886D]">Single-Core Performance</strong>: Measures how well a CPU performs a single task. Important for applications that rely on single-threaded performance, such as most office applications and older games.
                    </li>
                    <li>
                      <strong className="text-[#AB886D]">Multi-Core Performance</strong>: Evaluates the CPU's ability to handle multiple tasks simultaneously. Essential for multitasking and modern applications that utilize multiple cores, such as video editing and 3D rendering.
                    </li>
                    <li>
                      <strong className="text-[#AB886D]">OpenCL Performance</strong>: Tests the performance of the CPU and GPU when handling tasks that can be parallelized, such as video rendering and scientific calculations. This is important for users who plan to use their laptops for creative or computational tasks.
                    </li>
                  </ul>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">Popular Benchmarks</h3>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">1. Cinebench R23</h3>
                  <p className="text-base pl-5 text-white">
                    A benchmark that evaluates CPU performance using a 3D rendering workload.
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>
                      <strong className="text-[#AB886D]">Single-Core Score</strong>: Indicates performance in tasks that utilize one core (important for general computing).
                    </li>
                    <li>
                      <strong className="text-[#AB886D]">Multi-Core Score</strong>: Reflects performance when all cores are utilized, which is critical for tasks like video editing and rendering.
                    </li>
                  </ul>
                  <p className="text-base pl-5 text-white">Usage: Great for comparing CPUs, especially in content creation tasks. Higher scores indicate better performance.</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">2. PCMark 10</h3>
                  <p className="text-base pl-5 text-white">
                    A comprehensive benchmark that assesses overall system performance across various everyday tasks, including productivity, digital content creation, and gaming.
                  </p>
                  <p className="text-base pl-5 text-white">Score Breakdown: Includes individual scores for different usage scenarios (e.g., office productivity, video conferencing, gaming).</p>
                  <p className="text-base pl-5 text-white">Usage: Useful for general users to gauge how well a laptop performs in day-to-day tasks.</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">3. 3DMark Time Spy</h3>
                  <p className="text-base pl-5 text-white">
                    A benchmark designed specifically for gaming performance. It tests DirectX 12 performance.
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>
                      <strong className="text-[#AB886D]">Graphics and CPU Scores</strong>: Provides separate scores for CPU and GPU, allowing users to see how well their system can handle modern games.
                    </li>
                  </ul>
                  <p className="text-base pl-5 text-white">Usage: Important for gamers looking to understand how well a laptop can run current and future gaming titles.</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">4. Blender</h3>
                  <p className="text-base pl-5 text-white">
                    A benchmark based on the popular 3D modeling software. It measures rendering performance using Blender’s own rendering engine.
                  </p>
                  <p className="text-base pl-5 text-white">Cycles Benchmark: Evaluates how quickly a laptop can render a scene, giving insights into performance for creative workloads.</p>
                  <p className="text-base pl-5 text-white">Usage: Particularly relevant for users in the fields of animation, modeling, and visual effects.</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">5. Geekbench</h3>
                  <p className="text-base pl-5 text-white">
                    A cross-platform benchmark that measures CPU performance across a variety of workloads.
                  </p>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>
                      <strong className="text-[#AB886D]">Single-Core and Multi-Core Scores</strong>: Provides separate scores to help users understand how a laptop performs for both single-threaded and multi-threaded tasks.
                    </li>
                  </ul>
                  <p className="text-base pl-5 text-white">Usage: Great for overall CPU performance comparison across different platforms and devices.</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">6. CrossMark</h3>
                  <p className="text-base pl-5 text-white">
                    A benchmarking tool that focuses on mobile performance, testing performance in productivity tasks, creativity, and responsiveness.
                  </p>
                  <p className="text-base pl-5 text-white">Score Breakdown: It provides scores for different categories, giving a more nuanced understanding of performance in real-world scenarios.</p>
                  <p className="text-base pl-5 text-white">Usage: Useful for users who want to see how a laptop performs in day-to-day applications.</p>

                  <h3 className="text-xl text-[#D4BEE4] mt-4">How to Use Benchmarks for Buying Decisions</h3>
                  <ul className="list-disc text-base pl-14 text-white">
                    <li>
                      <strong className="text-[#AB886D]">Define Your Needs</strong>: Determine what tasks you’ll primarily use your laptop for (gaming, content creation, office work, etc.).
                    </li>
                    <li>
                      <strong className="text-[#AB886D]">Compare Benchmark Scores</strong>: Look for laptops with higher scores in the benchmarks relevant to your tasks.
                    </li>
                    <li>
                      <strong className="text-[#AB886D]">Consider Balance</strong>: While high benchmark scores are important, also consider other factors like battery life, build quality, and brand reputation.
                    </li>
                    <li>
                      <strong className="text-[#AB886D]">Look for Reviews</strong>: Always check multiple reviews and real-world performance tests, as benchmarks can sometimes differ from actual user experiences.
                    </li>
                    <li>
                      <strong className="text-[#AB886D]">Future-Proofing</strong>: If you plan to keep your laptop for several years, invest in one with higher benchmark scores to ensure it can handle future applications and games.
                    </li>
                  </ul>

                  <p className="text-base pl-5 text-white">
                    By understanding these benchmarks and their implications, users can confidently choose a laptop that fits their performance needs, ensuring they make an informed buying decision.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Used For Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[11]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(11)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Used For Tasks</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[11] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[11] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[11] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                <h2 className="text-2xl text-[#F3C623]">Used For: Choosing the Right Laptop for Your Needs</h2>
                    <p className="text-base pl-5 text-white">
                        When selecting a laptop, it’s essential to consider your primary usage. Below, we detail various common use cases, including recommended specifications to help you make an informed decision.
                    </p>

                    <ul className="list-disc text-base pl-14 text-white">
                        <li><strong className="text-[#AB886D]">5/5:</strong> Excellent performance; you can perform this task at its best.</li>
                        <li><strong className="text-[#AB886D]">4/5:</strong> Very good performance; suitable for most users with some limitations.</li>
                        <li><strong className="text-[#AB886D]">3/5:</strong> Moderate performance; can handle the task but may struggle under heavy loads.</li>
                        <li><strong className="text-[#AB886D]">2/5:</strong> Basic performance; can perform the task but will be limited in capabilities.</li>
                        <li><strong className="text-[#AB886D]">1/5:</strong> Poor performance; not recommended for this task.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">1. Video and Photo Editing</h3>
                    <p className="text-base pl-5 text-white">
                        For tasks involving video and photo editing, you need a powerful CPU, ample RAM (16GB or more is ideal), and a dedicated GPU for rendering. High-resolution displays are also crucial for accurate color representation.
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li><strong className="text-[#D4BEE4]">CPU:</strong> Intel i7/Ryzen 7 or higher</li>
                        <li><strong className="text-[#D4BEE4]">RAM:</strong> 16GB or more</li>
                        <li><strong className="text-[#D4BEE4]">GPU:</strong> Dedicated GPU (NVIDIA GTX/RTX or AMD Radeon)</li>
                        <li><strong className="text-[#D4BEE4]">Storage:</strong> SSD for faster file access</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">2. Livestreaming</h3>
                    <p className="text-base pl-5 text-white">
                        Livestreaming requires real-time processing of video data. You need a strong CPU and good internet connectivity. Having a dedicated GPU is beneficial for encoding high-quality streams without lag.
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li><strong className="text-[#D4BEE4]">CPU:</strong> Intel i7/Ryzen 7 or higher</li>
                        <li><strong className="text-[#D4BEE4]">RAM:</strong> 16GB</li>
                        <li><strong className="text-[#D4BEE4]">GPU:</strong> Dedicated GPU (preferably NVIDIA with NVENC support)</li>
                        <li><strong className="text-[#D4BEE4]">Storage:</strong> SSD for quick loading and storing of assets</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">3. Game Streaming</h3>
                    <p className="text-base pl-5 text-white">
                        Game streaming is similar to livestreaming but often involves playing demanding games simultaneously. A powerful CPU and GPU combo, alongside sufficient RAM, is essential for smooth gameplay and streaming.
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li><strong className="text-[#D4BEE4]">CPU:</strong> Intel i7/Ryzen 7 or higher</li>
                        <li><strong className="text-[#D4BEE4]">RAM:</strong> 16GB or more</li>
                        <li><strong className="text-[#D4BEE4]">GPU:</strong> Dedicated GPU (NVIDIA GTX/RTX or AMD Radeon)</li>
                        <li><strong className="text-[#D4BEE4]">Storage:</strong> SSD for fast load times</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">4. Coding and Development</h3>
                    <p className="text-base pl-5 text-white">
                        While coding doesn’t always require high-end hardware, having a decent CPU and at least 8GB of RAM helps in running IDEs and virtual machines smoothly. More complex applications or game development may need higher specs.
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li><strong className="text-[#D4BEE4]">CPU:</strong> Intel i5/Ryzen 5 or higher</li>
                        <li><strong className="text-[#D4BEE4]">RAM:</strong> 8GB or more</li>
                        <li><strong className="text-[#D4BEE4]">GPU:</strong> Integrated graphics are often sufficient, but a dedicated GPU can be beneficial for game development.</li>
                        <li><strong className="text-[#D4BEE4]">Storage:</strong> SSD for faster access to files and programs</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">5. Music Production</h3>
                    <p className="text-base pl-5 text-white">
                        Music production software can be resource-intensive, especially with multiple tracks and effects. A fast CPU, ample RAM, and a reliable audio interface are key.
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li><strong className="text-[#D4BEE4]">CPU:</strong> Intel i7/Ryzen 7 or higher</li>
                        <li><strong className="text-[#D4BEE4]">RAM:</strong> 16GB or more</li>
                        <li><strong className="text-[#D4BEE4]">GPU:</strong> Integrated graphics are usually sufficient, but a dedicated GPU can improve performance in some DAWs.</li>
                        <li><strong className="text-[#D4BEE4]">Storage:</strong> SSD for fast loading of samples and projects</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">6. Game Development</h3>
                    <p className="text-base pl-5 text-white">
                        Game development involves not only coding but also asset management and testing. A robust CPU, plenty of RAM, and a dedicated GPU are crucial for a smooth workflow.
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li><strong className="text-[#D4BEE4]">CPU:</strong> Intel i7/Ryzen 7 or higher</li>
                        <li><strong className="text-[#D4BEE4]">RAM:</strong> 16GB or more</li>
                        <li><strong className="text-[#D4BEE4]">GPU:</strong> Dedicated GPU for rendering and testing</li>
                        <li><strong className="text-[#D4BEE4]">Storage:</strong> SSD for fast asset loading</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">7. 3D Modeling and Rendering</h3>
                    <p className="text-base pl-5 text-white">
                        3D modeling and rendering require intensive computing power, making a high-performance laptop essential. You need a strong CPU, high RAM capacity, and a top-tier dedicated GPU.
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li><strong className="text-[#D4BEE4]">CPU:</strong> Intel i9/Ryzen 9</li>
                        <li><strong className="text-[#D4BEE4]">RAM:</strong> 32GB or more</li>
                        <li><strong className="text-[#D4BEE4]">GPU:</strong> High-end dedicated GPU (NVIDIA RTX or AMD Radeon)</li>
                        <li><strong className="text-[#D4BEE4]">Storage:</strong> SSD for quick access to large 3D files</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">8. Content Creation</h3>
                    <p className="text-base pl-5 text-white">
                        Content creation encompasses various tasks, from writing to video editing. A solid CPU and RAM are necessary, alongside a good display for accurate content creation.
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li><strong className="text-[#D4BEE4]">CPU:</strong> Intel i7/Ryzen 7 or higher</li>
                        <li><strong className="text-[#D4BEE4]">RAM:</strong> 16GB or more</li>
                        <li><strong className="text-[#D4BEE4]">GPU:</strong> Dedicated GPU can enhance video editing and graphic design tasks.</li>
                        <li><strong className="text-[#D4BEE4]">Storage:</strong> SSD for quick file access</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Conclusion</h3>
                    <p className="text-base pl-5 text-white">
                        By understanding your intended usage and matching it with the appropriate specifications, you can choose a laptop that best suits your needs. Whether you’re gaming, creating content, or developing software, selecting the right device ensures a smooth and productive experience. Aim for the best specs within your budget to future-proof your device for any additional tasks you may take on later!
                    </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Rest Specifications Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[12]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(12)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Rest Specifications</span>
              <svg
                  className='fill-indigo-500 shrink-0 ml-8'
                  width="16"
                  height="16"
                  xmlns='http://www.w3.org/2000/svg'
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${accordionOpen[12] && "!rotate-180"}`}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen[12] && "!rotate-180"}`}
                  />
              </svg>
          </button>
          <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
                  ${accordionOpen[12] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            
              <div className='overflow-hidden'>
                <div className='px-0 sm:p-4'>
                <h2 className="text-2xl text-[#F3C623]">1. Power Adapters</h2>
                    <p className="text-base pl-5 text-white">
                        A power adapter converts electrical power from a wall outlet into a form that your laptop can use. It ensures that your laptop runs smoothly and efficiently, charging the battery as needed.
                    </p>
                    <p className="text-base pl-5 text-white">
                        <strong className="text-[#D4BEE4]">Key Considerations:</strong>
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li>
                            <strong className="text-[#AB886D]">Wattage</strong>: The wattage of the adapter (measured in watts, W) indicates how much power it can deliver. Most laptops come with a specific wattage adapter, which is crucial for optimal performance. Using a lower wattage adapter can result in slow charging or insufficient power for high-performance tasks.
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li><strong className="text-[#D4BEE4]">Typical Wattages:</strong></li>
                                <li><strong className="text-[#D4BEE4]">45W</strong>: Suitable for ultrabooks and light laptops.</li>
                                <li><strong className="text-[#D4BEE4]">65W - 90W</strong>: Common for standard laptops and moderate gaming laptops.</li>
                                <li><strong className="text-[#D4BEE4]">130W and above</strong>: Found in high-performance gaming laptops or workstations.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="text-[#AB886D]">Charging Speed</strong>: Fast charging technologies allow laptops to charge more quickly. Look for features like USB-C Power Delivery (PD) for rapid charging capabilities.
                        </li>
                        <li>
                            <strong className="text-[#AB886D]">Port Compatibility</strong>: Ensure the adapter is compatible with your laptop's charging port (e.g., barrel connector, USB-C).
                        </li>
                    </ul>
                    <p className="text-base pl-5 text-white">
                        <strong className="text-[#D4BEE4]">Battery Life Considerations</strong>: A good power adapter not only charges the laptop but can also influence battery health. Using the recommended adapter can help prolong battery life.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">2. MUX Switch (Multiplexer Switch)</h3>
                    <p className="text-base pl-5 text-white">
                        A mux switch is a component that allows the laptop to switch between integrated graphics and dedicated graphics. This feature is important for optimizing performance and power consumption.
                    </p>
                    <p className="text-base pl-5 text-white">
                        <strong className="text-[#D4BEE4]">Key Considerations:</strong>
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li>
                            <strong className="text-[#AB886D]">Integrated vs. Dedicated Graphics</strong>:
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li><strong className="text-[#D4BEE4]">Integrated Graphics</strong>: These are built into the CPU and are sufficient for everyday tasks, like web browsing and office applications.</li>
                                <li><strong className="text-[#D4BEE4]">Dedicated Graphics</strong>: These provide better performance for gaming, video editing, and other graphics-intensive tasks.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="text-[#AB886D]">Benefits of a Mux Switch</strong>:
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li><strong className="text-[#D4BEE4]">Performance Optimization</strong>: When running demanding applications, switching to dedicated graphics can significantly enhance performance.</li>
                                <li><strong className="text-[#D4BEE4]">Power Efficiency</strong>: For general tasks, integrated graphics can save battery life.</li>
                                <li><strong className="text-[#D4BEE4]">User Control</strong>: Some laptops allow users to toggle between graphics modes based on their needs.</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="text-base pl-5 text-white">
                        <strong className="text-[#D4BEE4]">Buying Tip</strong>: If you’re into gaming or creative work, look for laptops with a mux switch. It provides the flexibility to choose performance or battery efficiency as needed.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">3. Webcams</h3>
                    <p className="text-base pl-5 text-white">
                        A webcam is a built-in camera that allows users to participate in video calls, conferences, or stream content online.
                    </p>
                    <p className="text-base pl-5 text-white">
                        <strong className="text-[#D4BEE4]">Key Considerations:</strong>
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li>
                            <strong className="text-[#AB886D]">Resolution</strong>: Look for a minimum of <strong className="text-[#D4BEE4]">720p HD</strong> resolution for clear video. For better quality, especially for professional use, opt for <strong className="text-[#D4BEE4]">1080p Full HD</strong> or higher.
                        </li>
                        <li>
                            <strong className="text-[#AB886D]">Field of View (FoV)</strong>: A wider field of view can capture more of the background, which is useful for group calls or presentations.
                        </li>
                        <li>
                            <strong className="text-[#AB886D]">Low-Light Performance</strong>: Consider models with good low-light performance if you’ll be using the webcam in dimly lit environments.
                        </li>
                        <li>
                            <strong className="text-[#AB886D]">Privacy Features</strong>: Some laptops come with privacy shutters or indicators to ensure that the camera is off when not in use.
                        </li>
                    </ul>
                    <p className="text-base pl-5 text-white">
                        <strong className="text-[#D4BEE4]">Usage Scenarios</strong>: Ideal for remote work, online classes, and virtual meetings. High-quality webcams enhance professionalism in video calls.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">4. Speakers</h3>
                    <p className="text-base pl-5 text-white">
                        Built-in speakers allow users to listen to audio without needing external speakers or headphones, making them essential for media consumption.
                    </p>
                    <p className="text-base pl-5 text-white">
                        <strong className="text-[#D4BEE4]">Key Considerations:</strong>
                    </p>
                    <ul className="list-disc text-base pl-14 text-white">
                        <li>
                            <strong className="text-[#AB886D]">Sound Quality</strong>: Look for laptops with high-quality speakers that provide clear sound. Features like <strong className="text-[#D4BEE4]">Dolby Audio</strong> or <strong className="text-[#D4BEE4]">DTS</strong> can enhance audio performance.
                        </li>
                        <li>
                            <strong className="text-[#AB886D]">Speaker Placement</strong>: Front-facing speakers usually offer better sound quality compared to downward-facing ones.
                        </li>
                        <li>
                            <strong className="text-[#AB886D]">Volume Levels</strong>: Check reviews to see if the speakers can reach loud volumes without distortion, especially for media consumption or gaming.
                        </li>
                        <li>
                            <strong className="text-[#AB886D]">Additional Features</strong>: Some laptops include audio enhancements, such as a subwoofer for richer bass or support for high-resolution audio formats.
                        </li>
                    </ul>
                    <p className="text-base pl-5 text-white">
                        <strong className="text-[#D4BEE4]">Usage Scenarios</strong>: Good speakers are essential for watching movies, listening to music, or playing games without needing headphones. If sound quality is important to you, consider laptops known for their audio performance.
                    </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>   
  );
};

export default LaptopDoc;