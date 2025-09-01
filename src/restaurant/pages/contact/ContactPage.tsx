import React, { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import Header from '../../components/Header';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'general'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setSubmitMessage('¡Gracias por contactarnos! Te responderemos pronto.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                subject: 'general'
            });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header 
                title="Contáctanos"
                subtitle="Estamos aquí para ayudarte. Ponte en contacto con nosotros para reservas, consultas o cualquier información que necesites."
                showButtons={false}
            />
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* Header content now handled by Header component */}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Ubicación
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-2">Calle Principal 123</p>
                                <p className="text-gray-600 mb-2">Centro Histórico</p>
                                <p className="text-gray-600">Ciudad, País 12345</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Teléfono
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-2">Reservas: +1 (555) 123-4567</p>
                                <p className="text-gray-600">General: +1 (555) 123-4568</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-2">info@restobase.com</p>
                                <p className="text-gray-600">reservas@restobase.com</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Horarios
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Lunes - Jueves:</span>
                                        <span className="font-medium">11:00 AM - 10:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Viernes - Sábado:</span>
                                        <span className="font-medium">11:00 AM - 11:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Domingo:</span>
                                        <span className="font-medium">12:00 PM - 9:00 PM</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Envíanos un Mensaje</CardTitle>
                                <CardDescription>
                                    Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {submitMessage && (
                                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                                        {submitMessage}
                                    </div>
                                )}
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Nombre *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="Tu nombre completo"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                Asunto
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            >
                                                <option value="general">Consulta General</option>
                                                <option value="reservation">Reserva</option>
                                                <option value="event">Eventos Privados</option>
                                                <option value="complaint">Queja o Sugerencia</option>
                                                <option value="other">Otro</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                                            placeholder="Escribe tu mensaje aquí..."
                                        />
                                    </div>

                                    <Button 
                                        type="submit" 
                                        className="w-full bg-green-600 hover:bg-green-700"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-2">
                                                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Enviando...
                                            </div>
                                        ) : (
                                            'Enviar Mensaje'
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center">Nuestra Ubicación</CardTitle>
                            <CardDescription className="text-center">
                                Visítanos en el corazón de la ciudad
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="text-lg font-medium">Mapa Interactivo</p>
                                    <p className="text-sm">Aquí se integraría Google Maps o similar</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
