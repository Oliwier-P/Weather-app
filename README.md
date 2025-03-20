# ⛅ Weather App

The Weather App provides real-time weather information based on your location or selected city. Built with React and TypeScript, it shows current weather details like temperature, humidity, wind speed, and more. It also includes hourly and 5-day forecasts.

## 📂 Project Structure

```bash
├── src/                     # Source files
│   ├── assets/              # Assets (weather icons, images, etc.)
│   ├── components/          # React components
│   ├── api.ts               # FetchData function - Handles API calls for weather data
│   ├── App.tsx              # Main App component
│   ├── cities.json          # JSON file with cities for AutoComplete Input
│   └── Types.ts             # Types
│
├── .env                     # Environment variables file - Contains API keys
├── .gitignore.md            # Git ignore rules for the whole project
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation


```

## 🚀 Getting Started

Quick installation guide locally:

**Clone the Repository**:
   ```bash
    npm clone
   ```
  
**Install Dependencies**:
   ```bash
   npm install
   ```

1. **Run the Development Server:**

   ```bash
   npm run dev
   ```

    The app should now be running at http://localhost:3000 by default.
   
2. **Run the Production Server:**
   
   - Build the App for Production:
     
   <br />
   
   ```bash
   npm run build
   ```
   
   - Serve the Production Build:

   <br />
   
   ```bash
    npm run serve
   ```
   
4. **Visit the Deployed App on Vercel:**
   
   You can also visit the live version of the app deployed on Vercel by navigating to:
   
   https://weather-app-six-taupe-58.vercel.app

## ⚙️ Environment Variables

Create `.env` file in **root direcotory**

```bash
VITE_API_KEY=your-openweather-api-key-here
```

## ✨ Features
  - **Real-time Weather:** Temperature, wind, humidity, and conditions
  - **Hourly & 5-Day Forecast:** See upcoming weather
  - **Auto Location:** Detects your current location
  - **City Search:** Search for weather by city
  - **Responsive & User-Friendly**

## 📷 Screenshots

### 🌡️ Celsius Mode

![image](https://github.com/user-attachments/assets/ea2dbc69-f5ff-4170-a3ef-c8c4f3f86cff)

### 🌡️ Fahrenheit Mode

![image](https://github.com/user-attachments/assets/b53b678d-d1a4-4fd3-99a5-cf7236d18406)

### 📱 Responsive Design

![image](https://github.com/user-attachments/assets/9c483020-c460-462b-8b8b-c71fb614b104)

### 🛠️ Tech Stack

- React
- Typescript
- Sass
- OpenWeather API
