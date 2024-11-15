import type { User } from "../interfaces";

const UserRow = ({ data }: { data: User }) => {
  const { id, email, first_name, last_name, avatar } = data;
  return (
    <tr key={id}>
      <td>
        <img src={avatar} alt={`${first_name} ${last_name}`} width={64} height={64} />
      </td>
      <td>{first_name} {last_name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default UserRow;