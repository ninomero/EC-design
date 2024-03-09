import React, { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
// routerの使用方法
// https://zenn.dev/minntoko/articles/39d89c32cb0262
// https://qiita.com/Atsu_Tech/items/c91a29c7ee91d179fa7d

import "./styles.css";

const About = () => (
    <Page title="About" content={`Vivamus ullamcorper`} />
)

const Portfolio = () => (
    <Page title="Portfolio" content={`Vivamus ullamcorper`} />
)

const Services = () => (
    <Page title="Services" content={`Vivamus ullamcorper`} />
)

const Contact = () => (
    <Page title="Contact" content={`Vivamus ullamcorper`} />
)

const Page = ({ title, content }) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{content}</p>
        </>
    )
}

const links = ["about", "portfolio", "services", "contact"];

const Layout = () => {
    // ページ遷移や遷移先に値を渡すことが可能になるAPI
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const isOpen = isMenuOpen ? "open" : "";

    const onClick = (href) => {
        toggleMenu();
        navigate(href);
    }

    return (
        <>
            <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
            <div className={`background ${isOpen}`}></div>
            <div className={`menu ${isOpen}`}>
                <nav>
                    {links.map((link, index) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            key={link}
                            className={isMenuOpen ? "appear" : ""}
                            style={{ animationDelay: `0.${index + 1}s` }}
                            onClick={() => onClick(link)}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
                <main className={`page ${isOpen}`}>
                    {/* ネストかしたLayoutの子コンポーネントを表示する */}
                    <Outlet />
                </main>
            </div>
        </>
    )
}

const Menu = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Layout' element={<Layout />}>
                    <Route path="about" element={<About />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="services" element={<Services />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Menu