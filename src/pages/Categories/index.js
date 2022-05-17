import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function Categories() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false),
    path = "/Categories";

  return (
    // Backup component
    // <Button variant="outline-primary" size="sm" action={() => setIsLoading(true)} loading={isLoading} disabled={isLoading}>
    //   Add Data
    // </Button>

    <Button variant="outline-primary" size="sm" action={() => navigate(`${path}/create`)}>
      Add Data
    </Button>
  );
}

export default Categories;
