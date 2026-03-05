/* Question 1: How many books have been ordered by each customer? 
Categorize the order volume of each customer as 'Low', 'Medium', and 'High' based on the number of N books ordered:
Low: N < 5 
Medium: 5 <= N <= 10
High: N > 10
*/
SELECT
	co.customer_id,
	COUNT(ol.book_id) as [number of books order],
	CASE
		WHEN COUNT(ol.book_id) < 5 THEN 'Low'
		when COUNT(ol.book_id) > 10 THEN 'High'
		ELSE 'Medium'
	END AS order_volume
FROM cust_order AS co
JOIN order_line AS ol ON co.order_id = ol.order_id
GROUP BY co.customer_id
ORDER BY customer_id;


/*
Question 2: What is the latest status of each order? 
(Rank the orders for each order_id based on status_date and create a view to store the latest orders status).
*/
CREATE VIEW [LastOrdersView] AS
SELECT
	rankedorders.order_id,
	rankedorders.status_date,
	rankedorders.status_value
FROM
	(SELECT
			oh.order_id,
			oh.status_date,
			os.status_value,
			RANK() OVER (PARTITION BY oh.order_id ORDER BY oh.status_date DESC) AS last_order_filter
	FROM order_history AS oh
	JOIN order_status AS os ON oh.status_id = os.status_id
	) AS rankedorders
WHERE rankedorders.last_order_filter = 1;

SELECT * FROM [LastOrdersView];


/* 
Question 3: Rank the customers based on the total price of their orders. 
Note: Only count the orders whose latest status is not 'Cancelled' or 'Returned'.
*/
WITH TotalSpending AS (
	SELECT
		co.customer_id,
		SUM(ol.price) AS total_spent
	FROM cust_order AS co
	JOIN order_line AS ol ON co.order_id = ol.order_id
	JOIN LastOrdersView AS lo ON lo.order_id = ol.order_id
	WHERE status_value NOT LIKE 'Cancelled%' AND status_value NOT LIKE 'Returned%'
	GROUP BY co.customer_id
)
SELECT 
	customer_id,
	total_spent,
	RANK() OVER (ORDER BY total_spent DESC) AS rank_spending
FROM TotalSpending;


/*
Question 4: Rank the author by their popularity and categorize them as 'Bestseller', 'Popular', or 'Others' based on their rank R for the number of orders:
'Bestseller': R <= 5
'Popular': 5 < R <= 10
'Others': R > 10
Note: Only count the orders whose latest status is not 'Cancelled' or 'Returned'.
*/
SELECT
	ba.author_id,
	author.author_name,
	COUNT(ol.order_id) AS number_of_orders,
	RANK() OVER (ORDER BY COUNT(ol.order_id) DESC) AS popularity_ranking,
	CASE
		WHEN RANK() OVER (ORDER BY COUNT(ol.order_id) DESC) <= 5 THEN 'Bestseller'
		WHEN RANK() OVER (ORDER BY COUNT(ol.order_id) DESC) <= 10 THEN 'Popular'
		ELSE 'Others'
	END AS popularity_level
FROM LastOrdersView AS lo
JOIN order_line AS ol ON lo.order_id = ol.order_id
JOIN book ON book.book_id = ol.book_id
JOIN book_author AS ba ON book.book_id = ba.book_id
JOIN author ON author.author_id = ba.author_id
WHERE lo.status_value NOT LIKE 'Cancelled%' AND lo.status_value NOT LIKE 'Returned%'
GROUP BY ba.author_id, author.author_name


/*
Question 5: For each shipping method, rank the countries by 
the number of orders and categorize the ranking of demand as 'High' (for top 10), 'Medium' (for top 11-20), or 'Low' (for the rest).
Note: Only count the orders whose latest status is not 'Cancelled' or 'Returned'.
*/
SELECT 
	sm.method_name,
	c.country_name,
	COUNT(lo.order_id) AS number_of_orders,
	RANK() OVER (PARTITION BY sm.method_name ORDER BY COUNT(lo.order_id) DESC) AS demand_ranking,
	CASE 
		WHEN RANK() OVER (PARTITION BY sm.method_name ORDER BY COUNT(lo.order_id) DESC) <= 10 THEN 'High'
		WHEN RANK() OVER (PARTITION BY sm.method_name ORDER BY COUNT(lo.order_id) DESC) <= 20 THEN 'Medium'
		ELSE 'Low'
	END AS demand_level
FROM LastOrdersView AS lo
JOIN cust_order AS co ON co.order_id = lo.order_id
JOIN address AS a ON a.address_id = co.dest_address_id
JOIN shipping_method AS sm ON sm.method_id = co.shipping_method_id
JOIN country AS c ON c.country_id = a.country_id
WHERE lo.status_value NOT LIKE 'Cancelled%' AND lo.status_value NOT LIKE 'Returned%'
GROUP BY sm.method_name, c.country_name


/*
Question 6.1: Create a temporary table showing the number of books sold by each publisher for each month.
*/
SELECT
	p.publisher_name,
	MONTH(co.order_date) AS sale_month,
	COUNT(ol.book_id) AS number_of_books
	INTO #BookSales
FROM order_line AS ol
JOIN cust_order AS co ON co.order_id = ol.order_id
JOIN book AS b ON b.book_id = ol.book_id
JOIN publisher AS p ON p.publisher_id = b.publisher_id
GROUP BY p.publisher_name, MONTH(co.order_date)

SELECT * FROM #BookSales


/*
Question 6.2: Pivot the temp table to show the number of books sold monthly by each publisher (Note: Show null values as "0").
*/
SELECT 
    publisher_name,
    isnull([1], 0) AS January,
    isnull([2], 0) AS February,
    isnull([3], 0) AS March,
    isnull([4], 0) AS April,
    isnull([5], 0) AS May,
    isnull([6], 0) AS June,
    isnull([7], 0) AS July,
    isnull([8], 0) AS August,
    isnull([9], 0) AS September,
    isnull([10], 0) AS October,
    isnull([11], 0) AS November,
    isnull([12], 0) AS December
FROM 
    #BookSales
PIVOT
(
    SUM(number_of_books)
    FOR sale_month IN ([1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12])
) AS MonthlySalesPivot;


/*
Question 7: How many orders have been placed by new vs. returning customers each year?
*/
WITH Firstyearcustomer AS (
	SELECT
	customer_id,
	MIN(YEAR(order_date)) AS first_order_year
	FROM cust_order
	GROUP BY customer_id
)
SELECT
	YEAR(co.order_date) AS order_year,
	COUNT(CASE
			WHEN fy.first_order_year = YEAR(order_date) THEN co.order_id
		END) AS new_customer_orders,
	COUNT(CASE
			WHEN fy.first_order_year < YEAR(order_date) THEN co.order_id
		END) AS returning_customer_orders
FROM cust_order AS co
JOIN Firstyearcustomer AS fy ON fy.customer_id = co.customer_id
GROUP BY YEAR(co.order_date)
ORDER BY YEAR(co.order_date);
 

/*
Question 8: What is the average delivery time for each shipping method?
*/
WITH DeliveryTimes AS (
	SELECT
		co.shipping_method_id,
		co.order_id,
		DATEDIFF(DAY, MIN(co.order_date), MAX(oh.status_date)) AS delivery_time
	FROM cust_order AS co
	JOIN order_history AS oh ON oh.order_id = co.order_id
	JOIN order_status AS os ON os.status_id = oh.status_id
	WHERE os.status_value = 'Delivered'
	GROUP BY co.shipping_method_id, co.order_id
)
SELECT
	sm.method_name,
	ROUND(AVG(CONVERT(FLOAT, dt.delivery_time)), 2) AS average_delivery_time
FROM DeliveryTimes AS dt
JOIN shipping_method AS sm ON sm.method_id = dt.shipping_method_id
GROUP BY sm.method_name
