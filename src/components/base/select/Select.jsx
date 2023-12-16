function Select({ id, name, onChange, children }) {
  return (
    <select
      id={id}
      name={name}
      class="block w-fit p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 text-gray-600"
      onChange={onChange}
    >
      {children}
    </select>
  );
}

export default Select;
