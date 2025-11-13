# 🌍 Natours

A full-stack web application for booking and exploring nature tours, built with Node.js, Express, MongoDB, and Pug. This project is designed as a learning resource for mastering backend development with Node.js, Express, and MongoDB.

## 📖 Description

Natours is a comprehensive web application that allows users to discover, book, and manage nature tours. It features user authentication, tour management, payment processing with Stripe, and a responsive frontend built with Pug templates. This project demonstrates modern web development practices, including security best practices, API design, and database integration.

## ✨ Features

🔐 **User Authentication**: Secure login and signup with JWT tokens  
🗺️ **Tour Management**: Browse, filter, and book tours with detailed information  
💳 **Payment Integration**: Secure payments using Stripe  
👤 **User Profiles**: Manage personal details, bookings, and reviews  
⚙️ **Admin Panel**: Tools for managing tours, users, and bookings  
📱 **Responsive Design**: Mobile-friendly UI with Pug templates  
📧 **Email Notifications**: Automated emails for bookings and password resets  
🛡️ **Security**: Helmet, rate limiting, data sanitization, and XSS protection

## 🛠️ Tech Stack

🚀 **Backend**: Node.js, Express.js  
🗄️ **Database**: MongoDB with Mongoose ODM  
🎨 **Frontend**: Pug (Jade), HTML, CSS, JavaScript  
🔑 **Authentication**: JSON Web Tokens (JWT)  
💰 **Payments**: Stripe  
📤 **File Uploads**: Multer and Sharp for image processing  
📬 **Email**: Nodemailer  
🔒 **Security**: Helmet, CORS, HPP, Express Mongo Sanitize, XSS Clean  
💻 **Development**: Nodemon, Parcel for bundling

## 🚀 Usage

💻 **Development**: Run `npm run dev` to start the server with automatic restarts.  
🌐 **Production**: Use `npm run start:prod` to run in production mode.  
🐛 **Debugging**: Run `npm run debug` for debugging with ndb.  
🔨 **Building JS**: Use `npm run build:js` to bundle frontend JavaScript.

## 🔌 API Endpoints

The application provides a RESTful API for tours, users, bookings, and reviews. Refer to the routes directory for detailed endpoint documentation.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements.

## 📜 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

This project is based on the "Node.js, Express, MongoDB & More: The Complete Bootcamp" course by Jonas Schmedtmann. Special thanks to the instructor for the comprehensive learning material.
