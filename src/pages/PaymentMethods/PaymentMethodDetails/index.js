/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useFieldChange from "../../../hooks/useFieldChange";
import {
  creditCardFormat,
  creditCardExpiryFormat,
  cvcFormat,
} from "../../../helpers/formatters";
import CreditCard from "../../../components/CreditCard";
import { ButtonContainer, FieldRow } from "./PaymentMethodDetails.styled";
import Typography from "../../../components/Typography";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

const PaymentMethodDetails = ({
  onSubmit,
  closeModal,
  isModalOpen,
  paymentMethodDetails,
  inEditMode,
}) => {
  const { holderName, cardNumber, expirationDate, cvc, id } =
  paymentMethodDetails || "";

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [ownerName, setOwnerName] = useFieldChange({
    value: holderName,
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
        holderName: ownerName.value,
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
    // TOOD: Refactor this
    if (
      !ownerName.error &&
      !cardNo.error &&
      !expiracyDate.error &&
      !cvcCode.error &&
      ownerName.value &&
      ownerName.value.length > 0 &&
      cardNo.value &&
      cardNo.value.length > 0 &&
      expiracyDate.value &&
      expiracyDate.value.length > 0 &&
      cvcCode.value &&
      cvcCode.value.length > 0
    ) {
      setButtonDisabled(false);
    }
  }, [ownerName, cardNumber, expirationDate, cvcCode]);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      maxWidth="375px"
      borderRadius="32px"
    >
      <Typography color="black" variant="h2" as="h2" gutterBottom="xxxxxl">
        {(inEditMode ? "Edit your card" : "Add your card details")}
      </Typography>
      {inEditMode && (
        <CreditCard
          key={paymentMethodDetails.id}
          holderName={ownerName.value}
          cardNumber={cardNo.value}
          expirationDate={expiracyDate.value}
          cvc={cvcCode.value}
        />
      )}
      <form onSubmit={onSave}>
        <FieldRow>
          <Input
            type="text"
            name="cardholdername"
            id="cardholdername"
            placeholder="John Doe"
            onChange={setOwnerName}
            error={ownerName.error}
            label="Name in card"
            modified={ownerName.modified}
            value={ownerName.value}
            data-test="holder-name"
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
            data-test="card-number"
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
            data-test="expiration-date"
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
            data-test="cvc-code"
          />
        </FieldRow>

        <ButtonContainer>
          <Button
            width="100%"
            height="57px"
            type="submit"
            disabled={loading || buttonDisabled}
            data-test="payment-method-submit-btn"
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

PaymentMethodDetails.propTypes = {
  paymentMethodDetails: PropTypes.shape({
    id: PropTypes.oneOfType ([PropTypes.string, PropTypes.number]),
    holderName: PropTypes.string,
    cardNumber: PropTypes.string,
    expirationDate: PropTypes.string,
    cvc: PropTypes.string,
  }),
  closeModal: PropTypes.func,
  onSubmit: PropTypes.func,
  isModalOpen: PropTypes.bool,
  inEditMode: PropTypes.bool,
};

PaymentMethodDetails.defaultProps = {
  closeModal: () => {},
  onSubmit: () => {},
  isModalOpen: false,
  inEditMode: false,
};

export default PaymentMethodDetails;
