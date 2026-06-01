import { openLink, scrollTo } from "./methods";


const header = {
    menus: [
        { title: 'Home', id: 'home' },
        { title: 'About Me', id: 'my-self' },
        { title: 'Services', id: 'experience' },
        { title: 'Projects', id: 'my-work' },
        { title: 'Reviews', id: 'reviews' },
        { title: 'Certifications', id: 'certifications' },
        { title: 'Contact', id: 'contact' },
    ],
    rightBtn: {
        label: 'Download CV',
        onClick: () => openLink('Sandhya_Shukla_Resume.pdf')
    },
    logo: {
        src: '/profile-image.png',
        alt: 'Sandhya Shukla'
    },
    handleIconClick: () => scrollTo('home'),
    handleItemSelect: (menu) => scrollTo(menu.id),
}

export default header