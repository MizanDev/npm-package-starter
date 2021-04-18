/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import InspirationsMDX from "../sections/inspirations";

const Inspirations = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
    <section className="section-inspire">
        <Divider 
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)" 
        sx={{ clipPath: `polygon(0 7%, 100% 0%, 100% 100%, 0 100%)` }}
        speed={0.2} offset={offset} factor={factor} />
        <Content sx={{ zIndex: 55, }} speed={0.4} offset={offset+.1} factor={factor}>
            <Inner>
                <div
                    sx={{
                        display: `grid`,
                        gridGap: [2, 2, 2, 2],
                        gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
                        h2: { gridColumn: `-1/1`, px:[3,1]},
                    }}
                >
                    <InspirationsMDX />
                </div>
            </Inner>
        </Content>
        <Divider speed={0.1} offset={offset} factor={factor}>
            <UpDown>
                <SVG icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
                <SVG icon="upDown" hiddenMobile width={8} color="icon_purple" left="70%" top="20%" />
                <SVG icon="triangle" width={8} stroke color="icon_purple" left="25%" top="5%" />
                <SVG icon="upDown" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
            </UpDown>
            <UpDownWide>
                <SVG icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
                <SVG icon="triangle" width={12} stroke color="icon_darker" left="95%" top="50%" />
                <SVG icon="circle" hiddenMobile width={6} color="icon_darker" left="85%" top="15%" />
                <SVG icon="upDown" hiddenMobile width={8} color="icon_darker" left="45%" top="10%" />
            </UpDownWide>
            <SVG icon="circle" hiddenMobile width={6} color="icon_purple" left="4%" top="20%" />
            <SVG icon="circle" width={12} color="icon_darker" left="70%" top="60%" />
            <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
            <SVG icon="box" width={12} color="icon_purple" left="20%" top="30%" />
            <SVG icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
        </Divider>
    </section>
)

export default Inspirations
