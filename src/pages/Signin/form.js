import React from "react";
import { Form } from "react-bootstrap";

// Import Component
import Button from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function FormSignin({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form>
      <TextInputWithLabel label={"Email"} type="email" name="email" value={form.email} onChange={handleChange} placeholder={"Insert Your Email"} />
      <TextInputWithLabel label={"Password"} type="password" name="password" value={form.password} onChange={handleChange} placeholder={"Insert Your Password"} />
      <Button variant="outline-primary" size="sm" action={handleSubmit} loading={isLoading}>
        Sign In
      </Button>
    </Form>
  );
}
