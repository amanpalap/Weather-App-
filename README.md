---

# 🌤️ Custom Weather App - Responsive

Welcome to the **Custom Weather App**! This project provides real-time weather updates with a clean, responsive design, ensuring a seamless experience across all devices.

### 🌐 Live Demo

Explore the live version here: [Custom Weather App Live](https://customweatherappresponsive.netlify.app/).

## 🚀 Features

- ⛅ **Current Weather**: Displays the latest weather information for any city.
- 🌍 **Global Coverage**: Supports searching for weather data worldwide.
- 📱 **Responsive Design**: Optimized for various screen sizes, from mobile to desktop.
- 🕒 **Real-Time Updates**: Fetches the most up-to-date weather information.

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### 📋 Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (Node package manager)
- **OpenWeather API Key**: Sign up at [OpenWeather](https://home.openweathermap.org/users/sign_up) to get your API key.

### 🛠️ Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/custom-weather-app.git
   cd custom-weather-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   
   Create a `.env` file in the root directory and add your OpenWeather API key:

   ```bash
   REACT_APP_WEATHER_API_KEY=your_openweather_api_key
   ```

4. **Start the Development Server**:

   ```bash
   npm start
   ```

   The app will be running at `http://localhost:3000`.

### 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

This will generate a `build` folder with the optimized files ready for deployment.

### 🚀 Deploying to Netlify

1. **Log in to Netlify**: [Netlify](https://www.netlify.com/).
2. **Create a New Site** and connect it to your GitHub repository.
3. **Set Build Command**: Use `npm run build`.
4. **Publish Directory**: Set it to `build`.
5. **Deploy**: Follow the prompts to deploy your site.

For more detailed steps, refer to the [Netlify documentation](https://docs.netlify.com/).

## 📁 Project Structure

- **`src/`**: Contains all the source code.
  - **`components/`**: Reusable React components.
  - **`assets/`**: Static assets such as images and CSS.
  - **`App.jsx`**: Main application component.
  - **`index.js`**: Entry point of the application.
- **`public/`**: Public files and assets accessible from the root.

---
