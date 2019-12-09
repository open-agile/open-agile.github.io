import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/open-agile-logo.png"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"Home"}>
                        <img alt={"Logo"} src={logo}/> Open Agile
                    </Link>
                </div>

                <div className={"get-started"}>
                    <a href={"https://github.com/open-agile/open-agile.github.io/issues"}>Un bug à signaler&nbsp;?</a>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
