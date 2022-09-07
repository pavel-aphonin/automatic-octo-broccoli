import Grid from "@mui/material/Unstable_Grid2";
import TopPanel from "./TopPanel";

const Layout = ({ children }: any) => {
  return (
    <Grid
      container
      flexDirection="column"
      flexWrap="nowrap"
      height="100vh"
    >
      <header>
        <TopPanel />
      </header>

      <div className="content">
        {children}
      </div>
      <footer>

      </footer>

    </Grid>
  )
}

export default Layout;
