import React,{ useRef, useState, useEffect, useContext } from 'react'
import { assets } from '../../assets/assests.js'
import './Modal.css'
import { StoreContext } from '../../context/StoreContext.jsx'
import Accordion from '../Accordion/Accordion.jsx'
import ModalImage from '../ModalImage/ModalImage.jsx'

const Modal = ({onClose}) => {
    const {selected_Laptop_for_modal,selected_Mobile_for_modal, selected_Product_for_which_price_is_rendered_in_modal, wishlistItems,markItem, unmarkItem, resetSelections} = useContext(StoreContext)

    const parsedData = selected_Laptop_for_modal?.jsonData?.jsonData 
        ? JSON.parse(selected_Laptop_for_modal.jsonData.jsonData) 
        : null;

    const parsedDataMobile = selected_Mobile_for_modal?.jsonData?.jsonData 
        ? JSON.parse(selected_Mobile_for_modal.jsonData.jsonData) 
        : null;

    const images = selected_Laptop_for_modal?.images || [];
    // console.log('Laptop object:', parsedData);
    // console.log('Mobile object:', parsedDataMobile);
    // console.log("Data coming from DB: ", selected_Laptop_for_modal);
    // console.log("Imafes hai ye:",images);  
    // console.log('Mobile Data coming from DB:', selected_Mobile_for_modal);
    // console.log("Youtube ka link", parsedData?.links?.youtube);    
    // console.log("Name: ", parsedData.name);
    // console.log("ID: ", selected_Laptop_for_modal._id);
    
    const modalRef = useRef()

    // Determine the width based on the selected item
    const modalWidth = selected_Laptop_for_modal
        ? 'w-[93vw]'    // If laptop is selected
        : selected_Mobile_for_modal
        ? 'w-[89vw]'     // If mobile is selected
        : 'w-[1200px]';   // If tablet or default size

    const gridWidth = selected_Laptop_for_modal
        ? 'w-[1800px]'    // If laptop is selected
        : selected_Mobile_for_modal
        ? 'w-[1560px]'     // If mobile is selected
        : 'w-[1200px]';   // If tablet or default size

    
    // Disable scrolling when modal is open
    useEffect(() => {
        // Disable scroll on mount
        document.body.style.overflow = 'hidden';

        // Enable scroll on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const closeModal = (e) => {
        if(modalRef.current === e.target){
            resetSelections();
            onClose();
        }
    }

    const arr = [
        "CPU Details",
        "GPU Details",
        "RAM Details",
        "Storage",
        "Benchmarks",
        "Games",
        "Display",
        "Keyboard",
        "USB Type C",
        "USB Type A",
        "HDMI",
        "Ethernet",
        "Audio Jack",
        "Cam Shutter Button",
        "Dolby",
        "Dolby Atmos: Yes",
        "Used For",
        "Rest Spec",
        "Micro SD Card Slot",
    ]

    const arr1 = [
        "Sim Details",
        "OTG Details",
        "GPU Details",
        "Sound Enhancements",
        "Display",
        "OS & Processor",
        "Storage",
        "Rear Camera",
        "Front Camera",
        "Connectivity",
        "Sensors",
        "Other Features",
        "Dolby",
        "Dimensions",
    ]

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center overflow-y-auto"'>
        <div className={`modal-box-open relative flex items-center justify-center ${modalWidth} h-[90vh]`}>
            <button className='absolute top-0 right-0 h-8 w-8 z-30' onClick={onClose}><img src={assets.cross} alt="" /></button>
            <div className={`relative bg-[#1B1212] ${gridWidth} min-h-[80vh] max-h-[90vh] overflow-y-auto p-4`}>

                {selected_Laptop_for_modal && (
                    <div className="grid grid-cols-[250px_250px_200px_200px_200px_200px_200px] gap-1 p-0 w-full h-full">
                    {/* (1,1) - Image Cell */}
                    <div className=" p-2  relative row-span-2 w-[250px] flex flex-col">
                        {/* Image Section */}
                        <div className="h-[30vh]">
                            <ModalImage />
                        </div>
    
                        {/* Links Section */}
                        <div className="relative p-2 mt-5  flex-1 flex flex-col justify-center">
                            <div className="flex flex-col items-start justify-start space-y-3 h-full">
    
                                {/* Title and Bookmark in Flex */}
                                <div className='flex items-center justify-between w-full'>
                                    <h2 className="text-lg font-bold">
                                        {parsedData.name}
                                    </h2>
    
                                    {/* Bookmark Icon aligned with Title */}
                                    <div className='relative ml-3'>
                                        {!wishlistItems[selected_Laptop_for_modal._id]
                                            ? <img className='bookmarkno h-6 cursor-pointer' onClick={(e) => {
                                                e.stopPropagation(); // Prevent modal from opening
                                                markItem(selected_Laptop_for_modal._id);
                                            }} src={assets.bookreg} alt="Save" />
                                            : <img className='bookmarkyes h-6 cursor-pointer' onClick={(e) => {
                                                e.stopPropagation(); // Prevent modal from opening
                                                unmarkItem(selected_Laptop_for_modal._id);
                                            }} src={assets.booksolid} alt="Saved" />
                                        }
                                    </div>
                                </div>
                                
                                {/* Flipkart Link */}
                                <a href={selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.flipkart?.link || "https://www.flipkart.com"} className="text-blue-500 flex text-lg hover:underline" target="_blank" 
                                rel="noopener noreferrer"><span className="flex items-center">
                                    {selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.flipkart?.price || "Not Available"}
                                    <img 
                                    src={assets.flipkart_icon} 
                                    alt="Flipkart Icon" 
                                    className="ml-3 rounded-full h-5 w-5" 
                                    />
                                </span></a>
    
                                {/* Amazon Link */}
                                <a href={selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.amazon?.link || "https://www.amazon.com"} className="text-blue-500 flex text-lg hover:underline" target="_blank" 
                                rel="noopener noreferrer"><span className="flex items-center">
                                    {selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.amazon?.price || "Not Available"}
                                    <img 
                                    src={assets.amazon_icon} 
                                    alt="Flipkart Icon" 
                                    className="ml-3 rounded-full h-5 w-5" 
                                    />
                                </span></a>
    
                                {/* Croma Link */}
                                <a href={selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.croma?.link || "https://www.croma.com"} className="text-blue-500 flex text-lg hover:underline" target="_blank" 
                                rel="noopener noreferrer"><span className="flex items-center">
                                    {selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.croma?.price || "Not Available"}
                                    <img 
                                    src={assets.croma_icon} 
                                    alt="Flipkart Icon" 
                                    className="ml-3 rounded-full h-5 w-5" 
                                    />
                                </span></a>
    
                                {/* Reliance Link */}
                                <a href={selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.reliancedigital?.link || "https://www.reliancedigital.com"} className="text-blue-500 flex text-lg hover:underline" target="_blank" 
                                rel="noopener noreferrer"><span className="flex items-center">
                                    {selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.reliancedigital?.price || "Not Available"}
                                    <img 
                                    src={assets.reliance_digital_icon} 
                                    alt="Flipkart Icon" 
                                    className="ml-3 rounded-full h-5 w-5" 
                                    />
                                </span></a>
                                
                                {/* YouTube Review Link */}
                                <a href={parsedData?.links?.youtube} className="text-blue-500 flex text-lg hover:underline" target="_blank" 
                                rel="noopener noreferrer"><span className="flex items-center">
                                    Review @
                                    <img 
                                    src={assets.youtube_icon} 
                                    alt="Flipkart Icon" 
                                    className="ml-3 rounded-full h-5 w-5" 
                                    />
                                </span></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-2 bg-[#1B1212] relative row-span-2 w-[250px]">
                        {/* important info wala section */}
                        <div className="font-bold text-white">
                        {parsedData?.spec && Object.entries(parsedData.spec).map(([key, value]) => (
                            <p className="text-base" key={key}>
                                <strong className='text-[#f55232]'>{key}:</strong> {value.toString()}
                            </p>
                        ))}
                        </div>
    
                        {/* CPU Details */}
                        {parsedData && (
                            <div className="mt-1 flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[0]} />                           
                            ))}
                            </div>
                        )}
    
                        {/* Micro SD Card Slot */}
                        {parsedData && (
                            <div className="mt-1 flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[18]} />                           
                            ))}
                            </div>
                        )}                                      
                    </div>
    
                    <div className="p-2 bg-[#1B1212] relative row-span-2 w-[200px]"> 
                        {/* GPU Details */}
                        {parsedData && (
                            <div className="mt-1 flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[1]} />                               
                            ))}
                            </div>
                        )}
    
                        {/* RAM Details */}
                        {parsedData && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[2]}/>                                
                            ))}
                            </div>
                        )}
    
                        {/* Storage */}
                        {parsedData && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[3]}/>                                
                            ))}
                            </div>
                        )}
    
                        {/* HDMI*/}
                        {parsedData && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[10]} />                                
                            ))}
                            </div>
                        )}
    
                        {/* Ethernet */}
                        {parsedData && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[11]} />                               
                            ))}
                            </div>
                        )}
    
                        {/* Camera Shutter Button*/}
                        {parsedData && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[13]} />                          
                            ))}
                            </div>
                        )}
                    </div>
    
                    <div className="p-2 bg-[#1B1212] relative row-span-2 w-[200px]">
                        {/* Audio Jack */}
                        {parsedData && (
                            <div className="mt-1 flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[12]} />                           
                            ))}
                            </div>
                        )}
    
                        {/* Display */}
                        {parsedData && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[6]} />                                
                            ))}
                            </div>
                        )}
    
                        {/* Dolby */}
                        {parsedData && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[14]} />                           
                            ))}
                            </div>
                        )}
    
                        {/* Games */}
                        {parsedData && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[5]} />                           
                            ))}
                            </div>
                        )}
                    </div>
    
                    <div className="p-2 bg-[#1B1212] relative row-span-2 w-[200px]">
                        {/* USB Type C */}
                        {parsedData && (
                            <div className="mt-1 flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[8]} />
                                
                            ))}
                            </div>
                        )}
    
                        {/* USB Type A */}
                        {parsedData && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[9]} />
                                
                            ))}
                            </div>
                        )}
                    </div>
    
                    <div className="p-2 bg-[#1B1212] relative row-span-2 w-[200px]">
                        {/* Keyboard */}
                        {parsedData && (
                            <div className="mt-1 flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[7]} />
                                
                            ))}
                            </div>
                        )}
    
                        {/* Benchmarks */}
                        {parsedData && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[4]}/>                                
                            ))}
                            </div>
                        )}
                    </div>
    
                    <div className="p-2 bg-[#1B1212] relative row-span-2 w-[200px]">
                        {/* Used For */}
                        {parsedData && (
                            <div className="mt-1 flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[16]} />                                
                            ))}
                            </div>
                        )}
    
                        {/* Rest Spec */}
                        {parsedData && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedData.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr[17]} />                           
                            ))}
                            </div>
                        )}
                    </div>               
                    </div>
                )}


                {selected_Mobile_for_modal && (
                    <div className="grid grid-cols-[250px_250px_200px_200px_200px_200px] gap-1 p-0 w-full h-full">
                    {/* (1,1) - Image Cell */}
                    <div className=" p-2  relative row-span-2 w-[250px] flex flex-col">
                        {/* Image Section */}
                        <div className="h-[30vh]">
                            <ModalImage />
                        </div>
    
                        {/* Links Section */}
                        <div className="relative p-2 mt-5 flex-1 flex flex-col justify-center">
                            <div className="flex flex-col items-start justify-start space-y-3 h-full">
    
                                {/* Title and Bookmark in Flex */}
                                <div className='flex items-center justify-between w-full'>
                                    <h2 className="text-lg font-bold">
                                        {parsedDataMobile.name}
                                    </h2>
    
                                    {/* Bookmark Icon aligned with Title */}
                                    <div className='relative ml-3'>
                                        {!wishlistItems[selected_Mobile_for_modal._id]
                                            ? <img className='bookmarkno h-6 cursor-pointer' onClick={(e) => {
                                                e.stopPropagation(); // Prevent modal from opening
                                                markItem(selected_Mobile_for_modal._id);
                                            }} src={assets.bookreg} alt="Save" />
                                            : <img className='bookmarkyes h-6 cursor-pointer' onClick={(e) => {
                                                e.stopPropagation(); // Prevent modal from opening
                                                unmarkItem(selected_Mobile_for_modal._id);
                                            }} src={assets.booksolid} alt="Saved" />
                                        }
                                    </div>
                                </div>
                                
                                {/* Flipkart Link */}
                                <a href={selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.flipkart?.link || "https://www.flipkart.com"} className="text-blue-500 flex text-lg hover:underline" target="_blank" 
                                rel="noopener noreferrer"><span className="flex items-center">
                                    {selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.flipkart?.price || "Not Available"}
                                    <img 
                                    src={assets.flipkart_icon} 
                                    alt="Flipkart Icon" 
                                    className="ml-3 rounded-full h-5 w-5" 
                                    />
                                </span></a>
    
                                {/* Amazon Link */}
                                <a href={selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.amazon?.link || "https://www.amazon.com"} className="text-blue-500 flex text-lg hover:underline" target="_blank" 
                                rel="noopener noreferrer"><span className="flex items-center">
                                    {selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.amazon?.price || "Not Available"}
                                    <img 
                                    src={assets.amazon_icon} 
                                    alt="Flipkart Icon" 
                                    className="ml-3 rounded-full h-5 w-5" 
                                    />
                                </span></a>
    
                                {/* Croma Link */}
                                <a href={selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.croma?.link || "https://www.croma.com"} className="text-blue-500 flex text-lg hover:underline" target="_blank" 
                                rel="noopener noreferrer"><span className="flex items-center">
                                    {selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.croma?.price || "Not Available"}
                                    <img 
                                    src={assets.croma_icon} 
                                    alt="Flipkart Icon"
                                    className="ml-3 rounded-full h-5 w-5" 
                                    />
                                </span></a>
    
                                {/* Reliance Link */}
                                <a href={selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.reliancedigital?.link || "https://www.reliancedigital.com"} className="text-blue-500 flex text-lg hover:underline" target="_blank" 
                                rel="noopener noreferrer"><span className="flex items-center">
                                    {selected_Product_for_which_price_is_rendered_in_modal?.deal_body?.reliancedigital?.price || "Not Available"}
                                    <img 
                                    src={assets.reliance_digital_icon} 
                                    alt="Flipkart Icon" 
                                    className="ml-3 rounded-full h-5 w-5" 
                                    />
                                </span></a>
                                
                                {/* YouTube Review Link */}
                                <a href={parsedDataMobile?.links?.youtube} className="text-blue-500 flex text-lg hover:underline" target="_blank" 
                                rel="noopener noreferrer"><span className="flex items-center">
                                    Review @
                                    <img 
                                    src={assets.youtube_icon} 
                                    alt="Flipkart Icon" 
                                    className="ml-3 rounded-full h-5 w-5" 
                                    />
                                </span></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-2 bg-[#1B1212] relative row-span-2 w-[250px]">
                        {/* important info wala section */}
                        <div className="font-bold text-white">
                        {parsedDataMobile?.spec && Object.entries(parsedDataMobile.spec).map(([key, value]) => (
                            <p className="text-base" key={key}>
                                <strong className='text-[#f55232]'>{key}:</strong> {value.toString()}
                            </p>
                        ))}
                        </div>
    
                        {/* SIM Details */}
                        {parsedDataMobile && (
                            <div className="mt-2 flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[0]} />                           
                            ))}
                            </div>
                        )}
                        
                        {/* Dolby */}
                        {parsedDataMobile && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[12]} />                           
                            ))}
                            </div>
                        )}                                   
                    </div>
    
                    <div className="p-2 bg-[#1B1212] relative row-span-2 w-[200px]"> 
                        {/* GPU Details */}
                        {parsedDataMobile && (
                            <div className="mt-1 flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[2]} />                               
                            ))}
                            </div>
                        )}
    
                        {/* Sound Enhancements */}
                        {parsedDataMobile && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[3]}/>                              
                            ))}
                            </div>
                        )}
    
                        {/* Display */}
                        {parsedDataMobile && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[4]}/>                                
                            ))}
                            </div>
                        )}
    
                        {/* OS & Processor */}
                        {parsedDataMobile && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[5]} />                                
                            ))}
                            </div>
                        )}   
                    </div>
    
                    <div className="p-2 bg-[#1B1212] relative row-span-2 w-[200px]">
                        {/* Storage */}
                        {parsedDataMobile && (
                            <div className="mt-1 flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[6]} />                               
                            ))}
                            </div>
                        )}
    
                        {/* Rear Camera  */}
                        {parsedDataMobile && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[7]} />                          
                            ))}
                            </div>
                        )}


                    </div>

                    <div className="p-2 bg-[#1B1212] relative row-span-2 w-[200px]">
                        {/* Front Camera  */}
                        {parsedDataMobile && (
                            <div className="mt-1 flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[8]} />                          
                            ))}
                            </div>
                        )}
                        {/* Connectivty */}
                        {parsedDataMobile && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[9]} />                           
                            ))}
                            </div>
                        )}
                    </div>

                    <div className="p-2 bg-[#1B1212] relative row-span-2 w-[200px]">
                        {/* Sensors */}
                        {parsedDataMobile && (
                            <div className="mt-1 flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[10]} />                               
                            ))}
                            </div>
                        )}
    
                        {/* Other Features */}
                        {parsedDataMobile && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[11]} />                           
                            ))}
                            </div>
                        )}

                        {/* Dimensions */}
                        {parsedDataMobile && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[13]} />                           
                            ))}
                            </div>
                        )}

                        {/* OTG Details */}
                        {parsedDataMobile && (
                            <div className="mt-[9px] flex space-x-4">
                            {parsedDataMobile.features.map((feature, index) => (
                                <Accordion key={index} data={[feature]} type={arr1[1]} />                           
                            ))}
                            </div>
                        )}                         
                    </div>
                    </div>
                )}
                
            </div>
        </div>
        
    </div>
  )
}

export default Modal