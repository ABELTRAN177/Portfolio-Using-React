import { useState } from 'react';
import { Paper, Grid2 as Grid, TextField, Button, Typography, Backdrop, Snackbar } from "@mui/material";
import RiseLoader from "react-spinners/RiseLoader";
import { Form, Field } from 'react-final-form';
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
    // State for loading spinner
    const [loading, setLoading] = useState(false);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("Message Sent!");

    return (
      <>
        <Form
          onSubmit={(values, form) => {
            // handle form submission here
            console.log(values);
            setIsSnackbarOpen(true);
            setSnackbarMessage("Message Sent!");
            form.reset();
          }}
          render={({ handleSubmit, pristine, submitting }) => (
            <form onSubmit={handleSubmit}>
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
              <Button type="submit" disabled={pristine || submitting}>
                Submit
              </Button>
            </form>
          )}
        />
        {/* message displays when button is clicked */}
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={() => setIsSnackbarOpen(false)}
          message={snackbarMessage}
        />
      </>
    );
}
