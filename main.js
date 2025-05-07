// Save search query to localStorage
function saveQuery() {
    const query = document.getElementById('searchQuery').value;
    if (query) {
        // Save to recent searches
        let searches = JSON.parse(localStorage.getItem('recentSearches') || [];
        searches.unshift(query);
        searches = searches.slice(0, 5); // Keep only last 5 searches
        localStorage.setItem('recentSearches', JSON.stringify(searches));
        
        // Save current query for context
        localStorage.setItem('currentQuery', query);
    }
}

// Simple autocomplete
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchQuery');
    
    if (searchInput) {
        // Load recent searches for autocomplete
        const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
        
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            if (query.length > 2) {
                // Simulate autocomplete
                console.log('Simulating autocomplete for:', query);
            }
        });
        
        // If coming from a search, populate the field
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('q');
        if (searchParam) {
            searchInput.value = searchParam;
        }
    }
});