import React from 'react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import Header from '../../components/Header';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header 
                title="Nuestra Historia"
                subtitle="Más que un restaurante, somos una familia que comparte la pasión por crear experiencias gastronómicas inolvidables"
            />

            {/* Main Story Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                Una Tradición que Perdura
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Desde 1985, <strong className="text-green-600">Resto Base</strong> ha sido 
                                    el corazón gastronómico de nuestra comunidad. Lo que comenzó como un pequeño 
                                    sueño familiar se ha convertido en un lugar donde las tradiciones culinarias 
                                    se encuentran con la innovación moderna.
                                </p>
                                <p>
                                    Cada plato que servimos cuenta una historia. Utilizamos recetas transmitidas 
                                    de generación en generación, combinadas con técnicas contemporáneas y los 
                                    ingredientes más frescos de productores locales.
                                </p>
                                <p>
                                    Nuestro compromiso va más allá de la comida: creamos momentos, celebramos 
                                    la vida y construimos comunidad, un plato a la vez.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center" 
                                alt="Interior del restaurante Resto Base"
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Nuestros Valores
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Los principios que guían cada decisión y cada plato que preparamos
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-2xl">Pasión</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Cada ingrediente es seleccionado con amor, cada plato preparado 
                                    con dedicación absoluta a la excelencia culinaria.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-2xl">Comunidad</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Somos parte integral de nuestra comunidad, apoyando a productores 
                                    locales y creando espacios de encuentro y celebración.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-2xl">Calidad</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Nunca comprometemos la calidad. Desde la selección de ingredientes 
                                    hasta el servicio, buscamos la perfección en cada detalle.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Nuestro Equipo
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Las personas apasionadas que hacen posible cada experiencia memorable
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Chef María González</h3>
                                <p className="text-green-600 font-medium mb-3">Chef Ejecutiva</p>
                                <p className="text-gray-600 text-sm">
                                    Con 20 años de experiencia, María lidera nuestra cocina con 
                                    creatividad y respeto por las tradiciones culinarias.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Carlos Mendoza</h3>
                                <p className="text-green-600 font-medium mb-3">Sommelier</p>
                                <p className="text-gray-600 text-sm">
                                    Experto en maridajes, Carlos selecciona cuidadosamente cada vino 
                                    para complementar perfectamente nuestros platos.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Ana Rodríguez</h3>
                                <p className="text-green-600 font-medium mb-3">Gerente de Servicio</p>
                                <p className="text-gray-600 text-sm">
                                    Ana asegura que cada visita sea especial, coordinando nuestro 
                                    equipo para brindar un servicio excepcional.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-green-600 text-white py-16 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl font-bold mb-6">
                        ¿Listo para Vivir la Experiencia?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 leading-relaxed">
                        Te invitamos a ser parte de nuestra historia. Ven y descubre por qué 
                        somos más que un restaurante: somos tu segundo hogar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="text-lg px-8 py-3 border-2 border-green-600 hover:border-green-800">
                            Ver Nuestro Menú
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-green-600">
                            Hacer Reserva
                        </Button>
                        <Button size="lg" variant="ghost" className="text-lg px-8 py-3 text-white border-2 border-green-600 hover:border-green-800 hover:bg-white hover:text-green-600">
                            Contáctanos
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">38+</div>
                            <p className="text-gray-600">Años de Experiencia</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
                            <p className="text-gray-600">Clientes Satisfechos</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                            <p className="text-gray-600">Platos Únicos</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                            <p className="text-gray-600">Premios Gastronómicos</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
