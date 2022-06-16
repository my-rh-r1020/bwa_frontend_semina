// Import Libraries
import React, { useEffect } from "react";
import { Button, Col, Figure, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// Import Component
import FileInput from "../../components/FileInput";
import SelectBox from "../../components/SelectBox";
import TextInputWithLabel from "../../components/TextInputWithLabel";

// Import Redux
import { setCategory, setSpeaker } from "../../redux/events/actions";
import { fetchListCategories, fetchListSpeakers } from "../../redux/lists/actions";

export default function EventsForm({ handleChange, handleSubmit, form, isLoading, edit }) {
  const dispatch = useDispatch();

  // Redux
  const events = useSelector((state) => state.events),
    lists = useSelector((state) => state.lists);

  useEffect(() => {
    dispatch(fetchListSpeakers());
    dispatch(fetchListCategories());
  }, [dispatch]);

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

      <TextInputWithLabel label="Event Description" type="text" name="about" value={form.about} onChange={handleChange} placeholder="Insert Event Description" />
      <TextInputWithLabel label="Event Tagline" type="text" name="tagline" value={form.tagline} onChange={handleChange} placeholder="Insert Event Tagline" />
      <TextInputWithLabel label="Event Keypoints" type="text" name="keypoint" value={form.keypoint} onChange={handleChange} placeholder="Insert Event Keypoints" />
      <TextInputWithLabel label="Event Stock" type="text" name="stock" value={form.stock} onChange={handleChange} placeholder="Insert Event Stock" />

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
        {/* Select Box Categories */}
        <Col>
          <SelectBox placeholder="Pilih Kategori" name="category" handleChange={(e) => dispatch(setCategory(e))} options={lists.categories} value={events.categories} isClearable={true} />
        </Col>
        {/* Select Box Speakers */}
        <Col>
          <SelectBox placeholder="Pilih Pembicara" name="speaker" handleChange={(e) => dispatch(setSpeaker(e))} options={lists.speakers} value={events.speaker} isClearable={true} />
        </Col>
      </Row>

      {/* Button */}
      <Button variant="outline-primary" size="sm" action={handleSubmit} isLoading={isLoading}>
        {edit ? "Update" : "Save"}
      </Button>
    </Form>
  );
}
