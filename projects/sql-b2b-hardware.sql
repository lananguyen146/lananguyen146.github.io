
/* Data Cleaning
*/
SELECT DISTINCT sp.product
FROM sales_pipeline sp
LEFT JOIN products p
    ON sp.product = p.product
WHERE p.product IS NULL


UPDATE sales_pipeline
SET product = 'GTX Pro'
WHERE product = 'GTXPro';

/* Question 1: How many opportunities are in each deal_stage, and what percentage of total pipeline do they represent?
*/
SELECT
    deal_stage,
    COUNT(*) AS opportunity_count,
    CAST(
        COUNT(*) * 100.0 / SUM(COUNT(*)) OVER ()
        AS DECIMAL(5,2)
    ) AS percentage_of_pipeline
FROM sales_pipeline
GROUP BY deal_stage
ORDER BY opportunity_count DESC;

/* Question 2: What is the win (won) rate by product?
*/
SELECT
    p.product,
    SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) AS won_deals,
    CAST(
        SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) * 100.0
        / COUNT(*)
        AS DECIMAL(5,2)
    ) AS win_rate,
    SUM(CASE WHEN sp.deal_stage = 'Lost' THEN 1 ELSE 0 END) AS lost_deals,
    CAST(
        SUM(CASE WHEN sp.deal_stage = 'Lost' THEN 1 ELSE 0 END) * 100.0
        / COUNT(*)
        AS DECIMAL(5,2)
    ) AS lost_rate
FROM sales_pipeline AS sp
JOIN products AS p 
    ON p.product = sp.product
WHERE sp.deal_stage IN ('Won','Lost')
GROUP BY p.product
ORDER BY win_rate DESC;

/* Question 3: For each product, what are the total revenue and average deal size?
*/
SELECT
    product,
    SUM(close_value) AS total_revenue,
    AVG(close_value) AS avg_deal_size
FROM sales_pipeline
WHERE deal_stage = 'Won'
GROUP BY product
ORDER BY total_revenue DESC;

/* Question 4: Which account sectors have the highest close rate and average deal value?
*/
SELECT
    a.sector,
    SUM(sp.close_value) AS total_value,
    AVG(CASE WHEN sp.deal_stage = 'Won' THEN sp.close_value END) AS avg_deal_value,
    CAST(
         SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) * 100.0
         / COUNT(*)
         AS DECIMAL(5,2)
        ) AS win_rate
FROM sales_pipeline AS sp
JOIN accounts AS a ON sp.account = a.account
WHERE sp.deal_stage IN ('Won','Lost')
GROUP BY a.sector
ORDER BY total_value DESC

/* Question 5: What is the average number of days from engage_date to close_date, and how does it vary by product and sector?
*/
SELECT
    p.product,
    a.sector,
    AVG(DATEDIFF(DAY, sp.engage_date, sp.close_date)) AS avg_days_to_close
FROM sales_pipeline AS sp
JOIN products AS p ON p.product = sp.product
JOIN accounts AS a ON a.account = sp.account
WHERE sp.deal_stage = 'Won'
GROUP BY p.product, a.sector
ORDER BY avg_days_to_close;

/* Question 6: How do deal value, win rate and average sales cycle length differ by company size (employees)?
*/
SELECT
    CASE
        WHEN a.employees < 50 THEN 'Small'
        WHEN a.employees >=50 AND a.employees < 250 THEN 'Medium'
        WHEN a.employees >=250 AND a.employees < 1000 THEN 'Large'
        ELSE 'Enterprise'
    END AS company_size,
    SUM(sp.close_value) AS total_value,
    AVG(CASE WHEN sp.deal_stage = 'Won' THEN sp.close_value END) AS avg_deal_value,
    CAST(
         SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) * 100.0
         / COUNT(*)
         AS DECIMAL(5,2)
        ) AS win_rate,
    AVG(CASE WHEN sp.deal_stage = 'Won' THEN DATEDIFF(day, sp.engage_date, sp.close_date) END) AS avg_sales_cycle_days
FROM sales_pipeline AS sp
JOIN accounts AS a ON sp.account = a.account
WHERE sp.deal_stage IN ('Won','Lost')
GROUP BY
      CASE
            WHEN a.employees < 50 THEN 'Small'
            WHEN a.employees >=50 AND a.employees < 250 THEN 'Medium'
            WHEN a.employees >=250 AND a.employees < 1000 THEN 'Large'
            ELSE 'Enterprise'
       END
ORDER BY total_value DESC


/* Question 7: How do revenue, win rate, and deal size vary by regional_office and manager?
*/
SELECT
    st.regional_office,
    st.manager,
    SUM(sp.close_value) AS revenue,
    CAST(
         SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) * 100.0
         / COUNT(*)
         AS DECIMAL(5,2)
        ) AS win_rate,
    AVG(CASE WHEN sp.deal_stage = 'Won' THEN sp.close_value END) AS avg_deal_value
FROM sales_pipeline AS sp
JOIN sales_teams AS st ON sp.sales_agent = st.sales_agent
WHERE sp.deal_stage IN ('Won', 'Lost')
GROUP BY st.regional_office, st.manager
ORDER BY revenue DESC