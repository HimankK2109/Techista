import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [wishlistItems, setWishlistItems] = useState({});
    const [showModal, setShowModal] = useState(false);   
    const [token, setToken] = useState("");
    const [product_priceinfo, setProductPriceInfo] = useState([]) // product_priceinfo
    const url = "https://techista-backend.onrender.com"

    // ***********************************************FOR LAPTOP*********************************************************************************
    const [selectedLaptopCompare, setSelectedLaptopCompare] = useState([]);
    const [selectedLaptopId, setSelectedLaptopId] = useState();  //has serial number now
    
    // laptop_card
    const [laptop_card, setLaptopCard] = useState([])
    
    // laptop_modal
    const [laptop_modal, setLaptopModal] = useState([])
    
    // laptop_showdown
    const [laptop_showdown, setLaptopShowdown] = useState([])
    
    const updateLaptopCardPrice =  () => {
        // console.log("UPDATED LAPTOP CARD MAIN HAI", product_priceinfo);
        // console.log("UPDATED LAPTOP CARD", laptop_card)
        
        const updatedLaptopCards = laptop_card.map((item) => {
            // Find the corresponding product price info using the serial number
            const productInfo = product_priceinfo.find((product) => Number(product.serialNumber) === Number(item.serialNumber));
            
            if (productInfo) {
                // If product info is found, check for flipkart and amazon prices
                const dealBody = productInfo.deal_body;
    
                // If Flipkart price exists, take it; otherwise, take the Amazon price
                let price = dealBody.flipkart?.price || dealBody.amazon?.price;
    
                // If a price is found, update the item price
                if (price) {
                    return { ...item, price:price }; // Update item's price with the chosen price
                }
            }
            
            // Return the item unchanged if no price info is found
            return item;
        });

        setLaptopCard(updatedLaptopCards);
    }

    const fetchLaptopList = async () => {
        const response = await axios.get(url+"/api/laptop/list")
        // when we hit this API we get all laptop items
        setLaptopCard(response.data.data)
    }
 
    // saara laptop modal ka data isme load ho jata h shuru m hi
    const fetchLaptopModalList = async () => {
        const response = await axios.get(url+"/api/laptop/listlaptopmodal")
        // console.log("Laptop Modal Data:", response.data.data);
        // when we hit this API we get all laptop modals
        setLaptopModal(response.data.data)
    }

    // saara laptop showdown ka data isme load ho jata h shuru m hi
    const fetchLaptopShowdownList = async () => {
        const response = await axios.get(url+"/api/laptop/listlaptopshowdown")
        // console.log("Laptop Showdown Data:", response.data.data);
        // when we hit this API we get all laptop showdown
        setLaptopShowdown(response.data.data)
    }

    // This has laptop data for which modal is shown
    const selected_Laptop_for_modal = laptop_modal.find(
        (laptop) => laptop.serialNumber === selectedLaptopId
    );

    // when we click on a card of laptop this runs and store id of that laptop in selectedLaptopId
    const selectLaptop = (serialNumber) => {
        // console.log("selectlaptopfunctionworked");
        setSelectedLaptopId(serialNumber);
        setShowModal(true);
    };

    // By this function we select a laptop for comparison
    const selectLaptopCompare = (serialNumber) => {
        // console.log('selectLaptopCompare function worked');
        
        // Check if the laptop is already selected for comparison
        if (selectedLaptopCompare.some(laptop => laptop.serialNumber === serialNumber)) {
            // console.log('This laptop is already selected for comparison');
            return;
        }

        // Check if the array already has 3 items
        if (selectedLaptopCompare.length >= 3) {
            // console.log('Already 3 laptops selected for comparison');
            toast.error('Already 3 laptops selected for comparison');
            return;
        }
              
        // Find the laptop with matching itemId
        const selectedLaptop = laptop_showdown.find(laptop => laptop.serialNumber === serialNumber);
        if (selectedLaptop) {
            // Add the selected laptop to the state array
            setSelectedLaptopCompare(prevState => [...prevState, selectedLaptop]);
            // console.log('Laptop added to comparison:', selectedLaptop);
        }
    };

    // Function to remove a laptop from the comparison list
    const deselectLaptopCompare = (serialNumber) => {
        // console.log('deselectLaptopCompare function worked');

        // Check if the laptop is already selected for comparison ki y h bhi comparison list m pta lga h hi nhi aur htane chl diye
        if (!selectedLaptopCompare.some(laptop => laptop.serialNumber === serialNumber)) {
            // console.log('This laptop is not in the comparison list');
            return;
        }

        // Remove the laptop from the comparison list
        setSelectedLaptopCompare(prevState => 
            prevState.filter(laptop => laptop.serialNumber !== serialNumber)
        );
        // console.log('Laptop removed from comparison:', serialNumber);
    };




    
    // ***********************************************FOR MOBILE*********************************************************************************
    const [selectedMobileCompare, setSelectedMobileCompare] = useState([]);
    const [selectedMobileId, setSelectedMobileId] = useState();  //has serial number now
    
    // mobile_card
    const [mobile_card, setMobileCard] = useState([])
    
    // mobile_modal
    const [mobile_modal, setMobileModal] = useState([])
    
    // mobile_showdown
    const [mobile_showdown, setMobileShowdown] = useState([])
    
    const updateMobileCardPrice =  () => {
        // console.log("UPDATED MOBILE CARD MAIN HAI", product_priceinfo);
        // console.log("UPDATED MOBILE CARD", mobile_card)
        
        const updatedMobileCards = mobile_card.map((item) => {
            // Find the corresponding product price info using the serial number
            const productInfo = product_priceinfo.find((product) => Number(product.serialNumber) === Number(item.serialNumber));
            
            if (productInfo) {
                // If product info is found, check for flipkart and amazon prices
                const dealBody = productInfo.deal_body;
    
                // If Flipkart price exists, take it; otherwise, take the Amazon price
                let price = dealBody.flipkart?.price || dealBody.amazon?.price;
    
                // If a price is found, update the item price
                if (price) {
                    return { ...item, price:price }; // Update item's price with the chosen price
                }
            }
            
            // Return the item unchanged if no price info is found
            return item;
        });
    
        setMobileCard(updatedMobileCards);
    }

    const fetchMobileList = async () => {
        const response = await axios.get(url+"/api/mobile/listmobile")
        // when we hit this API we get all laptop items
        setMobileCard(response.data.data)
    }

    // saara mobile modal ka data isme load ho jata h shuru m hi
    const fetchMobileModalList = async () => {
        const response = await axios.get(url+"/api/mobile/listmobilemodal")
        // console.log("Mobile Modal Data:", response.data.data);
        // when we hit this API we get all laptop modals
        setMobileModal(response.data.data)
    }

    // saara laptop showdown ka data isme load ho jata h shuru m hi
    const fetchMobileShowdownList = async () => {
        const response = await axios.get(url+"/api/mobile/listmobileshowdown")
        // console.log("Laptop Showdown Data:", response.data.data);
        // when we hit this API we get all laptop showdown
        setMobileShowdown(response.data.data)
    }

    // This has mobile data for which modal is shown
    const selected_Mobile_for_modal = mobile_modal.find(
        (mobile) => mobile.serialNumber === selectedMobileId
    );

    // when we click on a card of mobile this runs and store id of that mobile in selectedMobileId
    const selectMobile = (itemId) => {
        // console.log("selectmobilefunctionworked");
        setSelectedMobileId(itemId);
        setShowModal(true);
    };

    // By this function we select a mobile for comparison
    const selectMobileCompare = (serialNumber) => {
        // console.log('selectMobileCompare function worked');
        
        // Check if the mobile is already selected for comparison
        if (selectedMobileCompare.some(mobile => mobile.serialNumber === serialNumber)) {
            // console.log('This mobile is already selected for comparison');
            return;
        }

        // Check if the array already has 3 items
        if (selectedMobileCompare.length >= 3) {
            // console.log('Already 3 mobiles selected for comparison');
            toast.error('Already 3 mobiles selected for comparison');
            return;
        }
              
        // Find the laptop with matching itemId
        const selectedMobile = mobile_showdown.find(mobile => mobile.serialNumber === serialNumber);
        if (selectedMobile) {
            // Add the selected laptop to the state array
            setSelectedMobileCompare(prevState => [...prevState, selectedMobile]);
            // console.log('Mobile added to comparison:', selectedMobile);
        }
    };

    // Function to remove a mobile from the comparison list
    const deselectMobileCompare = (serialNumber) => {
        // console.log('deselectMobileCompare function worked');

        // Check if the mobile is already selected for comparison
        if (!selectedMobileCompare.some(mobile => mobile.serialNumber === serialNumber)) {
            // console.log('This mobile is not in the comparison list');
            return;
        }

        // Remove the laptop from the comparison list
        setSelectedMobileCompare(prevState => 
            prevState.filter(mobile => mobile.serialNumber !== serialNumber)
        );
        // console.log('Mobile removed from comparison:', serialNumber);
    };





    // ***********************************************GENERAL****************************************************************************************
    const [openAccordions, setOpenAccordions] = useState({});

    // Load saved comparison lists from localStorage when the component mounts
    useEffect(() => {
        const savedLaptopCompare = JSON.parse(localStorage.getItem("selectedLaptopCompare") || "[]");
        const savedMobileCompare = JSON.parse(localStorage.getItem("selectedMobileCompare") || "[]");
        setSelectedLaptopCompare(savedLaptopCompare);
        setSelectedMobileCompare(savedMobileCompare);
    }, []);

    useEffect(() => {
        localStorage.setItem("selectedLaptopCompare", JSON.stringify(selectedLaptopCompare));
        localStorage.setItem("selectedMobileCompare", JSON.stringify(selectedMobileCompare));
    }, [selectedLaptopCompare,selectedMobileCompare]);

    // Function for wishlisting an item
    const markItem = async (serialNumber) => {
        if(!wishlistItems[serialNumber]){
            setWishlistItems((prev) => ({...prev,[serialNumber]:true}))
        }
        if(token){ //mtlb logged in h ham
            await axios.post(url+"/api/wishlist/add",{serialNumber},{headers:{token}})
        }
    }
   
    // Function for Unwishlisting an item
    const unmarkItem = async (serialNumber) => {
        setWishlistItems((prev) => {
            const updatedItems = {...prev}; // Create a copy of the previous state
            delete updatedItems[serialNumber]; // Remove the key corresponding to serialNumber
            return updatedItems; // Return the updated object without the deleted key
        });
        if(token){
            await axios.post(url+"/api/wishlist/remove",{serialNumber},{headers:{token}})
        }
    };

    useEffect(() => {
        updateMobileCardPrice();
        updateLaptopCardPrice();
        // console.log("Mobile Card ka price change kr diya h", mobile_card);
        // console.log("Laptop Card ka price change kr diya h", laptop_card);
    },[product_priceinfo])

    // saara price ka data isme load ho jata h shuru m hi
    const fetchPriceInfoList = async () => {
        const response = await axios.get(url+"/api/prices")
        // console.log("Price Data:", response.data.data);
        // when we hit this API we get all price info
        setProductPriceInfo(response.data.data)
    }
    
    const loadWishlistData = async (token) => {
        const response = await axios.post(url+"/api/wishlist/get",{},{headers:{token}})
        setWishlistItems(response.data.wishlistData)
    }

    // Reset function to clear selections
    // when we click outside modal or on close button then no product is selected for showing in modal
    const resetSelections = () => {
        setSelectedLaptopId(undefined);
        setSelectedMobileId(undefined);
    };

    // ye imp useEffect h
    useEffect(() => {
        async function loadData() {
            await fetchLaptopList();
            await fetchLaptopModalList();
            await fetchLaptopShowdownList();
            await fetchMobileList();
            await fetchMobileModalList();
            await fetchMobileShowdownList();
            await fetchPriceInfoList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadWishlistData(localStorage.getItem("token"))
            }
        }
        loadData(); 
    },[])

    // This has data for which modal is shown
    const selected_Product_for_which_price_is_rendered_in_modal = product_priceinfo.find((product) => {
        // First, check if laptopID exists and use it; if not, use mobileID
        const idToCheck = selectedLaptopId || selectedMobileId; // Will use selectedLaptopId if it exists, otherwise selectedMobileId
        
        // Compare either laptopID or mobileID to the serialNumber, both converted to numbers for consistency
        return Number(product.serialNumber) === Number(idToCheck);
    });

    // For Accordion
    const toggleAccordion = (title) => {
        // Toggle the accordion state based on the title
        setOpenAccordions((prev) => ({
            ...prev,
            [title]: !prev[title], // Toggle the clicked feature's state
        }));
    };
    
    useEffect(() => {
        if(localStorage.getItem("token")){
             setToken(localStorage.getItem("token"))
        }
    },[])

    // For Testing
    // useEffect(() => {
    //     console.log("Selected Laptop ID: ", selectedLaptopId);
    //     console.log("Available Laptops: ", laptop_modal);
    //     console.log("Selected Product for Price: ", selected_Product_for_which_price_is_rendered_in_modal);
    //     product_priceinfo.forEach(product => {
    //         console.log("Product Serial Number:", product.serialNumber);
    //     });
    //     if (selectedLaptopId) {
    //       console.log("Selected Laptop Object: ", selected_Laptop_for_modal);
    //     }
    //     console.log("Selected Mobile ID: ", selectedMobileId);
    //     console.log("Available Mobiles: ", mobile_modal);
    //     if (selectedMobileId) {
    //       console.log("Selected Mobile Object: ", selected_Mobile_for_modal);
    //       console.log("Laptop selection k kya hal chal", selected_Laptop_for_modal)
    //     }
    // }, [selectedLaptopId,selectedMobileId]); // This useEffect will run when selectedLaptopId changes

    // Monitor changes to selectedLaptopCompare FOR TESTING
    // useEffect(() => {
    //     // console.log('Updated Comparison Laptops:', selectedLaptopCompare);
    // }, [selectedLaptopCompare]);

    // Monitor changes to selectedMobileCompare FOR TESTING
    // useEffect(() => {
    //     // console.log('Updated Comparison Mobiles:', selectedMobileCompare);
    // }, [selectedMobileCompare]);

    // we did this for testing
    // useEffect(() => {
    //     console.log(wishlistItems);
    // },[wishlistItems])

    const contextValue = {
        url,
        token,
        setToken,
        wishlistItems,
        setWishlistItems,
        markItem,
        unmarkItem,
        showModal,
        setShowModal,
        openAccordions,
        toggleAccordion,
        resetSelections,


        laptop_card,
        laptop_modal,
        selectedLaptopId,
        setSelectedLaptopId,
        selectLaptop,
        selected_Laptop_for_modal,
        selectLaptopCompare,
        selectedLaptopCompare,
        deselectLaptopCompare,


        mobile_card,
        mobile_modal,
        selectedMobileId,
        setSelectedMobileId,
        selectMobile,
        selected_Mobile_for_modal,
        selectMobileCompare,
        selectedMobileCompare,
        deselectMobileCompare,

        selected_Product_for_which_price_is_rendered_in_modal,
        product_priceinfo
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
