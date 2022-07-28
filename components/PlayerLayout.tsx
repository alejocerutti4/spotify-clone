import { Box } from "@chakra-ui/layout";
import Player from "./Player";
import Sidebar from "./Sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vh" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" width="100%" bottom="0" left="0">
        <Player/>
      </Box>
    </Box>
  );
};
export default PlayerLayout;
