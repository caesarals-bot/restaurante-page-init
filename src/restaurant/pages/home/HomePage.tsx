import { Button } from "../../../components/ui/button"
import Header from "../../components/Header"


const HomePage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header 
                title="Bienvenidos a Resto Base"
                subtitle="La mejor experiencia gastronómica te espera"
            />

            {/* Main Content */}
            <main className="container mx-auto px-4 py-16">
                {/* Features Section */}
                <section className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 rounded-lg border">
                        <h3 className="text-xl font-semibold mb-3">Comida Fresca</h3>
                        <p className="text-muted-foreground">
                            Ingredientes frescos y de la mejor calidad en cada plato
                        </p>
                    </div>
                    <div className="text-center p-6 rounded-lg border">
                        <h3 className="text-xl font-semibold mb-3">Ambiente Acogedor</h3>
                        <p className="text-muted-foreground">
                            Un espacio perfecto para disfrutar en familia o con amigos
                        </p>
                    </div>
                    <div className="text-center p-6 rounded-lg border">
                        <h3 className="text-xl font-semibold mb-3">Servicio Excepcional</h3>
                        <p className="text-muted-foreground">
                            Nuestro equipo está dedicado a brindarte la mejor experiencia
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-secondary p-12 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4">¿Listo para una experiencia única?</h2>
                    <p className="text-lg mb-6 text-muted-foreground">
                        Descubre nuestro menú y reserva tu mesa hoy mismo
                    </p>
                    <div className="space-x-4">
                        <Button>Explorar Menú</Button>
                        <Button variant="outline">Contactar</Button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-muted py-8 px-4 text-center">
                <p className="text-muted-foreground">
                    2024 Resto Base - Página de prueba
                </p>
            </footer>
        </div>
    )
}

export default HomePage
