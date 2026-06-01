import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://wa.me/919826385094',
        'instagram': 'https://www.instagram.com/',
        'twitter': 'https://www.linkedin.com/in/',
        'linkedin': 'https://www.behance.net/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'shuklasandhya09@gmail.com',
        onClick: () => openLink('mailto:shuklasandhya09@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements