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
          <th>Quantité</th>
          <th>Prix en cristaux</th>
          <th>A l'unité</th>
          <th>Par stack</th>
        </tr>
      </thead>
      <ItemList data={data} />
    </Table>
  );
}
