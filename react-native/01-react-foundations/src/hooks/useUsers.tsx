import { useEffect, useRef, useState } from "react";
import type { User } from "../interfaces";
import { getUsers } from "../services/users.service";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const page = useRef(1);
  const totalPages = useRef(0);

  useEffect(() => {
    getUsers(page.current)
      .then(data => {
        setUsers(data.data);
        totalPages.current = data.total_pages;
      });
  }, []);

  const prevPage = () => {
    page.current--;
    getUsers(page.current)
      .then(data => setUsers(data.data));
  };

  const nextPage = () => {
    page.current++;
    getUsers(page.current)
      .then(data => setUsers(data.data));
  };
  return {
    users,
    page,
    totalPages,
    prevPage,
    nextPage
  };
}

export default useUsers;