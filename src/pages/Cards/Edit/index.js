/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useFieldChange from "../../../hooks/useFieldChange";
import { creditCardFormat, creditCardExpiryFormat, cvcFormat } from "../../../helpers/formatters";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

const EditCard = ({ onSubmit, closeModal, isModalOpen, cardDetails }) => {
  const { cardHolderName, cardNumber, expirationDate, cvc } = cardDetails || "";

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [holderName, setHolderName] = useFieldChange({
    value: cardHolderName,
    error: null,
    modified: null
  });
  const [cardNo, setCardNo] = useFieldChange({
    value: cardNumber,
    error: null,
    modified: null
  });
  const [expiracyDate, setExpiracyDate] = useFieldChange({
    value: expirationDate,
    error: null,
    modified: null
  });
  const [cvcCode, setCvcCode] = useFieldChange({ value: cvc, error: null, modified: null });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSave = async () => {
    setLoading(true);
    try {
      const cardDetails = {cardHolderName: holderName.value, cardNumber: cardNo.value,expirationDate:  expiracyDate.value, cvc: cvcCode.value};
      onSubmit(cardDetails);
    } catch (err) {
      setError(err?.response?.data?.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(false);
    // if(!holderName.error && !cardNo.error && !expiracyDate.error && !cvcCode.error && 
    //   holderName.value.length > 0 && cardNo.value.length > 0 && expiracyDate.value.length > 0 && cvcCode.value.length > 0) {
    //   setButtonDisabled(false);
    // }
  }, [holderName, cardNumber, expirationDate, cvcCode]);

  useEffect(() => {
    setError(null);
    console.log("card details", cardDetails);
    console.log("Holdern name " , holderName);
  }, [cardDetails, holderName, isModalOpen]);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      maxWidth="392px"
      borderRadius="32px"
    >
      <form onSubmit={onSave}>
        <Input
          type="text"
          name="cardholdername"
          id="cardholdername"
          onChange={setHolderName}
          error={holderName.error}
          label="Name in card"
          modified={holderName.modified}
          value={holderName.value}
        />
        <Input
          type="text"
          name="cardnumber"
          id="cardnumber"
          onChange={setCardNo}
          format={creditCardFormat}
          maxLength="19"
          label="Card number"
          modified={cardNo.modified}
          value={cardNo.value}
          error={cardNo.error}
        />
        <Input
          type="text"
          name="expirationdate"
          id="expirationdate"
          onChange={setExpiracyDate}
          format={creditCardExpiryFormat}
          maxLength="5"
          label="Expiry date"
          modified={expiracyDate.modified}
          value={expiracyDate.value}
          error={expiracyDate.error}
        />
        <Input
          type="text"
          name="cvccode"
          id="cvccode"
          onChange={setCvcCode}
          format={cvcFormat}
          maxLength="3"
          label="CVC (Security code)"
          modified={cvcCode.modified}
          value={cvcCode.value}
          error={cvcCode.error}
        />
        <Button fullWidth loading={loading} type="submit" disabled={loading || buttonDisabled}>
          Confirm
        </Button>
      </form>

      {error && <p>There has been an error</p>}
      {loading && <p>Loading...</p>}
    </Modal>
  );
};

EditCard.propTypes = {
  cardDetails: PropTypes.shape({
    cardHolderName: PropTypes.string,
    cardNumber: PropTypes.string,
    expirationDate: PropTypes.string,
    cvc: PropTypes.string,
  }),
  closeModal: PropTypes.func,
  onSubmit: PropTypes.func,
  isModalOpen: PropTypes.bool,
};

EditCard.defaultProps = {
  closeModal: () => {},
  onSubmit: () => {},
  isModalOpen: false,
};

export default EditCard;
