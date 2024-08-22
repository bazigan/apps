document.getElementById('fetchBtn').addEventListener('click', async () => {
    const apiUrl = window.env.BACKEND_URL || 'http://localhost:4000/api';  // Pastikan ini adalah URL yang benar
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('message').innerText = data.message;
    } catch (error) {
        console.error("Error fetching data from backend:", error);
    }
});