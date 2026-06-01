import { openLink } from "./methods"

const outer = {
    title1:  `Hi, I'm`,
    title2: 'Sandhya Shukla,',
    decrypTexts: [
        'A Creative Web Designer',
        'A UI/UX Designer',
        'A Digital Marketing Specialist',
        'An App Developer',
        'A Graphic Designer',
        'A Content Strategist',
        'A Social Media Manager',
    ],
    desciption: `I'm Sandhya Shukla, a passionate creative freelancer focused on building modern digital experiences that combine strategy, design, and technology. My goal is to help businesses create powerful online identities through visually engaging, user-focused, and high-converting digital solutions.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:shuklasandhya09@gmail.com?subject=Hello')
    }
}

export default outer
