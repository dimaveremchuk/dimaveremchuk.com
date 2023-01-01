import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"
import {
  wrapper,
  content,
  phrase,
  contact,
  email,
  copyright,
} from "./footer.module.css"

function Footer() {
  return (
    <div className={wrapper}>
      <div className={content}>
        {/* <p className={phrase}>
          Smile, you look good today ;)
        </p> */}
        <p className={contact}>
          <span className="deemphasized">If you have an interesting project, want to collaborate or just say hi, write me at </span><Link to="mailto:verd@hey.com" className={email}>verd@hey.com</Link>
        </p>
        <div className={clsx(copyright, "deemphasized")}>
          &copy; Dima Veremchuk, {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}

export default Footer
