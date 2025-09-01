import React from 'react';
import { Button } from '../../components/ui/button';

interface HeaderProps {
    title: string;
    subtitle: string;
    showButtons?: boolean;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
    title,
    subtitle,
    showButtons = true,
    primaryButtonText = "Ver Menú",
    secondaryButtonText = "Reservar Mesa",
    onPrimaryClick,
    onSecondaryClick
}) => {
    return (
        <header className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                {subtitle}
            </p>
            {showButtons && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                        size="lg" 
                        className="text-lg px-8 py-3 bg-white text-green-800 hover:bg-gray-100"
                        onClick={onPrimaryClick}
                    >
                        {primaryButtonText}
                    </Button>
                    <Button 
                        size="lg" 
                        className="text-lg px-8 py-3 border-2 border-white bg-transparent text-white hover:bg-white hover:text-green-800"
                        onClick={onSecondaryClick}
                    >
                        {secondaryButtonText}
                    </Button>
                </div>
            )}
        </header>
    );
};

export default Header;
