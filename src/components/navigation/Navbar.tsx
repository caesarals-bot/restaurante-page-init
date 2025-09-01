import { useState } from "react"
import { Link } from "react-router"
import { Button } from "../ui/button"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-background border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">R</span>
                        </div>
                        <span className="font-bold text-xl">Resto Base</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            to="/" 
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            Inicio
                        </Link>
                        <Link 
                            to="/menu" 
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            Menú
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            Nosotros
                        </Link>
                        <Link 
                            to="/contact" 
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            Contacto
                        </Link>
                    </div>

                    {/* Action Buttons - Hidden on mobile */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="outline" size="sm">
                            Reservar
                        </Button>
                        <Link to="/admin">
                            <Button variant="secondary" size="sm">
                                Admin
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <svg 
                                    className="w-6 h-6" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M6 18L18 6M6 6l12 12" 
                                    />
                                </svg>
                            ) : (
                                <svg 
                                    className="w-6 h-6" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M4 6h16M4 12h16M4 18h16" 
                                    />
                                </svg>
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-border animate-in slide-in-from-top-2 duration-200">
                        <div className="py-4 space-y-2">
                            <Link 
                                to="/" 
                                className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                                onClick={closeMobileMenu}
                            >
                                Inicio
                            </Link>
                            <Link 
                                to="/menu" 
                                className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                                onClick={closeMobileMenu}
                            >
                                Menú
                            </Link>
                            <Link 
                                to="/about" 
                                className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                                onClick={closeMobileMenu}
                            >
                                Nosotros
                            </Link>
                            <Link 
                                to="/contact" 
                                className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                                onClick={closeMobileMenu}
                            >
                                Contacto
                            </Link>
                            <div className="px-4 pt-2 space-y-2">
                                <Button variant="outline" size="sm" className="w-full" onClick={closeMobileMenu}>
                                    Reservar
                                </Button>
                                <Link to="/admin" className="block" onClick={closeMobileMenu}>
                                    <Button variant="secondary" size="sm" className="w-full">
                                        Admin
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
