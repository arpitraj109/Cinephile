# Cinephile

## 🚀 Project Overview

This is a movie browsing application built with **React.js**. The application allows users to explore movies, search for films, and view popular, top-rated, and upcoming movies using The Movie Database (TMDb) API.

## 🌟 Features

- 🔍 **Search Functionality**: Users can dynamically search for movies.
- 📌 **Fixed Navigation Bar**: Provides easy access to different movie categories.
- 🎬 **Movie Listings**: Displays lists of popular, top-rated, and upcoming movies.
- 🖼️ **Movie Details Page**: Shows movie details such as title, rating, and description.
- 🌑 **Dark Mode Support** (if implemented).

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS
- **API**: TMDb API
- **Routing**: React Router

## 📂 Project Structure

```
Cinephile/
│── public/
│── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Search.js
│   │   ├── MovieCard.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── MovieDetails.js
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Search.css
│── .gitignore
│── README.md
│── package.json
│── index.js
```

## 🔧 Installation & Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/cinephile.git
   cd cinephile
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Run the development server**:
   ```sh
   npm start
   ```
4. **Open in browser**:
   ```
   http://localhost:3000
   ```

## 🌍 API Configuration

To fetch movie data, the project uses [TMDb API](https://www.themoviedb.org/documentation/api).

- **Steps to get an API key**:
  1. Sign up on [TMDb](https://www.themoviedb.org/signup).
  2. Create an API key in your account settings.
  3. Replace `YOUR_API_KEY_HERE` in `Search.js` and other API call files.

##

## 🤝 Contributing

Feel free to submit issues and pull requests!

## 📜 License

This project is licensed under the **MIT License**.

