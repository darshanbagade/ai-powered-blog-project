# readme.md

# QuillMind AI Blog

QuillMind AI Blog is an innovative platform that harnesses the power of artificial intelligence to simplify and enhance the process of creating, managing, and publishing blog content. With its intuitive interface and advanced AI capabilities, it empowers content creators to produce high-quality, engaging blog posts efficiently.

## Features

- **AI-Powered Content Generation**: Leverage Google's Generative AI to assist in drafting and refining blog content.
- **Rich Text Editor**: Utilize the Quill editor for seamless writing and formatting.
- **User Authentication**: Secure login and user management with JSON Web Tokens.
- **Image Management**: Upload and manage images using ImageKit integration.
- **Blog Post Management**: Create, edit, and delete blog posts with a user-friendly interface.

## Tech Stack

### Frontend

- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **Tailwind CSS**: For responsive and modern styling.
- **Quill**: For rich text editing capabilities.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests to the backend.
- **Marked**: For Markdown parsing.
- **Moment**: For date and time handling.
- **Motion**: For animations.

### Backend

- **Node.js**: For server-side JavaScript execution.
- **Express.js**: For building the API.
- **MongoDB with Mongoose**: For data storage and management.
- **Google's Generative AI**: For AI-driven content generation.
- **ImageKit**: For image optimization and management.
- **JSON Web Tokens (JWT)**: For secure authentication.
- **Multer**: For handling file uploads.

## Folder Structure

```
quillmind-ai-blog/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (e.g., favicon, images)
│   ├── src/               # React source code
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components (e.g., Home, Editor)
│   │   └── ...            # Other directories (e.g., utils, styles)
│   ├── package.json       # Frontend dependencies
│   ├── vite.config.js     # Vite configuration
│   ├── index.html         # HTML entry point
│   ├── App.jsx            # Main React component
│   ├── main.jsx           # React entry point
│   └── styles.css         # Custom styles
├── server/                # Backend Node.js application
│   ├── configs/           # Configuration files (e.g., database)
│   ├── controllers/       # API controllers
│   ├── middleware/        # Custom middleware (e.g., authentication)
│   ├── models/            # Database models (e.g., User, Post)
│   ├── routes/            # API routes (e.g., admin, blog)
│   ├── constants.js       # Constants (e.g., port number)
│   ├── index.js           # Server entry point
│   ├── package.json       # Backend dependencies
│   └── vercel.json        # Vercel deployment configuration
├── .gitignore             # Files and folders to ignore in Git
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- **Node.js**: Version 18.x or higher.
- **MongoDB**: A local or cloud instance (e.g., MongoDB Atlas).
- **API Keys**: For Google's Generative AI and ImageKit services.

### Installation

1. Clone the repository:
    
    ```bash
    git clone https://github.com/darshanbagade/quillmind-ai-blog.git
    cd quillmind-ai-blog
    ```
    
2. Install frontend dependencies:
    
    ```bash
    cd client
    npm install
    ```
    
3. Install backend dependencies:
    
    ```bash
    cd ../server
    npm install
    ```
    
4. Set up environment variables: Create a .env file in the server directory with the following:
    
    ```
    DATABASE_URI=your_mongodb_uri
    GOOGLE_GENAI_API_KEY=your_google_genai_api_key
    IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
    IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
    JWT_SECRET=your_jwt_secret
    ```
    
    Replace placeholders with your actual credentials.
    

### Running the Application

1. Start the backend server:
    
    ```bash
    cd server
    npm start
    ```
    
    The server will run on the port specified in server/constants.js (e.g., [invalid url, do not cite]).
    
2. Start the frontend application:
    
    ```bash
    cd client
    npm run dev
    ```
    
    The frontend will typically be available at [invalid url, do not cite].
    
3. Access the application in your browser to start creating and managing blog posts.

## Usage

- **Content Creation**: Use the web interface to write blog posts with the Quill editor, leveraging AI tools for content suggestions or drafts.
- **Image Management**: Upload images via the interface, managed through ImageKit.
- **Authentication**: Log in to access user-specific features and manage your content securely.
- **Blog Management**: Create or delete posts through the intuitive dashboard.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository at https://github.com/darshanbagade/quillmind-ai-blog.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes and commit them (git commit -m "Add your feature").
4. Push to your branch (git push origin feature/your-feature).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes tests where applicable.

## Contact

For questions or feedback, please contact.