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
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-4.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-4/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 5', 
            image: 'Untitled - Google Chrome 6_20_2024 8_56_17 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-5.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-5/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 6', 
            image: 'Untitled - Google Chrome 6_20_2024 8_58_53 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-6.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-6/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 7', 
            image: 'Constellation Background Pattern - Google Chrome 6_20_2024 9_01_15 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-7.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-7/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 8', 
            image: 'Untitled - Google Chrome 6_20_2024 9_05_10 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-8.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-8/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 9', 
            image: 'Untitled - Google Chrome 6_20_2024 9_07_37 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-9.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-9/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 10', 
            image: 'Untitled - Google Chrome 6_20_2024 9_11_53 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-10.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-10/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 11', 
            image: 'Untitled - Google Chrome 6_20_2024 9_14_51 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-11.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-11/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 12', 
            image: 'Untitled - Google Chrome 6_20_2024 9_18_38 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-12.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-12/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 13', 
            image: 'Untitled - Google Chrome 6_20_2024 9_20_25 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-13.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-13/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 14', 
            image: 'Untitled - Google Chrome 6_20_2024 9_22_33 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-14.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-14/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 15', 
            image: 'Untitled - Google Chrome 6_20_2024 9_23_37 PM.png', 
            githubLink:'https://github.com/Hari-hara7/pattern-background-web-15.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-15/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 16', 
            image: 'Untitled - Google Chrome 6_20_2024 9_24_29 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-16.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-16/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 17', 
            image: 'Untitled - Google Chrome 6_20_2024 9_26_58 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-17.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-17/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },

        { 
            title: 'Pattern 18', 
            image: 'Untitled - Google Chrome 6_20_2024 9_27_50 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-18.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-18/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 19', 
            image: 'Untitled - Google Chrome 6_20_2024 9_29_53 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-19.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-19/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 20', 
            image: 'Untitled - Google Chrome 6_20_2024 9_30_53 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-20.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-20/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 21', 
            image: 'Untitled - Google Chrome 6_20_2024 9_32_00 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-21.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-21/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 22', 
            image: 'Untitled - Google Chrome 6_20_2024 9_32_52 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-22.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-22/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 23', 
            image: 'Untitled - Google Chrome 6_20_2024 9_32_52 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-23.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-23/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },
        { 
            title: 'Pattern 24', 
            image: 'Tech Blog - Google Chrome 6_20_2024 9_35_33 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-24.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-24/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },


        { 
            title: 'Pattern 25', 
            image: 'Untitled - Google Chrome 6_20_2024 9_36_44 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-25.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-25/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },

        { 
            title: 'Pattern 26', 
            image: 'Untitled - Google Chrome 6_20_2024 9_36_44 PM - Copy.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-26.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-26/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },

        { 
            title: 'Pattern 27', 
            image: 'Untitled - Google Chrome 6_20_2024 9_40_38 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-27.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-27/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },


        { 
            title: 'Pattern 28', 
            image: 'Untitled - Google Chrome 6_20_2024 9_44_14 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-28.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-28/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },

        { 
            title: 'Pattern 29', 
            image: 'Untitled - Google Chrome 6_20_2024 9_45_11 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-29.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-29/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },

        { 
            title: 'Pattern 30', 
            image: 'Untitled - Google Chrome 6_20_2024 9_46_23 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/pattern-background-web-30.git',
            previewLink: 'https://hari-hara7.github.io/pattern-background-web-30/',
            description: 'This is an example of a classic patterned background with a subtle damask-inspired pattern.'
        },

        // Add more patterns here
    ];

    // Backgrounds data
    const backgrounds = [
        { 
            title: 'Background 1', 
            image: 'Advanced 3D Animated Background - Google Chrome 6_21_2024 12_53_56 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-background1.git',
            previewLink: 'https://hari-hara7.github.io/web-background1/',
            description: 'Description for Background 1. Integer fermentum metus et velit cursus, ac congue felis sagittis.'
        },
        { 
            title: 'Background 2', 
            image: 'Design Grid - Google Chrome 6_21_2024 12_55_28 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/background-web2.git',
            previewLink: 'https://hari-hara7.github.io/background-web2/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 3', 
            image: 'Design Grid - Google Chrome 6_21_2024 12_57_21 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/3d-background-animation.git',
            previewLink: 'https://hari-hara7.github.io/3d-background-animation/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 4', 
            image: 'Design Grid - Google Chrome 6_21_2024 12_58_43 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-4-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-4-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 5', 
            image: 'Design Grid - Google Chrome 6_21_2024 12_59_51 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-5-3d.git',
            previewLink: 'https://hari-hara7.github.io/web-5-3d/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 6', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_02_20 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-6-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-6-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 7', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_03_27 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-7-3d.git',
            previewLink: 'https://hari-hara7.github.io/web-7-3d/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },


        { 
            title: 'Background 8', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_04_43 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web--3d-.git',
            previewLink: 'https://hari-hara7.github.io/web--3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 9', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_05_52 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/3d-web9.git',
            previewLink: 'https://hari-hara7.github.io/3d-web9/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 10', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_06_44 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-10-3d.git',
            previewLink: 'https://hari-hara7.github.io/web-10-3d/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

       

        { 
            title: 'Background 11', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_07_38 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-11-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-11-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 12', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_09_34 PM - Copy.png', 
            githubLink: 'https://github.com/Hari-hara7/web-12-3d.git',
            previewLink: 'https://hari-hara7.github.io/web-12-3d/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 13', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_11_28 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-13-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-13-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },


        { 
            title: 'Background 14', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_12_44 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-14-3d.git',
            previewLink: 'https://hari-hara7.github.io/web-14-3d/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 15', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_14_38 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-15-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-15-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 16', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_15_43 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-16-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-16-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 17', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_17_06 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-17-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-17-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },


        { 
            title: 'Background 18', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_18_30 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-18-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-18-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 19', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_19_28 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-19-3d--.git',
            previewLink: 'https://hari-hara7.github.io/web-19-3d--/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 20', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_21_57 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-20-3d.git',
            previewLink: 'https://hari-hara7.github.io/web-20-3d/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 21', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_23_48 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-21-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-21-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 22', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_24_45 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-22-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-22-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 23', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_26_01 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-23-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-23-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 24', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_26_54 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-24-3d--.git',
            previewLink: 'https://hari-hara7.github.io/web-24-3d--/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 25', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_28_14 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-25-3d.git',
            previewLink: 'https://hari-hara7.github.io/web-25-3d/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 26', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_29_06 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-26-3d.git',
            previewLink: 'https://hari-hara7.github.io/web-26-3d/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 27', 
            image: 'Design Grid - Google Chrome 6_21_2024 1_30_30 PM.png', 
            githubLink: 'https://github.com/Hari-hara7/web-27-3d-.git',
            previewLink: 'https://hari-hara7.github.io/web-27-3d-/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 28', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/Hari-hara7/web-28-3d.git',
            previewLink: 'https://hari-hara7.github.io/web-28-3d/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 29', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/Hari-hara7/web-29-3d.git',
            previewLink: 'https://hari-hara7.github.io/web-29-3d/',
            description: 'Description for Background 2. Duis tristique lorem sed nulla dignissim, et convallis leo sodales.'
        },

        { 
            title: 'Background 30', 
            image: 'https://via.placeholder.com/300', 
            githubLink: 'https://github.com/Hari-hara7/GSAP-sample-animation.git',
            previewLink: 'https://hari-hara7.github.io/GSAP-sample-animation/',
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
                <a href="${item.githubLink}" target="_blank" class="btn primary">Get Source Code </a>
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
