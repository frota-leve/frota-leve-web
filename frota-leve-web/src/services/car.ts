import api from "@/lib/axios-config";
import { Car } from "@/types/types";

export type CreateCarType = {
  model: string;
  name: string;
  brand: string;
  plate:string
}


export async function createCar(data: CreateCarType): Promise<void> {
  return await api.post(`/car`, data);
}

export async function deleteCar(id:string): Promise<void> {
  return await api.delete(`/car/${id}`);
}

export async function getAll(): Promise<Car[]> {
  const { data } = await api.get(`/car/`);
  return data.content
}