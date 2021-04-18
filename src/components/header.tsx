/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui"
import Modebutton from "./modebutton"

const Header = () => {
  return (
    <Box as="header" variant="header">
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 0,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <Modebutton />
      </Flex>
    </Box>
  )
}

export default Header;
