import { Box, Card, CardContent, useTheme } from "@mui/material";
import SendMoneyForm from "@/components/forms";

const SendMoney = () => {
  const theme = useTheme();

  return (
    <Box sx={{ margin: theme.spacing(2) }}>
      <Card
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <SendMoneyForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default SendMoney;
