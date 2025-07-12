# Stage 1: Build the entire backend project
FROM openjdk:17-jdk-slim as builder

WORKDIR /app

# Copy the entire backend directory into the builder stage
COPY . /app/backend

# Set the working directory to the root of the backend project
WORKDIR /app/backend

# Build and install all modules to the local Maven repository
RUN ./mvnw clean install -DskipTests

# Stage 2: Run the auth-service application
FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=builder /app/backend/auth-service/target/*.jar /app/auth-service.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/auth-service.jar"]
