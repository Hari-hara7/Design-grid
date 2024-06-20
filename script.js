document.addEventListener('DOMContentLoaded', () => {
    const patterns = [
        { title: 'Pattern 1', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 2', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 3', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 4', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 5', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 6', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 7', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 8', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 9', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 10', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 11', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 12', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 13', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 14', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 15', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 16', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 17', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 18', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 19', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 20', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 21', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 22', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 23', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 24', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 25', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 26', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 27', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 28', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 29', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },
        { title: 'Pattern 30', image: 'https://via.placeholder.com/300', code: '/* CSS Code for Pattern 1 */' },

   


        // Add more patterns here
    ];

    const backgrounds = [
        { title: 'Background 1', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 1 -->' },
        { title: 'Background 2', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 3', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 4', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 5', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 6', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 7', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 8', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 9', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 10', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 11', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },

        { title: 'Background 12', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },

        { title: 'Background 13', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },

        { title: 'Background 14', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },

        { title: 'Background 15', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },

        { title: 'Background 16', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 17', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },

        { title: 'Background 18', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },

        { title: 'Background 20', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },

        { title: 'Background 21', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },

        { title: 'Background 22', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },

        { title: 'Background 23', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },

        { title: 'Background 24', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 25', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 26', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },
        { title: 'Background 27', image: 'https://via.placeholder.com/300', code: '<!-- HTML/JS Code for Background 2 -->' },



        // Add more backgrounds here
    ];

    const patternGrid = document.querySelector('.pattern-grid');
    const backgroundGrid = document.querySelector('.background-grid');
    const codeModal = document.getElementById('codeModal');
    const codeSnippet = document.getElementById('codeSnippet');
    const closeBtn = document.querySelector('.close-btn');

    patterns.forEach(pattern => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${pattern.image}" alt="${pattern.title}">
            <h3>${pattern.title}</h3>
            <button class="btn primary" onclick="showCode('${pattern.code}')">Get Code</button>
        `;
        patternGrid.appendChild(card);
    });

    backgrounds.forEach(background => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${background.image}" alt="${background.title}">
            <h3>${background.title}</h3>
            <button class="btn primary" onclick="showCode('${background.code}')">Get Code</button>
        `;
        backgroundGrid.appendChild(card);
    });

    window.showCode = (code) => {
        codeSnippet.textContent = code;
        codeModal.style.display = 'flex';
    };

    closeBtn.addEventListener('click', () => {
        codeModal.style.display = 'none';
    });

    window.onclick = (event) => {
        if (event.target === codeModal) {
            codeModal.style.display = 'none';
        }
    };

    // Chatbot functionality
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotWindow = document.querySelector('.chatbot-window');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatbotBody = document.querySelector('.chatbot-body');

    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'flex' : 'none';
    });

    sendBtn.addEventListener('click', () => {
        const message = chatInput.value;
        if (message.trim()) {
            appendMessage('User', message);
            chatInput.value = '';
            setTimeout(() => {
                appendMessage('Chatbot', 'This is a response from the chatbot.');
            }, 1000);
        }
    });

    const appendMessage = (sender, message) => {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${sender.toLowerCase()}`;
        messageElement.textContent = `${sender}: ${message}`;
        chatbotBody.appendChild(messageElement);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    };

    // Burger menu functionality
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('toggle');
        burger.classList.toggle('toggle');
    });
});
