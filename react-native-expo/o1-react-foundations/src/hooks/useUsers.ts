// /src/app/hooks/useUsers.ts
import { useEffect, useState } from 'react';
import { getAllUsers } from '../infrastructure/api/users.api';
import type { User } from '../shared/types/users.types';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const nextPage = () => setPage(prev => prev + 1);
  const prevPage = () => setPage(prev => prev > 1 ? prev - 1 : prev);
  const goToPage = (pageNum: number) => setPage(pageNum);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getAllUsers(page);
        setUsers(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [page]);

  return {
    users,
    loading,
    error,
    page,
    nextPage,
    prevPage,
    goToPage
  };
};