document.getElementById('search-button').addEventListener('click', function() {
    var query = document.getElementById('search-input').value.trim();
    if (query !== "") {
        var searchUrl = "https://www.qwant.com/?q=" + encodeURIComponent(query);
        window.location.href = searchUrl;
    }
});

document.getElementById('search-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    var query = document.getElementById('search-input').value.trim();
    if (query !== "") {
      var searchUrl = "https://www.qwant.com/?q=" + encodeURIComponent(query);
      window.location.href = searchUrl;
    }
  }
});

const addBookmarkButton = document.getElementById('add-bookmark');
addBookmarkButton.addEventListener('click', handleBookmarkClick);

function handleBookmarkClick() {
  const siteUrl = "https://" + prompt("Enter the website URL:");
  const title = prompt("Enter the bookmark title:");
  const pictureUrl = prompt("Enter the image URL for the thumbnail:");

  if (!siteUrl || !title || !pictureUrl) {
    return; // Handle case where user cancels or doesn't fill all fields
  }

  // Create the bookmark object
  const bookmark = {
    url: siteUrl,
    title: title,
    thumbnail: pictureUrl,
  };

  // Add the bookmark (call updated function)
  addBookmark(bookmark);
}

function addBookmark(bookmark) {
  const bookmarkElement = createBookmarkElement(bookmark);
  const bookmarksContainer = document.getElementById('bookmarks-container');
  bookmarksContainer.appendChild(bookmarkElement);
}

function createBookmarkElement(bookmark) {
  // Create div element for the bookmark
  const bookmarkElement = document.createElement('div');
  bookmarkElement.classList.add('bookmark'); // Add a class for styling

  // Create elements for URL, title, and thumbnail
  const urlElement = document.createElement('a');
  urlElement.href = bookmark.url;
  urlElement.target = '_blank'; // Open link in new tab
  urlElement.textContent = bookmark.title;

  const thumbnailElement = document.createElement('img');
  thumbnailElement.src = bookmark.thumbnail;
  thumbnailElement.alt = bookmark.title; // Accessibility

  // Append elements to the bookmark div
  bookmarkElement.appendChild(urlElement);
  bookmarkElement.appendChild(thumbnailElement);

  // Add event listeners for desired actions
  // Placeholders for your specific actions
  bookmarkElement.addEventListener('click', () => {
    // Implement custom action on click (e.g., open link)
  });

  bookmarkElement.addEventListener('mouseover', () => {
    // Implement hover effect styles
  });

  bookmarkElement.addEventListener('mouseout', () => {
    // Remove hover effect styles
  });

  return bookmarkElement;
}
