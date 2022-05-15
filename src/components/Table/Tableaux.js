import React from "react";
import { Table } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";

export default function Tableaux({ data }) {
  return (
    <Table className="items-calculator" striped bordered hover>
      <thead>
        <tr>
          <th>Img</th>
          <th>Item name</th>
          <th>Quantity</th>
          <th>Cristal price</th>
          <th>Unit price</th>
          <th>Total /u</th>
        </tr>
      </thead>
      <ItemList data={data} />
    </Table>
  );
}
