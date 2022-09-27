import React from 'react'
import { Box, Card, CardActions, CardContent, Typography, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const ProfileDetail = ({Detail}) => {
  //const Detail = props.detail;
  const str1 = Detail.Type;
  const str2 = str1.padEnd(15,' ');
  return (
    <>
    <Box
      sx={{
        m: 2,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "70%",
      }}
    >
      <Card
        sx={{ 
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CardContent>
          <Typography variant="body2" color="text.Secondary">
              <pre>{str2}{Detail.Value}</pre>
          </Typography>
        </CardContent>
        <CardActions>
        <Button variant="contained" endIcon={<SendIcon />}>
        </Button>
        </CardActions>
      </Card>
    </Box>
    </> 
  )
}

export default ProfileDetail
