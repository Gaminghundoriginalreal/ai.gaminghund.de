async function sendMessage() {
    const prompt = document.getElementById('prompt').value;
    const chatBox = document.getElementById('chat-box');

    if (!prompt.trim()) return;

    // Zeige die Benutzer-Nachricht an
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.textContent = prompt;
    chatBox.appendChild(userMessageDiv);

    // Simulierte Bot-Antwort
    const botResponse = `Antwort zu: ${prompt}`;

    // Zeige die Bot-Nachricht an
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'message bot-message';
    botMessageDiv.textContent = botResponse;
    chatBox.appendChild(botMessageDiv);

    // Leere das Textfeld
    document.getElementById('prompt').value = '';
    
    // Scroll zum neuesten Beitrag
    chatBox.scrollTop = chatBox.scrollHeight;
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
