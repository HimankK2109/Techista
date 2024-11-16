import React,{ useRef, useState } from 'react';
import { assets } from '../../assets/assests.js';
import { NavLink } from 'react-router-dom';


const MobileDoc = () => {
    const arr = ['Processor', 'Camera', 'Display', 'GPU', 'Sensors', 'Other Features'];
    const imgarr = [assets.CPU,assets.mobilecamera,assets.mobiledisplay,assets.GPU,assets.mobilesensors,assets.mobileotherfeatures]

    // Initialize state array for accordion open states
  const [accordionOpen, setAccordionOpen] = useState(Array(arr.length).fill(false));
  const accordionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

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
        <NavLink to="/categories/mobiles"
          className="flex items-center text-base text-white bg-orange-500 rounded-full py-2 px-5 hover:text-orange-500 hover:bg-white border border-transparent transition duration-300">
            <span class="mr-2">Take me to Mobiles</span>
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

      
      {/* Processor Accordion */}
      <div className='px-0 py-4 sm:p-4 mt-10' ref={accordionRefs[0]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(0)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Processor</span>
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
                    <h2 className="text-2xl text-[#F3C623]">Understanding Mobile Processors: Basics to Advanced</h2>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">What is a Processor (CPU)?</h3>
                    <p className="text-base pl-5 text-white">
                        The <strong className="text-[#D4BEE4]">processor</strong> is the brain of your mobile device. It executes instructions and handles everything from running apps to processing tasks in the background. A faster processor ensures smoother performance, especially when multitasking, gaming, or using demanding apps.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Key Processor Terms:</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li><strong className="text-[#AB886D]">Cores:</strong> Modern mobile processors are multicore, meaning they have several cores (usually 2 to 8). More cores allow the phone to handle more tasks at once, leading to better multitasking and performance in high-demand apps.</li>
                        <li><strong className="text-[#AB886D]">Clock Speed (GHz):</strong> Measured in gigahertz, it indicates how many instructions the processor can execute per second. Higher clock speeds generally mean better performance.</li>
                        <li><strong className="text-[#AB886D]">Nanometer (nm) Technology:</strong> Smaller nm processes (like 5nm, 7nm) allow more transistors to fit into the chip, making it faster and more power-efficient.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Popular Mobile Processor Brands:</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li>
                            <strong className="text-[#AB886D]">Apple (A-Series Chips):</strong>
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li><strong className="text-[#D4BEE4]">A17 Bionic</strong> (found in newer iPhones): Extremely powerful, designed for high performance and energy efficiency. Great for gaming, 4K video recording, augmented reality, and heavy multitasking.</li>
                                <li><strong className="text-[#D4BEE4]">A16 Bionic:</strong> Previous generation but still very powerful for most users.</li>
                                <li>Apple processors are known for excellent real-world performance and tight integration with iOS.</li>
                            </ul>
                        </li>

                        <li>
                            <strong className="text-[#AB886D]">Qualcomm Snapdragon:</strong>
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li><strong className="text-[#D4BEE4]">Snapdragon 8 Gen 2:</strong> High-end processor for flagship Android phones, excelling in gaming, AI, and power efficiency.</li>
                                <li><strong className="text-[#D4BEE4]">Snapdragon 7 Series:</strong> Great for mid-range phones, offering a balance of power and efficiency for everyday tasks and gaming.</li>
                            </ul>
                        </li>

                        <li>
                            <strong className="text-[#AB886D]">MediaTek:</strong>
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li><strong className="text-[#D4BEE4]">Dimensity Series:</strong> Known for excellent performance in mid-range and budget devices, with decent gaming and multitasking capabilities.</li>
                            </ul>
                        </li>

                        <li>
                            <strong className="text-[#AB886D]">Samsung Exynos:</strong>
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li>Exynos chips are used in some Samsung phones (especially in non-US markets). The <strong className="text-[#D4BEE4]">Exynos 2200</strong> competes with Snapdragon at the high end, but Snapdragon tends to perform better in gaming and battery efficiency.</li>
                            </ul>
                        </li>

                        <li>
                            <strong className="text-[#AB886D]">Google Tensor:</strong>
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li>The <strong className="text-[#D4BEE4]">Google Tensor G3</strong> focuses on AI-driven features, including advanced computational photography and voice recognition. While it may not match Snapdragon in raw gaming power, it excels in real-world tasks like image processing, translating to better camera performance and voice features.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">How to Choose the Right Processor for a Mobile Device:</h3>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Casual Users (Web Browsing, Social Media, Streaming)</h3>
                    <p className="text-base pl-5 text-white">
                        <strong className="text-[#D4BEE4]">Processor Recommendation:</strong> Look for processors like the <strong className="text-[#D4BEE4]">Apple A15</strong> or <strong className="text-[#D4BEE4]">Snapdragon 700 Series</strong> (e.g., Snapdragon 778G). These processors offer smooth performance without overpaying for high-end power you might not need.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Gamers and Power Users (Heavy Apps, Multitasking, Gaming)</h3>
                    <p className="text-base pl-5 text-white">
                        <strong className="text-[#D4BEE4]">Processor Recommendation:</strong> Go for high-end processors like the <strong className="text-[#D4BEE4]">Apple A16/A17</strong> or <strong className="text-[#D4BEE4]">Snapdragon 8 Gen 2</strong> for buttery smooth gaming and handling heavy apps like video editing software. Multicore processors with high clock speeds and good thermal management are key.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Battery Life and Power Efficiency</h3>
                    <p className="text-base pl-5 text-white">
                        Look for processors built on smaller <strong className="text-[#D4BEE4]">nm processes</strong> (e.g., <strong className="text-[#D4BEE4]">5nm</strong> or <strong className="text-[#D4BEE4]">4nm</strong>), as they consume less power, extending battery life without sacrificing performance.
                    </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Camera Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[1]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(1)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Camera</span>
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
                    <h2 className="text-[#F3C623] text-2xl">Understanding Mobile Camera Basics</h2>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">1. Camera Resolution (Megapixels)</h3>
                    <p className="text-white text-base pl-5">
                        Resolution refers to the number of pixels a camera can capture in a single image. It’s often measured in megapixels (MP). A higher resolution means more detail in your photos, but it’s not the only factor that defines photo quality.
                    </p>
                    <p className="text-white text-base pl-5">
                        What you need to know:
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li className="text-[#AB886D]}"><strong>12 MP - 48 MP</strong> is usually enough for most users. Many flagship phones like the iPhone and Samsung Galaxy use 12 MP sensors and produce excellent images.</li>
                        <li className="text-[#AB886D]}"><strong>48 MP - 108 MP</strong>: Found in some high-end and mid-range phones, these can capture larger images with more detail, but may not always offer better overall quality unless combined with other technologies (like image processing and larger sensors).</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">2. Aperture (f/stop)</h3>
                    <p className="text-white text-base pl-5">
                        Aperture controls how much light enters the camera. It is denoted by the f-stop value (e.g., f/1.8, f/2.2). Lower numbers like f/1.8 mean a wider aperture that lets in more light, while higher numbers like f/2.8 mean a narrower aperture that lets in less light.
                    </p>
                    <p className="text-white text-base pl-5">Why it matters:</p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li className="text-[#AB886D]}"><strong>Low-light performance:</strong> A wider aperture (like f/1.8) is better for low-light conditions because it allows more light to hit the sensor, resulting in brighter images in dim settings.</li>
                        <li className="text-[#AB886D]}"><strong>Depth of field:</strong> A wider aperture creates a shallow depth of field, which helps achieve the popular "bokeh" effect, where the subject is in focus and the background is blurred.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">3. Night Mode</h3>
                    <p className="text-white text-base pl-5">
                        Night mode enhances photos taken in low-light conditions by using longer exposures and image processing to brighten the scene, reduce noise, and capture more details.
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li className="text-[#AB886D]}"><strong>Best for low-light shots:</strong> Night mode can dramatically improve images in poor lighting, making it essential for users who frequently take photos indoors, at night, or in low-light environments.</li>
                        <li className="text-[#AB886D]}"><strong>Not just for flagship phones:</strong> Many mid-range phones now offer night mode, so it's a feature to look for even if you're not buying a premium model.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">4. Multiple Lenses (Ultra-Wide, Telephoto, Macro)</h3>
                    <p className="text-white text-base pl-5">
                        Modern smartphones often come with multiple cameras, each with a specific purpose:
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li className="text-[#AB886D]}"><strong>Ultra-wide lens:</strong> Captures more of the scene, ideal for landscapes and group photos.</li>
                        <li className="text-[#AB886D]}"><strong>Telephoto lens:</strong> Offers optical zoom for capturing distant subjects without losing quality. Typically found in high-end models.</li>
                        <li className="text-[#AB886D]}"><strong>Macro lens:</strong> Allows close-up shots of small objects, ideal for capturing fine details like flowers or insects.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">5. Image Stabilization (OIS & EIS)</h3>
                    <p className="text-white text-base pl-5">
                        Image stabilization reduces the blur caused by camera shake, especially in low light or when taking video.
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li className="text-[#AB886D]"><strong>Optical Image Stabilization (OIS):</strong> Uses hardware to physically adjust the lens to compensate for movement.</li>
                        <li className="text-[#AB886D]}"><strong>Electronic Image Stabilization (EIS):</strong> Uses software to correct for shakes, primarily in video recording.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">6. HDR (High Dynamic Range)</h3>
                    <p className="text-white text-base pl-5">
                        HDR captures multiple photos at different exposures and combines them to balance out the highlights and shadows, providing more detail in both bright and dark areas of a photo.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">7. Video Capabilities</h3>
                    <p className="text-white text-base pl-5">
                        Look for phones that can shoot 4K video (or higher) for excellent video quality, especially if you’re a content creator. Most modern smartphones can handle 1080p, but higher-end models offer 4K and even 8K video recording.
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li className="text-[#AB886D]}"><strong>Frame rate:</strong> Many phones offer high frame rates, such as 60 FPS (frames per second) or 120 FPS, which make videos smoother, especially when filming fast-moving subjects or for slow-motion effects.</li>
                        <li className="text-[#AB886D]}"><strong>Stabilization:</strong> OIS or EIS can greatly improve video quality, ensuring that your footage is steady even when you’re on the move.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">8. AI & Computational Photography</h3>
                    <p className="text-white text-base pl-5">
                        AI and machine learning are used to improve image quality by adjusting settings, enhancing colors, or applying effects automatically.
                    </p>
                    <p className="text-white text-base pl-5">
                        Why it matters: AI-driven features like portrait mode, scene detection, and automatic adjustments can make a big difference for users who don’t want to manually tweak their settings but still want excellent results.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">9. Front Camera (Selfies)</h3>
                    <p className="text-white text-base pl-5">
                        What to look for:
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li className="text-[#AB886D]}"><strong>Megapixels:</strong> A front camera with 10 MP or more should provide good selfie quality.</li>
                        <li className="text-[#AB886D]}"><strong>Aperture:</strong> A wider aperture on the front camera (like f/2.0) allows better performance in low-light situations.</li>
                        <li className="text-[#AB886D]}"><strong>Portrait Mode and AI Beauty Mode:</strong> These features can enhance your selfies, adding soft bokeh effects or adjusting facial features subtly for a polished look.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">How to Choose the Right Camera for You</h3>
                    <p className="text-white text-base pl-5">For Photography Enthusiasts: Look for higher resolution, larger sensors, and lenses with wider apertures (like f/1.8) for more control over lighting and depth of field. Consider features like OIS and RAW capture if you plan to edit your photos.</p>
                    <p className="text-white text-base pl-5">For Low-Light Photography: Prioritize phones with excellent Night Mode, OIS, and wider apertures to improve low-light performance. Phones like the Google Pixel series or Samsung Galaxy S series often excel in this area.</p>
                    <p className="text-white text-base pl-5">For Video Creators: Choose a phone with 4K video recording, high frame rates, and excellent stabilization. If video is your priority, check for OIS, EIS, and microphones that capture high-quality audio.</p>
                    <p className="text-white text-base pl-5">For Everyday Use: A phone with a balanced camera system—good aperture (around f/1.8 to f/2.2), HDR, AI enhancements, and a decent front camera for selfies—should suit most users. Brands like Apple and Samsung offer well-rounded cameras for day-to-day photography.</p>
                    <p className="text-white text-base pl-5">For Zoom and Versatility: If zooming or capturing distant objects is important, opt for phones with a telephoto lens. If you like wide shots or creative close-ups, look for ultra-wide and macro lenses.</p>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Display Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[2]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(2)}
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
                    <h2 className="text-2xl text-[#F3C623]">Display Types: How to Choose the Right Screen</h2>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Apple Retina Display</h3>
                    <p className="text-base text-white pl-5">
                        Found in iPhones and iPads. Retina displays have high pixel density, making text, images, and videos look incredibly sharp. They are essentially LCDs with better resolution and color accuracy, providing excellent clarity and brightness.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">AMOLED (Active Matrix Organic LED)</h3>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Key Features:</strong> Deep blacks, high contrast, and vibrant colors. Since each pixel emits its own light, AMOLED displays can turn off individual pixels, saving power (especially with dark themes) and providing excellent viewing angles.
                    </p>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Who it’s for:</strong> Ideal for users who consume a lot of media, like watching videos or gaming. It’s also great for battery efficiency in darker modes.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Super AMOLED</h3>
                    <p className="text-base text-white pl-5">
                        An enhanced version of AMOLED, used primarily in Samsung devices. It integrates touch sensors directly into the display, making the phone thinner and the display more responsive.
                    </p>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Who it’s for:</strong> Power users and those who prioritize display quality, color saturation, and outdoor visibility.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">IPS LCD (In-Plane Switching Liquid Crystal Display)</h3>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Key Features:</strong> Consistent and accurate color reproduction, good viewing angles, and lower cost compared to AMOLED. However, blacks are not as deep as on AMOLED screens, and the contrast is lower.
                    </p>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Who it’s for:</strong> IPS LCD is a great option for users who need a reliable and affordable screen with good color accuracy for everyday use and moderate media consumption.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Full HD (1080p) vs. Quad HD (1440p) vs. 4K</h3>
                    <ul className="list-disc text-base text-white sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">Full HD (1080p):</strong> Sufficient for most users, offering clear and sharp visuals while being battery efficient. Ideal for casual use, streaming, and gaming.</li>
                        <li><strong className="text-[#AB886D]">Quad HD (1440p):</strong> Provides even sharper visuals, making it great for users who want extra detail in games and videos.</li>
                        <li><strong className="text-[#AB886D]">4K (2160p):</strong> Extremely high resolution, mostly seen in premium devices. It’s excellent for media consumption and high-end gaming, but it can drain the battery faster.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Refresh Rate (60Hz vs. 90Hz vs. 120Hz)</h3>
                    <ul className="list-disc text-base text-white sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">60Hz:</strong> Standard refresh rate for most phones. Suitable for casual use.</li>
                        <li><strong className="text-[#AB886D]">90Hz / 120Hz:</strong> Provides smoother scrolling, animations, and gaming experience. Gamers and users who want a premium experience will benefit from 120Hz screens.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Other Important Display Features</h3>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">HDR (High Dynamic Range) Support</h3>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">What it does:</strong> Enhances the display’s brightness, contrast, and color range, making content look more vivid and true to life. HDR10 and Dolby Vision are the main standards.
                    </p>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Who it’s for:</strong> Great for users who consume a lot of HDR content (e.g., on Netflix or YouTube) and want the best visual experience.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Brightness (nits)</h3>
                    <p className="text-base text-white pl-5">
                        Brightness is measured in <strong className="text-[#D4BEE4]">nits</strong>. Higher brightness levels are essential for outdoor visibility.
                    </p>
                    <ul className="list-disc text-base text-white sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">300-400 nits:</strong> Standard for most devices; adequate for indoor use.</li>
                        <li><strong className="text-[#AB886D]">500-800 nits:</strong> Better for outdoor use.</li>
                        <li><strong className="text-[#AB886D]">1000+ nits:</strong> Exceptional visibility, even in direct sunlight, common in high-end phones.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Screen-to-Body Ratio</h3>
                    <p className="text-base text-white pl-5">
                        Higher screen-to-body ratios mean thinner bezels and more immersive viewing experiences. Phones with slim bezels or notch-less displays (like those with punch-hole cameras) offer more screen real estate for media consumption and gaming.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Anti-Glare Coating vs. Glossy Screens</h3>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Anti-Glare:</strong> Reduces reflections and is great for outdoor use or bright environments.
                    </p>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Glossy Screens:</strong> Tend to look more vibrant but can suffer from reflections, especially in bright light.
                    </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* GPU Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[3]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(3)}
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
                <h2 className="text-[#F3C623] text-2xl">What is a GPU?</h2>
                    <p className="text-white text-base pl-5">
                        A <strong className="text-[#D4BEE4]">Graphics Processing Unit (GPU)</strong> is a specialized processor designed to accelerate the rendering of images, videos, and animations on your device. For mobile phones, the GPU is integrated into the system-on-a-chip (SoC) along with the CPU. The GPU is responsible for everything from the smoothness of the user interface to rendering high-quality visuals in games.
                    </p>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">Why Does the GPU Matter in a Mobile Phone?</h3>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">Gaming:</strong> A powerful GPU ensures smoother gameplay, higher frame rates, and better graphics quality. If you’re into mobile gaming, the GPU plays a crucial role in delivering a good experience.</li>
                        <li><strong className="text-[#AB886D]">Multimedia:</strong> The GPU also enhances video playback, especially for high-resolution content such as 4K videos.</li>
                        <li><strong className="text-[#AB886D]">AI and AR Applications:</strong> Many modern GPUs assist in Artificial Intelligence (AI) tasks and Augmented Reality (AR) applications, helping to make experiences like face recognition, photo enhancements, and virtual try-ons faster and more efficient.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">Popular Mobile GPUs</h3>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">1. Qualcomm Adreno GPUs</h3>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">Adreno 660 (High-End):</strong> Found in flagship devices, delivering smooth gameplay in demanding games and excellent rendering for high-resolution displays. Phones like the <em>Samsung Galaxy S21</em> or <em>OnePlus 9 Pro</em> use Adreno 660. It supports features like HDR gaming and up to 120Hz refresh rate for ultra-smooth animations.</li>
                        <li><strong className="text-[#AB886D]">Adreno 620 (Mid-Range):</strong> Found in mid-range phones like the <em>Google Pixel 5</em>, capable of running most modern games at medium settings.</li>
                        <li><strong className="text-[#AB886D]">Adreno 610 (Entry-Level):</strong> For budget devices, the Adreno 610 offers decent performance for everyday tasks, basic games, and multimedia consumption but isn’t ideal for high-end gaming.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">2. ARM Mali GPUs</h3>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">Mali-G78 (High-End):</strong> Found in high-end phones like the <em>Samsung Galaxy S21 (Exynos version)</em>, this GPU supports demanding tasks like gaming and augmented reality while offering impressive power efficiency.</li>
                        <li><strong className="text-[#AB886D]">Mali-G76 (Mid-Range):</strong> A solid performer for everyday gaming and apps that require some graphical power, often found in mid-tier smartphones.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">3. Apple GPUs</h3>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">A17 Bionic GPU:</strong> Found in the latest <em>iPhone 15 Pro</em> models, it excels in gaming, AR applications, and 4K video editing with superb energy efficiency.</li>
                        <li><strong className="text-[#AB886D]">A15 Bionic GPU:</strong> Found in slightly older models like the <em>iPhone 13</em>, this GPU is still incredibly powerful, handling high-end games and graphic-intensive tasks with ease.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">4. Google Tensor GPUs</h3>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">Mali-G78 GPU (Google Tensor):</strong> Found in the <em>Google Pixel 6</em> series, it’s optimized for both everyday usage and AI-driven features like enhanced image processing and voice recognition.</li>
                    </ul>

                    <h3 className="text-[#D4BEE4] text-xl mt-4">Choosing the Right GPU for Your Mobile Phone</h3>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">For Gamers:</strong> Look for phones with <em>Adreno 660</em>, <em>Mali-G78</em>, or <em>Apple’s A17 Bionic</em> for the best gaming performance.</li>
                        <li><strong className="text-[#AB886D]">For Media Consumers:</strong> If you primarily use your phone for watching videos, streaming, and occasional gaming, mid-range GPUs like the <em>Adreno 620</em> or <em>Mali-G76</em> will serve you well.</li>
                        <li><strong className="text-[#AB886D]">For Power Users (AI/AR):</strong> If you’re into AI-driven apps, advanced camera functions, or augmented reality, opt for phones with <em>Apple’s A-series</em> or <em>Google Tensor</em> GPUs.</li>
                        <li><strong className="text-[#AB886D]">For Budget Users:</strong> For everyday tasks and basic games, GPUs like the <em>Adreno 610</em> or <em>Mali-G52</em> offer solid performance without excessive power consumption.</li>
                    </ul>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Sensor Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[4]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(4)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Sensor</span>
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
                    <h2 className="text-2xl text-[#F3C623]">Sensors in Mobile Phones: What You Need to Know</h2>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">1. What Are Sensors and Why Do They Matter?</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li><strong className="text-[#AB886D]">Definition</strong>: Sensors are tiny components in your mobile that help it interact with the environment. They collect data such as movement, light, or pressure and convert it into signals the phone can understand and use.</li>
                        <li><strong className="text-[#AB886D]">Why they matter</strong>: Sensors improve user experience by enabling features like auto-brightness, GPS navigation, and fitness tracking. Without them, many of the "smart" functions in smartphones would not work.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">2. Key Sensors in Smartphones</h3>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Accelerometer: Motion and Orientation</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li><strong className="text-[#AB886D]">What it does</strong>: Detects the orientation and movement of your phone (tilting, shaking, rotating).</li>
                        <li><strong className="text-[#AB886D]">Use cases</strong>:
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li>Enables auto-rotate (switching between portrait and landscape mode).</li>
                                <li>Used in gaming for motion-based controls.</li>
                                <li>Essential for fitness tracking apps (like step counting).</li>
                            </ul>
                        </li>
                        <li><strong className="text-[#AB886D]">How it impacts your choice</strong>: If you’re into mobile gaming or fitness tracking, a responsive accelerometer ensures smooth performance.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Gyroscope: Enhanced Motion Sensing</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li><strong className="text-[#AB886D]">What it does</strong>: Works with the accelerometer to detect more precise rotation and orientation. It senses angular motion in 3D space.</li>
                        <li><strong className="text-[#AB886D]">Use cases</strong>:
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li>Used in augmented reality (AR) applications (e.g., <em>Pokémon Go</em>).</li>
                                <li>Improves stabilization in camera apps, resulting in smoother videos.</li>
                                <li>Critical for VR (Virtual Reality) experiences.</li>
                            </ul>
                        </li>
                        <li><strong className="text-[#AB886D]">How it impacts your choice</strong>: If you’re into AR, VR, or want better video stability, look for phones with a quality gyroscope.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Magnetometer (Compass)</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li><strong className="text-[#AB886D]">What it does</strong>: Detects the magnetic field to figure out which direction your phone is facing (like a digital compass).</li>
                        <li><strong className="text-[#AB886D]">Use cases</strong>:
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li>Essential for GPS navigation apps.</li>
                                <li>Improves the accuracy of location-based services (Google Maps, Waze).</li>
                            </ul>
                        </li>
                        <li><strong className="text-[#AB886D]">How it impacts your choice</strong>: If accurate GPS navigation and location services are important to you, ensure the phone has a good magnetometer.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Proximity Sensor: Detecting Nearby Objects</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li><strong className="text-[#AB886D]">What it does</strong>: Detects when an object (like your face) is close to the screen.</li>
                        <li><strong className="text-[#AB886D]">Use cases</strong>:
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li>Automatically turns off the screen during calls to prevent accidental touches.</li>
                                <li>Helps improve battery life by turning off unnecessary functions when the phone is not in use.</li>
                            </ul>
                        </li>
                        <li><strong className="text-[#AB886D]">How it impacts your choice</strong>: Nearly all smartphones have proximity sensors, but it’s something to be aware of when considering phones from lesser-known brands.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Ambient Light Sensor: Auto-Brightness Control</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li><strong className="text-[#AB886D]">What it does</strong>: Measures the amount of light in the environment to adjust the screen brightness automatically.</li>
                        <li><strong className="text-[#AB886D]">Use cases</strong>:
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li>Improves visibility in different lighting conditions.</li>
                                <li>Saves battery life by reducing brightness when not needed.</li>
                            </ul>
                        </li>
                        <li><strong className="text-[#AB886D]">How it impacts your choice</strong>: If you want a phone that adapts to different environments and saves battery efficiently, ensure it has a good ambient light sensor.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Fingerprint Sensor: Secure Access</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li><strong className="text-[#AB886D]">What it does</strong>: Scans your fingerprint to unlock the device or approve actions (like purchases).</li>
                        <li><strong className="text-[#AB886D]">Types</strong>:
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li>Capacitive sensors (older but reliable).</li>
                                <li>Ultrasonic sensors (found in newer high-end phones, offering more accuracy).</li>
                                <li>Optical sensors (common in under-display scanners).</li>
                            </ul>
                        </li>
                        <li><strong className="text-[#AB886D]">How it impacts your choice</strong>: If security and convenience are key for you, opt for a phone with a fast and reliable fingerprint sensor, ideally an ultrasonic one for better accuracy.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Face Recognition (IR and 3D Sensors)</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li><strong className="text-[#AB886D]">What it does</strong>: Uses infrared sensors or 3D scanning to recognize your face for unlocking the phone.</li>
                        <li><strong className="text-[#AB886D]">Use cases</strong>:
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li>Allows for fast and secure unlocking without physical interaction.</li>
                                <li>Some phones use 3D face mapping for more secure and accurate recognition (e.g., Apple’s Face ID).</li>
                            </ul>
                        </li>
                        <li><strong className="text-[#AB886D]">How it impacts your choice</strong>: If you prefer face recognition over fingerprint, make sure the phone has secure sensors (look for phones with 3D face scanning for better security).</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Barometer: Altitude Measurement</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li><strong className="text-[#AB886D]">What it does</strong>: Measures atmospheric pressure to detect altitude.</li>
                        <li><strong className="text-[#AB886D]">Use cases</strong>:
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li>Improves GPS accuracy, especially for determining vertical location (helpful for navigation in high-rise buildings).</li>
                                <li>Used in fitness tracking apps for activities like hiking or climbing stairs.</li>
                            </ul>
                        </li>
                        <li><strong className="text-[#AB886D]">How it impacts your choice</strong>: If you’re into hiking or other altitude-sensitive activities, having a barometer is beneficial.</li>
                    </ul>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">Infrared (IR) Blaster: Remote Control Capability</h3>
                    <ul className="list-disc text-base sm:pl-14 pl-0 text-white">
                        <li><strong className="text-[#AB886D]">What it does</strong>: Sends infrared signals to control other devices like TVs, air conditioners, and more.</li>
                        <li><strong className="text-[#AB886D]">Use cases</strong>:
                            <ul className="list-disc text-base sm:pl-14 pl-5 text-white">
                                <li>Turns your phone into a universal remote.</li>
                                <li>Great for controlling smart home devices.</li>
                            </ul>
                        </li>
                        <li><strong className="text-[#AB886D]">How it impacts your choice</strong>: If you like the idea of controlling appliances with your phone, look for models with an IR blaster (though they are becoming less common).</li>
                    </ul>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Other Features Accordion */}
      <div className='px-0 py-4 sm:p-4' ref={accordionRefs[5]}>
        <div className='py-2'>
          <button
              onClick={() => toggleAccordion(5)}
              className='flex justify-between w-full'
          >
              <span className='text-3xl'>Other Features</span>
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
                <h2 className="text-2xl text-[#F3C623]">Other Features to Consider When Buying a Mobile</h2>
                    <p className="text-base text-white pl-5">
                        When selecting a mobile phone, it’s essential to consider features beyond the basic specifications like CPU, RAM, and storage. Understanding these additional features can significantly enhance your user experience. Here are some key features to keep in mind:
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">1. IP Rating (Ingress Protection Rating)</h3>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">What is it?</strong> The IP rating indicates how well a device is protected against dust and water. It's denoted by the letters "IP" followed by two digits.
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">The first digit (0-6)</strong> indicates protection against solid particles (dust).</li>
                        <li><strong className="text-[#AB886D]">The second digit (0-9)</strong> indicates protection against liquids (water).</li>
                    </ul>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Common Ratings:</strong>
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">IP67:</strong> Dust-tight and can withstand immersion in water up to 1 meter for 30 minutes. Ideal for everyday use, including accidental splashes.</li>
                        <li><strong className="text-[#AB886D]">IP68:</strong> Dust-tight and can withstand immersion in water beyond 1 meter (usually up to 3 meters). Great for outdoor use or activities near water.</li>
                    </ul>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Why it matters:</strong> If you lead an active lifestyle, travel often, or work in environments with exposure to dust or water, look for phones with a higher IP rating for added durability.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">2. OTG (On-The-Go) Support</h3>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">What is it?</strong> OTG allows your mobile device to connect directly to USB peripherals such as flash drives, keyboards, and mice.
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">Storage Expansion:</strong> You can easily transfer files between your phone and a USB drive, making it simple to manage storage, especially for users with large files like videos and photos.</li>
                        <li><strong className="text-[#AB886D]">Peripheral Connectivity:</strong> Connect peripherals such as game controllers or keyboards for enhanced functionality.</li>
                    </ul>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">How to Check:</strong> Most modern smartphones support OTG. You can check the specifications or look for an OTG adapter to test compatibility.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">3. Wireless Charging</h3>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">What is it?</strong> A convenient feature that allows you to charge your phone without plugging in a cable. It typically uses the Qi standard.
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">Convenience:</strong> Simply place your phone on a compatible charging pad to start charging.</li>
                        <li><strong className="text-[#AB886D]">Less Wear on Ports:</strong> Reduces wear and tear on charging ports, which can be beneficial for long-term use.</li>
                    </ul>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Considerations:</strong> Ensure that your phone has this feature if you prefer wireless charging. Keep in mind that it may charge slower than wired charging.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">4. Dual SIM Capability</h3>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">What is it?</strong> Dual SIM phones can accommodate two SIM cards, allowing you to use two different phone numbers on one device.
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">Separate Personal and Work Lines:</strong> Easily manage personal and work calls/messages without carrying two phones.</li>
                        <li><strong className="text-[#AB886D]">Travel Flexibility:</strong> Use a local SIM card while traveling abroad to save on roaming charges.</li>
                    </ul>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Note:</strong> Check if the phone supports dual standby or dual active, which affects how calls are managed when both SIMs are in use.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">5. NFC (Near Field Communication)</h3>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">What is it?</strong> NFC enables wireless communication between devices over short distances, typically used for mobile payments and data exchange.
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">Mobile Payments:</strong> Use services like Google Pay or Apple Pay for quick and secure payments at supported terminals.</li>
                        <li><strong className="text-[#AB886D]">Quick Pairing:</strong> Connect to other NFC-enabled devices (like headphones or speakers) easily without manual pairing.</li>
                    </ul>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">Usage:</strong> Check if the phone has NFC if you plan to use mobile payment systems or want to pair devices quickly.
                    </p>

                    <h3 className="text-xl text-[#D4BEE4] mt-4">6. Audio Features</h3>
                    <p className="text-base text-white pl-5">
                        <strong className="text-[#D4BEE4]">What to look for:</strong>
                    </p>
                    <ul className="list-disc text-white text-base sm:pl-14 pl-0">
                        <li><strong className="text-[#AB886D]">Headphone Jack:</strong> Some phones still feature a 3.5mm headphone jack, which is convenient for users who prefer wired headphones.</li>
                        <li><strong className="text-[#AB886D]">Stereo Speakers:</strong> For enhanced audio experience, look for phones with stereo speakers, which provide better sound quality for media playback.</li>
                        <li><strong clasFsName="text-[#AB886D]">Hi-Res Audio Support:</strong> If you’re an audiophile, consider phones that support high-resolution audio formats.</li>
                    </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileDoc