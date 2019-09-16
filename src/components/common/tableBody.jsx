import React from "react";

const TableBody = ({ lable, data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h3>{lable}</h3>
          </td>
          <td>
            <a>{data}</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableBody;
