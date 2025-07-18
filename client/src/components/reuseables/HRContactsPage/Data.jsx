export default function Data({
  name,
  company,
  email,
  phone,
  handleDelete,
  whatsapp,
  id,
}) {
  return (
    <tbody>
      <tr className="text-center">
        <td className="border border-[#3f3f46] p-2">{name}</td>
        <td className="border border-[#3f3f46] p-2">{company}</td>
        <td className="border border-[#3f3f46] p-2">{email}</td>
        <td className="border border-[#3f3f46] p-2">{phone}</td>
        <td className="border border-[#3f3f46] p-2">{whatsapp}</td>
        <td
          onClick={() => handleDelete(id)}
          className="border border-[#3f3f46] p-2"
        >
          Delete
        </td>
      </tr>
    </tbody>
  );
}
