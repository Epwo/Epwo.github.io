const PageDict = {
    0: 'benoe',
    1: 'smartLock',
    2: 'StudyFromHome',
    3: 'whiteboard',
    4: 'LGproject',

};

document.addEventListener("DOMContentLoaded", function() {
    // Get all square elements
    const squares = document.querySelectorAll('.square');

    // Get the ExplainZone container
    const explainZone = document.querySelector('.ExplainZone');

    // Add a click event listener to each square
    squares.forEach(square => {
        square.addEventListener('click', function() {
            // Get the square number from the ID
            const squareNumber = square.id.substring(3);

            // Load content from the corresponding HTML file
            loadContent(squareNumber);
        });
    });

    function loadContent(squareNumber) {
        // Define the file path based on the square number
        const filePath = `pages/${PageDict[squareNumber]}.html`;

        // Fetch the HTML content
        fetch(filePath)
            .then(response => {
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error(`Error loading content from ${filePath}`);
                }
                // Parse the HTML content from the response
                return response.text();
            })
            .then(htmlContent => {
                // Replace the content of ExplainZone with the loaded HTML content
                explainZone.innerHTML = htmlContent;
            })
            .catch(error => {
                console.error(error);
                // Handle errors, e.g., display an error message
                explainZone.innerHTML = `<p><i>Work in Progress..</i></p>`;
            });
    }
});
