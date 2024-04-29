import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import facebook from "@/assest/landingImage/fb.png";
import facebook from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff">Helth Plans</Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">Diagnostics</Typography>
          <Typography color="#fff">NGOs</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={3}
          py={4}
        >
          <Link href="/facebook">
            <Image src={facebook} alt="facebook" width={40} height={40} />
          </Link>
          <Link href="/facebook">
            <Image src={facebook} alt="facebook" width={40} height={40} />
          </Link>
          <Link href="/facebook">
            <Image src={facebook} alt="facebook" width={40} height={40} />
          </Link>
          <Link href="/facebook">
            <Image src={facebook} alt="facebook" width={40} height={40} />
          </Link>
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={4}
        >
          <Typography component="p" color="#fff">
            @copy; 2024 HelthCare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h5"
            component={Link}
            href="/"
            fontWeight={600}
            color="#fff"
            py={2}
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Helth Care
          </Typography>
          <Typography component="p" color="#fff">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
