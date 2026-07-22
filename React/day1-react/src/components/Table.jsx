import React from 'react'
const Table = () => {
  return (
    <div>
      <h2>Student Details</h2>

      <table className="student-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Anitha</td>
            <td>A</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Rahul</td>
            <td>B</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Deepak</td>
            <td>A+</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Table