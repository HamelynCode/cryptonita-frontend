import { useState } from "react";
import Asset from "../Asset/Asset";
import Button from "../Button/Button";
import "./ListAssets.css";

export default function ListAssets(props) {
  const STEP = 10;
  const [limitOfAssets, setLimitOfAssets] = useState(STEP);

  function handleVerMasAssets() {
    //incrementar el limite de assets en pantalla
    setLimitOfAssets(limitOfAssets + STEP);
  }

  function handleVerMenosAssets() {
    //disminuir el limite de assets en pantalla
    setLimitOfAssets(limitOfAssets - STEP);
  }

  return (
    <ul className="assets">
      {props.list.map(
        (data, key) =>
          key < limitOfAssets && (
            <li className="assets__item" key={key}>
              <Asset data={data} onGetCoinInfo={props.onGetCoinInfo} />
            </li>
          )
      )}
      <li className="assets__item">
        {limitOfAssets > STEP && (
          <Button
            classes="button_type_reset"
            onClick={handleVerMenosAssets}
            text="ver menos"
          />
        )}
        {props.list.length > limitOfAssets && (
          <Button
            classes="button_type_confirm"
            onClick={handleVerMasAssets}
            text="ver más..."
          />
        )}
      </li>
    </ul>
  );
}
