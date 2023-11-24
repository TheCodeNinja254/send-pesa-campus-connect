import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import { Button, Grid, TextField } from "@mui/material";

const SendMoneySchema = Yup.object().shape({
  recipientId: Yup.string()
    .min(10, "Mobile number should have 10 digits")
    .max(10, "Mobile number should have 10 digits")
    .matches(/^[0-9]*$/, "Invalid")
    .required("Who are we sending money to? Please enter."),
  amount: Yup.number()
    .min(10, "Minimum allowed amount is Ksh. 10")
    .max(300000, "Maximum allowed amount is Ksh. 300,000")
    .required("How much do you wish to send?"),
});

const SendMoneyForm = () => {
  const handleSendMoney = () => {
    console.log("We are going to send money here. Yaay!");
  };

  return (
    <Formik
      initialValues={{
        recipientId: "",
        recipientIdType: "mobilePhoneNumber",
        amount: 0,
      }}
      validationSchema={SendMoneySchema}
      onSubmit={handleSendMoney}
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
