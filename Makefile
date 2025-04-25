.PHONY: build run

build:
	docker build \
		--build-arg SCOPUS_API_KEY=${SCOPUS_API_KEY} \
		--build-arg SCOPUS_BASE_URL=${SCOPUS_BASE_URL} \
		-t scopus-search .

run:
	docker run -p 3000:3000 \
		-e SCOPUS_API_KEY=${SCOPUS_API_KEY} \
		-e SCOPUS_BASE_URL=${SCOPUS_BASE_URL} \
		scopus-search

up: build run

repl:
	lein with-env-vars repl
