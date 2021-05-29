/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Modal from "../../../components/Modal";
import useFieldChange from "../../../hooks/useFieldChange";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { PageWrapper } from "./Edit.styled";
import server from "../../../apis/server";
import { saveCard } from "../../../actions";

const EditCardDetails = ({ onSubmit, closeModal, isModalOpen, cardDetails }) => {
  const { cardHolderName, cardNumber, expirationDate, cvc } = cardDetails;
  const [holderName, setCardholderName] = useFieldChange(cardHolderName);
  const [cardNo, setCardNumber] = useFieldChange(cardNumber);
  const [expiryDate, setExpirationDate] = useFieldChange(expirationDate);
  const [cvcCode, setCvcCode] = useFieldChange(cvc);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    const cardDetails = {
        cardHolderName: holderName,
        cardNumber: cardNo,
        expirationDate: expiryDate,
        cvc: cvcCode,
      };
    onSubmit(cardDetails);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      maxWidth="392px"
      borderRadius="32px"
    >
         <form onSubmit={onFormSubmit}>
        <Input
          type="text"
          name="cardholdername"
          id="cardholdername"
          onChange={setCardholderName}
          label="Name in card"
          value={holderName}
        />
        <Input
          type="text"
          name="cardnumber"
          id="cardnumber"
          onChange={setCardNumber}
          label="Card number"
          value={cardNo}
        />
        <Input
          type="text"
          name="expirationdate"
          id="expirationdate"
          onChange={setExpirationDate}
          label="Expiry date"
          value={expiryDate}
        />
        <Input
          type="text"
          name="cvccode"
          id="cvccode"
          onChange={setCvcCode}
          label="CVC (Security code)"
          value={cvc}
        />
        <Button
            fullWidth
            loading={loading}
            type="submit"
            disabled={loading}
        >
            Confirm
        </Button>
      </form>
    </Modal>
  );
};

EditCardDetails.propTypes = {
    cardDetails: PropTypes.shape({
        cardHolderName: PropTypes.string,
        cardNumber: PropTypes.string,
        expirationDate: PropTypes.string,
        cvc: PropTypes.string
      }).isRequired,
    closeModal: PropTypes.func,
    onSubmit: PropTypes.func,
    isModalOpen: PropTypes.bool,
  };
  
  EditCardDetails.defaultProps = {
    closeModal: () => {},
    onSubmit: () => {},
    isModalOpen: false,
  };
  

export default EditCardDetails;
