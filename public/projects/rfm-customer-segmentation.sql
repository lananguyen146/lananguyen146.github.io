-- DATA PREPARATION
SELECT
    COUNT(*) AS total_raw,
    SUM(CASE WHEN Customer_ID IS NULL THEN 1 ELSE 0 END) AS missing_customer,
    SUM(CASE WHEN Invoice LIKE 'C%' THEN 1 ELSE 0 END) AS cancellations,
    SUM(CASE WHEN Quantity <= 0 THEN 1 ELSE 0 END) AS bad_quantity,
    SUM(CASE WHEN Price <= 0 THEN 1 ELSE 0 END) AS bad_price
FROM online_retail_ii;

CREATE VIEW clean_retail AS
SELECT DISTINCT
    Customer_ID AS CustomerID,
    Invoice  AS InvoiceNo,
    InvoiceDate AS InvoiceDate,
    StockCode AS StockCode,
    Description AS Description,
    Quantity AS Quantity,
    ROUND(Price,2) AS UnitPrice,
    Country AS Country,
    ROUND(Quantity * Price,2) AS Revenue
FROM online_retail_ii
WHERE Customer_ID IS NOT NULL
  AND Invoice NOT LIKE 'C%'
  AND StockCode NOT LIKE 'TEST%'
  AND Quantity > 0
  AND Price > 0
  
SELECT * FROM clean_retail

SELECT * FROM online_retail_II

-- CALCULATE AND SCORE RFM

CREATE VIEW rfm_segments AS

WITH snapshot AS (
    SELECT DATEADD(DAY, 1, MAX(InvoiceDate)) AS SnapDate
FROM clean_retail
),
base AS (
    SELECT
        c.CustomerID,
        DATEDIFF(DAY, MAX(c.InvoiceDate), s.SnapDate) AS Recency,
        COUNT(DISTINCT c.InvoiceNo) AS Frequency,
        ROUND(SUM(c.Revenue),2) AS Monetary
    FROM clean_retail AS c
    CROSS JOIN snapshot AS s
    GROUP BY c.CustomerID, s.SnapDate
),
scored AS (
  SELECT *,
    NTILE(5) OVER (ORDER BY Recency DESC) AS R,
    NTILE(5) OVER (ORDER BY Frequency)    AS F,
    NTILE(5) OVER (ORDER BY Monetary)     AS M
  FROM base
)
SELECT *,
  CONCAT(CAST(R AS VARCHAR),
         CAST(F AS VARCHAR),
         CAST(M AS VARCHAR))  AS rfm_code,
  CASE
    WHEN R >= 4 AND F >= 4 AND M >= 4 THEN 'Champion'
    WHEN R >= 3 AND F >= 3            THEN 'Loyal customer'
    WHEN R >= 4 AND F <= 2            THEN 'Potential loyalist'
    WHEN R = 2 AND (F >= 3 OR M >= 3) THEN 'At risk'
    WHEN R <= 2 AND F <= 2            THEN 'Hibernating'
    ELSE                                   'Needs attention'
  END AS segment 
FROM scored



