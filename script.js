document.getElementById('search-button').addEventListener('click', function() {
            performSearch();
        });

        document.getElementById('search-input').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });

        function performSearch() {
            const searchQuery = document.getElementById('search-input').value;
            
            // Replace 'YOUR_URL_PART' with the part of the URL you want to replace
            const baseUrl = 'https://www.qwant.com/?q=<CSEARCHINPUT>&t=web';
    
            // Replace the part of the URL with the search query
            const updatedUrl = baseUrl.replace('<CSEARCHINPUT>', encodeURIComponent(searchQuery));
    
            // Open the updated URL in a new tab
            window.location.href = updatedUrl;
        }
