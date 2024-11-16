# Use a base image with the browser (Chromium, for example)
ARG PORT=443
FROM selenium/standalone-chrome:latest

# Update package lists and install sudo and other dependencies
RUN apt-get update && apt-get install -y \
    sudo \
    python3 \
    python3-pip \
    wget \
    gnupg \
    curl \
    unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Google Chrome (Stable version)
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && apt-get install -y google-chrome-stable

# Install Chromedriver
RUN wget -O /usr/bin/chromedriver.zip https://chromedriver.storage.googleapis.com/$(curl -s https://chromedriver.storage.googleapis.com/LATEST_RELEASE)/chromedriver_linux64.zip && \
    unzip /usr/bin/chromedriver.zip -d /usr/bin && \
    chmod +x /usr/bin/chromedriver && \
    rm /usr/bin/chromedriver.zip

# Set up environment variable for PATH (to locate Chrome and Chromedriver)
ENV PATH="/home/root/.local/bin:/usr/bin/chromedriver:${PATH}"

# Copy the requirements.txt file and install Python dependencies
COPY requirements.txt ./
RUN python3 -m pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application files
COPY . ./

# Expose port (optional, useful if it's a web service)
EXPOSE 8000

# Set the command to run your main script
CMD ["python3", "scraper/main.py"]