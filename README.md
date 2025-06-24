# QR Alimi - Landing Page (Next.js Conversion)

This project is a responsive, modern landing page for the **QR Alimi** service. QR Alimi is a platform designed to protect personal information for parked vehicle movement requests by using secure QR codes instead of exposing phone numbers.

This application is a complete conversion of the original single-page static HTML file into a structured, component-based, and performance-optimized Next.js application.

## 📸 Screenshot

![screencapture-localhost-3000-2025-06-24-23_52_13](https://github.com/user-attachments/assets/61056615-de81-4187-be72-64122284f8a0)


## ✨ Features

-   **Component-Based Architecture:** The original static HTML has been broken down into reusable React components for better maintainability and scalability.
-   **Fully Responsive Design:** Adapts beautifully to desktop, tablet, and mobile screen sizes.
-   **Interactive Sliders:** Utilizes **Swiper.js** for interactive and autoplaying carousels in the "Community" and "News" sections.
-   **Engaging Animations & Transitions:** CSS animations for hero section elements and smooth hover effects on cards and buttons.
-   **Optimized Images:** Leverages the Next.js `<Image>` component for automatic image optimization, improving load times.
-   **SEO Friendly:** Built with Next.js, providing a strong foundation for Search Engine Optimization.

## 🛠️ Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (v13+ with App Router)
-   **Library:** [React](https://reactjs.org/) (v18)
-   **Styling:** Plain CSS in `globals.css` (The original project's styling)
-   **Carousels/Sliders:** [Swiper.js](https://swiperjs.com/)
-   **Icons:** [Font Awesome](https://fontawesome.com/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18.x or later) and a package manager like `npm` or `yarn` installed on your system.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Saikumar1801/QR-Alert-Main-Page.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd QR-Alert-Main-Page
    ```

3.  **Install dependencies:**
    Using npm:
    ```sh
    npm install
    ```
    Or using yarn:
    ```sh
    yarn install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

5.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📂 Project Structure

The project follows the standard Next.js App Router structure.

```
qr-alimi-app/
├── app/
│   ├── globals.css     # Global styles for the application
│   ├── layout.js       # The root layout (contains <html> and <body>)
│   └── page.js         # The main homepage, where all components are assembled
│
├── components/         # Contains all reusable React components
│   ├── Header.js
│   ├── Hero.js
│   ├── Problem.js
│   ├── Solution.js
│   ├── Performance.js
│   ├── Community.js
│   ├── News.js
│   ├── CTA.js
│   └── Footer.js
│
├── public/
│   └── images/         # Static assets like logos and images
│
└── README.md 
```
