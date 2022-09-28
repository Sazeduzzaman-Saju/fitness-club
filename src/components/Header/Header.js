import React from 'react';
import './Header.css';
import Logo from '../../img/logo.png'

const Header = () => {
    return (
        <section className='pt-5'>
            <div className=''>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container border-bottom">
                        <a className="navbar-brand" href="/#"><img className='brand-logo' src={Logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/question">Question</a>
                                </li>
                            </ul>
                            <div className='profile-icon '>
                                <a href="/user"><i className="fa-light fa-circle-user "></i></a><span className='ms-2'>User</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Header;