import { Button } from "@/components/ui/button"
import { Car } from "@/types/types"
import { ColumnDef } from "@tanstack/react-table"
import { PenIcon, Trash2Icon } from 'lucide-react'

export const carColumns: ColumnDef<Car>[] = [
  {
    accessorKey: 'name',
    header: 'Nome'
  },
  {
    accessorKey: 'plate',
    header: 'Placa'
  },
  {
    accessorKey: 'brand',
    header: 'Marca' 
  },
  {
    accessorKey: 'mileage',
    header: 'KM atual'
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const car = row.original
 
      return (
        <div className="gap-2 flex">
           <Button variant="outline" size="icon" className="bg-[#FFC314] hover:bg-yellow-300">
            <PenIcon className="h-4 w-4" color="white"/>
          </Button>
          <Button variant="outline" size="icon" className="bg-red-500 hover:bg-red-300">
            <Trash2Icon className="h-4 w-4" color="white"/>
          </Button>

        </div>
      )
    },
  },
]