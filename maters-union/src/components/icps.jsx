import { Typography, Box, Divider } from "@mui/material";
import React from "react";

const builtFor = [
  {
    icp: "Aspiring Data Scientists",
    content:
      "Students eager to build strong foundations in statistics, machine learning, and AI, and apply them to solve real-world business and societal problems.",
  },
  {
    icp: "AI & Tech Enthusiasts",
    content:
      "Learners passionate about cutting-edge technologies like generative AI, big data, and automation, who want hands-on experience with industry-grade tools.",
  },
  {
    icp: "Future Entrepreneurs",
    content:
      "Students who aim to launch AI-driven startups or products, and want to learn how to combine technical skills with business acumen for market success.",
  },
  {
    icp: "Career Switchers into Tech",
    content:
      "Individuals from non-tech backgrounds looking to transition into high-growth fields such as data analytics, AI engineering, or product development.",
  },
];

function Icps() {
  return (
    <Box
      sx={{ pt: "calc( 80 * var(--baseline-font, 1px) )", overflowX: "hidden" }}
    >
      <Typography
        sx={{
          fontFamily: "Gilroy-Bold",
          fontSize: "calc( 24 * var(--baseline-font, 1px) )",
        }}
      >
        This is built for..
      </Typography>

      <Divider
        sx={{
          width: "calc(30 * var(--baseline-font, 1px))",
          borderWidth: "1px",
          borderRadius: "calc(15 * var(--baseline-font, 1px))",
          background: "white",
          my: "calc( 14 * var(--baseline-font, 1px) )",
        }}
      />

      <Box
        sx={{
          display: "flex",
          pt: 1,
          overflowX: "auto",
          //   overflowY: "visible",
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
          gap: "calc(16 * var(--baseline-font, 1px))",
        }}
      >
        {builtFor.map(({ icp, content }, index) => (
          <Box
            key={icp}
            sx={{
              width: {
                xs: "calc(233.75 * var(--baseline-font, 1px))",
                md: "calc(220 * var(--baseline-font, 1px))",
              },
              // height: 'calc(255 * var(--baseline-font, 1px))',
              flexShrink: 0,
              background: "rgba(255,255,255,0.2)",
              backgroundSize: "300%",
              backgroundImage:
                "linear-gradient(130deg, transparent 45%, white 50%, white 50%, transparent 55%)",
              animation: "infinite 5s shine",
              animationDelay: `${index * 200}ms`,
              "@keyframes shine": {
                "0%": { backgroundPosition: "120%" },
                "80%": { backgroundPosition: "-20%" },
                "100%": { backgroundPosition: "-20%" },
              },
              borderRadius: "calc(10 * var(--baseline-font, 1px))",
              "*": {
                transition: "background 500ms ease-in",
              },
              ".title": {
                background: "white",
                width: "fit-content",
                color: "black",
              },
              "&:hover": {
                ".container": { background: "white" },
                ".title": {
                  background: "black",
                  color: "white",
                },
                ".content": {
                  color: "black",
                },
              },
            }}
          >
            <Box
              className="container"
              sx={{
                width: "calc(100% - calc(2 * var(--baseline-font, 1px)))",
                height: "calc(100% - calc(2 * var(--baseline-font, 1px)))",
                mx: "auto",
                mt: "var(--baseline-font, 1px)",
                // border:'1px solid red',
                background: "black",
                borderRadius: "calc(9 * var(--baseline-font, 1px))",
                p: "calc(25 * var(--baseline-font, 1px)) calc(20 * var(--baseline-font, 1px))",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                className="title"
                sx={{
                  textTransform: "uppercase",
                  fontSize: {
                    xs: "calc(10 * var(--baseline-font, 1px))",
                    md: "calc(7 * var(--baseline-font, 1px))",
                  },
                  p: "calc(5 * var(--baseline-font, 1px)) calc(10 * var(--baseline-font, 1px))",
                  borderRadius: "calc(4 * var(--baseline-font, 1px))",
                  fontFamily: "Gilroy-Bold",
                  letterSpacing: "calc(1.08 * var(--baseline-font, 1px))",
                }}
              >
                {icp}
              </Typography>

              <Typography
                className="content"
                sx={{
                  pt: 2,
                  color: "#CCCCCC",
                  fontSize: {
                    xs: "calc(13.2 * var(--baseline-font, 1px))",
                    md: "calc(13 * var(--baseline-font, 1px))",
                  },
                  lineHeight: 1.89,
                }}
              >
                {content}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Icps;
