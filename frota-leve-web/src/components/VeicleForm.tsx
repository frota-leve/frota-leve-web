'use client'

// Importações necessárias
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';


export interface Car {
    placa: string;
    marca: string;
    modelo: string;
    document: string;
}


// Definição do esquema de validação
const veicleForm = z.object({
    placa: z.string().max(50, { message: "Placa inválida!" }),
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
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                
                <FormField name="placa" />
                <FormField name="marca" />
                <FormField name="document" />
                <FormField name="modelo" />
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    );
};

const FormField = ({ name }: { name: keyof FormValues }) => {
    const { register, formState } = useFormContext();
    const error = formState.errors[name];

    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input {...register(name)} />
            {error && <p>{"erro"}</p>}
        </div>
    );
};

export default Formulario;
