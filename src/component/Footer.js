import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-10 text-sm text-gray-600">
            <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo and description */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800">
                            <span className="text-gray-900">bood</span>
                            <span className="text-sky-400">mo</span>
                        </h2>
                        <p className="mt-2 text-gray-600 text-l">
                            India’s biggest online marketplace for car spare parts
                        </p>

                    </div>

                    {/* About links */}
                    <div>
                        <h3 className="text-base font-semibold text-blue-800 mb-2">About</h3>
                        <ul className="space-y-5">
                            {[
                                "About us", "Contact us", "FAQ", "Careers",
                                "Investor Relations", "Suppliers Relations",
                                "Discovery Points", "boodmo API Solution", "Become a Vendor"
                            ].map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policy links */}
                    <div>
                        <h3 className="text-base font-semibold text-blue-800 mb-2">Policy</h3>
                        <ul className="space-y-5">
                            {[
                                "Return Policy", "Privacy Policy", "Disclaimer",
                                "Terms of Use", "Buyers Policy", "Sellers Policy"
                            ].map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Useful links */}
                    <div>
                        <h3 className="text-base font-semibold text-blue-800 mb-2">Useful links</h3>
                        <ul className="space-y-5">
                            {[
                                "Articles", "Brands", "Catalogues", "Car Makers",
                                "Damaged Parts", "Best Offers", "Sitemap", "Sitemap2"
                            ].map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex mt-4 space-x-4 text-sky-400 text-xl py-10">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
                {/* Bottom bar */}
                <div className="border-t mt-8 pt-4 text-center text-s text-gray-500">
                    © 2015-2025 Smart Parts Online Pvt. Ltd. (v7.3.7 build 250715.1409)
                </div>
            </div>
        </footer>
    );
};

export default Footer;
