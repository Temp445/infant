'use client';

import { useEffect, useState, ChangeEvent } from 'react';
import AdminProtectedRoute from '@/components/ProductedRoute';

interface User {
  _id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN' | string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users`);
      if (!res.ok) throw new Error('Failed to fetch users');

      const json = await res.json();
      setUsers(Array.isArray(json) ? json : json?.data || []);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      });

      if (!res.ok) throw new Error('Role update failed');

      const result = await res.json();
      setUsers((prev) =>
        prev.map((u) => (u._id === userId ? { ...u, role: result.user.role } : u))
      );
    } catch (err: any) {
      alert(err.message || 'Failed to update role');
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete user');

      await fetchUsers();
    } catch (err: any) {
      alert(err.message || 'Error deleting user');
    }
  };

  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <AdminProtectedRoute>
      <div className="flex min-h-screen">
        <div className="p-6 container mx-auto 2xl:mt-5 2xl:px-10">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            Users List
          </h1>

          <table className="min-w-full border rounded-lg overflow-hidden shadow-md">
            <thead className="bg-gradient-to-r from-orange-300 to-red-200">
              <tr>
                <th className="hidden md:flex px-6 py-3 text-left text-black font-medium uppercase text-sm">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-black font-medium uppercase text-sm">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-black font-medium uppercase text-sm">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-black font-medium uppercase text-sm">
                  Actions
                </th>
                <th className="px-6 py-3 text-left text-black font-medium uppercase text-sm">
                
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) =>
                user && user.role ? (
                  <tr
                    key={user._id}
                    className={`border-t ${
                      idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="hidden md:flex px-6 py-3 text-gray-800">{user.name}</td>
                    <td className="px-6 py-3 text-gray-800">{user.email}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-3 py-1 text-sm font-semibold rounded ${
                          user.role === 'ADMIN'
                            ? 'border text-orange-600'
                            : 'border text-gray-800'
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-3 flex flex-wrap gap-2">
                      <select
                        value={user.role}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          handleRoleChange(user._id, e.target.value)
                        }
                        className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring focus:border-blue-300"
                        aria-label="Role"
                      >
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                      </select>
                    </td>
                    <td>
                     <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition" >
                        Delete
                      </button>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminProtectedRoute>
  );
};

export default Users;
