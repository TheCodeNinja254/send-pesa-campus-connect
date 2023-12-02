import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { CancelRounded, Check } from "@mui/icons-material";

const apiURL = process.env.NEXT_PUBLIC_API_ENDPOINT_URL as string;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string;

const SendMoneySchema = Yup.object().shape({
  recipientId: Yup.string()
    .min(10, "Mobile number should have 10 digits")
    .max(10, "Mobile number should have 10 digits")
    .matches(/^[0-9]*$/, "Invalid mobile number.")
    .required("Who are we sending money to? Please enter."),
  amount: Yup.number()
    .min(10, "Minimum allowed amount is Ksh. 10")
    .max(300000, "Maximum allowed amount is Ksh. 300,000")
    .required("How much do you wish to send?"),
});

const SendMoneyForm = () => {
  const theme = useTheme();

  const [hasResponse, setHasResponse] = useState({
    status: false,
    open: false,
    message: "",
  });

  const { status, open, message } = hasResponse;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const handleSendMoney = (passedValues: any) => {
    axios
      .post(
        apiURL,
        {
          recipientId: passedValues.recipientId,
          recipientIdType: passedValues.recipientIdType,
          amount: passedValues.amount,
        },
        {
          headers,
        }
      )
      .then((res) => {
        if (res.data.header.responseCode === 200) {
          setHasResponse({
            status: true,
            open: true,
            message: "Transaction successful",
          });
        } else {
          setHasResponse({
            status: false,
            open: true,
            message: "Transaction failed",
          });
        }
      })
      .catch(() => {
        setHasResponse({
          status: false,
          open: true,
          message: "Something went wrong! Please try again later.",
        });
      });
  };

  return (
    <>
      {open ? (
        <>
          <Box display="flex" alignContent="center" justifyContent="center">
            {status ? (
              <Avatar
                sx={{
                  bgcolor: theme.palette.primary.main,
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(2),
                }}
              >
                <Check fontSize="large" />
              </Avatar>
            ) : (
              <Avatar
                sx={{
                  bgcolor: theme.palette.error.main,
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(2),
                }}
              >
                <CancelRounded fontSize="large" />
              </Avatar>
            )}
          </Box>
          <Typography align="center">{message}</Typography>
        </>
      ) : (
        <Formik
          initialValues={{
            recipientId: "",
            recipientIdType: "mobilePhoneNumber",
            amount: 0,
          }}
          validationSchema={SendMoneySchema}
          onSubmit={(values) => handleSendMoney(values)}
        >
          {({ errors, setFieldValue, values, isValid }) => (
            <FormikForm>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={!!errors.recipientId}
                    fullWidth
                    helperText={errors.recipientId || null}
                    label="Receipeint Mobile Number"
                    name="recipientId"
                    onChange={(e) => {
                      setFieldValue("recipientId", e.target.value, true);
                    }}
                    type="text"
                    value={values.recipientId}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={!!errors.amount}
                    fullWidth
                    helperText={errors.amount || null}
                    label="Amount to send (Ksh.)"
                    name="amount"
                    onChange={(e) => {
                      setFieldValue("amount", e.target.value, true);
                    }}
                    type="number"
                    value={values.amount}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="primary"
                    disableElevation
                    disabled={!isValid}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Send Pesa Now
                  </Button>
                </Grid>
              </Grid>
            </FormikForm>
          )}
        </Formik>
      )}
    </>
  );
};

export default SendMoneyForm;
