"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Grafico de gastos com combustível"

const chartData = [
    { month: "Março", gasolina: 110, etanol: 200, diesel: 130 },
    { month: "Abril", gasolina: 186, etanol: 80, diesel: 250 },
    { month: "Maio", gasolina: 200, etanol: 150, diesel: 245 },
    { month: "Junho", gasolina: 138, etanol: 149, diesel: 110 },
    { month: "Julho", gasolina: 171, etanol: 165, diesel: 300 },
    { month: "Agosto", gasolina: 243, etanol: 139, diesel: 187 },
]

const chartConfig = {
    gasolina: {
        label: "Gasolina",
        color: "#ff7f50",
    },
    etanol: {
        label: "Etanol",
        color: "#dc143c",
    },
    diesel: {
        label: "Diesel",
        color: "#556b2f",
    }

} satisfies ChartConfig

export function GraficoGas() {
    return (
        <Card className="w-1/2">
            <CardHeader >
                <CardTitle>Grafico de Consumo de Combustível</CardTitle>
                <CardDescription>
                    Total Gasto com combustível nos ultimos 6 meses
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Area
                            dataKey="gasolina"
                            type="natural"
                            fill="#ff7f50"
                            fillOpacity={0.4}
                            stroke="#ff7f50"
                            stackId="a"
                        />
                        <Area
                            dataKey="etanol"
                            type="natural"
                            fill=""
                            fillOpacity={0.4}
                            stroke="#dc143c"
                            stackId="a"
                        />

                        <Area
                            dataKey="diesel"
                            type="natural"
                            fill=""
                            fillOpacity={0.4}
                            stroke="#556b2f"
                            stackId="a"
                        />
                    </AreaChart>
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
