import { Field, ErrorMessage as Error } from "formik";
import { IonIcon } from "@ionic/react";
import "./input-style.css";
import { eyeOff } from "ionicons/icons";
import { eye } from "ionicons/icons";
import { useState } from "react";

type Props = {
  id: string;
  name: string;
  type?: string;
  label: string;
  autoComplete?: string;
  password?: any;
};

export const Input = ({ id, name, type, label, autoComplete }: Props) => {
  const [shownPassword, setShownPassword] = useState<boolean>(false);

  const showPasswordIcon = (event: React.MouseEvent<HTMLIonIconElement>) => {
    event.preventDefault();
    switch (event.currentTarget.id) {
      case "passwordIcon":
        setShownPassword(!shownPassword);
        break;
    }
  };

  return (
    <div className="inputBox">
      {(id === "password" || id === "confirmPassword") && (
        <span className="icon">
          <IonIcon
            id="passwordIcon"
            icon={shownPassword ? eye : eyeOff}
            onClick={showPasswordIcon}
          ></IonIcon>
        </span>
      )}
      <Field
        id={id}
        name={name}
        type={
          id === "password" || id === "confirmPassword"
            ? shownPassword
              ? "text"
              : "password"
            : type
        }
        autoComplete={autoComplete}
      />
      <label>{label}</label>
      <Error name={name}>
        {(error) => <small className="errorMessage">{error}</small>}
      </Error>
    </div>
  );
};
