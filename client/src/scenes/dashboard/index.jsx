import { Paper, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh", 
      }}
    >
      <div>
        <Paper>
          <Typography sx={{ fontSize: "20px", justifyItems: "space-around" }}>
            👨‍💻 Currently under construction... 🚧 <br />
          </Typography>
        </Paper>
      </div>
    </div>
  );
  
};

export default Dashboard;
