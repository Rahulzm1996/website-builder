import { Grid, Box } from "@mui/material";

const ResponsiveGrid = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        overflowX: "auto", // Add horizontal scroll if too many items
      }}
    >
      {[...Array(6)].map((_, index) => (
        <Grid
          item
          key={index}
          xs={12} // Full width on mobile
          sm={6} // Two columns on small screens
          md={4} // Auto-size on medium screens and above
          lg={3}
          xl={2}
          sx={{
            // flexBasis: "200px", // Minimum width of 200px
            flexGrow: 1, // Allow items to grow to fill space
            maxWidth: "100%", // Prevent items from overflowing
          }}
        >
          <Box
            sx={{
              height: "100px", // Example height for each item
              backgroundColor: "#e0e0e0", // Placeholder background color
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            any div html element
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ResponsiveGrid;
