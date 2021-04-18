/** @jsx jsx */
import { Box, useColorMode, jsx } from "theme-ui"

const Modebutton = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => { setColorMode(isDark ? `light` : `dark`) }
  
  return (
    <Box as="nav" variant="nav">
        <button
          sx={{ p:`3`, position: `static`, variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3, zIndex: 99, }}
          onClick={toggleColorMode} type="button" aria-label="Toggle dark mode"
        >
          {isDark ? `Light` : `Dark`}
        </button>
    </Box>
  )
}

export default Modebutton
