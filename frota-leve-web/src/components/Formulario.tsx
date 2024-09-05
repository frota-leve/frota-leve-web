"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email({
    message: "Email inválido",
  }),
  document: z.string().max(10, {
    message: "Documento inválido"
  }),
  name: z.string().max(50, { 
    message: "Nome muito longo"
  }),
  role: z.enum(['Motorista', 'Secretário', 'Diretor'], {
    message: "Cargo inválido"
  })
})

type FormValues = z.infer<typeof formSchema>;

const Formulario = () => {

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      document: '',
      name: '',
      role: 'Motorista', // Definindo um valor padrão para o campo de cargo
    },
  })

  const handleSubmitLogin = (data: FormValues) => {
    console.log(data)
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-200'>
      <Card className='w-full max-w-md'>
        <CardHeader className='bg-[#FFC314]'>
          <CardTitle>Adicionar novo funcionário</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmitLogin)}>
              <FormField 
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <input placeholder="Digite o nome" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField 
                control={form.control}
                name="document"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Documento</FormLabel>
                    <FormControl>
                      <input placeholder="Digite o documento" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField 
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <input type="email" placeholder="Digite o e-mail" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField 
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cargo</FormLabel>
                    <FormControl>
                      <select {...field} className='bg-red-500'>
                        <option value="Motorista">Motorista</option>
                        <option value="Secretário">Secretário</option>
                        <option value="Diretor">Diretor</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <button className="w-full bg-[#FFC314] text-center flex items-center justify-center" type="submit">Adicionar</button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          Footer Content
        </CardFooter>
      </Card>
    </div>
  )
}

export default Formulario

