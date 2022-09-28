import React from 'react';
import './Footer.css';
import Logo from '../../img/logo.png'

const Footer = () => {
    return (
        <div>

            <div className="container-fluid g-0">

                <footer className="footer text-center text-white">
                    {/* <!-- Grid container --> */}
                    <div className="container p-4 pb-0">
                        <img className='w-25' src={Logo} alt="" />
                        {/* <!-- Section: Social media --> */}
                        <section className="mb-4">
                            {/* <!-- Facebook --> */}
                            <a className="btn btn-outline-light btn-floating m-1" href="/#" role="button"
                            ><i className="fab fa-facebook-f"></i
                            ></a>

                            {/* <!-- Twitter --> */}
                            <a className="btn btn-outline-light btn-floating m-1" href="/#!" role="button"
                            ><i className="fab fa-twitter"></i
                            ></a>

                            {/* <!-- Linkedin --> */}
                            <a className="btn btn-outline-light btn-floating m-1" href="/#!" role="button"
                            ><i className="fab fa-linkedin-in"></i
                            ></a>

                            {/* <!-- Github --> */}
                            <a className="btn btn-outline-light btn-floating m-1" href="/#!" role="button"
                            ><i className="fab fa-github"></i
                            ></a>
                        </section>
                        {/* <!-- Section: Social media --> */}
                    </div>
                    {/* <!-- Grid container --> */}

                    {/* <!-- Copyright --> */}
                    <div className="text-center p-3" >
                        © 2020 Copyright
                        mrPerfect@2022
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>

            </div>
        </div>
    );
};

export default Footer;