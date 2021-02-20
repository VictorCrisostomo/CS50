--write a SQL query to list the titles of the five highest rated movies (in order)
--that Chadwick Boseman starred in starting with the highest rated.

SELECT movies.title from people
JOIN stars ON people.id = stars.person_id
JOIN movies ON stars.movie_id = movies.id
JOIN ratings on movies.id = ratings.movie_id
WHERE people.name = "Chadwick Boseman"
ORDER BY rating DESC
LIMIT 5;