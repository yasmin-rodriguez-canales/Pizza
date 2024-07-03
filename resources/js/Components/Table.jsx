export default function Table ({ items, columns, primary, action }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                  <th scope="col" className="px-6 py-3">{primary}</th>
                  {columns.map((column) => (
                    <th key={column} scope="col" className="px-6 py-3">
                      {column}
                    </th>
                  ))}
                  <th scope="col" className="px-6 py-3"></th>
              </tr>
          </thead>
          <tbody>
              {items.map((item) => (
                <tr key={item.id} className="bg-white border-b ">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      #{item.id}
                  </th>
                  {columns.map((column) => (
                    <td key={column} className="px-6 py-4">
                      {item[column]}
                    </td>
                  ))}

                  <td className="px-6 py-4 text-sm font-medium">
                    <a href={route(action, item.id)} className="font-medium text-blue-600 hover:underline">View Details</a>
                  </td>
                </tr>
              ))}
          </tbody>
      </table>
    </div>
  )
}