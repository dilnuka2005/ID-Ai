document.addEventListener('DOMContentLoaded', function() {
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    if (query) {
        document.getElementById('searchQuery').value = query;
        displayResults(query);
    } else {
        document.getElementById('searchResults').innerHTML = `
            <div class="text-center py-12">
                <p class="text-gray-500 text-lg">Please enter a search query</p>
            </div>
        `;
    }
});

function displayResults(query) {
    const resultsContainer = document.getElementById('searchResults');
    
    // Simulate loading
    setTimeout(() => {
        // Generate simulated results
        const aiResponse = generateAIResponse(query);
        const webResults = generateWebResults(query);
        
        let resultsHTML = '';
        
        // Add AI response
        resultsHTML += `
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-indigo-500">
                <div class="flex items-center mb-3">
                    <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mr-3">AI</span>
                    <h2 class="text-xl font-semibold text-indigo-700">ID AI Answer</h2>
                </div>
                <p class="text-gray-700 mb-4">${aiResponse}</p>
                <div class="text-sm text-gray-500">This is a simulated AI response based on your query.</div>
            </div>
        `;
        
        // Add web results
        webResults.forEach(result => {
            resultsHTML += `
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h2 class="text-xl font-semibold text-indigo-700 mb-2">${result.title}</h2>
                    <p class="text-gray-600 mb-3">${result.snippet}</p>
                    <a href="${result.url}" class="text-indigo-500 hover:underline">Read more</a>
                </div>
            `;
        });
        
        resultsContainer.innerHTML = resultsHTML;
    }, 800); // Simulate network delay
}

function generateAIResponse(query) {
    // Simple response patterns
    const responses = {
        "hello": "Hello! I'm ID AI, your personal AI search assistant. How can I help you today?",
        "weather": `Based on your query "${query}", I would normally fetch real-time weather data. This is a simulation, but in a real implementation, I would provide accurate weather forecasts for your location.`,
        "news": `For "${query}", I would typically show the latest news articles from reliable sources. Since this is a demo, I'm simulating that functionality.`,
        "how to": `For "${query}", I would provide step-by-step instructions and relevant resources. As an AI, I can break down complex tasks into manageable steps.`,
        "what is": `"${query}" refers to a concept I would normally explain in detail. In this simulation, I'm showing how I would structure a comprehensive answer.`
    };
    
    // Check for matching patterns
    for (const [pattern, response] of Object.entries(responses)) {
        if (query.toLowerCase().includes(pattern)) {
            return response;
        }
    }
    
    // Default response
    return `You asked about "${query}". In a full implementation, I would analyze your question using DeepSeek's advanced natural language processing to provide a comprehensive, accurate answer. This simulation shows the interface without actual AI processing.`;
}

function generateWebResults(query) {
    // Simulated web results
    const allResults = [
        {
            title: "Understanding AI Search Engines",
            snippet: `A comprehensive guide to how AI-powered search engines like ID AI work, including natural language processing and machine learning components.`,
            url: "#"
        },
        {
            title: "The Future of Search Technology",
            snippet: `How artificial intelligence is transforming the way we find information online, with examples from leading AI research.`,
            url: "#"
        },
        {
            title: `${query} - Wikipedia`,
            snippet: `Wikipedia article about ${query} covering historical context, modern applications, and related concepts.`,
            url: "#"
        },
        {
            title: `Latest Developments in ${query}`,
            snippet: `News and research updates about ${query} from academic journals and industry publications.`,
            url: "#"
        }
    ];
    
    // Return 3 results (simulating relevance)
    return allResults.slice(0, 3);
}