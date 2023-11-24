import { Box, useTheme } from "@mui/material";
import { TransactionCard } from "@/components/common";

const MyTransactions = () => {
  const theme = useTheme();

  return (
    <Box sx={{ margin: theme.spacing(2) }}>
      <TransactionCard />
    </Box>
  );
};

export default MyTransactions;
