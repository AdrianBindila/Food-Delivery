import { Tab } from "bootstrap";
import _ from "lodash";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Tabs,
} from "react-bootstrap";
import Cart from "./Cart";
import Menu from "../Admin/ManageRestaurant/Menu";

function OrderModal(props) {
  const categories = ["breakfast", "lunch", "dessert", "beverage"];
  const [cart, setCart] = useState([]);
  const handleClose = () => {
    props.setShow(false);
    setCart([]);
  };

  return (
    <Modal show={props.show} onHide={handleClose}>
      <ModalHeader closeButton>
        <ModalTitle>Order your food!</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Tabs defaultActiveKey={categories[0]} className="mb-3">
          {categories.map((category) => {
            return (
              <Tab eventKey={category} title={_.startCase(category)}>
                <Menu
                  menu={props.menu.filter((item) => {
                    return item.category.toLowerCase() === category;
                  })}
                  isOrder={true}
                  cart={cart}
                  setCart={setCart}
                />
              </Tab>
            );
          })}
          <Tab eventKey="cart" title="Cart">
            <Cart cart={cart} setCart={setCart} restaurant={props.restaurant} />
          </Tab>
        </Tabs>
      </ModalBody>
    </Modal>
  );
}
export default OrderModal;