"use client";
import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Users Dashboard</h1>
      <table className="min-w-full border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left font-semibold text-gray-700">ID</th>
            <th className="py-3 px-6 text-left font-semibold text-gray-700">Name</th>
            <th className="py-3 px-6 text-left font-semibold text-gray-700">Username</th>
            <th className="py-3 px-6 text-left font-semibold text-gray-700">Email</th>
            <th className="py-3 px-6 text-left font-semibold text-gray-700">Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-6 text-gray-800">{user.id}</td>
              <td className="py-3 px-6 text-gray-800">{user.name}</td>
              <td className="py-3 px-6 text-gray-800">{user.username}</td>
              <td className="py-3 px-6 text-gray-800">{user.email}</td>
              <td className="py-3 px-6 text-gray-800">{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
