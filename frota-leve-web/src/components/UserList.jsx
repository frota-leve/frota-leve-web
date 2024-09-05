"use client";

import React, { useState } from "react";
import Formulario from "./Formulario"; 
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "João Silva", email: "joao@example.com", document: "1234567890", role: "Motorista" },
    { id: 2, name: "Maria Souza", email: "maria@example.com", document: "0987654321", role: "Diretor" }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null); 

 
  const handleSubmitUser = (userData) => {
    if (editingUser) {

      setUsers(users.map((user) => (user.id === editingUser.id ? { ...userData, id: editingUser.id } : user)));
    } else {
   
      setUsers([...users, { id: Date.now(), ...userData }]);
    }
    setShowForm(false); 
    setEditingUser(null); 
  };


  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowForm(true); 
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Usuários</h2>
        <button
          onClick={() => {
            setEditingUser(null); 
            setShowForm(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Adicionar Usuário
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Nome
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Documento
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Cargo
              </th>
              <th className="py-3 px-6 bg-gray-200 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-4 px-6 text-gray-800">{user.name}</td>
                <td className="py-4 px-6 text-gray-800">{user.email}</td>
                <td className="py-4 px-6 text-gray-800">{user.document}</td>
                <td className="py-4 px-6 text-gray-800">{user.role}</td>
                <td className="py-4 px-6 text-center">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded hover:bg-yellow-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal do Formulário */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <Card className="w-full max-w-md">
            <CardHeader className="bg-[#FFC314]">
              <CardTitle>{editingUser ? "Editar funcionário" : "Adicionar novo funcionário"}</CardTitle>
            </CardHeader>
            <CardContent>
              <Formulario onSubmit={handleSubmitUser} defaultValues={editingUser} />
            </CardContent>
            <CardFooter>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingUser(null);
                }}
                className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
              >
                Cancelar
              </button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default UserList;
