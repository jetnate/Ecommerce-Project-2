import React from 'react'


class Nav extends React.Component {
    render() {
        return(
            <div className="header">
                <img className="logo" src= '../images/kleco-logo.jpg' width="100" height="100" alt="kleco-logo"/>
                <nav>
                <ul className="kleco-nav">
                    <li><a href="../pages/index.html">Home</a> </li>
                    <li><a className="current" href="products.html">Products</a></li>
                    <li><a href="../pages/contact.html">Contact</a></li>
                </ul>
            </nav>

            </div>
        )
    }
}
export default Nav;