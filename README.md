# UCPC 2025 Website

This repository contains the official website for UCPC 2025, comprising a Spring Boot backend and a React frontend.

## Table of Contents

- [UCPC 2025 Website](#ucpc-2025-website)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Environment Variables](#environment-variables)
    - [Running with Docker Compose (Recommended)](#running-with-docker-compose-recommended)
    - [Running Backend Separately](#running-backend-separately)
    - [Running Frontend Separately](#running-frontend-separately)
  - [Backend (auth-service)](#backend-auth-service)
    - [Overview](#overview)
    - [Key Features](#key-features)
    - [API Documentation](#api-documentation)
    - [Workflow](#workflow)
  - [Frontend](#frontend)
    - [Overview](#overview-1)
    - [Key Technologies](#key-technologies)
    - [Workflow](#workflow-1)
  - [Contributing](#contributing)
  - [License](#license)

## Project Structure

```
.
├── backend/
│   ├── auth-service/             # Spring Boot authentication and team management service
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/         # Java source code
│   │   │   │   └── resources/    # Application resources (e.g., application.yaml)
│   │   │   └── test/             # Test source code
│   │   ├── .env                  # Environment variables for local development
│   │   ├── pom.xml               # Maven project file
│   │   └── Dockerfile            # Dockerfile for auth-service
│   ├── email-service/            # Spring Boot email service
│   │   └── ...
│   └── docker-compose.yml        # Docker Compose configuration for all backend services
├── frontend/
│   ├── frontend/                 # React frontend application
│   │   ├── public/               # Static assets
│   │   ├── src/                  # React source code
│   │   ├── package.json          # Node.js dependencies
│   │   └── vite.config.js        # Vite configuration
│   └── package.json              # Root Node.js dependencies for frontend workspace
└── README.md                     # This file
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Git**: For cloning the repository.
*   **Docker Desktop**: Includes Docker Engine and Docker Compose, essential for running the application in containers.
*   **Java Development Kit (JDK) 21**: Required for the Spring Boot backend.
*   **Node.js (version 18 or higher)**: Required for the React frontend.
*   **npm (version 9 or higher)**: Node.js package manager.

### Environment Variables

Both the backend and frontend services rely on environment variables for configuration. For local development, `.env` files are used. For Docker deployments, environment variables are passed directly or via Docker secrets.

**Local Development (`.env` files):**

Each service that requires environment variables has a `.env` file in its respective directory (e.g., `backend/auth-service/.env`, `backend/email-service/.env`). These files are **not** committed to version control (`.gitignore` is configured to ignore them).

Example `backend/auth-service/.env`:

```
DB_HOST=localhost
DB_PORT=5433
DB_NAME=postgres
DB_USERNAME=postgres
DB_PASSWORD=admin
EMAIL_USERNAME=your-email@gmail.com
EMAIL_PASSWORD=your-email-app-password
API_KEY=your-secret-api-key
```

**Note:**
*   For `EMAIL_PASSWORD`, if you are using Gmail, you might need to generate an App Password. Refer to Google's documentation on how to do this.
*   For `API_KEY`, generate a strong, random key.
*   Ensure these `.env` files are created and populated with your specific values before running the application locally or with Docker Compose.

**Docker Compose and Production Deployment:**

When using Docker Compose, environment variables defined in the `.env` files are automatically picked up by the services if `env_file` is specified in `docker-compose.yml`. For production environments, it is highly recommended to use more secure methods for managing secrets, such as:

*   **Docker Secrets:** For Swarm mode deployments.
*   **Kubernetes Secrets:** If deploying on Kubernetes.
*   **Environment variables injected by your CI/CD pipeline:** Directly setting environment variables in your deployment environment.

**Never hardcode sensitive information directly into Dockerfiles or commit `.env` files to your repository.**

### Running with Docker Compose (Recommended)

The easiest way to get the entire application stack (PostgreSQL, Auth Service, Email Service, and Frontend) up and running is by using Docker Compose.

1.  **Navigate to the `backend` directory:**
    ```bash
    cd backend
    ```
2.  **Build and run the services:**
    ```bash
    docker-compose up --build -d
    ```
    This command will:
    *   Build the Docker images for the `auth-service` and `email-service`.
    *   Create and start containers for `postgres`, `auth-service`, and `email-service` in detached mode (`-d`).
    *   The frontend will be served by Vite's development server, which you'll start separately.

3.  **Start the Frontend:**
    Open a new terminal, navigate to the `frontend/frontend` directory, and start the React development server:
    ```bash
    cd ../frontend/frontend
    npm install # Install frontend dependencies if you haven't already
    npm run dev
    ```

The application should now be accessible at `http://localhost:5173` (or another port if configured differently by Vite). The backend API will be available at `http://localhost:8080`.

### Running Backend Separately

If you prefer to run the backend services directly on your machine (outside of Docker):

1.  **Ensure PostgreSQL is running locally:** You can use the `docker-compose up -d postgres` command from the `backend` directory to start only the PostgreSQL container.
2.  **Navigate to the `auth-service` directory:**
    ```bash
    cd backend/auth-service
    ```
3.  **Set environment variables:** Ensure your environment variables (from `.env`) are loaded. You can do this manually or use a tool like `direnv`.
    ```bash
    # Example for bash/zsh (replace with your actual values)
    export DB_HOST=localhost
    export DB_PORT=5433
    export DB_NAME=postgres
    export DB_USERNAME=postgres
    export DB_PASSWORD=admin
    export EMAIL_USERNAME=your-email@gmail.com
    export EMAIL_PASSWORD=your-email-app-password
    export API_KEY=your-very-secret-api-key
    ```
4.  **Build and run the Auth Service:**
    ```bash
    ./mvnw spring-boot:run
    ```
    The Auth Service will start on `http://localhost:8080`.

    Repeat similar steps for the `email-service` if needed.

### Running Frontend Separately

1.  **Navigate to the `frontend/frontend` directory:**
    ```bash
    cd frontend/frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The frontend application will be available at `http://localhost:5173`.

## Backend (auth-service)

### Overview

The `auth-service` is a Spring Boot application responsible for user authentication, registration, and managing team information. It interacts with a PostgreSQL database and integrates with an email service for verification and notifications.

### Key Features

*   **User Authentication:** Secure user login and session management using JWT.
*   **User Registration:** Handles new user sign-ups and email verification.
*   **Team Management:** Allows users to create, update, and retrieve team information, including members and instructor details.
*   **Payment Webhook:** An endpoint (`/webhook/payment`) to receive payment notifications and update user payment status. This endpoint is secured with an API key.

### API Documentation

The API documentation is automatically generated using SpringDoc OpenAPI. Once the `auth-service` is running, you can access the Swagger UI at:

`http://localhost:8080/swagger-ui.html`

This interface allows you to explore all available endpoints, their request/response models, and even test them directly.

### Workflow

1.  **Initial Registration (Email Submission):** A new user initiates registration by submitting their email address through the frontend.
2.  **Email Verification:** The `auth-service` sends a PIN code to the provided email address (via `email-service`). The user then enters this PIN code to verify their email.
3.  **Complete Registration:** Upon successful email verification, the user proceeds to provide their full registration details (e.g., full name, password, etc.).
3.  **Login:** After verification, the user logs in, receiving a JWT for subsequent authenticated requests.
4.  **Team Information Submission:** The team lead submits their team's information (team name, members, instructor details) via an authenticated endpoint.
5.  **Payment:** When a team makes a payment, an external payment gateway sends a POST request to the `/webhook/payment` endpoint.
    *   The webhook payload contains transaction details, including a `content` field which is expected to contain the `userId` of the user who made the payment.
    *   The `WebhookController` receives this payload, extracts the `userId`, and calls the `AppUserService` to update the `paymentStatus` for that user to `true`.
    *   **Authentication:** The webhook endpoint is secured using an `Authorization: Bearer <API_KEY>` header. The `API_KEY` is configured in `application.yaml`.

## Frontend

### Overview

The frontend is a React application built with Vite, providing the user interface for the UCPC 2025 website. It consumes APIs exposed by the backend services.

### Key Technologies

*   **React**: A JavaScript library for building user interfaces.
*   **Vite**: A fast build tool that provides a lightning-fast development experience.
*   **CSS**: For styling the application.
*   **ESLint**: For code linting.

### Workflow

1.  **User Interaction:** Users interact with the website through various pages (Home, User Profile, etc.).
2.  **API Calls:** The frontend makes asynchronous calls to the `auth-service` (and potentially other backend services) to perform actions like registration, login, and team information management.
3.  **Data Display:** Fetched data from the backend is displayed to the user.
4.  **Form Submissions:** User input from forms (e.g., registration, team info) is sent to the backend.
