function sendMessage() {
    const userInput = document.getElementById('user');
    const chatBody = document.getElementById('chat');

    const userMessage = userInput.value.trim();

    if (userMessage !== '') {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('chat-message', 'user-message');
        userMessageDiv.innerHTML = `<p>${userMessage}</p>`;
        chatBody.appendChild(userMessageDiv);

        setTimeout(() => {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('chat-message', 'bot-message');
            botMessageDiv.innerHTML = '<p>Your imaginary friend is hearing you</p>';
            chatBody.appendChild(botMessageDiv);
        }, 1000);

        userInput.value = '';

        chatBody.scrollTop = chatBody.scrollHeight;
    }
}
