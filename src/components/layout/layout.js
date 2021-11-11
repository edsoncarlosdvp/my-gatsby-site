import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata{
        title
      }
    }
  }
`)
    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <hearder className={siteTitle}>{data.site.siteMetadata.title}</hearder>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout