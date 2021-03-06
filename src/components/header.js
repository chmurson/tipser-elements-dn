import * as React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from '@tipser/tipser-elements';
import logo from '../logo.svg';
import './header.css';

export class Header extends React.Component {

    render() {
        return <header className="header">
            <nav className="navigation">
                <Link className="te-logo" to="/"><img src={logo} alt="logo" /></Link>
                <ul className="horizontal-menu">
                    <li className="horizontal-item">
                        <Link to="/product/5a1ad987b301420bbce8e976">Example product #1</Link>
                    </li>
                    <li className="horizontal-item">
                        <Link to="/product/5c6d719d3b777f0001dffd36">Example product #2</Link>
                    </li>
                    <li className="horizontal-item">
                        <a
                            className="link"
                            href="https://developers.tipser.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tipser Developers
                        </a>
                    </li>
                    <li className="horizontal-item">
                        <a
                            className="link"
                            href="https://tipser.github.io/docs/#tipser-elements"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tipser Elements documentation
                        </a>
                    </li>
                    <li className="horizontal-item">
                        <a
                            className="link"
                            href="https://github.com/Tipser/tipser-elements-react-bootstrap"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub repo of this page
                        </a>
                    </li>
                </ul>
                {/* Inserting the Tipser cart Icon */}
                <CartIcon />
            </nav>
        </header>
    }
}