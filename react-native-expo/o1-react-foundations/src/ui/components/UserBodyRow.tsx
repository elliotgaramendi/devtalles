import type { User } from "../../shared/types/users.types";

interface Props {
  user: User;
}

const UserBodyRow = ({ user }: Props) => {
  const { email, first_name, last_name, avatar } = user;

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <img
          src={avatar}
          alt={`${first_name} avatar`}
          className="w-8 h-8 rounded-full"
        />
      </th>
      <td className="px-6 py-4">
        {`${first_name} ${last_name}`}
      </td>
      <td className="px-6 py-4">
        {email}
      </td>
    </tr>
  );
};

export default UserBodyRow;