import { SlOptionsVertical } from "react-icons/sl";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import ConfirmationDialog from "./confirmationDialog";
import { useState } from "react";

const ActionsMenu = ({
  actionItems,
  targetEle,
  helperData,
  customTrigger,
  variant,
  dialogBody,

  dialogButton,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({});

  return (
    <>
      <ConfirmationDialog
        dialogContent={dialogContent && dialogContent}
        open={dialogOpen}
        setOpen={setDialogOpen}
        targetEle={targetEle}
        variant={variant}
        dialogButton={dialogButton}
        dialogBody={dialogBody && dialogBody}
      />

      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          style={{ background: "transparent", border: "none" }}
        >
          {customTrigger ? customTrigger : <SlOptionsVertical color="white" />}
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            style={{
              borderRadius: "0.375rem",
              border: "1px solid black",
              overflow: "hidden",
              width: 200,
              backgroundColor: variant === "dark" ? "var(--bg-menus)" : "#ddd",
              boxShadow:
                "0px 0px 9px -2px rgba(5, 5, 5, 0.16), 0px 7px 12px rgba(0, 0, 0, 0.13)",
            }}
            loop
            onCloseAutoFocus={(event) => event.preventDefault()}
            sideOffset={10}
            align="start"
          >
            {actionItems.map((actionItem) => {
              return (
                <DropdownMenu.Item
                  className="dropdownMenuItem"
                  style={{
                    padding: "0.75rem 1rem",
                    userSelect: "none",
                    textTransform: "capitalize",
                  }}
                  onSelect={() => {
                    actionItem.handler(targetEle, helperData);
                    if (actionItem.hasDialog) {
                      setDialogOpen(true);
                      setDialogContent({
                        title: actionItem.dialogContent.title,
                        description: actionItem.dialogContent.description,
                        dialogActions: actionItem.dialogContent.dialogActions,
                        dialogHandler: actionItem.dialogContent.dialogHandler,
                      });
                    }
                  }}
                  key={actionItem.action}
                >
                  {actionItem.action}
                </DropdownMenu.Item>
              );
            })}
            <DropdownMenu.Arrow />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};

export default ActionsMenu;
