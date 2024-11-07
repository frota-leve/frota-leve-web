"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Employee } from "@/types/types";
import { AlertTriangleIcon, PenIcon, Trash2Icon } from "lucide-react";
import { useContext, useState } from "react";
import { deleteEmployee } from "@/services/employee";
import { AuthContext } from "@/contexts/AuthContext";

interface DataTableProps {
  employees: Employee[];
  onUpdateTable: Function;
}

export function DataTable({ employees, onUpdateTable }: DataTableProps) {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [employeeDeletedId, setEmployeeDeletedId] = useState<string>("");
  const { user } = useContext(AuthContext);

  function handleOpenDeleteModal(carId: string) {
    setEmployeeDeletedId(carId);
    setOpenDeleteModal(true);
  }

  async function handleDelete() {
    await deleteEmployee(user.businessId, employeeDeletedId);
    setOpenDeleteModal(false);
    onUpdateTable();
  }
  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Documento</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name} </TableCell>
                <TableCell>{employee.email} </TableCell>
                <TableCell>{employee.document} </TableCell>
                <TableCell>
                  <div className="gap-2 flex">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-[#FFC314] hover:bg-yellow-300"
                    >
                      <PenIcon className="h-4 w-4" color="white" />
                    </Button>
                    <Button
                      onClick={() => handleOpenDeleteModal(employee.id)}
                      variant="outline"
                      size="icon"
                      className="bg-red-500 hover:bg-red-300"
                    >
                      <Trash2Icon className="h-4 w-4" color="white" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Dialog open={openDeleteModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AlertTriangleIcon
                    style={{ marginRight: "8px", color: "red" }}
                  />
                  Atenção
                </div>
              </DialogTitle>
            </DialogHeader>
            <div>
              <p>Deseja realmente Excluir?</p>
            </div>
            <DialogFooter>
              <Button
                variant={"secondary"}
                onClick={() => setOpenDeleteModal(false)}
              >
                {" "}
                Não
              </Button>
              <Button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-300"
              >
                Sim
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
