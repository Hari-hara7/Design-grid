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
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/your-repo/pattern-2',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-1-/',
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
