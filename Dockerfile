FROM clojure:lein AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y curl gnupg \
 && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
 && apt-get install -y nodejs \
 && npm install -g npm \
 && node --version \
 && npm --version

COPY project.clj /app/
COPY src /app/src
COPY resources /app/resources

RUN lein deps
RUN lein cljsbuild once prod
RUN lein uberjar

FROM eclipse-temurin:21-jdk-jammy

WORKDIR /app

COPY --from=builder /app/target/uberjar/scopus-search-0.1.0-SNAPSHOT-standalone.jar /app/scopus-search.jar

EXPOSE 3000
EXPOSE 3449

ENV PORT=3000
ENV HOST=0.0.0.0

ENTRYPOINT ["java", "-jar", "scopus-search.jar"]
