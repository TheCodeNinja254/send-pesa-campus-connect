import { Box, useTheme } from "@mui/material";
import { SuspenseLoader, TransactionCard } from "@/components/common";
import React, { useState } from "react";
import { Labrada } from "next/dist/compiled/@next/font/dist/google";

const apiURL = process.env.NEXT_PUBLIC_API_ENDPOINT_URL as string; // as string to specify the type to expect here.
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string; // as string to specify the type to expect here.

// TypeScript types definition here.
type ApiResponseInterface = {
  transactionId: number;
  recipientEmail: string;
  recipientPhoneNumber: string;
  amount: number;
  currency: string;
  timestamp: string;
};

const MyTransactions = () => {
  const theme = useTheme();

  const [apiResponse, setApiResponse] = useState<ApiResponseInterface[]>([]);

  // spinner status
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    // start spinner
    setLoading(true);

    // set our headers to cater for Authorization
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    fetch(apiURL, {
      method: "GET",
      headers,
    })
      .then((res) => {
        // stop spinner
        setLoading(false);

        if (!res.ok) {
          throw new Error("There was an error fetching transactions");
        }

        return res.json();
      })
      .then((data) => {
        // keep data within the state
        setApiResponse(data.body.transactions);
      })
      .catch((error) => {
        // stop spinner
        setLoading(false);

        // do something with the error
        // linting will throw an error since it is bad practise to leave console.log() in your code
        console.log(error);
      });
  }, []);

  if (loading) return <SuspenseLoader />;

  return (
    <Box sx={{ margin: theme.spacing(2) }}>
      {apiResponse &&
        apiResponse.map((tr: ApiResponseInterface) => (
          <TransactionCard key={tr.transactionId} transaction={tr} />
        ))}
    </Box>
  );
};

export default MyTransactions;
