'use client'
import { Facebook, Twitter, Mail, Linkedin, Instagram } from "lucide-react"
import styles from './SocialIcons.module.css'

function SocialIcon({ href, Icon }) {
  return (
    <li>
      <a href={href} className={styles.socialLink}>
        <Icon className="w-10 h-10 text-[#262626] hover:text-white transition-colors duration-500" />
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
          href="https://www.facebook.com/profile.php?id=100012512077239" 
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