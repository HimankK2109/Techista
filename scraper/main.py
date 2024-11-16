import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options 
from urllib.parse import urlparse
from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

#Access the MongoDB URI from the environment
mongodb_uri = os.getenv("MONGODB_URI")

# MongoDB connection
client = MongoClient(mongodb_uri)
db = client['Techista']
collection = db['products']

# List of URLs and corresponding product details
products = [
    {"url": "https://producthistory.in/product/flipkart-lenovo-legion-pro-5-intel-core-i9-14th-gen-14900hx-32-gb-1-tb-ssd-windows-11-home-8-gb-graphics-nvidia-geforce-rtx-4070-16irx9-gaming-laptop-1k4gf", "name": "Lenovo Legion Pro 5 Intel Core i9 14th Gen 14900HX", "serialNumber": 10001},

    {"url": "https://producthistory.in/product/amazon-acer-predator-helios-neo-16-gaming-laptop-13th-gen-intel-core-i7-processor-16-gb-1-tb-ssd-windows-11-home-nvidia-r-geforce-rtx-c-4060-phn16-71-7uwd1", "name": "Acer Predator Helios Neo 16", "serialNumber": 10002},

    {"url": "https://producthistory.in/product/flipkart-acer-aspire-7-intel-core-i5-13th-gen-13420h-16-gb-512-gb-ssd-windows-11-home-6-gb-graphics-nvidia-g-8g734", "name": "Acer Aspire 7 Intel Core i5 13th Gen 13420H", "serialNumber": 10003},

    {"url": "https://producthistory.in/product/flipkart-msi-cyborg-15-intel-core-i5-12th-gen-12450h-16-gb-512-gb-ssd-windows-11-home-6-gb-graphics-nvidia-geforce-rtx-3050-144-hz-cyborg-15-a12udx-1049in-cxugz", "name": "MSI Cyborg 15 Intel Core i5 12th Gen 12450H", "serialNumber": 10004},

    {"url": "https://producthistory.in/product/amazon-lenovo-legion-7-intel-core-i7-14700hx-16-40-64cm-3-2k-ips-430nits-165hz-gaming-laptop-32gb-1tb-ssd-win-11-office-2021-nvidia-rtx-4070-8gb-100-dci-xv6ng", "name": "Lenovo Legion 7 Intel Core i7-14700HX", "serialNumber": 10005},

    {"url": "https://producthistory.in/product/amazon-msi-crosshair-16-hx-intel-14th-gen-i7-14700hx-41cm-qhd-240hz-gaming-laptop-16gb-1tb-nvme-ssd-windows-11-home-nvidia-geforce-rtx-4060-gddr6-8gb-c-v2cql", "name": "MSI Crosshair 16 HX, Intel 14th Gen. i7-14700HX", "serialNumber": 10006},

    {"url": "https://producthistory.in/product/flipkart-infinix-gt-book-intel-core-i9-13th-gen-13900h-32-gb-1-tb-ssd-windows-11-home-8-gb-graphics-nvidia-g-zy88i", "name": "Infinix GT Book Intel Core i9 13th Gen 13900H", "serialNumber": 10007},

    {"url": "https://producthistory.in/product/amazon-samsung-galaxy-book4-gray-16gb-ram-512gb-ssd-15-6-full-hd-screen-intel-core-i7-1355u-processor-windows-11-home-ms-office-2021-fingerpri-atb95", "name": "Samsung Galaxy Book4 (Gray, 16GB RAM, 512GB SSD)", "serialNumber": 10008},

    {"url": "https://producthistory.in/product/flipkart-msi-sword-16-hx-intel-core-i7-14th-gen-14700hx-16-gb-1-tb-ssd-windows-11-home-8-gb-graphics-nvidia-xdm8q", "name": "MSI Sword 16 HX Intel Core i7 14th Gen 14700HX", "serialNumber": 10009},
    
    {"url": "https://producthistory.in/product/flipkart-infinix-x-air-pro-intel-core-i5-13th-gen-1334u-16-gb-512-gb-ssd-windows-11-home-xl434-thin-and-li-zkjny", "name": "Infinix X Air Pro+ Intel Core i5 13th Gen 1334U", "serialNumber": 10010},

    {"url": "https://producthistory.in/product/flipkart-colorful-xs-series-intel-core-i5-12th-gen-12500h-16-gb-512-gb-ssd-windows-11-home-4-gb-graphics-nvi-u29by", "name": "Colorful XS Series Intel Core i5 12th Gen 12500H", "serialNumber": 10011},

    {"url": "https://producthistory.in/product/amazon-lenovo-loq-2024-amd-ryzen-7-8845hs-15-6-39-6cm-144hz-300nits-fhd-ips-gaming-laptop-16gb-1tb-ssd-nvidia-rtx-4060-8gb-graphics-100-srgb-win-11-off-3xmir", "name": "Lenovo LOQ 2024 AMD Ryzen 7 8845HS 15.6", "serialNumber": 10012},

    {"url": "https://producthistory.in/product/amazon-asus-tuf-gaming-f15-15-6-39-62cm-fhd-144hz-13th-gen-intel-core-i7-13620h-gaming-laptop-16gb-ddr5-512gb-ssd-nvidia-gefo-uwhjt", "name": "ASUS TUF Gaming F15", "serialNumber": 10013},

    {"url": "https://producthistory.in/product/amazon-apple-2022-macbook-air-laptop-with-m2-chip-34-46-cm-13-6-inch-liquid-retina-display-8gb-ram-256gb-ssd-storage-backlit-keyboard-1080p-facetime-h-qimfz", "name": "2022 Apple MacBook Air Laptop with M2 chip", "serialNumber": 10014},

    {"url": "https://producthistory.in/product/amazon-hp-omen-gaming-laptop-intel-core-i7-14700hx-14th-gen-8gb-rtx-4060-gpu-140w-16-1-inch-40-9-cm-fhd-ips-165hz-300-nits-16gb-ddr5-1tb-ssd-rgb-b-6j942", "name": "HP OMEN Gaming Laptop, Intel Core i7-14700HX", "serialNumber": 10015},

    {"url": "https://producthistory.in/product/amazon-lenovo-thinkpad-e14-intel-core-i7-13th-gen-14-wuxga-ips-300-nits-thin-and-light-laptop-16gb-ram-1tb-ssd-windows-11-home-backlit-keyboard-fpr-black-1-8pc00", "name": "Lenovo ThinkPad E14 Intel Core i7", "serialNumber": 10016},

    {"url": "https://producthistory.in/product/flipkart-lenovo-loq-intel-core-i7-14th-gen-14700hx-16-gb-1-tb-ssd-windows-11-home-8-gb-graphics-nvidia-gefor-etm2m", "name": "Lenovo LOQ Intel Core i7 14th Gen 14700HX", "serialNumber": 10017},

    {"url": "https://producthistory.in/product/amazon-apple-iphone-16-128-gb-ultramarine-axx3m", "name": "Apple iPhone 16 (128 GB)", "serialNumber": 20001},
    {"url": "https://producthistory.in/product/flipkart-google-pixel-8a-bay-128-gb-211sz", "name": "Google Pixel 8a (Bay, 128 GB)", "serialNumber": 20002},

    {"url": "https://producthistory.in/product/flipkart-samsung-galaxy-s24-ultra-5g-titanium-gray-256-gb-l9i7g", "name": "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)", "serialNumber": 20003},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-16-pro-max-black-titanium-256-gb-1g36v", "name": "Apple iPhone 16 Pro Max (Black Titanium, 256 GB)", "serialNumber": 20004},

    {"url": "https://producthistory.in/product/flipkart-nothing-phone-2a-5g-white-128-gb-ftmbz", "name": "Nothing Phone (2a) 5G (White, 128 GB)", "serialNumber": 20005},

    {"url": "https://producthistory.in/product/flipkart-samsung-galaxy-a14-5g-black-64-gb-wm7ug", "name": "SAMSUNG Galaxy A14 5G (Black, 64 GB)", "serialNumber": 20006},

    {"url": "https://producthistory.in/product/flipkart-samsung-galaxy-m35-5g-moonlight-blue-128-gb-fih35", "name": "SAMSUNG Galaxy M35 5G (Moonlight Blue, 128 GB)", "serialNumber": 20007},

    {"url": "https://producthistory.in/product/flipkart-samsung-galaxy-s23-fe-mint-128-gb-0izup", "name": "SAMSUNG Galaxy S23 FE (Mint, 128 GB)", "serialNumber": 20008},

    {"url": "https://producthistory.in/product/flipkart-samsung-galaxy-s23-5g-phantom-black-128-gb-k7sro", "name": "SAMSUNG Galaxy S23 5G (Phantom Black, 128 GB)", "serialNumber": 20009},

    {"url": "https://producthistory.in/product/flipkart-samsung-galaxy-f15-5g-groovy-violet-128-gb-5wbfk", "name": "SAMSUNG Galaxy F15 5G (Groovy Violet, 128 GB)", "serialNumber": 20010},

    {"url": "https://producthistory.in/product/flipkart-samsung-galaxy-a35-5g-awesome-iceblue-128-gb-dml15", "name": "SAMSUNG Galaxy A35 5G (Awesome Iceblue, 128 GB)", "serialNumber": 20011},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-16-pro-natural-titanium-128-gb-3kj6x", "name": "Apple iPhone 16 Pro (Natural Titanium, 128 GB)", "serialNumber": 20012},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-16-plus-ultramarine-128-gb-cd2vg", "name": "Apple iPhone 16 Plus (Ultramarine, 128 GB)", "serialNumber": 20013},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-15-pro-max-natural-titanium-256-gb-4y1ki", "name": "Apple iPhone 15 Pro Max (Natural Titanium, 256 GB)", "serialNumber": 20014},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-15-pro-natural-titanium-128-gb-21ll3", "name": "Apple iPhone 15 Pro (Natural Titanium, 128 GB)", "serialNumber": 20015},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-15-plus-blue-128-gb-n9s9z", "name": "Apple iPhone 15 Plus (Blue, 128 GB)", "serialNumber": 20016},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-15-blue-128-gb-yr4fj", "name": "Apple iPhone 15 (Blue, 128 GB)", "serialNumber": 20017},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-14-pro-max-gold-256-gb-qcvfy", "name": "Apple iPhone 14 Pro Max (Gold, 256 GB)", "serialNumber": 20018},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-14-pro-space-black-128-gb-hs2pa", "name": "Apple iPhone 14 Pro (Space Black, 128 GB)", "serialNumber": 20019},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-14-plus-midnight-128-gb-3rpac", "name": "Apple iPhone 14 Plus (Midnight, 128 GB)", "serialNumber": 20020},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-14-midnight-128-gb-qb5ox", "name": "Apple iPhone 14 (Midnight, 128 GB)", "serialNumber": 20021},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-13-pro-max-silver-128-gb-lsspo", "name": "Apple iPhone 13 Pro Max (Silver, 128 GB)", "serialNumber": 20022},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-13-pro-silver-128-gb-5bqjt", "name": "Apple iPhone 13 Pro (Silver, 128 GB)", "serialNumber": 20023},

    {"url": "https://producthistory.in/product/flipkart-apple-iphone-13-midnight-128-gb-e41s4", "name": "Apple iPhone 13 (Midnight, 128 GB)", "serialNumber": 20024},
    
    {"url": "https://producthistory.in/product/flipkart-apple-iphone-13-mini-green-128-gb-5uo30", "name": "Apple iPhone 13 mini (Green, 128 GB)", "serialNumber": 20025},

    {"url": "https://producthistory.in/product/flipkart-google-pixel-9-pro-xl-obsidian-256-gb-v4dgc", "name": "Google Pixel 9 Pro XL (Obsidian, 256 GB)", "serialNumber": 20026},

    {"url": "https://producthistory.in/product/flipkart-google-pixel-9-porcelain-256-gb-ig8et", "name": "Google Pixel 9 (Porcelain, 256 GB)", "serialNumber": 20027},
    
    {"url": "https://producthistory.in/product/flipkart-google-pixel-9-pro-obsidian-256-gb-rmxro", "name": "Google Pixel 9 Pro (Obsidian, 256 GB)", "serialNumber": 20028},

    {"url": "https://producthistory.in/product/flipkart-google-pixel-7-snow-128-gb-79z03", "name": "Google Pixel 7 (Snow, 128 GB)", "serialNumber": 20029},

    {"url": "https://producthistory.in/product/flipkart-google-pixel-8-hazel-128-gb-smt3e", "name": "Google Pixel 8 (Hazel, 128 GB)", "serialNumber": 20030},

    {"url": "https://producthistory.in/product/flipkart-google-pixel-7a-charcoal-128-gb-3mzdy", "name": "Google Pixel 7a (Charcoal, 128 GB)", "serialNumber": 20031},

    {"url": "https://producthistory.in/product/flipkart-motorola-edge-50-pro-5g-with-68w-charger-luxe-lavender-256-gb-krzg9", "name": "Motorola Edge 50 Pro 5G with 68W Charger (Luxe Lavender, 256 GB)", "serialNumber": 20032},

    {"url": "https://producthistory.in/product/flipkart-motorola-g45-5g-brilliant-green-128-gb-8-gb-ram-6hr40", "name": "Motorola g45 5G (Brilliant Green, 128 GB)", "serialNumber": 20033},

    {"url": "https://producthistory.in/product/flipkart-motorola-edge-50-neo-pantone-grisaille-256-gb-8-gb-ram-8zyfq", "name": "Motorola Edge 50 Neo (PANTONE Grisaille, 256 GB)", "serialNumber": 20034},

    {"url": "https://producthistory.in/product/flipkart-motorola-edge-50-koala-grey-256-gb-ay5tw", "name": "MOTOROLA Edge 50 (Koala Grey, 256 GB)", "serialNumber": 20035},

    {"url": "https://producthistory.in/product/flipkart-motorola-g04s-satin-blue-64-gb-l1vro", "name": "Motorola g04s (Satin Blue, 64 GB)", "serialNumber": 20036},

    {"url": "https://producthistory.in/product/flipkart-motorola-g64-5g-ice-lilac-128-gb-8-gb-ram-e6z3l", "name": "Motorola g64 5G (Ice Lilac, 128 GB)", "serialNumber": 20037},

    {"url": "https://producthistory.in/product/flipkart-oneplus-nord-ce-3-lite-5g-pastel-lime-128-gb-n68ut", "name": "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 128 GB)", "serialNumber": 20038},

    {"url": "https://producthistory.in/product/flipkart-oneplus-nord-ce4-lite-5g-super-silver-128-gb-m5vop", "name": "OnePlus Nord CE4 lite 5G (SUPER SILVER, 128 GB)", "serialNumber": 20039},

    {"url": "https://producthistory.in/product/flipkart-oneplus-12r-cool-blue-128-gb-p62g7", "name": "OnePlus 12R (Cool Blue, 128 GB)", "serialNumber": 20040},

    {"url": "https://producthistory.in/product/flipkart-oneplus-nord-4-5g-oasis-green-128-gb-wlj23", "name": "OnePlus Nord 4 5G (Oasis Green, 128 GB)", "serialNumber": 20041},

    {"url": "https://producthistory.in/product/flipkart-oneplus-nord-3-5g-misty-green-128-gb-k54lu", "name": "OnePlus Nord 3 5G (Misty Green, 128 GB)", "serialNumber": 20042},

    {"url": "https://producthistory.in/product/flipkart-oneplus-nord-ce4-celadon-marble-128-gb-gvf21", "name": "OnePlus Nord CE4 (Celadon Marble, 128 GB)", "serialNumber": 20043},

    {"url": "https://producthistory.in/product/flipkart-redmi-note-13-pro-5g-fusion-purple-256-gb-hs9qu", "name": "REDMI Note 13 Pro+ 5G (Fusion Purple, 256 GB)", "serialNumber": 20044},

    {"url": "https://producthistory.in/product/flipkart-redmi-note-13-pro-5g-arctic-white-128-gb-p9p0i", "name": "REDMI Note 13 Pro 5G (Arctic White, 128 GB) (8 GB RAM)", "serialNumber": 20045},

    {"url": "https://producthistory.in/product/flipkart-redmi-13c-starfrost-white-128-gb-jt6oh", "name": "REDMI 13C (Starfrost White, 128 GB)", "serialNumber": 20046},

    {"url": "https://producthistory.in/product/flipkart-redmi-note-13-5g-arctic-white-128-gb-55pnj", "name": "REDMI Note 13 5G (Arctic White, 128 GB)", "serialNumber": 20047},

    {"url": "https://producthistory.in/product/flipkart-redmi-13-5g-orchid-pink-128-gb-qufq9", "name": "REDMI 13 5G (Orchid Pink, 128 GB)", "serialNumber": 20048},

    {"url": "https://producthistory.in/product/flipkart-redmi-12-pastel-blue-128-gb-2mj40", "name": "REDMI 12 (Pastel Blue, 128 GB)", "serialNumber": 20049},

    {"url": "https://producthistory.in/product/flipkart-iqoo-neo-7-pro-fearless-flame-128-gb-959c0", "name": "IQOO neo 7 pro (Fearless Flame, 128 GB)", "serialNumber": 20070},
]

# Setup Chrome options to run headless
chrome_options = Options()
chrome_options.add_argument('--headless')        # Run in headless mode (no GUI)
chrome_options.add_argument('--no-sandbox')     # Disable sandboxing (for security)
chrome_options.add_argument('--disable-dev-shm-usage')  # To avoid some memory issues
chrome_options.add_argument('--disable-gpu')

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# Max number of requests
max_requests = 100
request_count = 0

for product in products:
    if request_count >= max_requests:
        # print("Reached max requests limit.")
        break

    url = product["url"]
    name = product["name"]
    serialNumber = product["serialNumber"]

    driver.get(url)
    time.sleep(5)  # Wait for the page to load
    
    # Attempt to click the "Load More" button if present
    try:
        driver.execute_script("""
            const popups = document.getElementsByClassName('popup-overlay');
            for (let popup of popups) {
                popup.style.display = 'none';
            }
        """)
        # print("All popup overlays hidden")
    except Exception as e:
        print(f"No popup overlays found or an error occurred: {e}")

    try:
        # Wait until the "Load More" button is clickable, then click it
        load_more_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, "load-more"))
        )
        load_more_button.click()
        # print("Clicked 'Load More' button")
        
        # Wait for additional content to load
        time.sleep(3)

    except Exception as e:
        print(f"No 'Load More' button found or an error occurred: {e}")

    # Initialize data dictionary
    scraped_data = {
        "name": name,
        "serialNumber": serialNumber,
        "deal_body": {}
    }

    # Get main platform and price
    try:
        # Extract the platform name from the image source
        platform_img = driver.find_element(By.CSS_SELECTOR, 'span.marketplace-logo img')
        main_platform = platform_img.get_attribute("src").split("/")[-1].replace("_logo.png", "")
        
        # Extract the price for the main platform
        main_price = driver.find_element(By.CSS_SELECTOR, 'span.product-current-price').text.strip()

        # Check if the product exists in the database
        existing_product = collection.find_one({"serialNumber": serialNumber})
        
        # If the product exists, only update the price for the main platform without overwriting the link
        if existing_product:
            scraped_data["deal_body"] = existing_product.get("deal_body", {})
            existing_main_platform = scraped_data["deal_body"].get(main_platform, {})
            
            # Preserve link if it exists, update only the price
            scraped_data["deal_body"][main_platform] = {
                "price": main_price,
                "link": existing_main_platform.get("link", "")
            }
        else:
            # If product does not exist, add both price and an empty link for the main platform
            scraped_data["deal_body"] = {main_platform: {"price": main_price, "link": ""}}
    except Exception as e:
        print(f"An error occurred while getting the main platform price: {e}")

    # Get deal body prices and platforms in a key-value format
    try:
        # Find all deal body sections
        deal_bodies = driver.find_elements(By.CSS_SELECTOR, 'div.deal-body')
        
        for deal in deal_bodies:
            try:
                # Get deal price
                deal_price = deal.find_element(By.CSS_SELECTOR, 'div.deal-price').text.strip()
                
                # Get deal link and derive platform name from it
                deal_button = deal.find_element(By.CSS_SELECTOR, 'span.deal-button')
                deal_link = deal_button.get_attribute("deal_link")

                # Extract platform from deal link by parsing the domain
                deal_platform = urlparse(deal_link).netloc.split('.')[1]
                
                # Store deal data directly in a key-value format under deal_body
                if deal_platform and deal_price:
                    scraped_data["deal_body"][deal_platform] = {"price": deal_price, "link": deal_link}
            except Exception as e:
                print(f"An error occurred in deal body extraction: {e}")

    except Exception as e:
        print(f"An error occurred while getting deal body prices: {e}")

    # Print the scraped data
    # print(f"Scraped data for {url}: {scraped_data}")

    # Check if the product already exists by serialNumber and update or insert
    existing_product = collection.find_one({"serialNumber": serialNumber})
    if existing_product:
        # If the product exists, update it
        collection.update_one(
            {"serialNumber": serialNumber}, 
            {"$set": scraped_data}
        )
        # print(f"Updated existing product with serialNumber {serialNumber}") 
    else:
        # If the product doesn't exist, insert it
        collection.insert_one(scraped_data)
        # print(f"Inserted new product with serialNumber {serialNumber}")
        
    # Increment request count and wait 20 seconds before the next request
    request_count += 1
    if request_count < max_requests:
        time.sleep(20)

# Close the driver
driver.quit()