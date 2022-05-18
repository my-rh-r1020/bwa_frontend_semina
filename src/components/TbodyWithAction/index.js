import React from "react";

function TbodyWithAction({ data, display, editUrl, deleteAction, customAction, actionNotDisplay }) {
  return (
    <tbody>
      {data.length ? (
        data.map((data, index) => {
          return (
            <tr key={index}>
              {Object.keys(data).map((key) => display.indexOf(key) > -1 && <td key={key}>{data[key]}</td>)}
              {!actionNotDisplay && (
                <td>
                  {/* {editUrl && (
                    <Link
                      className='btn btn-warning'
                      to={`${editUrl}/${data.id}`}
                    >
                      {' '}
                      <i className='fas fa-edit'></i>{' '}
                    </Link>
                  )} */}
                  {/* {deleteAction && (
                    <button className='btn btn-danger' onClick={null}>
                      <i className='fas fa-trash'></i>
                    </button>
                  )} */}
                </td>
              )}
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
            Tidak Ditemukan Data
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default TbodyWithAction;
