import { Box } from "@mui/material";
import {  Timeline } from "./components/timeline";
import Icps from "./components/icps";


function App() {
  return (
    <Box
      sx={{
        background: "#101010",
        width: "100dvw",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <Icps/> */}
      <Timeline />
    </Box>
  );
}

export default App;
