import { useState } from "react";
import "./Form.scss";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const Form = (props) => {
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = e.target.url.value || "https://pokeapi.co/api/v2/pokemon";

    const formData = {
      method,
      url,
      ...(method === "POST" || method === "PUT" ? { body } : {}),
    };
    props.handleApiCall(formData);
  };

  const handleMethodChange = (newMethod) => {
    setMethod(newMethod);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <span data-testid='form-trigger' className="trigger">Connect to API!</span>
      </DialogTrigger>
      <DialogContent data-testid='form-content'>
        <DialogHeader>
          <DialogTitle>
            Enter URL
          </DialogTitle>
        </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="form__input">
                <input name="url" type="text" data-testid="url-input" placeholder="https://api.com" />
              </div>
              <div className="methods" data-testid="methods">
                {["GET", "POST", "PUT", "DELETE"].map((m) => (
                  <span
                    key={m}
                    id={m.toLowerCase()}
                    data-testid={`${m.toLowerCase()}-method`}
                    className={method === m ? "active" : ""}
                    onClick={() => handleMethodChange(m)}
                  >
                    {m}
                  </span>
                ))}
              </div>
              {(method === "POST" || method === "PUT") && (
                <textarea
                  name="body"
                  data-testid="body-textarea"
                  onChange={(e) => setBody(e.target.value)}
                  className="form__textarea"
                />
              )}
              <button type="submit" className="btn" data-testid="submit-button">
                Go!
              </button>
            </form>
      </DialogContent>
    </Dialog>
  );
};

export default Form;
