/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/open-agile-logo.png"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconGitHub from "../../static/images/icon-github.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <div className={"logo"}>
                                    <Link to="/" title={"HiStaff"}>
                                        <img alt={"Logo"} src={logo}/> Open Agile
                                    </Link>
                                </div>

                                <div className={"about"}>
                                    <p>La porte d'entrée vers tous les ateliers open source.</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Open Agile</h4>
                                    <ul>
                                        <li><Link to="/about" title={"About Us"}>À propos</Link></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-3"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="https://github.com/open-agile/open-agile.github.io" target={"_blank"} title={"GitHub"}><img alt={"GitHub"} src={iconGitHub}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p>Creative Commons. Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
