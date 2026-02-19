const portfolio = [
        {
            "title": "Certiverse",
            "description": "Certiverse is an online platform that offers a wide range of IT certification exams. I was responsible for the redesign of the homepage, which resulted in a 20% increase in user engagement and a 15% increase in conversion rates.",
            "image": "certiverse.webp",
            "link": "https://www.figma.com/proto/ONzvU3kfw00OMl3ZWIGr76/Test-Creator-Home-Page?node-id=132-3261&p=f&t=FSXkF2qOfO9eKPIL-1&scaling=contain&content-scaling=fixed&page-id=132%3A29"
        },
        {
            "title": "ReplyFriend",
            "description": "ReplyFriend is an AI-powered email assistant that helps users manage their inbox more efficiently. I was reponsible for conducting user research and helping build the foundations of the product, from personas, journey maps, wireframes to branding.",
            "image": "replyfriend.webp",
            "link": "https://docs.google.com/presentation/d/17nUJ6GEmvFFM8GMhenO3ZNjx1-SyPTTvOrUSS15VUZk/edit?usp=sharing"
        },
        {
            "title": "Cubieverse",
            "description": "Cubieverse is a Play2Earn geolocation game where players explore the world and solve trivia. I was responsible for the redesign of the login process, which transformed a 90% drop-off rate into 15% drop-off rate, significantly better than industry standards.",
            "image": "cubieverse.webp",
            "link": "https://www.figma.com/proto/NgsSZC7ZKRuM4hwQkpG47Z/Login-Process-Revamp-Phase-1?node-id=1-225&p=f&t=XMqXM0ZmNA8lwotI-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A225&show-proto-sidebar=1"
        }
    ];

const portfolioContainer = document.getElementById('portfolio-container');

portfolio.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('portfolio-card');

    const projectCardSection = document.createElement('div');
    projectCardSection.classList.add('portfolio-card-section');

    const projectImageSection = document.createElement('div');
    projectImageSection.classList.add('portfolio-card-image-section');

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;

    const projectImage = document.createElement('img');
    projectImage.src = `images/${project.image}`;
    projectImage.alt = `preview image of ${project.title}`;
    projectImage.loading = 'lazy';

    const projectLinkButton = document.createElement('button');
    projectLinkButton.textContent = 'View Project';
    projectLinkButton.classList.add('tonal-button');

    projectLinkButton.addEventListener('click', () => {
        window.open(project.link, '_blank');
    });
    portfolioContainer.appendChild(projectCard);
    projectCard.appendChild(projectCardSection);
    projectCardSection.appendChild(projectTitle);
    projectCardSection.appendChild(projectDescription);
    projectCardSection.appendChild(projectLinkButton);
    projectCard.appendChild(projectImageSection);
    projectImageSection.appendChild(projectImage);
})