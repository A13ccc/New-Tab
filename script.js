document.getElementById('add-favorite-button').addEventListener('click', function() {
    var link = prompt("Enter the URL of the favorite:");
    if (link) {
        // Fetch the title of the website
        fetch(link)
            .then(response => response.text())
            .then(text => {
                // Extract the title from the HTML response
                var title = text.match(/<title>(.*?)<\/title>/i);
                if (title && title.length > 1) {
                    title = title[1];
                } else {
                    title = "Untitled"; // Use a default title if none found
                }
                
                // Create and append the new favorite link
                var favoriteLinks = document.getElementById('favorite-links');
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.href = link;
                a.textContent = title;
                li.appendChild(a);
                favoriteLinks.appendChild(li);
            })
            .catch(error => {
                console.error('Error fetching title:', error);
                // If there's an error fetching the title, use the URL as the title
                var favoriteLinks = document.getElementById('favorite-links');
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.href = link;
                a.textContent = link;
                li.appendChild(a);
                favoriteLinks.appendChild(li);
            });
    }
});
