import React, { useState } from "react";
import { Alert, Button, Col, Row, Toast } from "react-bootstrap";

const Notification = ({ show, message }) => {
  if (show) {
    return (
      <Alert variant="danger" onClose={!show} dismissible>
        <p>{message}</p>
      </Alert>
    );
  }
  return "";
};

export default Notification;
