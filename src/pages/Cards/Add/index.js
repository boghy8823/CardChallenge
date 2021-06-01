/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useFieldChange from "../../../hooks/useFieldChange";
import {
  creditCardFormat,
  creditCardExpiryFormat,
  cvcFormat,
} from "../../../helpers/formatters";
import { ButtonContainer, FieldRow } from "./AddCard.styled";
import Typography from "../../../components/Typography";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

const AddCard = ({ onSubmit, closeModal, isModalOpen, cardDetails }) => {
  const { cardHolderName, cardNumber, expirationDate, cvc, id } =
    cardDetails || "";

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [holderName, setHolderName] = useFieldChange({
    value: cardHolderName,
    error: null,
    modified: null,
  });
  const [cardNo, setCardNo] = useFieldChange({
    value: cardNumber,
    error: null,
    modified: null,
  });
  const [expiracyDate, setExpiracyDate] = useFieldChange({
    value: expirationDate,
    error: null,
    modified: null,
  });
  const [cvcCode, setCvcCode] = useFieldChange({
    value: cvc,
    error: null,
    modified: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const cardDetails = {
        cardHolderName: holderName.value,
        cardNumber: cardNo.value,
        expirationDate: expiracyDate.value,
        cvc: cvcCode.value,
        id: id,
      };
      onSubmit(cardDetails);
    } catch (err) {
      setError(err?.response?.data?.message);
      setLoading(false);
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  useEffect(() => {
    setButtonDisabled(true);
    if (
      !holderName.error &&
      !cardNo.error &&
      !expiracyDate.error &&
      !cvcCode.error &&
      holderName.value &&
      holderName.value.length > 0 &&
      cardNo.value &&
      cardNo.value.length > 0 &&
      expiracyDate.value &&
      expiracyDate.value.length > 0 &&
      cvcCode.value &&
      cvcCode.value.length > 0
    ) {
      setButtonDisabled(false);
    }
  }, [holderName, cardNumber, expirationDate, cvcCode]);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      maxWidth="375px"
      borderRadius="32px"
    >
      <Typography color="black" variant="h2" as="h2" gutterBottom="xxxxxl">
        Add your card details
      </Typography>
      <form onSubmit={onSave}>
        <FieldRow>
          <Input
            type="text"
            name="cardholdername"
            id="cardholdername"
            placeholder="John Doe"
            onChange={setHolderName}
            error={holderName.error}
            label="Name in card"
            modified={holderName.modified}
            value={holderName.value}
          />
        </FieldRow>
        <FieldRow>
          <Input
            type="text"
            name="cardnumber"
            id="cardnumber"
            placeholder="0000 0000 0000 0000"
            onChange={setCardNo}
            format={creditCardFormat}
            maxLength="19"
            label="Card number"
            modified={cardNo.modified}
            value={cardNo.value}
            error={cardNo.error}
          />
        </FieldRow>
        <FieldRow>
          <Input
            type="text"
            name="expirationdate"
            id="expirationdate"
            placeholder="00/00"
            onChange={setExpiracyDate}
            format={creditCardExpiryFormat}
            maxLength="5"
            label="Expiry date"
            modified={expiracyDate.modified}
            value={expiracyDate.value}
            error={expiracyDate.error}
          />
        </FieldRow>
        <FieldRow>
          <Input
            type="text"
            name="cvccode"
            id="cvccode"
            placeholder="000"
            onChange={setCvcCode}
            format={cvcFormat}
            maxLength="3"
            label="CVC (Security code)"
            modified={cvcCode.modified}
            value={cvcCode.value}
            error={cvcCode.error}
          />
        </FieldRow>

        <ButtonContainer>
          <Button
            fullWidth
            loading={loading}
            type="submit"
            disabled={loading || buttonDisabled}
          >
            Confirm
          </Button>
        </ButtonContainer>
      </form>

      {error && <p>There has been an error</p>}
      {loading && <p>Loading...</p>}
    </Modal>
  );
};

AddCard.propTypes = {
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

AddCard.defaultProps = {
  closeModal: () => {},
  onSubmit: () => {},
  isModalOpen: false,
};

export default AddCard;
