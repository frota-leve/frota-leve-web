'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { File, Fuel, ListFilter } from "lucide-react"
import { useState } from 'react'

type Trip = {
    id: string
    vehicleName: string
    licensePlate: string
    driverImage: string
    driverName: string
    status: 'Em Andamento' | 'Finalizada' 
    startDate: string
    endDate: string
    startKm: number
    endKm?: number
    refueled: boolean
    refuelAmount?: number
    startKmImage: string
    driverDetails: {
        name: string
        license: string
        phone: string
    }
}

const trips: Trip[] = [
    {
        id: "T1",
        vehicleName: "Tesla Model S",
        licensePlate: "ABC123",
        driverImage: "/placeholder.svg?height=40&width=40",
        driverName: "John Doe",
        status: "Em Andamento",
        startDate: "2023-06-23",
        endDate: "2023-06-30",
        startKm: 50000,
        refueled: false,
        startKmImage: "/placeholder.svg?height=200&width=300",
        driverDetails: {
            name: "John Doe",
            license: "DL12345678",
            phone: "+55 44 234-567-8901"
        }
    },
    {
        id: "T2",
        vehicleName: "Ford F-150",
        licensePlate: "XYZ789",
        driverImage: "/placeholder.svg?height=40&width=40",
        driverName: "Jane Smith",
        status: "Finalizada",
        startDate: "2023-06-20",
        endDate: "2023-06-22",
        startKm: 30000,
        endKm: 30500,
        refueled: true,
        refuelAmount: 50,
        startKmImage: "/placeholder.svg?height=200&width=300",
        driverDetails: {
            name: "Jane Smith",
            license: "DL87654321",
            phone: "+55 44 987-654-3210"
        }
    },
    {
        id: "T3",
        vehicleName: "Toyota Camry",
        licensePlate: "DEF456",
        driverImage: "/placeholder.svg?height=40&width=40",
        driverName: "Bob Johnson",
        status: "Finalizada",
        startDate: "2023-07-01",
        endDate: "2023-07-05",
        startKm: 20000,
        refueled: false,
        startKmImage: "/placeholder.svg?height=200&width=300",
        driverDetails: {
            name: "Bob Johnson",
            license: "DL11223344",
            phone: "+55 44 555-123-4567"
        }
    },
]

export function Viagens() {
    const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null)

    return (
        <>
            <Tabs defaultValue="all">
                <div className="flex items-center justify-between">
                    <TabsList>
                        <TabsTrigger value="all">Todas Viagens</TabsTrigger>
                        {/* <TabsTrigger value="inProgress">Em Andamento</TabsTrigger>
                        <TabsTrigger value="completed">Finalizadas</TabsTrigger> */}
                    </TabsList>
                    {/* <div className="flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 gap-1 text-xs"
                                >
                                    <ListFilter className="h-3 w-3" />
                                    <span className="sr-only sm:not-sr-only">Filtros</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filtre por</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>
                                    Em andamento
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Finalizadas
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-8 gap-1 text-xs"
                        >
                            <File className="h-3 w-3" />
                            <span className="sr-only sm:not-sr-only">Exportar</span>
                        </Button>
                    </div> */}
                </div>
                <TabsContent value="all">
                    <Card>
                        <CardHeader>
                            <CardTitle>Todas Viagens</CardTitle>
                            <CardDescription>
                                Uma lista de todas as viagens.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Veiculo</TableHead>
                                        <TableHead>Condutor</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Data Inicio</TableHead>
                                        <TableHead>Data Fim</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {trips.map((trip) => (
                                        <TableRow
                                            key={trip.id}
                                            onClick={() => setSelectedTrip(trip)}
                                            className="cursor-pointer hover:bg-muted/50"
                                        >
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <AvatarFallback>{trip.vehicleName[0]}</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-medium">{trip.vehicleName}</div>
                                                        <div className="text-sm text-muted-foreground">{trip.licensePlate}</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <AvatarImage src={trip.driverImage} alt={trip.driverName} />
                                                        <AvatarFallback>{trip.driverName[0]}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="font-medium">{trip.driverName}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant={
                                                        trip.status === 'Em Andamento' ? 'default' :
                                                            trip.status === 'Finalizada' ? 'secondary' :
                                                                'outline'
                                                    }
                                                >
                                                    {trip.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{trip.startDate}</TableCell>
                                            <TableCell>{trip.endDate}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <Dialog open={!!selectedTrip} onOpenChange={() => setSelectedTrip(null)}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Trip Details</DialogTitle>
                        <DialogDescription>
                            Detailed information about the selected trip.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedTrip && (
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-2 items-center gap-4">
                                <div className="font-semibold">Vehicle:</div>
                                <div>{selectedTrip.vehicleName} ({selectedTrip.licensePlate})</div>
                                <div className="font-semibold">Driver:</div>
                                <div>{selectedTrip.driverName}</div>
                                <div className="font-semibold">Status:</div>
                                <div>
                                    <Badge
                                        variant={
                                            selectedTrip.status === 'Em Andamento' ? 'default' :
                                                selectedTrip.status === 'Finalizada' ? 'secondary' :
                                                    'outline'
                                        }
                                    >
                                        {selectedTrip.status}
                                    </Badge>
                                </div>
                                <div className="font-semibold">Start Date:</div>
                                <div>{selectedTrip.startDate}</div>
                                <div className="font-semibold">End Date:</div>
                                <div>{selectedTrip.endDate}</div>
                                <div className="font-semibold">Start KM:</div>
                                <div>{selectedTrip.startKm}</div>
                                <div className="font-semibold">End KM:</div>
                                <div>{selectedTrip.endKm || 'N/A'}</div>
                                <div className="font-semibold">KM Traveled:</div>
                                <div>{selectedTrip.endKm ? selectedTrip.endKm - selectedTrip.startKm : 'N/A'}</div>
                                <div className="font-semibold">Refueled:</div>
                                <div className="flex items-center gap-2">
                                    {selectedTrip.refueled ? (
                                        <>
                                            <Fuel className="h-4 w-4 text-green-500" />
                                            Yes ({selectedTrip.refuelAmount} liters)
                                        </>
                                    ) : (
                                        <>
                                            <Fuel className="h-4 w-4 text-red-500" />
                                            No
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="font-semibold">Start KM Image:</div>
                                <img src={selectedTrip.startKmImage} alt="Start KM" className="rounded-lg" />
                            </div>
                            <div className="space-y-2">
                                <div className="font-semibold">Driver Details:</div>
                                <div>Name: {selectedTrip.driverDetails.name}</div>
                                <div>License: {selectedTrip.driverDetails.license}</div>
                                <div>Phone: {selectedTrip.driverDetails.phone}</div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}