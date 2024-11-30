
# Blog App

This is a full-stack blog application built with **Next.js**, **ShadCN**, and **TailwindCSS**. The project allows users to upload blogs from the backend admin panel and view them on the frontend. The frontend displays blogs with their images, titles, descriptions, and author names. Additionally, the app includes an email subscription feature where users can subscribe to receive updates. Once a user subscribes, the email is stored in the backend.

### Features:
- **Admin Panel**: Allows the admin to upload and manage blogs.
  - The admin panel can be accessed directly via `/admin` (no login panel has been implemented).
  - Blogs can be uploaded with images, titles, descriptions, and author names.
  
- **Frontend**: Displays the uploaded blogs.
  - Each blog post shows the image, title, description, and author name.
  
- **Email Subscription**: Allows users to subscribe to email updates.
  - Once subscribed, user emails are saved in the backend for future notifications.

### Technologies Used:
- **Frontend**: 
  - **Next.js** (for building the React-based frontend)
  - **TailwindCSS** (for styling the frontend components)
  - **ShadCN** (for UI components)
  
- **Backend**: 
  - **Next.js API Routes** (for building the backend APIs)
  - **MongoDB** (for storing blog posts and email subscriptions)

### Installation:
To run this project locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/Aditya1or0/blog-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd blog-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env.local` file and add the following variables:
   ```
   MONGODB_URI=<your-mongo-db-uri>
   NEXT_PUBLIC_API_URL=<your-api-url>
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Visit `http://localhost:3000` in your browser.

### Admin Panel Access:
You can access the admin panel directly by navigating to http://localhost:3000/admin. Note that no login system has been implemented yet, but I will be integrate NextAuth in the future to provide secure authentication for the admin panel.

### Email Subscription:
- Users can subscribe to the email list via a form on the frontend. Once they submit their email, it is saved in the backend for future email notifications.

### Contact
If you have any questions, feel free to reach out to me 
mail:adityapandit264@gmail.com


---
