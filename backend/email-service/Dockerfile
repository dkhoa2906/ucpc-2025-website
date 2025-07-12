# Stage 1: Build the application
FROM openjdk:17-jdk-slim as builder

WORKDIR /app

# Copy the entire backend directory into the builder stage
COPY . /app/backend

# Set the working directory to the root of the backend project
WORKDIR /app/backend

# Install the parent POM to the local Maven repository
RUN ./mvnw install -N

# Build the email-service module
RUN ./mvnw clean package -DskipTests -f email-service/pom.xml

# Stage 2: Run the application
FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=builder /app/backend/email-service/target/*.jar /app/email-service.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "/app/email-service.jar"]
