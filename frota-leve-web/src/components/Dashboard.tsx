import React from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

interface VehicleData {
    name: string;
    veículos: number;
    hrTrab: number;
}

const data: VehicleData[] = [
    { name: 'Caminhões', veículos: 12, hrTrab: 248 },
    { name: 'Vans', veículos: 5, hrTrab: 150 },
    { name: 'Carros', veículos: 8, hrTrab: 360 },
    { name: 'Motos', veículos: 3, hrTrab: 200 },
];

// Componente do gráfico de barras para veículos
const BarGraph: React.FC = () => (
    <BarChart width={300} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="veículos" fill="#82ca9d" />
    </BarChart>
);

// Componente do gráfico de pizza
const PieGraph: React.FC = () => (
    <PieChart width={300} height={200}>
        <Pie
            data={data}
            dataKey="veículos"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
        >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            ))}
        </Pie>
        <Tooltip />
    </PieChart>
);

// Componente do gráfico de horas trabalhadas
const HoursWorkedGraph: React.FC = () => (
    <BarChart width={300} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="hrTrab" fill="#ff7300" />
    </BarChart>
);

// Componente do Dashboard
const Dashboard: React.FC = () => {
    return (
        <div className='w-full p-4 flex flex-wrap justify-between'>
            <div className='w-1/2 mb-4'>
                <h2 className='text-xl mb-4'>Distribuição de Veículos por Tipo</h2>
                <BarGraph />
            </div>
            <div className='w-1/2 mb-4'>
                <h2 className='text-xl mb-4'>Proporção de Veículos</h2>
                <PieGraph />
            </div>
            <div className='w-1/2 mb-4'>
                <h2 className='text-xl mb-4'>Horas Trabalhadas por Tipo de Veículo</h2>
                <HoursWorkedGraph />
            </div>
        </div>
    );
};

export default Dashboard;
