import React from "react"
import { Link, useResolvedPath, useMatch } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="nav">
                <Link to="/" className="site-title">My Portfolio</Link>
                <ul>
                    <li>
                        <CustomLink to="/about">About</CustomLink>
                    </li>
                    <li>
                        <CustomLink to="/portfolio">Portfolio</CustomLink>
                    </li>
                    <li>
                        <CustomLink to="/resume">Resume</CustomLink>
                    </li>
                    <li>
                        <CustomLink to="/contact">Contact</CustomLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

function CustomLink({ to, children, props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}