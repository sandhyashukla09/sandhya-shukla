import { openLink } from "./methods"

const contact = {
    label: `Get in touch`,
    heading: `Let's Work Together`,
    description: `I'm open for new opportunities — whether it's a creative project, digital campaign, or a full-scale brand transformation. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!`,
    button: {
        label: 'Say Hello',
        onClick: () => openLink('mailto:shuklasandhya09@gmail.com?subject=Hello')
    },
    designAndBuiltBy: 'Designed & Built By Sandhya Shukla',
    handleBuiltByClick: () => openLink('mailto:shuklasandhya09@gmail.com')
}

export default contact
