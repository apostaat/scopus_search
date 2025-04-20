.PHONY: build run

build:
	docker build -t scopus-search .

run:
	docker run -p 3000:3000 scopus-search

up: build run
