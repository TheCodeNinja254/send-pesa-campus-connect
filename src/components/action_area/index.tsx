import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import MyTransactions from "@/components/action_area/my_transactions";
import SendMoney from "@/components/action_area/send_money";

const ActionArea = () => {
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: 2, backgroundColor: theme.palette.common.white }}
    >
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography variant="h4" sx={{ marginBottom: theme.spacing(3) }}>
              My Transactions
            </Typography>
            <Divider />
            <MyTransactions />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h4" sx={{ marginBottom: theme.spacing(3) }}>
              Send Pesa
            </Typography>
            <Divider />
            <SendMoney />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ActionArea;
