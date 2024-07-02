import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

export default function ContactForm({ initialValue, onSubmit }) {
  const id = useId();
  const nameFieldId = id + "-name";
  const phoneNumberFieldId = id + "-phoneNumber";
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isValid, dirty }) => (
        <Form className={css.contactForm}>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            id={nameFieldId}
            className={css.inputField}
            type="text"
            name="name"
          />
          <ErrorMessage name="name" component="span" />
          <label htmlFor={nameFieldId}>Phone Number</label>
          <Field
            id={phoneNumberFieldId}
            className={css.inputField}
            type="text"
            name="number"
          />
          <ErrorMessage name="number" component="span" />
          <button
            type="submit"
            className={isValid && dirty ? "" : "isDisabled"}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
