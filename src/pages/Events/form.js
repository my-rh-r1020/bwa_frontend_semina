// Import Libraries
import React from "react";
import { Button, Col, Figure, Form, Row } from "react-bootstrap";

// Import Component
import FileInput from "../../components/FileInput";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function EventsForm({ handleChange, handleSubmit, form, isLoading, edit }) {
  return (
    <Form>
      {/* Row 1 */}
      <Row>
        <Col>
          <TextInputWithLabel label="Event Title" type="text" name="title" value={form.title} onChange={handleChange} placeholder="Insert Event Title" />
        </Col>

        <Col>
          <TextInputWithLabel label="Event Date" type="date" name="date" value={form.date} onChange={handleChange} placeholder="Choose Event Date" />
        </Col>
      </Row>
      {/* Row 2 */}
      <Row>
        <Col>
          <TextInputWithLabel label="Event Venue" type="text" name="venueName" value={form.venueName} onChange={handleChange} placeholder="Insert Event Location" />
        </Col>
        <Col>
          <TextInputWithLabel label="Event Price" type="text" name="price" value={form.price} onChange={handleChange} placeholder="Insert Event Price" />
        </Col>
      </Row>

      <FileInput controlId="formFileSm" label="Upload Event Banner" type="file" name="cover" onChange={handleChange} />
      {form.cover !== "" && (
        <div>
          <Figure>
            <Figure.Caption className="mb-1">Preview Event Banner</Figure.Caption>
            <Figure.Image width={150} height={150} alt="150x150" src={form.cover} />
          </Figure>
        </div>
      )}

      <TextInputWithLabel label="Event Description" type="textarea" name="about" value={form.about} onChange={handleChange} placeholder="Insert Event Description" />
      <TextInputWithLabel label="Event Tagline" type="text" name="tagline" value={form.tagline} onChange={handleChange} placeholder="Insert Event Tagline" />
      <TextInputWithLabel label="Event Keypoints" type="textarea" name="keypoint" value={form.keypoint} onChange={handleChange} placeholder="Insert Event Keypoints" />
      <TextInputWithLabel label="Event Stock" type="text" name="stock" value={form.stock} onChange={handleChange} placeholder="Insert Event Stock" />

      {/* Button */}
      <Button variant="outline-primary" size="sm" action={handleSubmit} isLoading={isLoading}>
        {edit ? "Update" : "Save"}
      </Button>
    </Form>
  );
}
