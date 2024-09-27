"use client"

import { Bar, BarChart, CartesianGrid } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

const chartData = [
    { month: "Março", viagem: 186 },
    { month: "Abril", viagem: 305 },
    { month: "Maio", viagem: 237},
    { month: "Junho", viagem: 73 },
    { month: "Julho", viagem: 209 },
    { month: "Agosto", viagem: 214 },
]

const chartConfig = {
    viagem: {
        label: "Viagens",
        color: "#2563eb",
    },
} satisfies ChartConfig

export function GraficoViagem() {
    return (
<Card className="w-1/2">
    <CardHeader>
        <CardTitle>Grafico de Viagens por mês</CardTitle>
                <CardDescription>
                    Viagens nos ultimos 6 meses
                </CardDescription>
    </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <Bar dataKey="viagem" fill="var(--color-viagem)" radius={4} />
                </BarChart>
            </ChartContainer>
        </CardContent>
        <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Tendência em subir 5.2% este mês... <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            Março - Agosto 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
    </Card>   
    )
}
