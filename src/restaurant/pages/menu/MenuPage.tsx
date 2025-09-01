import React, { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import Header from '../../components/Header';

interface MenuItemProps {
    name: string;
    price: string;
    description: string;
    image: string;
}

const MenuItemCard: React.FC<MenuItemProps> = ({ name, price, description, image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Card className="w-full max-w-sm mx-auto hover:shadow-lg transition-shadow duration-200 cursor-pointer md:cursor-default" onClick={openModal}>
                {/* Image - hidden on mobile, visible on larger screens */}
                <div className="hidden md:block relative h-48 overflow-hidden rounded-t-xl group">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
                        onClick={(e) => {
                            e.stopPropagation();
                            openModal();
                        }}
                    />
                </div>
                
                <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2 cursor-pointer group md:cursor-default" onClick={(e) => {
                            e.stopPropagation();
                            openModal();
                        }}>
                            <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                                {name}
                            </CardTitle>
                            {/* Mobile indicator - visible only on mobile */}
                            <div className="md:hidden flex items-center text-green-600">
                                <svg 
                                    className="w-4 h-4 animate-pulse" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-lg font-bold text-green-600 ml-2">
                            {price}
                        </span>
                    </div>
                    {/* Description - hidden on mobile, visible on larger screens */}
                    <CardDescription className="hidden md:block text-gray-600 mt-2">
                        {description}
                    </CardDescription>
                    {/* Mobile call-to-action - visible only on mobile */}
                    <div className="md:hidden mt-2 text-xs text-green-600 font-medium flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Toca para ver más detalles
                    </div>
                </CardHeader>
            </Card>

            {/* Custom Modal Overlay */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div 
                        className="bg-white rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative">
                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all shadow-lg"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg"
                            />
                            <div className="p-4 sm:p-6">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">{name}</h3>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">{description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">{price}</span>
                                    <button className="bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base md:text-lg font-medium">
                                        Ordenar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const MenuPage = () => {
    const menuItems: MenuItemProps[] = [
        {
            name: "Paella Valenciana",
            price: "$24.99",
            description: "Auténtica paella con pollo, conejo, judías verdes, garrofón y azafrán. Servida en paellera tradicional.",
            image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop"
        },
        {
            name: "Pulpo a la Gallega",
            price: "$18.50",
            description: "Pulpo tierno cocido a la perfección, servido con patatas, pimentón dulce y aceite de oliva virgen extra.",
            image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop&crop=center"
        },
        {
            name: "Jamón Ibérico",
            price: "$32.00",
            description: "Selección premium de jamón ibérico de bellota, cortado a mano y servido con pan tostado y tomate.",
            image: "https://images.unsplash.com/photo-1549888834-3ec93abae044?w=400&h=300&fit=crop"
        },
        {
            name: "Gazpacho Andaluz",
            price: "$12.99",
            description: "Sopa fría tradicional con tomate, pepino, pimiento, cebolla y ajo. Refrescante y saludable.",
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop"
        },
        {
            name: "Tortilla Española",
            price: "$14.75",
            description: "Clásica tortilla de patatas con huevos frescos, cebolla caramelizada y un toque de sal marina.",
            image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&h=300&fit=crop"
        },
        {
            name: "Crema Catalana",
            price: "$8.99",
            description: "Postre tradicional catalán con crema pastelera aromatizada con canela y limón, caramelizada al momento.",
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header 
                title="Nuestro Menú"
                subtitle="Descubre los sabores auténticos de la cocina española"
                showButtons={false}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.map((item, index) => (
                        <MenuItemCard
                            key={index}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
