'use client'
import { Facebook, Twitter, Mail, Linkedin, Instagram } from "lucide-react"
import styles from './SocialIcons.module.css'

function SocialIcon({ href, Icon }) {
  return (
    <li className="">
      <a href={href} className={styles.socialLink}>
        <Icon className="w-8 h-8 text-[#262626] hover:text-white transition-colors duration-500" />
      </a>
    </li>
  )
}

SocialIcon.defaultProps = {
  href: "#"
}

export default function SocialIcons() {
  return (
    <div className={styles.socialContainer}>
      <ul className={styles.socialList}>
        <SocialIcon 
          href="https://www.facebook.com/" 
          Icon={Facebook} 
        />
        <SocialIcon 
          href="#" 
          Icon={Twitter} 
        />
        <SocialIcon 
          href="#" 
          Icon={Mail} 
        />
        <SocialIcon 
          href="https://www.linkedin.com/in/raj-kumar-web-designer/" 
          Icon={Linkedin} 
        />
        <SocialIcon 
          href="#" 
          Icon={Instagram} 
        />
      </ul>
    </div>
  )
}