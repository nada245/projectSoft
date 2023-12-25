// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Stepper,
//   Step,
//   StepLabel,
//   Paper,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   createTheme,
  
//   Alert,
//   Checkbox,

// } from "@mui/material";
// import './indexx.css';
// import CallIcon from '@mui/icons-material/Call';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// import MenuIcon from '@mui/icons-material/Menu';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { ThemeProvider } from '@mui/system';
// import { useState } from "react";
// const theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#d32f2f',
//     },
//     secondary: {
//       main: '#ed6c02',
//     },
//   },

// })
// const App = () => {
//   const click=(check)=>{
// console.log(check.target.checked)
//   }
//   const steps = ['kids secion', 'women section', 'Men section'];
// const [money,setMoney]=useState(0);
// const [money1,setMoney1]=useState(0);
// const [money2,setMoney2]=useState(0);
// const clickMoney=()=>{
//   setMoney(money + 1)
// }
// const clickMoney1=()=>{
//   setMoney1(money1 + 1)
// }
// const clickMoney2=()=>{
//   setMoney2(money2 + 1)
// }
//   return (
//     <ThemeProvider theme={theme}>


//       <div>
//         <AppBar position="static">
//           <Toolbar variant="dense">
//             <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" color="inherit" component="div">
//               Shopping
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Stepper activeStep={0} alternativeLabel className="mt">
//           {steps.map((label, index) => (
//             <Step key={index}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//         <div className="flexj">

    //       <div className="accordion">
    //         <Accordion>
    //           <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
    //             <Typography>kids section </Typography>
    //           </AccordionSummary>
    //           <AccordionDetails>
    //             <Typography>
    //               There is a lot of children's clothing, whether for girls or boys, and there are also modern clothes, suits and dresses
    //               <Checkbox onChange={click} onClick={clickMoney} />
    //               <div>
    //   <h1> {money} $</h1>
    //   {/* <button onClick={clickMoney}>ADD</button> */}
    // </div>
    //             </Typography>
    //           </AccordionDetails>
    //         </Accordion>
    //         <Accordion>
    //           <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
    //             <Typography>women section </Typography>
    //           </AccordionSummary>
    //           <AccordionDetails>
    //             <Typography>
    //             There are a lot of women's clothes, and there are also modern clothes, dresses, and everything a female could wish for 
    //             <Checkbox   onChange={click} onClick={clickMoney1} />
    //             <div>
    //   <h1> {money1} $</h1>
    //   {/* <button onClick={clickMoney1}>ADD</button> */}
    // </div>
    //             </Typography>
    //           </AccordionDetails>
    //         </Accordion>
    //         <Accordion>
    //           <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
    //             <Typography>men section </Typography>
    //           </AccordionSummary>
    //           <AccordionDetails>
    //             <Typography>
    //             There is a lot of men's clothing, and there are also modern clothes, suits and casual clothes
    //             <Checkbox  onChange={click} onClick={clickMoney2} />
    //             <div>
    //   <h1> {money2} $</h1>
    //   {/* <button onClick={clickMoney2}>ADD</button> */}
    // </div>
    //             </Typography>
    //           </AccordionDetails>
    //         </Accordion>
    //       </div>
    //       <div className="paper">
    //         <Paper elevation={3} className="mt w-200 h-200">
    //           <h1 className="shopping">SOPPING</h1>
    //           <CallIcon className="location-icon" />
    //           <h4 className="locetion-title" > +012 879 454 32 </h4>
    //           <div className="location">
    //             <LocationOnIcon className="location-icon" />
    //             <h4 className="locetion-title" >  MIT GHAMER</h4>
    //           </div>
    //           <div>
    //             <Alert variant="outlined" severity="error">

    //               <div className="price"><span>Total Price  {money+money1+money2}</span></div>
    //             </Alert>

    //           </div>
    //           <div>
    //             <h1 className="word">Have A Nice Time</h1>
    //           </div>
    //           <div>

    //           </div>
    //         </Paper>
    //       </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default App;



