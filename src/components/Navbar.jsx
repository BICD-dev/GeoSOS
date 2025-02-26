import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-4 py-3">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                {/* Logo */}
                <h1 className="font-bold text-2xl">
                    <Link to="/">GeoSOS</Link>
                </h1>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-6 text-lg font-semibold">
                    <li>
                        <Link to="/auth" className="hover:text-blue-600 transition">Login</Link>
                    </li>
                    <li>
                        <Link to="/auth/sign-up" className="hover:text-blue-600 transition">Signup</Link>
                    </li>
                </ul>

                {/* Mobile Menu Button (Always Visible) */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-3xl focus:outline-none relative z-50"
                    aria-label="Toggle Menu"
                >
                    <motion.div 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isOpen ? 230 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? "✖" : "☰"}
                    </motion.div>
                </button>
            </div>

            {/* Mobile Menu (Slide-in) */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? 0 : "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg p-6 md:hidden flex flex-col gap-4 text-lg font-semibold z-40"
            >
                {/* Close Button Inside Sidebar */}
                <button 
                    onClick={() => setIsOpen(false)}
                    className="text-3xl self-end focus:outline-none"
                    aria-label="Close Menu"
                >
                    {/* ✖ */}
                </button>

                {/* Menu Links */}
                <ul className="mt-4">
                    <li>
                        <Link to="/auth" className="block py-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Login</Link>
                    </li>
                    <li>
                        <Link to="/auth/sign-up" className="block py-2 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Signup</Link>
                    </li>
                </ul>
            </motion.div>
        </nav>
    );
};

export default Navbar;
