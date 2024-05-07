# AngularHotelManagementSystem
Angular Hotels System is a web application that serves as an Airbnb analog, allowing users to search for and reserve hotels worldwide. Whether you're planning a vacation, a business trip, or just a weekend getaway, Angular Hotels System provides an intuitive platform to discover accommodations tailored to your needs.

## Motivation

The motivation behind Angular Hotels System was to create a user-friendly and efficient platform for travelers to explore and book accommodations worldwide. By leveraging Angular's powerful framework, we aimed to develop a robust web application that simplifies the hotel booking process while providing a delightful user experience.

## Features
- **Search**: Easily find hotels by location, dates, and preferences.
- **Filtering**: Refine search results based on criteria such as price range, amenities, and ratings.
- **Booking**: Securely reserve your preferred hotel with a straightforward booking process.
- **User Authentication**: Create an account or sign in to access additional features and manage your bookings.
- **Responsive Design**: Enjoy a seamless experience across desktop, tablet, and mobile devices.

## LIVE DEMO
![home](https://github.com/DavitMamardashvili/angular-hotel-management-system/assets/133438090/d2e4e341-d237-471c-9365-4e2f6f68450f)

# Dependencies

## Technologies Used
- **Angular 17**: Frontend framework for building single-page applications
- **Angular Material**: UI component library for Angular applications
- **RxJS**: Reactive programming library for handling asynchronous data streams
- **HTML/CSS**: Markup and styling languages for web development
- **TypeScript**: Superset of JavaScript that adds optional static typing
- **Firebase**: Backend-as-a-Service (BaaS) platform for authentication, database, and hosting


## Setup

Follow these steps to set up the frontend of Angular Hotels System locally:

1. **Clone the Repository**: 
    ```bash
    git clone <repository_url>
    cd angular-hotels-system
    ```

2. **Install Dependencies**: 
    ```bash
    npm install
    ```

3. **Set Up Firebase**:
    - If you haven't already, sign up for a Firebase account at [Firebase](https://firebase.google.com/).
    - Create a new Firebase project and set up Firebase Authentication and Firestore (or Realtime Database) as needed.
    - Copy your Firebase configuration details.

4. **Configure Firebase Credentials**:
    - Create a file named `environment.ts` in the `src/environments` directory.
    - Add your Firebase configuration details to the `environment.ts` file:

    ```typescript
    export const environment = {
        production: false,
        firebase: {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            databaseURL: "YOUR_DATABASE_URL",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        }
    };
    ```

5. **Start the Development Server**:
    ```bash
    ng serve
    ```

6. **Access the Application**:
    Open your web browser and navigate to `http://localhost:4200/` to access the Angular Hotels System application.

## Lazy Loading Routes

Angular Hotels System uses lazy loading for optimal performance. The routes are loaded dynamically as needed. Here are the lazy-loaded routes:

- `/home`: Landing page of the application.
- `/hotel-info/:id`: Page displaying detailed information about a specific hotel.
- `/auth`: Page for user authentication and authorization.
- `/not-found`: Page displayed when navigating to a route that doesn't exist.

## Contributing

Contributions to Angular Hotels System are welcome! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make changes and commit them (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature`)
5. Create a new Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
