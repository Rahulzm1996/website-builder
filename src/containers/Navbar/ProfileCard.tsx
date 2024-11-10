import React from "react";
import { styled } from "@mui/material/styles";
import { Link, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

const InfoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const ProfileImage = styled("img")({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  marginLeft: "16px",
});

const StyledIconButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
  padding: "8px",
  borderRadius: "50%",
});

const ProfileCard = () => {
  return (
    <Container>
      <InfoContainer>
        <Typography variant="body2">Converse Store #32</Typography>
        <Link href="#">
          <Typography variant="body2" color="primary">
            View more
          </Typography>
        </Link>
      </InfoContainer>
      <Stack direction="row" spacing={2}>
        <StyledIconButton>
          <LinkIcon />
        </StyledIconButton>
        <StyledIconButton>
          <CallIcon />
        </StyledIconButton>
        <StyledIconButton>
          <PersonIcon />
        </StyledIconButton>
        <ProfileImage src="https://i.pravatar.cc/300" alt="Profile Image" />
      </Stack>
    </Container>
  );
};

export default ProfileCard;
