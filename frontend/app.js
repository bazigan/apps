document.getElementById('fetchBtn').addEventListener('click', async () => {
    const apiUrl = window.env.BACKEND_URL || 'http://backend-service:3000/api';
    const response = await fetch(apiUrl);
    const data = await response.json();
    document.getElementById('message').innerText = data.message;
}); 