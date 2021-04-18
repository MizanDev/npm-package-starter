/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type InspireCardProps = {
    title: string;
    children: React.ReactNode;
    bg: string;
}

const InspireCard = ({ title, children, bg }: InspireCardProps) => (
    <div
        sx={{
            width: `100%`,
            position: `relative`,
            textDecoration: `none`,
            borderRadius: `lg`,
            px: [3, 0],
            py: [1, 1],
            color: `white`,
            "&:hover": {
                color: `white !important`,
            },
        }}
    >
        <h3
            sx={{
                letterSpacing: `wide`,
                pt: 0,
                my:[2,2],
                fontSize: [4, 6],
                fontWeight: `bold`,
                lineHeight: 1,
                background: bg || `none`,
                WebkitBackgroundClip:`text`,
                WebkitTextFillColor: `transparent`,
            }}
        >
            {title}
        </h3>
        <p
            sx={{ opacity: 0.85, pt: 0, fontSize: [2, 3], textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}
        >
            {children}
        </p>
    </div>
)

export default InspireCard
