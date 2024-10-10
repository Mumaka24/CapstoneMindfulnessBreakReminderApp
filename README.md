The Mindfulness Break Reminder App serves multiple functions designed to help users manage their mindfulness, breaks, and wellness through reminders and sessions. Here's a summary of the app’s main functions:

1. User Authentication
Login and Registration: Users can sign up or log in to their accounts to access the app's personalized features.
Session Management: User sessions are managed using tokens, allowing secure access to user-specific data and activities (like reminders and sessions).
2. Reminders
Create Reminders: Users can create different types of reminders, such as for breaks, hydration, or exercise.
View Reminders: The app fetches and displays all active reminders created by the user.
Update/Delete Reminders: Users can update existing reminders or delete them if they are no longer needed.
Reminder Scheduling: Users can set reminders for specific times with repeat options (e.g., daily, weekly) to ensure they stick to their wellness routines.
3. Sessions
Mindfulness Sessions: Users can browse through various mindfulness or break sessions (e.g., yoga sessions, meditation exercises) and view session details like descriptions and durations.
Track Progress: Users can view their session history to see which sessions they’ve completed and manage their wellness journey.
4. Notifications
Receive Notifications: Users get notifications linked to reminders, such as when it’s time to take a break or perform an exercise.
View Notifications: A dedicated notifications page allows users to view and manage the notifications they’ve received from the app.
Notification Management: Users can clear notifications after they have been acknowledged or acted upon.
5. Navigation with React Router
Page Navigation: The app utilizes React Router to create seamless navigation between different pages such as Home, Reminders, Sessions, and Notifications.
Persistent Menu Bar: A menu bar across the application allows easy access to different sections, making the app easy to navigate.
6. Background and Aesthetic
Calming Backgrounds: Each page (Home, Reminders, Sessions, Notifications) features calming yoga background images, enhancing the user experience by providing a peaceful, wellness-oriented ambiance.
7. State Management and API Communication
React Hooks: The app uses React Hooks (like useState and useEffect) to manage state and fetch data from the backend, keeping the front-end responsive and dynamic.
Axios for API Calls: Axios is used to communicate with the server, sending HTTP requests to perform CRUD operations (Create, Read, Update, Delete) on reminders, sessions, and notifications.
8. About Us
The app provides information about its purpose and team on the Home page, making it more engaging for users.
These features combine to provide a full-stack application that helps users prioritize mindfulness and wellness in their daily lives.