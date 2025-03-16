function addrecommendation() {
    const nameInput = document.getElementById("Recommendation"); // User's name (optional)
    const messageInput = document.getElementById("Message"); // User's recommendation (message)
    const nameText = nameInput.value.trim();
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const recommendationsContainer = document.getElementById("Allrecommendations");

        // Create a recommendation box
        const box = document.createElement("div");
        box.className = "recommendation-box";

        // Add quotation marks and content
        const leftQuote = document.createElement("span");
        leftQuote.innerHTML = "&#x275D"; // Left quotation mark
        const rightQuote = document.createElement("span");
        rightQuote.innerHTML = "&#x275E"; // Right quotation mark

        const nameLine = document.createElement("p");
        if (nameText) {
            // If the name is entered, show it
            nameLine.className = "recommendation-name";
            nameLine.textContent = nameText + ":"; // Name followed by a colon
        }

        const messageLine = document.createElement("p");
        messageLine.className = "recommendation-message";
        messageLine.textContent = messageText;

        // Append all elements in order
        box.appendChild(leftQuote);
        if (nameText) box.appendChild(nameLine); // Append name if provided
        box.appendChild(messageLine); 
        box.appendChild(rightQuote);

        // Append box to the container
        recommendationsContainer.appendChild(box);

        // Clear the inputs
        nameInput.value = "";
        messageInput.value = "";
    } else {
        alert("Please enter a valid recommendation.");
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0, // Scrolls to the very top of the page
        behavior: "smooth" // Adds smooth scrolling animation
    });
}
function popup()
{
    alert("Thank you for submitting a recommendation!");
}
