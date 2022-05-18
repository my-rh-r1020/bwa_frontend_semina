import React from "react";
import { Form } from "react-bootstrap";

// Import Component
import Button from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

function CategoriesForm({ handleSubmit, name, handleChange, value }) {
  return (
    <Form>
      <TextInputWithLabel label="Categories Name" type="text" name={name} value={value} onChange={handleChange} placeholder="Insert Categories Name" />
      <Button variant="outline-primary" action={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default CategoriesForm;
