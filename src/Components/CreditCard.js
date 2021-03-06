import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/AccordionBody";

import {
  BsFillCreditCard2BackFill,
  BsCalendar2DateFill,
  BsLockFill,
  BsShieldLockFill,
} from "react-icons/bs";

export default function CreditCard() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex align-items-center justify-content-between">
              <span>Credit card</span>
              <div className="icons mx-2">
                <img src="https://i.imgur.com/2ISgYja.png" width="30" />
                <img src="https://i.imgur.com/W1vtnOV.png" width="30" />
                <img src="https://i.imgur.com/35tC99g.png" width="30" />
                <img src="https://i.imgur.com/2ISgYja.png" width="30" />
              </div>
            </div>
          </Accordion.Header>
          <AccordionBody className="creditCardInputs">
            <div className="card-body payment-card-body">
              <span className="font-weight-normal card-text">Card Number</span>
              <div className="input">
                <i>
                  <BsFillCreditCard2BackFill />
                </i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div className="row mt-3 mb-3">
                <div className="col-md-6">
                  <span className="font-weight-normal card-text">
                    Expiry Date
                  </span>
                  <div className="input">
                    <i>
                      <BsCalendar2DateFill />
                    </i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/YY"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <span className="font-weight-normal card-text">CVC/CVV</span>
                  <div className="input">
                    <i>
                      <BsLockFill />
                    </i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="000"
                    />
                  </div>
                </div>
              </div>
              <span className="text-muted certificate-text">
                <i>
                  <BsShieldLockFill />
                </i>
                {"   "} Your transaction is secured with ssl certificate
              </span>
            </div>
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
