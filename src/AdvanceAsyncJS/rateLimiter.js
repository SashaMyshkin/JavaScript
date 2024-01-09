/** IMPORTANT NOTE!!!!
 * 
 * 
 * The following code is written with help of ChatGPT!!!
 * 
 * 
 */

class RateLimiter {
    constructor(limitPerMinute) {
        this.limitPerMinute = limitPerMinute;
        this.queue = [];
        this.lastRequestTime = Date.now();
        this.interval = (60 / this.limitPerMinute) * 1000; // Time interval in milliseconds
    }

    enqueue(apiCall) {
        return new Promise((resolve, reject) => {
            this.queue.push({ apiCall, resolve, reject });

            if (this.queue.length === 1) {
                // If the queue was empty, start processing
                this.processQueue();
            }
        });
    }

    processQueue() {
        if (this.queue.length === 0) {
            return;
        }

        const now = Date.now();
        const timeSinceLastRequest = now - this.lastRequestTime;

        if (timeSinceLastRequest >= this.interval) {
            // Execute the next API call if enough time has elapsed
            const { apiCall, resolve, reject } = this.queue.shift();
            apiCall()
                .then(resolve)
                .catch(reject);
            this.lastRequestTime = now;
            setTimeout(() => this.processQueue(), this.interval);
        } else {
            // Wait for the next available time slot
            setTimeout(() => this.processQueue(), this.interval - timeSinceLastRequest);
        }
    }
}

// Example usage
const rateLimiter = new RateLimiter(10); // 10 requests per minute

// Example of enqueuing an API call
rateLimiter.enqueue(() => fetch('https://example.com/api/data'))
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
