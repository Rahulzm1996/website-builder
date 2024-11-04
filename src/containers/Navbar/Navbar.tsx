import { Toolbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ProfileCard from "./ProfileCard";
import { Navbar, ToolbarContainer } from "./styles";

const NavbarComponent = () => {
  return (
    <>
      <CssBaseline />
      <Navbar>
        <ToolbarContainer>
          <ProfileCard />
        </ToolbarContainer>
      </Navbar>
      <Toolbar />
    </>
  );
};

export default NavbarComponent;
