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
  - [Deployment](#deployment)
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
│   │   ├── src/
│   │   │   └── ...
│   │   └── .env                  # Environment variables for local development
│   └── docker-compose.yml        # Docker Compose configuration for all backend services
├── frontend/
│   ├── frontend/                 # React frontend application
│   │   ├── public/               # Static assets
│   │   ├── src/                  # React source code
│   │   ├── package.json          # Node.js dependencies
│   │   ├── .env                  # Environment variables for local development
│   │   └── vite.config.js        # Vite configuration
│   └── package.json              # Root Node.js dependencies for frontend workspace
├── deploy.sh                     # Deployment script for Ubuntu server
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

Each service that requires environment variables has a `.env` file in its respective directory (e.g., `backend/auth-service/.env`, `backend/email-service/.env`, `frontend/frontend/.env`). These files are **not** committed to version control (`.gitignore` is configured to ignore them).

Example `backend/auth-service/.env`:

```
DB_HOST=localhost
DB_PORT=5433
DB_NAME=postgres
DB_USERNAME=postgres
DB_PASSWORD=admin
EMAIL_USERNAME=your-email@gmail.com
EMAIL_PASSWORD=your-email-app-password
API_KEY=your-very-secret-api-key
```

**Note:**
*   For `EMAIL_PASSWORD`, if you are using Gmail, you might need to generate an App Password. Refer to Google's documentation on how to do this.
*   For `API_KEY`, generate a strong, random key.
*   Ensure these `.env` files are created and populated with your specific values before running the application locally or with Docker Compose.

**Server Deployment and CI/CD (Secure Handling):**

For server deployments and CI/CD pipelines (e.g., GitHub Actions), **never hardcode sensitive information directly into Dockerfiles, `docker-compose.yml`, or commit `.env` files to your repository.** Instead, use secure methods:

*   **Environment Variables on the Server:** Set environment variables directly on your Ubuntu server for the user that will run the Docker Compose commands. You can add them to `~/.bashrc`, `/etc/environment`, or use a tool like `systemd` to manage service environment variables. Docker Compose will automatically pick these up.

    Example (on Ubuntu server):
    ```bash
    export DB_HOST=localhost
    export DB_PORT=5432 # Or your PostgreSQL port on the server
    export DB_NAME=your_db_name
    export DB_USERNAME=your_db_user
    export DB_PASSWORD=your_db_password
    export EMAIL_USERNAME=your-email@gmail.com
    export EMAIL_PASSWORD=your-email-app-password
    export API_KEY=your-very-secret-api-key
    ```

*   **Docker Secrets (for Docker Swarm/Kubernetes):** If you plan to scale to Docker Swarm or Kubernetes, these platforms offer built-in secret management solutions that are more secure for production environments.

*   **CI/CD Secrets Management:** GitHub Actions, GitLab CI/CD, Jenkins, etc., provide secure ways to store and inject sensitive environment variables into your build and deployment pipelines. Refer to your CI/CD provider's documentation for details.

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
    *   Build the Docker images for the `auth-service`, `email-service`, and `frontend`.
    *   Create and start containers for `postgres`, `auth-service`, `email-service`, and `frontend` in detached mode (`-d`).

    The application should now be accessible at `http://localhost:3000` (or the port you configured for the frontend). The backend API will be available at `http://localhost:8080`.

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
4.  **Login:** After successful registration, the user logs in, receiving a JWT for subsequent authenticated requests.
5.  **Team Information Submission:** The team lead submits their team's information (team name, members, instructor details) via an authenticated endpoint.
6.  **Payment:** When a team makes a payment, an external payment gateway sends a POST request to the `/webhook/payment` endpoint.
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

## Deployment

The `deploy.sh` script in the project root automates the deployment of the entire application stack directly on your Ubuntu server using Docker Compose.

**Before you deploy:**

1.  **Server Setup:** Ensure your Ubuntu server has Git, Docker, and Docker Compose installed.
2.  **Clone Repository:** Clone your repository to the `REMOTE_PROJECT_PATH` specified in `deploy.sh`.
3.  **Environment Variables on Server:** Set the necessary environment variables (DB credentials, email credentials, API keys) directly on your Ubuntu server. These should **not** be committed to your Git repository. A common approach is to add them to the `~/.bashrc` or `/etc/environment` file of the user who will execute the deployment script.

    Example (on Ubuntu server):
    ```bash
    export DB_HOST=localhost
    export DB_PORT=5432 # Or your PostgreSQL port on the server
    export DB_NAME=your_db_name
    export DB_USERNAME=your_db_user
    export DB_PASSWORD=your_db_password
    export EMAIL_USERNAME=your-email@gmail.com
    export EMAIL_PASSWORD=your-email-app-password
    export API_KEY=your-very-secret-api-key
    ```

4.  **Update `deploy.sh`:** Edit the `deploy.sh` script to configure `REMOTE_PROJECT_PATH`, `GIT_REMOTE`, and `GIT_BRANCH` to match your setup.

**To deploy (run directly on the Ubuntu server):**

1.  **Make the script executable:**
    ```bash
    chmod +x deploy.sh
    ```
2.  **Run the deployment script:**
    ```bash
    ./deploy.sh
    ```

This script will:
*   Navigate to the specified project directory.
*   Pull the latest changes from your Git repository.
*   Stop and remove any existing Docker containers and networks.
*   Build new Docker images for all services (backend and frontend).
*   Start all services in detached mode.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Push your branch to your fork.
5.  Open a pull request to the main repository.

## License

[Specify your license here]