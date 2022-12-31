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
          <span className="deemphasized">If you have a project, want to collaborate or just say hi, write me to </span><Link to="mailto:verd@hey.com" className={email}>verd@hey.com</Link>
        </p>
        <div className={clsx(copyright, "deemphasized")}>
          &copy; Dima Veremchuk, 2022
        </div>
      </div>
    </div>
  )
}

export default Footer
