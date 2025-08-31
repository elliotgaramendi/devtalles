import type { User } from "../../shared/types/users.types";
import UserBodyRow from "./UserBodyRow";

const UserTable = ({ users }: { users: User[] }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Avatar
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => <UserBodyRow key={user.id} user={user} />)}
      </tbody>
    </table>
  );
};

export default UserTable;