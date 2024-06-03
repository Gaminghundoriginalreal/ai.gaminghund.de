async function sendMessage() {
    const prompt = document.getElementById('prompt').value;
    const chatBox = document.getElementById('chat-box');

    if (!prompt.trim()) return;

    // Zeige die Benutzer-Nachricht an
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.textContent = prompt;
    chatBox.appendChild(userMessageDiv);

    // Leere das Textfeld
    document.getElementById('prompt').value = '';

    // Scroll zum neuesten Beitrag
    chatBox.scrollTop = chatBox.scrollHeight;

    // Erstelle die Bot-Antwort
    let botResponse;
    if (/virus|illegal/i.test(prompt)) {
        botResponse = '⚠️ You are searching for illegal code ⚠️';
    } else if (/code|programmieren/i.test(prompt)) {
        botResponse = generateCodeResponse(prompt);
    } else {
        botResponse = generateGenericResponse(prompt);
    }

    // Zeige die Bot-Nachricht an
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'message bot-message';
    botMessageDiv.textContent = botResponse;
    chatBox.appendChild(botMessageDiv);

    // Scroll zum neuesten Beitrag
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateCodeResponse(prompt) {
    // Simulierter Code-Antwortgenerator
    if (/hello world/i.test(prompt)) {
        return `Here is a simple "Hello World" program in Python:

\`\`\`python
print("Hello, World!")
\`\`\``;
    } else if (/html/i.test(prompt)) {
        return `Here is a simple "Hello World" in HTML:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
\`\`\``;
    } else {
        return 'Sorry, I can only provide basic code examples right now.';
    }
}

function generateGenericResponse(prompt) {
    // Simulierter generischer Antwortgenerator
    return `This is a simulated response to your query: "${prompt}"`;
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
