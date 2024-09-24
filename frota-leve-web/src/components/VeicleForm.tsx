'use client';

// Importações necessárias
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { Card } from './ui/card';

export interface Car {
    placa: string;
    marca: string;
    modelo: string;
    document: string;
}

// Definição do esquema de validação
const vehicleForm = z.object({
    placa: z.string().max(50, { message: "Placa inválida!" }),
    marca: z.string().max(50, { message: "Marca inválida!" }),
    document: z.string().max(11, { message: "Documento inválido!" }),
    modelo: z.string().max(50, { message: "Modelo muito longo!" }),
});

type FormValues = z.infer<typeof vehicleForm>;

// Componente Formulario
const Formulario = ({ onSubmit, defaultValues }: { onSubmit: (data: FormValues) => void, defaultValues?: FormValues | null }) => {
    const methods = useForm<FormValues>({
        resolver: zodResolver(vehicleForm),
        defaultValues: defaultValues || {},
    });

    return (
        <FormProvider {...methods}>
            <div>
                <Card className='p-4'>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <FormField name="placa" />
                        <FormField name="marca" />
                        <FormField name="document" />
                        <FormField name="modelo" />
                        <div className="flex justify-center mt-4">
                            <button type="submit" className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 w-full'>Enviar</button>
                        </div>
                    </form>
                </Card>
            </div>
        </FormProvider>
    );
};

const FormField = ({ name }: { name: keyof FormValues }) => {
    const { register, formState } = useFormContext();
    const error = formState.errors[name];

    return (
        <div className='border-2 p-3 m-2 rounded'>
            <label htmlFor={name} className='block mb-1 font-medium'>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
            <input
                {...register(name)}
                id={name}
                className={`p-2 w-full border rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{}</p>}
        </div>
    );
};

export default Formulario;
