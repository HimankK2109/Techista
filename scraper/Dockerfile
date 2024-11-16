# Use a base image with the browser (Chromium, for example)
ARG PORT=443
FROM cypress/browser:latest

# Install Python3 and pip
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    wget \
    gnupg \
    curl \
    unzip \
    && apt-get clean

# Install Google Chrome
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && apt-get install -y google-chrome-stable

# Install Chromedriver
RUN wget -O /usr/bin/chromedriver https://chromedriver.storage.googleapis.com/$(curl -s https://chromedriver.storage.googleapis.com/LATEST_RELEASE)/chromedriver_linux64.zip && \
    unzip /usr/bin/chromedriver -d /usr/bin && \
    chmod +x /usr/bin/chromedriver

# Copy the requirements.txt file
COPY requirements.txt .

# Install Python dependencies
RUN pip install -r requirements.txt

# Copy all files into the container
COPY . .

# Set up environment variable for PATH (to locate Chrome and Chromedriver)
ENV PATH="/home/root/.local/bin:${PATH}"

# Start the script
CMD python scraper/main.py