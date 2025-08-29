import UserBodyRow from "./UserBodyRow";

const UserTable = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col gap-2 container mx-auto px-4">
        <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
          Users
        </h2>
        <div className="relative w-full overflow-x-auto shadow-md rounded-lg">
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
              <UserBodyRow name="Elliot Garamendi" email="elliotgaramendi@base2.com" avatar="https://avatars.githubusercontent.com/elliotgaramendi" />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserTable;