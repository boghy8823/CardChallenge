import React from "react";
import PropTypes from "prop-types";
import { MasterCardIcon, EditIcon, MastercardBackground } from "../../../../components/Icons";
import Typography from "../../../../components/Typography";
import Button from "../../../../components/Button";
import {
  Container,
  Row,
  Field,
  Wrapper,
  MastercardBackgroundStyles,
} from "./CreditCard.styled";

const CreditCard = ({
  holderName,
  cardNumber,
  expirationDate,
  cvc,
  editCardDetails,
  editable,
  loading,
  error
}) => {
  return (
    <Container>
      <Row justify="space-between" direction="row">
        <MasterCardIcon />
        <Wrapper>
          <Field gutterRight="xl">
            <Typography color="gray" variant="body2" gutterBottom="m">
              CVC
            </Typography>
            <Typography color="white" variant="body1" fontWeight="600" data-test="cvc-code">
              {cvc}
            </Typography>
          </Field>
          <Field align="flex-start">
            <Typography color="gray" variant="body2" gutterBottom="m" uppercase>
              Expires
            </Typography>
            <Typography color="white" variant="body1" fontWeight="600" data-test="expiration-code">
              {expirationDate}
            </Typography>
          </Field>
        </Wrapper>
      </Row>
      <Row justify="space-between">
        <Typography color="white" variant="body1" fontWeight="600" data-test="holder-name" gutterBottom="m">
          {holderName}
        </Typography>
        <Field direction="row" justify="space-between">
          <Typography color="gray" variant="body1" fontWeight="600" data-test="card-number">
            {cardNumber}
          </Typography>
          {editable && (
            <Button
              onClick={editCardDetails}
              variant="clear"
              height="26px"
              width="28px"
              disabled={loading || error}
            >
              <EditIcon />
            </Button>
          )}
        </Field>
      </Row>
      <MastercardBackgroundStyles>
        <MastercardBackground />
      </MastercardBackgroundStyles>
    </Container>
  );
};

CreditCard.propTypes = {
  holderName: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
  cvc: PropTypes.string.isRequired,
  editCardDetails: PropTypes.func,
  editable: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string
};

CreditCard.defaultProps = {
  editCardDetails: () => {},
  editable: false,
  loading: false,
  error: null
};

export default CreditCard;
