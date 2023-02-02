let cardsData = [
    {
        state: 'todo',
        name: 'Hero section',
        type: 'design system',
        description: 'Create a design system for a hero section in 2 different variants. Create a simple presentation with these components.',
        user: {
            initials: 'MT',
            color: 'pink',
        },
    },
    {
        state: 'todo',
        name: 'Typography change',
        type: 'typography',
        description: 'Modify typography and styling of text placed on 6 screens of the website design. Prepare a documentation.',
        user: {
            initials: 'IG',
            color: 'orange',
        },
    },
    {
        state: 'inprogress',
        name: 'Implement design screens',
        type: 'development',
        description: 'Our designers created 6 screens for a website that needs to be implemented by our dev team.',
        user: {
            initials: 'MT',
            color: 'pink',
        },
    },
    {
        state: 'done',
        name: 'Fix bugs in the CSS code',
        type: 'development',
        description: 'Fix small bugs that are essential to prepare for the next release that will happen this quarter.',
        user: {
            initials: 'MT',
            color: 'pink',
        },
    },
    {
        state: 'done',
        name: 'Proofread final text',
        type: 'typography',
        description: 'The text provided by marketing department needs to be proofread so that we make sure that it fits into our design.',
        user: {
            initials: 'IG',
            color: 'orange',
        },
    },
    {
        state: 'done',
        name: 'Responsive design',
        type: 'design system',
        description: 'Our designers created 6 screens for a website that needs to be implemented by our dev team.',
        user: {
            initials: 'MT',
            color: 'pink',
        },
    },
];

let mapTypeColor = {
    'design system': 'green',
    'typography': 'blue',
    'development': 'pink',
};

let makeElement = function (tagName,  className, text) {
    let element = document.createElement(tagName);
    if (className) {
        element.classList.add(className);
    }
    
    if (text) {
        element.textContent = text;
    }

    return element;
};


let makeImage = function (src, alt) {
    let picture = makeElement('img');
    picture.src = src;
    picture.alt = alt;
    return picture;
}

let createCardType = function (type) {
    let cardType = makeElement('div', 'card-type');

    let cardTypeColor = makeElement ('div', 'type-color');
    cardTypeColor.classList.add(mapTypeColor[type]);
    cardType.appendChild(cardTypeColor); 
    cardType.textContent = type;

    return cardType;
};

let createIconButton = function () {
    let iconButton = makeElement('button', 'icon-button');
    
    let picture = makeImage('threePoints.svg', '...');
    iconButton.appendChild(picture);

    return iconButton;
};

let createCardHeader = function (type) {
    let cardHeader = makeElement('div', 'card-header');

    let cardType = createCardType(type);
    cardHeader.appendChild(cardType);

    let iconButton = createIconButton();
    cardHeader.appendChild(iconButton);

    return cardHeader;
};

let createCard = function (card) {
    let cardElement = makeElement('div', 'card');
    let cardHeader = createCardHeader(card.type);
    cardElement.appendChild(cardHeader);

    let cardName = makeElement('h3', '', card.name);
    cardElement.appendChild(cardName);

    let cardDescription = makeElement('p', '', card.description);
    cardElement.appendChild(cardDescription);

    let imageUser = makeImage ('assets/asignee1.svg', card.user.initials)
    cardElement.appendChild(imageUser);

    return cardElement;
}

let cardContainer = document.querySelector('.card-container');

for (let i = 0; i < cardsData.length; i++) {
    let cardItem = createCard(cardsData[i]);
    cardContainer.appendChild(cardItem);
}

console.log('irik');

