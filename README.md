# Website Name: EventSphere - Smart Event Management and Booking Platform

**EventSphere** is a full-stack platform designed for efficient event discovery, booking, and management, featuring advanced tools and secure access for admins, event organizers, and users. It supports various event types such as concerts, conferences, sports, and more, ensuring a seamless experience with real-time availability, seat selection, and interactive venue tours.

## Credential

**User Email and Password**
- **Email:** user1122@gmail.com
- **Password:** aaaaaa

**Organizer Email and Password**
- **Email:** organizer@gmail.com
- **Password:** aaaaaa

**Admin Email and Password**
- **Email:** admin@gmail.com
- **Password:** aaaaaa

## Live Site URL
Visit the live site at [EventSphere Live](https://event-sphere-bice.vercel.app/)

## Features and Characteristics
- **Role-Based Access Control:** 
  Admin Panel: Event and user management, sales monitoring, and platform analytics.
  Event Organizer Panel: Event creation, sales tracking, and performance analysis.
  User Panel: Event browsing, ticket purchasing, booking management, and notifications.

- **Event Management:** 
  Multi-category event booking, customizable packages, AR venue tours, QR code tickets, dynamic pricing, and personalized AI recommendations.

- **User Experience:** 
  Real-time availability, detailed event categories and filters, social sharing, and multi-language support.

- **Payment and Security:** 
  Secure multi-method payment options, cancellation, refunds, and data encryption for safe transactions.

- **Notifications and Alerts:** 
  Automated notifications on event updates, confirmations, and reminders.

- **Additional Features:**
  Live streaming integration, sustainability scores, gift cards, and referral program.


## Website Sections
- **Homepage:**
Dynamic sections for popular events, featured organizers, and category filters.

- **User Dashboard:**
Profile management, ticket access, notification settings, and booking history.

- **Event Organizer Dashboard:**
Profile, event creation, request handling, booking overview, and profit analysis.

- **Admin Dashboard:**
Event and user management, sales monitoring, and detailed platform analytics.

- **Event Detail Page:**
Interactive maps for seat selection, ticket purchase, and social sharing.

- **Payment and Checkout:**
Comprehensive order summary and secure checkout options.

- **Reviews and Ratings:**
User-submitted feedback and ratings for attended events.

- **Gift Cards and Promotions:**
Gift card purchase options and access to current promotions.


## Used Technology and Framework 
- HTML
- CSS
- Tailwind CSS
- JavaScript
- ReactJS
- NextJS
- NextAuth
- NodeJS
- ExpressJS
- MongoDB
- Mongoose

## How to Start This Application

1. **Clone the Repositories:**
    ```sh
    # Client Side:
    git clone https://github.com/DeveloperImran1/EventSphere.git
    cd EventSphere

    # Server Side:
    git clone https://github.com/DeveloperImran1/EventSphare-Server.git
    cd EventSphare-Server
    ```

2. **Install Dependencies:**
    ```sh
    npm install
    ```

3. **Start the Development Server:**
    ```sh
    nodemon index.js
    ```

4. **Build for Production:**
    ```sh
    npm run build
    ```

5. **Deploy to vercel:**
    ```sh
    vercel website to build and deploy
    ```

## Server Side Github Link
[Server Code](https://github.com/DeveloperImran1/EventSphare-Server)

## Dependencies

- **Frontend:**
  - NextJS: A React Framework for building user interfaces.
  - Axios: Promise-based HTTP client for the browser and Node.js.
  - React Query: Hooks for fetching, caching, and updating asynchronous data in React.
  - SweetAlert2: Beautiful, responsive, customizable replacement for JavaScript's popup boxes.
  - React-Hot-Toast: Beautiful, responsive, customizable replacement for JavaScript's notification/alert.
  - Tailwind CSS: A utility-first CSS framework for rapid UI development.
  - Headless UI: Unstyled, fully accessible UI components for React.

- **Backend:**
  - Express: Fast, unopinionated, minimalist web framework for Node.js.
  - MongoDB: NoSQL database for storing application data.
  - Mongoose: Elegant MongoDB object modeling for Node.js.
  - Cors: Middleware for enabling Cross-Origin Resource Sharing.
  - Dotenv: Module to load environment variables from a `.env` file.

## Additional Information
  - Secure authentication using Google and Facebook providers, along with Mailgun for email notifications.
    
- **Environment Variables:**
  - Create a `.env.local` file in the root of your client project and add the following variables:
    ```plaintext
    NEXT_PUBLIC_MONGODB_URI=<Your MongoDB URI>
    NEXT_PUBLIC_GOOGLE_CLIENT_ID=<Your Google Client ID>
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=<Your Google Client Secret>
    NEXT_PUBLIC_FACEBOOK_CLIENT_ID=<Your Facebook Client ID>
    NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET=<Your Facebook Client Secret>
    NEXT_PUBLIC_MAILGUN_API_KEY=<Your Mailgun API Key>
    NEXT_PUBLIC_MAILGUN_DOMAIN=<Your Mailgun Domain>
    NEXT_PUBLIC_AUTH_SECRET=<Your Auth Secret>
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<Your Stripe Publishable Key>

    ```

- **Folder Structure:**
  - `client/`: Contains the React frontend code.
  - `server/`: Contains the Express backend code.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

