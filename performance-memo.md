### Submitted by: Ruiz, Jose Alejandro DG.

## Memo: 
Next.js SSR/ISR Demo and Load Test

## Setup:
I created a MySQL database named testdb in phpMyAdmin, with a timesample table that stores a timestamp. I then built a Next.js app and installed the mysql2 package. The app has two pages. The SSR page (/server-side) queries MySQL for the latest timestamp on every request, using a connection pool, and displays it. The ISR page (/isr) shows static content that is generated once and refreshed every 10 seconds. I ran the app in production mode (npm run build, then npm start) so the results reflect real performance.

## Load test:
I used k6 to run 10 virtual users against /server-side for 10 seconds, with a one-second pause between requests. The test sent 100 requests, and all succeeded: 0% failed and 200 of 200 checks passed (status 200, and page contains “SSR Demo”). Average response time was 5.54 ms, median 2.3 ms, 95th percentile 36.02 ms, and the slowest request was 43.02 ms. Throughput was about 9.9 requests per second, which was limited by the pause in the script rather than by the server.

## Conclusion:
The SSR page handled this light load easily, with fast and stable responses. A heavier test with more users would be needed to find its limits.