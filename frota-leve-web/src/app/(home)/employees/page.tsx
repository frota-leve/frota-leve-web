"use client";

import UserList, { User } from "@/components/UserList";
import { DataTable } from "./data-table";
import { employeeColumns } from "./columns";
import { getAll } from "@/services/employee";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { DialogForm } from "./dialog-form";

const Employees = () => {
  const [employees, setEmployees] = useState<User[]>([]);
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);

  const employeeEmpty: User = {
    id: "",
    name: "",
    email: "",
    document: "",
    role: "",
  };

  async function getAllEmployees() {
    const data = await getAll();
    setEmployees(data);
  }

  function handleOnOpenModalChange(isOpen: boolean) {
    setOpenFormModal(isOpen);
    getAllEmployees();
  }

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <div>
      <div className="w-100 mb-2 flex justify-end">
        <Button onClick={() => setOpenFormModal(true)}>
          <PlusCircleIcon />
          Novo Funcionário
        </Button>
      </div>
      <div>
        <DataTable columns={employeeColumns} data={employees} />
      </div>
      <DialogForm
        open={openFormModal}
        employee={{
          id: "",
          name: "",
          email: "",
          document: "",
          role: "",
        }}
        onOpenChange={handleOnOpenModalChange}
      />
    </div>
  );
};

export default Employees;
