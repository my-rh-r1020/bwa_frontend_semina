// Import Libraries
import React from "react";
import { Figure, Form } from "react-bootstrap";

// Import Component
import Button from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import FileInput from "../../components/FileInput";

export default function SpeakersForm({ handleChange, handleSubmit, form, isLoading, edit }) {
  return (
    <Form>
      <TextInputWithLabel label="Speaker Name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Insert Speaker Name" />
      <TextInputWithLabel label="Speaker Role" type="text" name="role" value={form.role} onChange={handleChange} placeholder="Insert Speaker Role" />
      {/* <TextInputWithLabel type="file" name="avatar" value={form.avatar} onChange={handleChange} /> */}
      <FileInput controlId="formFileSm" label="Upload Your Avatar" type="file" name="avatar" onChange={handleChange} />
      {form.avatar !== "" && (
        <div>
          <Figure>
            <Figure.Caption className="mb-1">Preview Your Image</Figure.Caption>
            <Figure.Image width={150} height={150} alt="150x150" src={form.avatar} />
          </Figure>
        </div>
      )}

      {/* Button */}
      <Button variant="outline-primary" size="sm" action={handleSubmit} isLoading={isLoading}>
        {edit ? "Update" : "Save"}
      </Button>
    </Form>
  );
}
