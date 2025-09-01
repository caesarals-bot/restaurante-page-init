import { Button } from "../../components/ui/button"

const AdminPage = () => {
    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Panel de Administración</h1>
                    <p className="text-muted-foreground">Gestiona tu restaurante</p>
                </header>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="p-6 border rounded-lg">
                        <h3 className="font-semibold mb-3">Menú</h3>
                        <p className="text-sm text-muted-foreground mb-4">Gestionar platos y categorías</p>
                        <Button size="sm">Editar Menú</Button>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="font-semibold mb-3">Reservas</h3>
                        <p className="text-sm text-muted-foreground mb-4">Ver y gestionar reservas</p>
                        <Button size="sm" variant="outline">Ver Reservas</Button>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="font-semibold mb-3">Configuración</h3>
                        <p className="text-sm text-muted-foreground mb-4">Ajustes del restaurante</p>
                        <Button size="sm" variant="secondary">Configurar</Button>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-secondary p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Estadísticas Rápidas</h2>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-2xl font-bold">24</p>
                            <p className="text-sm text-muted-foreground">Platos en menú</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">8</p>
                            <p className="text-sm text-muted-foreground">Reservas hoy</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">156</p>
                            <p className="text-sm text-muted-foreground">Clientes este mes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
