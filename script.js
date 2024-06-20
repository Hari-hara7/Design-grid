document.addEventListener('DOMContentLoaded', () => {
    // Patterns data
    const patterns = [
        { 
            title: 'Pattern 1', 
            image: 'Classic Polka Dot Background Pattern - Google Chrome 6_20_2024 2_26_25 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-1-.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-1-/',
            description: 'This is a sample text to showcase the classic polka dot background pattern. The pattern is elegant and subtle, making the content easy to read while adding a touch of sophistication to the overall design.'
        },
        { 
            title: 'Pattern 2', 
            image: 'Attractive Patterned Background - Google Chrome 6_20_2024 8_51_02 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-2.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-2/',
            description: 'This is an example of an attractive patterned background using CSS gradients and patterns.'
        },

        { 
            title: 'Pattern 3', 
            image: 'Classic Patterned Background - Google Chrome 6_20_2024 8_52_48 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-3.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-3/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },

        { 
            title: 'Pattern 4', 
            image: 'Classic Striped Background Pattern - Google Chrome 6_20_2024 8_54_31 PM.png', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 5', 
            image: 'Untitled - Google Chrome 6_20_2024 8_56_17 PM.png', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 6', 
            image: 'Untitled - Google Chrome 6_20_2024 8_58_53 PM.png', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 7', 
            image: 'Constellation Background Pattern - Google Chrome 6_20_2024 9_01_15 PM.png', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 8', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },

        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },


        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },

        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },

        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },


        { 
            title: 'Pattern 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://your-preview-link/pattern-2',
            description: 'Description for Pattern 2. Phasellus consequat neque a nibh faucibus, sit amet finibus ante malesuada.'
        },
        // Add more patterns here
    ];

    // Backgrounds data
    const backgrounds = [
        { 
            title: 'Background 1', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/background-1',
            previewLink: 'https://your-preview-link/background-1',
            description: 'Description for Background 1. Integer fermentum metus et velit cursus, ac congue felis sagittis.'
        },
        { 
            title: 'Background 2', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/background-2',
            previewLink: 'https://your-preview-link/background-2',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },
        // Add more backgrounds here
    ];

    // Function to generate cards
    const generateCards = (data, containerClass) => {
        const container = document.querySelector(containerClass);

        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.githubLink}" target="_blank" class="btn primary">View on GitHub</a>
                <a href="${item.previewLink}" target="_blank" class="btn secondary">Preview in Chrome</a>
            `;
            container.appendChild(card);
        });
    };

    // Generate pattern cards
    generateCards(patterns, '.pattern-grid');

    // Generate background cards
    generateCards(backgrounds, '.background-grid');
});




// script.js

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Toggle the active class on both burger menu and nav links
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close the navigation menu if a nav link is clicked (optional)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});
