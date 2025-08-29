import UserTable from "../components/UserTable";

const UserTableSection = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col gap-2 container mx-auto px-4">
        <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
          Users
        </h2>
        <div className="relative w-full overflow-x-auto shadow-md rounded-lg">
          <UserTable />
        </div>
      </div>
    </section>
  );
};

export default UserTableSection;