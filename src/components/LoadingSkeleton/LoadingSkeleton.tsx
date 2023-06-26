import { Box, Skeleton } from "@mui/material";
import React from "react";

const LoadingSkeleton = () => (
  <Box
    sx={{
      height: "max-content",
    }}
  >
    {[...Array(10)].map((_) => (
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} />
    ))}
  </Box>
);

export default React.memo(LoadingSkeleton);
