"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import { Car } from "@/types/types"
import { AlertTriangleIcon, PenIcon, Trash2Icon} from "lucide-react"
import { useState } from "react"
import { deleteCar } from "@/services/car";


interface DataTableProps {
  cars: Car[],
  onUpdateTable:Function
}

export function DataTable({
  cars,
  onUpdateTable
}: DataTableProps) {

const[openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
const[carDeleteId, setcarDeleteIdl] = useState<string>('');

function handleOpenDeleteModal(carId: string){
  setcarDeleteIdl(carId)
  setOpenDeleteModal(true)
}

async function handleDelete(){
  await deleteCar( carDeleteId);
  setOpenDeleteModal(false)
  onUpdateTable()
}
  

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead> Nome</TableHead>
              <TableHead>Placa</TableHead>
              <TableHead>Marca</TableHead>
              <TableHead>KM atual</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              cars.map((car)=>(
                <TableRow key={(car.id)}>
                  <TableCell>{car.name} </TableCell>
                  <TableCell>{car.plate} </TableCell>
                  <TableCell>{car.brand} </TableCell>
                  <TableCell>{car.mileage} </TableCell>
                  <TableCell>
                  <div className="gap-2 flex">
                    <Button variant="outline" size="icon" className="bg-[#FFC314] hover:bg-yellow-300">
                      <PenIcon className="h-4 w-4" color="white"/>
                    </Button>
                    <Button onClick={()=>handleOpenDeleteModal(car.id)} variant="outline" size="icon" className="bg-red-500 hover:bg-red-300">
                      <Trash2Icon className="h-4 w-4" color="white"/>
                    </Button>
                 </div>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        <Dialog open={openDeleteModal}>
          <DialogContent>
            <DialogHeader>
                <DialogTitle>
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                    <AlertTriangleIcon style={{ marginRight: '8px', color: 'red' }} />
                      Atenção
                    </div>
              </DialogTitle>
              </DialogHeader>
                  <div>
                    <p>
                      Deseja realmente Excluir?
                    </p>
                  </div>
              <DialogFooter>
                   <Button variant={"secondary"}
                      onClick={()=>setOpenDeleteModal(false)}> Não</Button>
                  <Button onClick={handleDelete} className="bg-red-500 hover:bg-red-300">Sim</Button>
              </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
