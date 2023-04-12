import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import './headlines.css';

const HeadLines = ({data}) => {
  return (
    <div className="headlines">
      <Card sx={{ minWidth: 50, mb: 0.5 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Latest Headlines
          </Typography>
          <Typography color="text.secondary">- { data.Text }</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeadLines;
