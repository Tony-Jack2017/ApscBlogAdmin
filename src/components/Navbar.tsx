import {FC} from "react";
import classNames from "classnames";

interface NavbarItf {

}

const Navbar:FC<NavbarItf> = (props) => {

    const classes = classNames(
        "nav-bar"
    )

    return (
        <nav className={classes}>

        </nav>
    )
}

export default Navbar