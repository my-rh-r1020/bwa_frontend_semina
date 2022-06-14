// Import Libraries
import React from "react";
import { Button, Figure, Form } from "react-bootstrap";

// Import Component
import FileInput from "../../components/FileInput";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function EventsForm({ handleChange, handleSubmit, form, isLoading, edit }) {
  return (
    <Form>
      <TextInputWithLabel label="Event Title" type="text" name="title" value={form.title} onChange={handleChange} placeholder="Insert Event Title" />
      <TextInputWithLabel label="Event Price" type="text" name="price" value={form.price} onChange={handleChange} placeholder="Insert Event Price" />
      <TextInputWithLabel label="Event Date" type="date" name="date" value={form.date} onChange={handleChange} placeholder="Choose Event Date" />

      <FileInput controlId="formFileSm" label="Upload Event Banner" type="file" name="cover" onChange={handleChange} />
      {form.cover !== "" && (
        <div>
          <Figure>
            <Figure.Caption className="mb-1">Preview Event Banner</Figure.Caption>
            <Figure.Image width={150} height={150} alt="150x150" src={form.cover} />
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
