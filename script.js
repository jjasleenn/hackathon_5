// Function to fetch a random quote
async function fetchQuote() {
    try {
        const response = await fetch("https://thequoteshub.com/api/");

        // Check if the response is okay
        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        // Log the response to the console for debugging
        console.log(data);

        // Check if quoteText is available
        if (!data.text) {
            throw new Error("Quote text is unavailable");
        }

        // Display the quote text
        document.getElementById("quote-text").textContent = `"${data.text}"`;

        // Check if the author is available; if not, display "Unknown"
        const author = data.author && data.author !== "" ? `- ${data.author}` : "- Unknown";
        document.getElementById("quote-author").textContent = author;

    } catch (error) {
        // Handle errors and display a fallback message
        console.error("Error fetching quote:", error);
        document.getElementById("quote-text").textContent = "Failed to load quote.";
        document.getElementById("quote-author").textContent = "";
    }
}

// Add event listener to the "New Quote" button
document.getElementById("new-quote").addEventListener("click", fetchQuote);
