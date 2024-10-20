import Link from "next/link"

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

const socials = [
    {
        icons: <FaGithub></FaGithub>,
        path: "https://github.com/Zaidshaikh2811"
    },
    {
        icons: <FaLinkedin></FaLinkedin>,
        path: "https://www.linkedin.com/in/zaid-shaikh-18a307239/"
    },
    {
        icons: <FaTwitter></FaTwitter>,
        path: ""
    },
    {
        icons: <FaInstagram></FaInstagram>,
        path: ""
    },
]


const Socials = ({ containerStyles, iconStyles }: { containerStyles: string, iconStyles: string }) => {
    return (
        <div className={containerStyles}>
            {socials.map((data, index) => {
                return <Link target="_blank" href={data.path} key={index} className={iconStyles}>
                    {data.icons}
                </Link>
            })}
        </div>
    )
}

export default Socials
