const UserBodyRow = ({ name, email, avatar }: { name: string, email: string, avatar: string }) => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {name}
      </th>
      <td className="px-6 py-4">
        {email}
      </td>
      <td className="px-6 py-4">
        <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
      </td>
    </tr>
  );
};

export default UserBodyRow;