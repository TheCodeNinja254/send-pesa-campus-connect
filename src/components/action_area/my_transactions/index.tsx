import { Box, useTheme } from "@mui/material";
import { TransactionCard } from "@/components/common";

const apiUrl = "https://private-57b77-quikkapi.apiary-mock.com/transactions";
const accessToken =
  "eyjsadlkdskl98iujnmsdjsd090iujnmsdsjsdmsd098u345tjfdksjd908utrjfekdsm340r9fuidsjkmijhbnj908uhjnkmnjoijhbhu90oiujhkjnbnju9oijknmkloi8765trfghjknmbhy6rtyujhbnjui76ytgbhujhbgtyuhjkiu87689ioujhjkuyghjuhygvhby78987yhuikjhhujkhuytgfvfcgyui987s=";

const MyTransactions = () => {
  const theme = useTheme();

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json", // Adjust the content type as needed
  };

  fetch(apiUrl, {
    method: "GET",
    headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      console.log("Data:", data);
      // Handle the data as needed
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors
    });

  return (
    <Box sx={{ margin: theme.spacing(2) }}>
      <TransactionCard />
    </Box>
  );
};

export default MyTransactions;
