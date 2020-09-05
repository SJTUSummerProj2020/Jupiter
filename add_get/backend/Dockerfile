FROM openjdk:15-jdk-alpine
WORKDIR /app
COPY target/*.jar /app
ENTRYPOINT ["java", "-jar", "jupiter-backend.jar"]
EXPOSE 8080