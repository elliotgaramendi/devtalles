import useUsers from "../hooks/useUsers";
import UserRow from "./UserRow";

const Users = () => {
  const { users, page, totalPages, prevPage, nextPage } = useUsers();

  return (
    <section>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(element => <UserRow key={element.id} data={element} />)}
        </tbody>
      </table>
      <div>
        {page.current > 1 && <button onClick={prevPage}>Prev</button>}
        {totalPages.current !== page.current && <button onClick={nextPage}>Next</button>}
      </div>
    </section>
  );
};

export default Users;