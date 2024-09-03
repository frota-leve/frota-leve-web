"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email({
    message: "Email inválido",
  }),
  document: z.string().max(10, {
    message: "Senha inválida"
  })
})

const Formulario = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      document: '',
    },
  })

  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-200'>
      <Card className='w-full max-w-md'>
        <CardHeader className='bg-[#FFC314]'>
          <CardTitle>Adicionar novo funcionário</CardTitle>
        </CardHeader>

        <CardContent className='bg-blue-500'>
          <Form {...form}> 
            <FormField 
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <input className ='justify-center'type="text" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>


          <Form {...form}> 
            <FormField
              control={form.control}
              name="document"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Documento</FormLabel>
                  <FormControl>
                    <input type="text" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        </CardContent>
        <CardFooter>
          fitter
        </CardFooter>
      </Card>
    </div>
  )
}

export default Formulario
