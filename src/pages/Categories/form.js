import React from "react";
import { Form } from "react-bootstrap";

// Import Component
import Button from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

// Form untuk 1 field
// function CategoriesForm({ handleSubmit, name, handleChange, value }) {
//   return (
//     <Form>
//       <TextInputWithLabel label="Categories Name" type="text" name={name} value={value} onChange={handleChange} placeholder="Insert Categories Name" />
//       <Button variant="outline-primary" action={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//   );
// }

// Form untuk banyak field
function CategoriesForm({ handleSubmit, handleChange, form, isLoading }) {
  return (
    <Form>
      <TextInputWithLabel label="Category Name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Insert Categories Name" />
      <Button variant="outline-primary" size="sm" action={handleSubmit} loading={isLoading}>
        Save
      </Button>
    </Form>
  );
}

export default CategoriesForm;
