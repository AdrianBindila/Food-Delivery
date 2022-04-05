import { useState } from "react";
import { Button, Table } from "react-bootstrap";

function Menu(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          {props.isOrder && <th></th>}
        </tr>
      </thead>
      <tbody>
        {props.menu &&
          props.menu
            .filter((item) => {
              return item.category.toLowerCase() === props.category;
            })
            .map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  {props.isOrder && (
                    <td>
                      <Button
                        onClick={() => {
                          props.setCart((prev) => {
                            return [...prev, item];
                          });
                        }}
                      >
                        +
                      </Button>
                    </td>
                  )}
                </tr>
              );
            })}
      </tbody>
    </Table>
  );
}

export default Menu;
