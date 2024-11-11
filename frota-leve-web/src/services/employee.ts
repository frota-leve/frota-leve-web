import { Employee } from "@/types/types";
import api from "@/lib/axios-config";


export type CreateEmployeeType = {
  email: string;
  document: string;
  name: string;
}

export type UpdateCarType = {

}

export async function createEmployee(businessId: string, data: CreateEmployeeType): Promise<void> {
  return await api.post(`/api/business/${businessId}/employees`, data);
}

export async function deleteEmployee(businessId: string, employeeId: string): Promise<void> {
  return await api.delete(`/api/business/${businessId}/employees/${employeeId}`)

}

export async function getAll(page: number, size: number) {
  return await api.get('/api/employees', {
    params: { page: page - 1, size }
  });
}

export async function updateEmployee(employeeId: string, name: string) {
  return await api.put(`/api/employees/${employeeId}`, {
    name
  })
}