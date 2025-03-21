document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const consentSection = document.getElementById('consent');
    const acceptButton = document.getElementById('acceptButton');
    const declineButton = document.getElementById('declineButton');
    const chatSection = document.getElementById('chat');
    const aiResponseElement = document.getElementById('aiResponse');
    const sendButton = document.getElementById('sendButton');
    const userInputElement = document.getElementById('userInput');

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        consentSection.style.display = 'block';
    });

    acceptButton.addEventListener('click', () => {
        consentSection.style.display = 'none';
        chatSection.style.display = 'block';
        aiResponseElement.innerHTML = "Hello! What's your name?";
    });

    declineButton.addEventListener('click', () => {
        consentSection.style.display = 'none';
        aiResponseElement.innerHTML = "Thank you for visiting! Take care.";
    });

    sendButton.addEventListener('click', () => {
        const userInput = userInputElement.value;
        if (userInput.trim()) {
            addChatMessage(userInput, 'user');
            getAIResponse(userInput);
            userInputElement.value = '';
        }
    });

    function addChatMessage(message, sender) {
        const chatWindow = document.getElementById('chatWindow');
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.classList.add(sender);
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function getAIResponse(input) {
        let response = '';
        if (input.toLowerCase().includes('how are you')) {
            response = "I'm here to help you. Let's talk about how you're feeling!";
        } else if (input.toLowerCase().includes('sad')) {
            response = "It's okay to feel sad sometimes. Would you like to talk about it?";
        } else {
            response = "I'm here to listen. What's on your mind?";
        }
        setTimeout(() => {
            addChatMessage(response, 'ai');
        }, 1000);
    }
});
