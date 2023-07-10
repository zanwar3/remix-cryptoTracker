
import React, { useRef } from "react";
import { Form } from "@remix-run/react";


interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  priceUsd: number;
  volumeUsd24Hr: number;
  changePercent24Hr: number;
}

interface ModalProps {
  crypto: CryptoCurrency;
  fav:Boolean;
}

const Modal: React.FC<ModalProps> = ({ crypto,fav }) => {
    const ref =useRef(null);
    const handleToggle = ()=>{
        let box:any = ref.current;
        box.checked = !box.checked;

    }
  return (
    <div>
      <input
        type="checkbox"
        id={`modal_${crypto.id}`}
        className="modal-toggle"
        ref={ref}
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{crypto.name} Details</h3>
          <p className="py-4">Crypto Currency Code: {crypto.symbol}</p>
          <p className="py-4">Amount: {crypto.priceUsd.toFixed(2)}</p>
          <p className="py-4">
            Trade Volume 24h: {crypto.volumeUsd24Hr.toFixed(2)}
          </p>
          <p className="py-4">
            Percentage Change: {crypto.changePercent24Hr.toFixed(2)}
          </p>
          <div className="modal-action">
            {!fav &&
            <Form key={`form_modal_${crypto.id}`} method="POST">
                <input type="text" value={crypto.id} hidden={true} name="cryptoId" />
                <input type="text" value={"dummy@data.com"} hidden={true} name="email" />
                <button type="submit" onClick={handleToggle} className="btn btn-success">Add</button>
            </Form>}
            <label htmlFor={`modal_${crypto.id}`} className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
