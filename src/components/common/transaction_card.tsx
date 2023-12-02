import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Money, Phone, VerifiedUser, Watch } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const TransactionCard = ({
  transaction,
  key,
}: {
  transaction: any;
  key: number;
}) => {
  const theme = useTheme();

  return (
    <Card
      key={key}
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.default,
        borderRadius: 2,
        marginBottom: theme.spacing(2),
      }}
    >
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Box display="flex" alignContent="center" justifyContent="center">
              <Avatar
                sx={{
                  bgcolor: theme.palette.primary.main,
                  marginTop: theme.spacing(6),
                }}
              >
                <AttachMoneyIcon fontSize="large" />
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Stack direction="row">
                  <VerifiedUser />
                  <Typography sx={{ marginLeft: theme.spacing(1) }}>
                    Recipient Email:
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row">
                  <Typography
                    sx={{ marginLeft: theme.spacing(1), color: grey[600] }}
                  >
                    {transaction?.recipientEmail}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row">
                  <Phone />
                  <Typography sx={{ marginLeft: theme.spacing(1) }}>
                    Recipient Phone:
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row">
                  <Typography
                    sx={{ marginLeft: theme.spacing(1), color: grey[600] }}
                  >
                    {transaction?.recipientPhoneNumber}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row">
                  <Watch />
                  <Typography sx={{ marginLeft: theme.spacing(1) }}>
                    Timestamp
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row">
                  <Typography
                    sx={{ marginLeft: theme.spacing(1), color: grey[600] }}
                  >
                    {transaction?.timestamp}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row">
                  <Money />
                  <Typography sx={{ marginLeft: theme.spacing(1) }}>
                    Amount
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row">
                  <Typography
                    sx={{ marginLeft: theme.spacing(1), color: grey[600] }}
                  >
                    {transaction?.amount}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;
