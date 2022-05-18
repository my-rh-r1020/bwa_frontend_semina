import React, { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ComponentBreadcrumbs({ action, children, text2nd, text3rd, url2nd }) {
  const navigate = useNavigate(),
    [isActive, setIsActive] = useState(false);

  return (
    <Breadcrumb style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
      {/* Active v1 */}
      {/* <Breadcrumb.Item onClick={() => navigate(action)} action={() => setIsActive(true)} active={!isActive}>
        {children}
      </Breadcrumb.Item> */}

      {/* Active v2 */}
      {!text3rd && <Breadcrumb.Item active>{text2nd}</Breadcrumb.Item>}
      {text3rd && <Breadcrumb.Item onClick={() => navigate(url2nd)}>{text2nd}</Breadcrumb.Item>}
      {text3rd && <Breadcrumb.Item active>{text3rd}</Breadcrumb.Item>}
    </Breadcrumb>
  );
}

export default ComponentBreadcrumbs;
