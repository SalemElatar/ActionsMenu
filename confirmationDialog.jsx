import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineClose } from "react-icons/ai";

const ConfirmationDialog = ({
  open,
  setOpen,
  dialogContent,
  targetEle,
  dialogBody,
  bgColor,
  variant,
  dialogButton,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          style={{
            backgroundColor: "rgb(0,0,0,0.3",
            position: "fixed",
            inset: 0,
          }}
        />
        <Dialog.Content
          style={{
            paddingTop: "1rem",
            paddingRight: "1.25rem",
            paddingBottom: "1rem",
            paddingLeft: "1.25rem",
            borderRadius: "0.5rem",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            backgroundColor: bgColor
              ? bgColor
              : variant == "dark"
              ? "#222"
              : "#fff",
            color: variant == "dark" ? "#fff" : "#222",
            maxWidth: "550px",

            maxHeight: "85vh",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Dialog.Title>{dialogContent.title}</Dialog.Title>
            <div>
              <Dialog.Close
                style={{ border: "none", background: "none", color: "white" }}
              >
                <AiOutlineClose size={25} />
              </Dialog.Close>
            </div>
          </div>
          <Dialog.Description>{dialogContent.description}</Dialog.Description>

          {dialogBody && <div>{dialogBody}</div>}

          <div style={{ marginTop: "15px" }}>
            <Dialog.Close asChild>
              <button
                className={
                  dialogButton.classNames
                    ? dialogButton.classNames
                    : "dialog-btn dialog-action-btn"
                }
                style={{
                  marginRight: "15px",
                  color: dialogButton.color ? dialogButton.color : "#fff",
                  backgroundColor: dialogButton.backgroundColor
                    ? dialogButton.backgroundColor
                    : "#801616",
                }}
                onClick={() => dialogContent.dialogHandler(targetEle)}
              >
                {dialogContent.dialogActions}
              </button>
            </Dialog.Close>

            <Dialog.Close asChild>
              <button
                style={{ backgroundColor: "#444444" }}
                className="dialog-btn dialog-cancel-btn"
              >
                cancel
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ConfirmationDialog;
