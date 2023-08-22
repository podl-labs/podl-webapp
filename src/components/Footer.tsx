import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { GitHub, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      paddingY={3}
    >
        <Grid container maxWidth="lg">
          <Grid item xs={12} sm={6} textAlign="center">
            <Typography variant="body1">
            Copyright © Podl. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="end">
            <Link
              href="https://twitter.com/podl_ai"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <Twitter />
            </Link>
            <Link
              href="https://twitter.com/podl_ai"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{ pl: 4 }}
            >
              <GitHub />
            </Link>
          </Grid>
        </Grid>
    </Box>
  );
}