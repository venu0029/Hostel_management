
# Hostel-Management

A full-stack hostel management system built with React, Redux, Node.js, Express, and MongoDB.

## Features

- **User Authentication**: JWT-based authentication with user registration and login
- **Student Management**: Add, view, update, and delete student records
- **Room Management**: Track room cleaning and repair activities
- **Staff Management**: Manage staff information and availability
- **Batch-wise Organization**: Organize students by academic batches (2022-2026)
- **Block-wise Organization**: Organize rooms by blocks (A, B, C, D, E, F)
- **Hostel Separation**: Separate hostels for boys and girls
- **Real-time Updates**: Live updates for student availability and room status

## Tech Stack

### Frontend
- React.js
- Redux (for state management)
- React Router (for navigation)
- Bootstrap (for styling)
- Axios (for API calls)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- JWT (for authentication)
- Passport.js (for authentication strategy)

## Installation

1. Clone the repository
```bash
git clone https://github.com/starkblaze01/Hostel-Management.git
cd Hostel-Management
```

2. Install dependencies
```bash
npm install
cd client
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Run the application
```bash
# Start the backend server (from root directory)
npm run server

# Start the frontend (from client directory)
npm start
```

## Project Structure

```
Hostel-Management/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── actions/        # Redux actions
│   │   ├── reducers/       # Redux reducers
│   │   └── store.js        # Redux store configuration
├── models/                 # MongoDB schemas
├── routers/               # Express routes
├── validation/            # Input validation
└── server.js              # Express server
```

## Features Overview

### Student Management
- Add new students with details (name, email, batch, ID, block, hostel, room, gender)
- View students by batch (2022-2026)
- Search students by ID, room number, or availability status
- Update student availability (present/absent)
- Delete student records

### Room Management
- Track room cleaning and repair activities
- Organize rooms by blocks (A, B, C, D, E, F)
- Separate hostels for boys and girls
- Assign staff incharge for activities
- Record timestamps for activities

### Staff Management
- Add staff members with contact information
- Track staff availability
- Update staff status
- Delete staff records

### Authentication
- User registration and login
- JWT-based authentication
- Protected routes
- Session management

## Data Models

### Student Schema
- name (required)
- email (required, unique)
- batch (required, 2022-2026)
- id (unique)
- block (required, A-F)
- hostel (required, BOYS HOSTEL or GIRLS HOSTEL)
- room
- gender (required, MALE or FEMALE)
- isAvailable (default: true)

### Room Schema
- id (required)
- type (CLEANING or REPAIR)
- hostel (BOYS HOSTEL or GIRLS HOSTEL)
- block (required, A-F)
- incharge
- time (required)
- gender (required, BOY or GIRL)

### Staff Schema
- name (required)
- occupation (required)
- mobile (required)
- isAvailable (default: true)

## API Endpoints

See [API_Endpoints.md](API_Endpoints.md) for detailed API documentation.






# Hostel_management
