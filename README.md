# Scopus Search Application

This application allows users to search for scientific publications using keywords via the Scopus API and view the results with pagination.

To run the application: 

```make up```

## API Implementation

The backend exposes two main endpoints:

1. `/find` - Accepts keyword parameters and fetches publications from Scopus API
   - Parameters: `word` (keyword for search)
   - This endpoint triggers the search process in Scopus and stores results in the database 
   - Endpoint returns meaningful output and may be used separately 

2. `/articles` - Returns saved search results with pagination
   - Parameters: 
     - `word` (keyword filter, optional)
     - `page` (page number, default 1)
     - `size` (number of items per page, default 5)
   - Returns JSON with articles and total count

## Data Storage and Caching

1) Primitive deduplication via hashing is implemented:   
- `id` - md5 hash of title, author, date, doi, so same article will have the same id, so one article will not be saved twice (`tx_id` also serves that purpose).  

2) We have separate table for keyword storage. That is helpful when not all records from the search were saved, during `find` request, but we can fetch all articles via keywords from database.  

3) I use naive atom based caching, keyword query vector like ["giant shrimp"] is the key, API response is the value. It helps not to overload API (otherwise you can just hit the limit of free plan). 

## Pagination Implementation

The application implements pagination on both backend and frontend. 

- SQL-based pagination using `LIMIT` and `OFFSET` clauses
- The API returns both the paginated results and the total count
