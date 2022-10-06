import req from "../axiosReq/index";

import { useDispatch } from "react-redux";
import { authPremiumUser } from "../Store/actions";

import { setUser } from "../Session/dataUser";

const useHandlePayment = async (cardInfo, setSuccess) => {
  setShowSpinner(true);

  const dispatch = useDispatch();
  const { cardNumber, CVC, expDate, docType, docNumber } = cardInfo;

  const dataPayment = {
    cardNumber: cardNumber,
    expYear: `20${expDate.split("/")[1]}`,
    expMonth: `${expDate.split("/")[0]}`,
    CVC: CVC,
    docType: docType,
    docNumber: docNumber,
    bill: "OR-1234",
    description: "Quick Suscription Payment",
    value: "9",
    tax: "1",
    taxBase: "8",
    currency: "USD",
    dues: "1",
    ip: "190.000.000.000",
  };

  await req.makePaymentReq(dataPayment).then(({ data }) => {
    setShowSpinner(false);
    if (!data.error) {
      const { updatedUser } = data;
      dispatch(authPremiumUser(updatedUser.premium.premiumStatus));
      setSuccess(updatedUser.premium.premiumStatus);
      setUser(
        updatedUser.username,
        updatedUser.email,
        updatedUser.id,
        updatedUser.premium.premiumStatus
      );
    } else {
      dispatch(
        alertMessage({
          value: true,
          message: data.message,
          variant: "danger",
        })
      );
    }
  });
};

export default useHandlePayment;
