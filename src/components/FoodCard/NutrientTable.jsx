import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function NutrientTable(props) {
  const FoodItem = props.foodItem;
  return (
    <TableContainer>
      <Table sx={{ maxWidth:"30vw" }} aria-label="nutrient table">
        <TableHead>
          <TableRow>
            <TableCell>Nutrient</TableCell>
            <TableCell align="right">Grams&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Protein</TableCell>
            <TableCell align="right">{FoodItem.protein}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Fat</TableCell>
            <TableCell align="right">{FoodItem.fat}</TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell>Saturated Fat</TableCell>
            <TableCell align="right">{FoodItem.SaturatedFat}</TableCell>
          </TableRow> */}
          <TableRow>
            <TableCell>Fiber</TableCell>
            <TableCell align="right">{FoodItem.fiber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Carbs</TableCell>
            <TableCell align="right">{FoodItem.carbs}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
