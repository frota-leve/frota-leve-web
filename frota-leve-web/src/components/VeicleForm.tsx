'use client'

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
const veicleForm = z.object({
    Placa: z.string().max(50, { message: "Placa inválida!" }),
    marca: z.string().max(50, { message: "Marca inválida!" }),
    document: z.string().max(11, { message: "Documento inválido!" }),
    modelo: z.string().max(50, { message: "Modelo muito longo!" }),
});

type FormValues = z.infer<typeof veicleForm>;

// Componente Formulario
const Formulario = ({ onSubmit, defaultValues }: { onSubmit: (data: FormValues) => void, defaultValues?: FormValues | null }) => {
    const methods = useForm<FormValues>({
        resolver: zodResolver(veicleForm),
        defaultValues: defaultValues || {}, // Se defaultValues for null, passa um objeto vazio
    });

    return (
        <FormProvider {...methods} >
            <div >
            <Card className=''>
            <form onSubmit={methods.handleSubmit(onSubmit)} >
                <div className='border-2 p-3 m-2 rounded'>
                <FormField name="Placa" />
                </div>
                <div className='p-3'>
                <FormField name="marca" />
                </div>
                <FormField name="document" />
                <div className='p-3'>
                <FormField name="modelo" />
                </div>
                <button type="submit" className='p-4'>Submit</button>
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
        <div >
            <text>{name}</text>
            <input {...register(name)} className='p-2 ml-10 w-1/2 border-2 rounded'/>
            {error && <p>{"erro"}</p>}
        </div>
    );
};

export default Formulario;
