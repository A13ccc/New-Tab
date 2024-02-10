document.getElementById('search-button').addEventListener('click', function() {
    var query = document.getElementById('search-input').value.trim();
    if (query !== "") {
        var searchUrl = "https://www.qwant.com/?q=" + encodeURIComponent(query);
        window.location.href = searchUrl;
    }
});
