import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function SQLBookstore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sqlCode = `/* Question 1: How many books have been ordered by each customer? 
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
GROUP BY sm.method_name`;

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/" className="text-violet-600 hover:text-violet-700 font-semibold">
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Advanced SQL Query Techniques – Bookstore Database
        </h1>
        
        {/* Project Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">📌 Project Overview</h2>
          <p className="text-slate-600 mb-4">
            This project demonstrates practical SQL data analysis techniques using a relational bookstore database.
          </p>
          <p className="text-slate-600 mb-4">
            The objective was to solve common analytical problems using SQL, focusing on data transformation, ranking, 
            segmentation, and aggregation across multiple related tables.
          </p>
          <p className="text-slate-600 mb-4">
            The dataset simulates an e-commerce environment where customer orders, book metadata, shipping information, 
            and order status history are stored in a normalised relational schema.
          </p>
          <p className="text-slate-600">
            The analysis includes eight SQL challenges, each designed to demonstrate different SQL capabilities used in 
            real-world data workflows.
          </p>
        </div>

        {/* Dataset Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">📊 Dataset Overview</h2>
          <p className="text-slate-600 mb-3">Relational bookstore database:</p>
          <ul className="text-slate-600 ml-6 mb-4 space-y-1">
            <li>• 15 tables</li>
            <li>• ~22,000 records in the largest table</li>
            <li>• Normalised relational structure</li>
          </ul>
          <p className="text-slate-600 mb-2 font-semibold">Key tables include:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-slate-600">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Table</th>
                  <th className="px-4 py-2 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="px-4 py-2">cust_order</td><td className="px-4 py-2">Customer order records</td></tr>
                <tr className="border-t"><td className="px-4 py-2">order_line</td><td className="px-4 py-2">Individual books within each order</td></tr>
                <tr className="border-t"><td className="px-4 py-2">order_history</td><td className="px-4 py-2">Order status history</td></tr>
                <tr className="border-t"><td className="px-4 py-2">order_status</td><td className="px-4 py-2">Order status definitions</td></tr>
                <tr className="border-t"><td className="px-4 py-2">book</td><td className="px-4 py-2">Book metadata</td></tr>
                <tr className="border-t"><td className="px-4 py-2">book_author</td><td className="px-4 py-2">Relationship between books and authors</td></tr>
                <tr className="border-t"><td className="px-4 py-2">author</td><td className="px-4 py-2">Author information</td></tr>
                <tr className="border-t"><td className="px-4 py-2">publisher</td><td className="px-4 py-2">Publisher details</td></tr>
                <tr className="border-t"><td className="px-4 py-2">shipping_method</td><td className="px-4 py-2">Shipping options</td></tr>
                <tr className="border-t"><td className="px-4 py-2">address</td><td className="px-4 py-2">Delivery addresses</td></tr>
                <tr className="border-t"><td className="px-4 py-2">country</td><td className="px-4 py-2">Customer country information</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SQL Techniques */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">💻 SQL Techniques Demonstrated</h2>
          <p className="text-slate-600 mb-3">This project applies a range of SQL techniques commonly used in analytics workflows:</p>
          <ul className="text-slate-600 ml-6 space-y-1">
            <li>• Complex multi-table joins</li>
            <li>• Conditional aggregation</li>
            <li>• Window functions (RANK, PARTITION BY)</li>
            <li>• Common Table Expressions (CTE)</li>
            <li>• View creation</li>
            <li>• Temporary tables</li>
            <li>• Pivot transformations</li>
            <li>• Cohort-style analysis</li>
            <li>• Date calculations using DATEDIFF</li>
          </ul>
        </div>

        {/* Key SQL Example */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">🔍 Key SQL Example</h2>
          <p className="text-slate-600 mb-3 font-semibold">Customer Spending Ranking</p>
          <p className="text-slate-600 mb-3 text-sm">Ranks customers based on total order value while excluding cancelled or returned orders.</p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-3">
            <pre className="text-sm"><code>{`WITH TotalSpending AS (
    SELECT
        co.customer_id,
        SUM(ol.price) AS total_spent
    FROM cust_order AS co
    JOIN order_line AS ol ON co.order_id = ol.order_id
    JOIN LastOrdersView AS lo ON lo.order_id = ol.order_id
    WHERE status_value NOT LIKE 'Cancelled%' 
      AND status_value NOT LIKE 'Returned%'
    GROUP BY co.customer_id
)
SELECT 
    customer_id,
    total_spent,
    RANK() OVER (ORDER BY total_spent DESC) AS rank_spending
FROM TotalSpending;`}</code></pre>
          </div>
          <p className="text-slate-600 text-sm font-semibold mb-2">Concepts demonstrated:</p>
          <ul className="text-slate-600 text-sm ml-6 space-y-1">
            <li>• CTE for intermediate aggregation</li>
            <li>• Window function ranking</li>
            <li>• Filtering based on order status</li>
          </ul>
        </div>

        {/* SQL Problems Solved */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">✅ SQL Problems Solved</h2>
          <div className="space-y-4 text-slate-600">
            <div>
              <p className="font-semibold">1. Customer Order Segmentation</p>
              <p className="text-sm">Classified customers into Low, Medium, and High order volume segments based on the number of books ordered.</p>
              <p className="text-sm italic">Technique: CASE + aggregated counts.</p>
            </div>
            <div>
              <p className="font-semibold">2. Latest Order Status Tracking</p>
              <p className="text-sm">Created a reusable view to capture the latest status of each order using window functions.</p>
              <p className="text-sm italic">Technique: RANK() with PARTITION BY.</p>
            </div>
            <div>
              <p className="font-semibold">3. Customer Spending Ranking</p>
              <p className="text-sm">Ranked customers based on total order value while excluding cancelled or returned orders.</p>
              <p className="text-sm italic">Technique: CTE + window functions.</p>
            </div>
            <div>
              <p className="font-semibold">4. Author Popularity Analysis</p>
              <p className="text-sm">Ranked authors by total orders and categorised them as Bestseller, Popular, or Others.</p>
              <p className="text-sm italic">Technique: ranking with conditional classification.</p>
            </div>
            <div>
              <p className="font-semibold">5. Shipping Demand Analysis</p>
              <p className="text-sm">Ranked countries by demand for each shipping method.</p>
              <p className="text-sm italic">Technique: window functions with partitioned ranking.</p>
            </div>
            <div>
              <p className="font-semibold">6. Monthly Publisher Sales Pivot</p>
              <p className="text-sm">Transformed monthly sales data into a pivot table showing book sales by publisher across months.</p>
              <p className="text-sm italic">Technique: temporary tables + PIVOT.</p>
            </div>
            <div>
              <p className="font-semibold">7. New vs Returning Customer Analysis</p>
              <p className="text-sm">Compared yearly orders from new customers versus returning customers.</p>
              <p className="text-sm italic">Technique: cohort-style analysis using CTE.</p>
            </div>
            <div>
              <p className="font-semibold">8. Delivery Performance Analysis</p>
              <p className="text-sm">Calculated the average delivery time for each shipping method.</p>
              <p className="text-sm italic">Technique: DATEDIFF and aggregation.</p>
            </div>
          </div>
        </div>

        {/* Project Outcome */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">🎯 Project Outcome</h2>
          <p className="text-slate-600 mb-3">This project demonstrates the ability to use SQL to:</p>
          <ul className="text-slate-600 ml-6 space-y-1 mb-4">
            <li>• Manipulate complex relational datasets</li>
            <li>• Perform ranking and segmentation analysis</li>
            <li>• Transform data using pivot operations</li>
            <li>• Build reusable query structures with views and CTEs</li>
          </ul>
          <p className="text-slate-600">
            These techniques form the foundation for many real-world data analysis tasks.
          </p>
        </div>

        {/* Skills & Key Takeaway */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">🛠️ Skills Demonstrated</h2>
            <ul className="text-slate-600 space-y-1">
              <li>• SQL Server</li>
              <li>• Window Functions</li>
              <li>• Data Transformation</li>
              <li>• Relational Database Analysis</li>
              <li>• Query Structuring</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">💡 Key Takeaway</h2>
            <p className="text-slate-600">
              While this project focuses on SQL technical skills, it reflects the ability to transform raw relational 
              data into structured analytical outputs — an essential capability for data and marketing analytics roles.
            </p>
          </div>
        </div>

        {/* Full SQL Code */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-800">💻 Complete SQL Code</h2>
            <a 
              href="/projects/sql-book-dataset.sql" 
              download
              className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download SQL File
            </a>
          </div>
          <div className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto">
            <pre className="text-sm"><code>{sqlCode}</code></pre>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-block bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SQLBookstore;
