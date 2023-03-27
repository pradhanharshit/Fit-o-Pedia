import React from 'react';
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt="80px" backgroundColor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="20px" pt="24px">
        <Typography variant="h5" pb="40px" mt="20px">Made with ❤️ by Harshit Pradhan</Typography>
      </Stack>
    </Box>
  )
}

export default Footer