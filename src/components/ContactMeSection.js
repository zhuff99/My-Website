import React, { useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from '../hooks/useSubmit'; // No curly braces for default export
import { useAlertContext } from '../context/alertContext'; // Correct path to alertContext.js

const ContactMeSection = () => {
  const { submit, response, isLoading } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .required("Required")
        .min(25, "Must be at least 25 characters"),
    }),
    onSubmit: (values, { resetForm }) => {
      submit(values);
    },
  });

  useEffect(() => {
    if (response) {
      if (response.type === "success") {
        onOpen({
          type: "success",
          message: `Thank you, ${formik.values.firstName}, for your message!`,
        });
        formik.resetForm();
      } else if (response.type === "error") {
        onOpen({
          type: "error",
          message: response.message,
        });
      }
    }
  }, [response, onOpen, formik]);

  return (
    <Box id="contactme-section" as="section" onSubmit={formik.handleSubmit} width="100%" maxWidth="600px" mx="auto" p={4}>
      <VStack spacing={4}>
        <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            {...formik.getFieldProps("firstName")}
          />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            {...formik.getFieldProps("email")}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="type">Type of Enquiry</FormLabel>
          <Select
            id="type"
            name="type"
            {...formik.getFieldProps("type")}
          >
            <option value="hireMe">Hire Me</option>
            <option value="openSource">Open Source</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>

        <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
          <FormLabel htmlFor="comment">Message</FormLabel>
          <Textarea
            id="comment"
            name="comment"
            placeholder="Enter your message"
            {...formik.getFieldProps("comment")}
          />
          <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="teal" width="full" isLoading={isLoading}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactMeSection;
