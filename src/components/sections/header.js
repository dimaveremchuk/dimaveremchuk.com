import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"
import {
  wrapper,
  content,
  desktop,
  bodyText,
  homeLink,
  aboutLink,
} from "./header.module.css"

function Header(props) {
  return (
    <div className={wrapper}>
      <div className={content}>
        <div className={clsx("allCaps", homeLink)}>
          <Link to="/">
            Dima Veremchuk
            <div className={clsx("deemphasized", bodyText)}>
              —software designer <span className={desktop}>{props.details}</span>
            </div>
          </Link>
        </div>
        <div className={clsx("allCaps", aboutLink)}>
          <Link to="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
