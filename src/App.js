import React, {useLayoutEffect, useState} from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
} from "@mui/material";

function App() {
	const [height, setHeight] = useState();
	const [offsetTop, setOffsetTop] = useState();

	useLayoutEffect(() => {
		const onResize = () => {
			const calculateSize = () => {
				if (!window.visualViewport) {
					setHeight(undefined);
					setOffsetTop(undefined);

					return;
				}

				const newHeight = window.visualViewport.height;
				const newOffsetTop = window.visualViewport.offsetTop;

				setHeight(newHeight);
				setOffsetTop(newOffsetTop);
			};

			calculateSize();

			setTimeout(() => {
				calculateSize();
			}, 300);
		};

		window.visualViewport?.addEventListener('resize', onResize);

		return () => {
			window.visualViewport?.removeEventListener('resize', onResize);
		};
	}, []);

  return (
    <>
      <Container
        maxWidth="sm"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          height: height || "100dvh",
					marginTop: offsetTop || 0,
          px: 2
        }}
      >
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Введите что-нибудь:
          </Typography>
          <TextField fullWidth variant="outlined" size="medium" />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            pb: 2,
            pt: 1,
            backgroundColor: "#fff",
          }}
        >
          <Button variant="contained" fullWidth sx={{ mb: 1 }} onClick={() => { }}>
            Кнопка 1
          </Button>
          <Button variant="outlined" fullWidth onClick={() => { }}>
            Кнопка 2
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
