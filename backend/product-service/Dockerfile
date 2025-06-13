FROM eclipse-temurin:24-jdk

WORKDIR /app

COPY mvnw ./
COPY .mvn .mvn/
COPY pom.xml ./
COPY src ./src

RUN chmod +x mvnw
RUN bash ./mvnw clean install -DskipTests

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "target/product-service-0.0.1-SNAPSHOT.jar"] 