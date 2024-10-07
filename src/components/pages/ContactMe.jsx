import { useState } from 'react';

import { Paper, Grid2 as Grid, TextField, Button, Typography, Backdrop, Snackbar } from "@mui/material";

import RiseLoader from "react-spinners/RiseLoader";

import { Form, Field } from "react-final-form";

import  verifyEmail  from "../../utils/helpers"

export const ContactMe = () => {
    const requireEmail = (value) => {
        if (!value) {
            return "Email is required";
        } else if (!verifyEmail(value)) {
            return "Invalid email";
        }
        return undefined;
    };

    const required = (value) => {
        return value ? undefined : "Required";
    };

    const [loading, setLoading] = useState(false);

    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("Message Sent!");

    return (
        <Grid size={8}>
            <Typography sx={{ marginBottom: "20px" }}>
              Name:
            </Typography>
            <Field
              name="nameInput"
              validate={required}
              render={({ input, meta }) => (
                <TextField
                  {...input}
                  variant="outlined"
                  label="Enter your name"
                  placeholder="Name"
                  fullWidth
                  error={meta.touched && !input.value ? true : false}
                />
              )}
            />
    
            <Typography sx={{ marginBottom: "20px" }}>
              Email:
            </Typography>
            <Field
              name="emailInput"
              validate={required}
              render={({ input, meta }) => (
                <TextField
                  {...input}
                  variant="outlined"
                  label="Enter your email"
                  placeholder="Email"
                  fullWidth
                  error={meta.touched && !input.value ? true : false}
                />
              )}
            />
    
            <Typography sx={{ marginBottom: "20px" }}>
              Message:
            </Typography>
            <Field
              name="messageInput"
              validate={required}
              render={({ input, meta }) => (
                <TextField
                  {...input}
                  variant="outlined"
                  label="Write your message"
                  placeholder="Message"
                  fullWidth
                  multiline
                  error={meta.touched && !input.value ? true : false}
                />
              )}
            />
        </Grid>
    );
};