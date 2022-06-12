// Import Libraries
import React from "react";
import { Form } from "react-bootstrap";

// Import Component
import Button from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

function SpeakersForm({ handleChange, handleSubmit, form, isLoading, edit }) {
  return (
    <Form>
      <TextInputWithLabel label="Speaker Name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Insert Speaker Name" />
      <TextInputWithLabel label="Speaker Role" type="text" name="role" value={form.role} onChange={handleChange} placeholder="Insert Speaker Role" />
      <Button variant="outline-primary" size="sm" action={handleSubmit} isLoading={isLoading}>
        {edit ? "Update" : "Save"}
      </Button>
    </Form>
  );
}

export default SpeakersForm;
