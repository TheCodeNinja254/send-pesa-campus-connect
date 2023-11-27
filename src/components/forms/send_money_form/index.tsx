import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button, Grid, TextField } from "@mui/material";

const apiUrl = "https://private-57b77-quikkapi.apiary-mock.com/transactions";
const accessToken =
  "eyjsadlkdskl98iujnmsdjsd090iujnmsdsjsdmsd098u345tjfdksjd908utrjfekdsm340r9fuidsjkmijhbnj908uhjnkmnjoijhbhu90oiujhkjnbnju9oijknmkloi8765trfghjknmbhy6rtyujhbnjui76ytgbhujhbgtyuhjkiu87689ioujhjkuyghjuhygvhby78987yhuikjhhujkhuytgfvfcgyui987s=";

const SendMoneySchema = Yup.object().shape({
  recipientId: Yup.string()
    .min(10, "Mobile number should have 10 digits")
    .max(10, "Mobile number should have 10 digits")
    .matches(/^[0-9]*$/, "Invalid mobile number provided.")
    .required("Who are we sending money to? Please enter."),
  amount: Yup.number()
    .min(10, "Minimum allowed amount is Ksh. 10")
    .max(300000, "Maximum allowed amount is Ksh. 300,000")
    .required("How much do you wish to send?"),
});

const SendMoneyForm = () => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json", // Adjust the content type as needed
  };

  return (
    <Formik
      initialValues={{
        recipientId: "",
        recipientIdType: "mobilePhoneNumber",
        amount: 0,
      }}
      validationSchema={SendMoneySchema}
      onSubmit={(values) => {
        // Make the POST request using Axios
        axios
          .post(
            apiUrl,
            {
              recipientId: values.recipientId,
              recipientIdType: "mobilePhoneNumber",
              amount: values.amount,
            },
            {
              headers,
            }
          )
          .then((response) => {
            console.log("Response:", response.data);
            // Handle the response data as needed
          })
          .catch((error) => {
            console.error(
              "Error:",
              error.response ? error.response.data : error.message
            );
          });
      }}
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
  );
};

export default SendMoneyForm;
