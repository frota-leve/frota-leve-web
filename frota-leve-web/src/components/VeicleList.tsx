'use client'

// Componente VehicleList
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import Formulario, { Car } from './VeicleForm';


const VehicleList: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([
        { placa: "axy6o76", marca: "Gol", modelo: "Trend", document: "1234567890" },
        { placa: "bxy6o77", marca: "Fiesta", modelo: "SE", document: "0987654321" }
    ]);

    const [showForm, setShowForm] = useState<boolean>(false);
    const [editingCar, setEditingCar] = useState<Car | null>(null);

    const handleSubmitCar = (carData: Car) => {
        if (editingCar) {
            setCars(cars.map(c => c.placa === editingCar.placa ? { ...carData, placa: editingCar.placa } : c));
        } else {
            setCars([...cars, carData]);
        }
        setShowForm(false);
        setEditingCar(null);
    };

    const handleEditCar = (car: Car) => {
        setEditingCar(car);
        setShowForm(true);
    };

    const handleDeleteCar = (placa: string) => {
        setCars(cars.filter(car => car.placa !== placa));
    };

    return (
        <div className="p-6 flex-1 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Veículos</h2>
                <button
                    onClick={() => {
                        setEditingCar(null);
                        setShowForm(true);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Adicionar Veículo
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr>
                            <th className="py-3 px-6 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                                Placa
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                                Marca
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                                Modelo
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                                Documento
                            </th>
                            <th className="py-3 px-6 bg-gray-200 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(car => (
                            <tr key={car.placa} className="border-t">
                                <td className="py-4 px-6 text-gray-800">{car.placa}</td>
                                <td className="py-4 px-6 text-gray-800">{car.marca}</td>
                                <td className="py-4 px-6 text-gray-800">{car.modelo}</td>
                                <td className="py-4 px-6 text-gray-800">{car.document}</td>
                                <td className="py-4 px-6 text-center">
                                    <button
                                        onClick={() => handleEditCar(car)}
                                        className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded hover:bg-yellow-600"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDeleteCar(car.placa)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal do Formulário */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <Card className="w-full max-w-md">
                        <CardHeader className="bg-[#FFC314]">
                            <CardTitle>{editingCar ? "Editar Veículo" : "Adicionar novo Veículo"}</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <Formulario onSubmit={handleSubmitCar} defaultValues={editingCar } />
                        </CardContent>
                        <CardFooter>
                            <button
                                onClick={() => {
                                    setShowForm(false);
                                    setEditingCar(null);
                                }}
                                className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
                            >
                                Cancelar
                            </button>
                        </CardFooter>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default VehicleList;
