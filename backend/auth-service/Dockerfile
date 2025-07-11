# Stage 1: Build the application
FROM openjdk:17-jdk-slim as builder

WORKDIR /app

COPY mvnw ./
COPY .mvn .mvn/
COPY pom.xml ./
COPY src ./src/

RUN ./mvnw clean package -DskipTests

# Stage 2: Run the application
FROM openjdk:17-jre-slim

WORKDIR /app

COPY --from=builder /app/target/*.jar /app/auth-service.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/auth-service.jar"]
