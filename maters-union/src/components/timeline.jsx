import {
  Box,
  Typography,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { TIMELINE_STEPS } from "../data/data";

export const Timeline = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        color: "#fff",
        pt: { xs: "66px", md: "120px" },
        background: "#101010",
        position: "relative",
      }}
    >
      <Box
        sx={{ position: "relative", width: "fit-content", m: { md: "0 auto" } }}
      >
        <Typography
          sx={{
            mx: "20px",
            fontSize: "45px",
            letterSpacing: "-0.356px",
            mb: { xs: "32px", md: "8px" },
            background: "linear-gradient(90deg, #999 0%, #FFF 71.85%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: "relative",
            ...(isDesktop && {
              background: "linear-gradient(90deg, #BCA4FF 0%, #FFF 100%)",
              fontSize: "42px",
              lineHeight: "normal",
            }),
          }}
        >
          This Is For You..
        </Typography>
      </Box>

      <Typography
        sx={{
          display: { xs: "none", md: "block" },
          fontSize: "16px",
          color: "#CCC",
          lineHeight: "140%",
          letterSpacing: "-0.16px",
          background: "transparent",

          m: { md: "0 auto" },
          textAlign: "center",
        }}
      >
        Read below on Why to join us
      </Typography>

      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            md: "row-reverse",
          },
          alignItems: "flex-start",
          justifyContent: "space-between",
          pt: { md: "60px" },
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            background: "#101010",
            position: "relative",
            pb: { md: "100vh" },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "22px",
              width: "1px",
              height: { xs: "100%", md: "calc(100% - 100vh)" },
              background: "white",
              zIndex: 0,
            },
          }}
        >
          {/* the ball */}
          <Box
            sx={{
              position: "sticky",
              top: { xs: "250px", md: "300px" },
              left: "15px",
              ml: { md: "15px" },
              width: "16px",
              height: "16px",
              background: "white",
              borderRadius: "99px",
              mb: { xs: "140px", md: "0" },
              filter: "drop-shadow(0px 4px 10px #FFF)",
            }}
          />

          {TIMELINE_STEPS.map((step) => (
            <Stack
              key={step.title}
              sx={{
                pl: "20px",
                py: "80px",
                mb: "140px",
                justifyContent: "center",
                position: "relative",
                background:
                  "linear-gradient(180deg, rgba(16, 16, 16, 0.00) 0%, #101010 10%, #101010 90%, rgba(0, 0, 0, 0) 100%)",
                filter: "drop-shadow(0px 0px 10px #101010)",
                overflow: "visible",
                "&:nth-of-type(2)": {
                  mt: "140px",
                },
                "&:nth-last-of-type(3)": {
                  pb: { xs: "0", md: "80px" },
                  mb: 0,
                  background:
                    "linear-gradient(180deg, rgba(16, 16, 16, 0.00) 0%, #101010 10%, #101010 90%, #101010 100%)",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  background: "rgba(255, 255, 255, 0.20)",
                  width: "273px",
                  height: "143px",
                  zIndex: 0,
                  borderRadius: "273px",
                  filter: "blur(75px)",
                  maxWidth: "252px",
                }}
              />

              <Typography
                sx={{
                  fontSize: "32px",
                  mb: "8px",
                  lineHeight: "120%",
                  textEdge: "cap",
                  leadingTrim: "both",
                  // maxWidth: "352px",
                  background: "transparent",
                }}
              >
                {step.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#CCC",
                  lineHeight: "140%",
                  letterSpacing: "-0.16px",
                  leadingTrim: "both",
                  textEdge: "cap",
                  maxWidth: "352px",
                  background: "transparent",
                }}
              >
                {step.description}
              </Typography>
            </Stack>
          ))}

          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: "-20px",
              left: "-20px",
              width: "100px",
              height: "100px",
              background:
                "linear-gradient(to bottom, #101010 60%, rgba(0, 0, 0, 0) 90%)",
              zIndex: 1,
            }}
          />

          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "100vw",
              height: "100vh",
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #101010 30%)",
              zIndex: 1,
            }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: { xs: "100%", md: "40%" },
            position: "sticky",
            top: "50px",
            height: "fit-content",
            maxHeight: "calc(100vh - 100px)",
            overflow: "auto",
            ml: { md: "28px" },
            p: "1px",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              background: "#101010",
              position: "relative",
              borderRadius: "20px",
              p: "12px",
              "&::after": {
                content: '""',
                position: "absolute",
                top: -1,
                left: -1,
                width: "100%",
                aspectRatio: "1/1",
                background:
                  "linear-gradient(125deg, rgba(76, 76, 76, 0.60) 0%, rgba(76, 76, 76, 0) 40%)",
                zIndex: -1,
              },
            }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(146deg, #4C4C4C 0%, rgba(76, 76, 76, 0) 100%)",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "1px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  width: "calc(100%)",
                  overflow: "hidden",
                  flexShrink: 0,
                  background:
                    "linear-gradient(122deg, #313131 0%, rgba(16, 16, 16) 90.99%)",
                }}
              >
                <Box sx={{ p: "20px" }}>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      component="img"
                      src="https://images.mastersunion.link/uploads/26062025/v1/Frame13213178511.webp"
                      sx={{
                        width: "100%",
                        height: "300px",
                        borderRadius: "8px",
                      }}
                      alt="students"
                    />
                  </Box>

                  <Stack
                    sx={{
                      gap: "10px",
                      mt: "25px",
                      mb: "30px",
                    }}
                  >
                    <Typography
                      sx={{
                        textTransform: "uppercase",

                        fontSize: "10px",
                        fontWeight: 500,
                        lineHeight: "160%",
                        letterSpacing: "1.2px",
                        background:
                          "linear-gradient(90deg, #BCA4FF 0%, #FFF 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        width: "fit-content",
                      }}
                    >
                      Excel in interviews
                    </Typography>

                    <Box
                      sx={{
                        position: "relative",
                        width: "fit-content",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "28px",
                          lineHeight: "140%",
                          background:
                            "linear-gradient(270deg, #999 0%, #FFF 71.85%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          maxWidth: "417px",
                        }}
                      >
                        Build products with 1:1 Membership
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "#999",

                        fontSize: "14px",
                        lineHeight: "160%",
                        letterSpacing: "-0.22px",
                        maxWidth: "433px",
                      }}
                    >
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit..."Neque porro quisquam
                      est qui dolorem ipsum quia"
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
