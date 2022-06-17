// Import Libraries
import React, { useEffect } from "react";
import { CloseButton, Col, Figure, Form, FormControl, InputGroup, Row } from "react-bootstrap";

// Import Component
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import SelectBox from "../../components/SelectBox";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function EventsForm({ handleChange, handleSubmit, handleChangeKeypoint, handlePlusKeypoint, handleMinusKeypoint, form, isLoading, edit, lists }) {
  return (
    <Form>
      {/* Row 1 */}
      <Row>
        <Col>
          <TextInputWithLabel label="Title" type="text" name="title" value={form.title} onChange={handleChange} placeholder="Insert Event Title" />
        </Col>
        <Col>
          <TextInputWithLabel label="Event Date" type="datetime-local" name="date" value={form.date} onChange={handleChange} placeholder="Choose Event Date" />
        </Col>
      </Row>
      {/* Row 2 */}
      <Row>
        <Col>
          <TextInputWithLabel label="Locations" type="text" name="venueName" value={form.venueName} onChange={handleChange} placeholder="Insert Event Location" />
        </Col>
        <Col>
          <TextInputWithLabel label="Price" type="number" name="price" value={form.price} onChange={handleChange} placeholder="Insert Event Price" />
        </Col>
      </Row>

      <TextInputWithLabel label="Description" type="text" name="about" value={form.about} onChange={handleChange} placeholder="Insert Event Description" />
      <TextInputWithLabel label="Stock" type="text" name="stock" value={form.stock} onChange={handleChange} placeholder="Insert Event Stock" />
      <TextInputWithLabel label="Tagline" type="text" name="tagline" value={form.tagline} onChange={handleChange} placeholder="Insert Event Tagline" />

      {/* Keypoint */}
      <Form.Label>Keypoint</Form.Label>
      {form.keypoint.map((key, i) => (
        <InputGroup className="mb-2" key={i}>
          <FormControl
            placeholder="Insert Keypoint"
            value={key}
            type="text"
            name={key}
            onChange={(e) => {
              handleChangeKeypoint(e, i);
            }}
          />
          {i !== 0 && (
            <InputGroup.Text id="basic-addon2">
              <CloseButton onClick={() => handleMinusKeypoint(i)} />
            </InputGroup.Text>
          )}
        </InputGroup>
      ))}
      <Button className="mb-3" variant="outline-success" size="sm" action={handlePlusKeypoint}>
        Add Keypoint
      </Button>

      {/* Upload Image */}
      <FileInput controlId="formFileSm" label="Upload Event Banner" type="file" name="cover" onChange={handleChange} />
      {form.cover !== "" && (
        <div>
          <Figure>
            <Figure.Caption className="mb-1">Preview Event Banner</Figure.Caption>
            <Figure.Image width={150} height={150} alt="150x150" src={form.cover} />
          </Figure>
        </div>
      )}

      {/* Select Box */}
      <Row>
        {/* Categories */}
        <Col>
          <SelectBox label={"Category"} placeholder="Pilih Category" name="category" handleChange={(e) => handleChange(e)} options={lists.categories} value={form.category} isClearable={true} />
        </Col>
        {/* Speakers */}
        <Col>
          <SelectBox label={"Speaker"} placeholder="Pilih Speaker" name="speaker" handleChange={(e) => handleChange(e)} options={lists.speakers} value={form.speaker} isClearable={true} />
        </Col>
      </Row>

      {/* Button */}
      <Button className="mt-3" variant="outline-primary" size="sm" action={handleSubmit} isLoading={isLoading}>
        {edit ? "Update" : "Save"}
      </Button>
    </Form>
  );
}
