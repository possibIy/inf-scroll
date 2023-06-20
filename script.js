// Function to check if the user has scrolled to the bottom of the page
function isScrollAtBottom() {
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  
    return scrollPosition > bodyHeight - windowHeight - 100000000000; // Adjust the threshold as needed
  }
  
  // Function to load additional content
  function loadMoreContent() {
    // Simulated asynchronous content loading
    setInterval(function() {
      const newContent = document.createElement('div');
      newContent.innerHTML = '<p></p>'; // Replace with your actual content
  
      document.body.appendChild(newContent);
    }, 0.1); // Adjust the loading delay as needed
  }
  
  // Event listener for scrolling
  window.addEventListener('scroll', function() {
    if (isScrollAtBottom()) {
      loadMoreContent();
    }
  });
