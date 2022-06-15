// Import Libraries
import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Image, Spinner } from "react-bootstrap";
import { config } from "../../config";

// Import Component
import Button from "../Button";

function TbodyWithAction({ data, display, editUrl, deleteAction, customAction, actionNotDisplay, status }) {
  const navigate = useNavigate();
  return (
    <tbody>
      {status === "process" ? (
        <tr>
          <td colSpan={6} style={{ textAlign: "center" }}>
            <div className="flex items-center justify-center">
              <Spinner animation="border" variant="primary" />
            </div>
          </td>
        </tr>
      ) : data.length ? (
        data.map((data, index) => {
          return (
            <tr key={index}>
              {Object.keys(data).map(
                (key) =>
                  display.indexOf(key) > -1 && (
                    <td key={key}>
                      {key === "avatar" || key === "cover" ? (
                        <Image height={50} width={50} roundedCircle src={key === "avatar" ? `${config.api_image}/avatar/${data[key]}` : `${config.api_image}/cover_event/${data[key]}`} />
                      ) : key === "date" ? (
                        moment(data[key]).format("DD-MM-YYYY, h:mm:ss a")
                      ) : (
                        data[key]
                      )}
                    </td>
                  )
              )}
              {!actionNotDisplay && (
                <td>
                  {editUrl && (
                    <Button variant="outline-warning" size="sm" action={() => navigate(`${editUrl}/${data._id}`)}>
                      Edit
                    </Button>
                  )}
                  {deleteAction && (
                    <Button variant="outline-danger" className={"mx-2"} size="sm" action={() => deleteAction(data._id)}>
                      Delete
                    </Button>
                  )}
                </td>
              )}
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
            No Records Data
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default TbodyWithAction;
