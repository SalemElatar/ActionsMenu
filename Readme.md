## ActionsMenu

- **The `ActionsMenu` component allows you to create a dropdown menu with customizable action items. It can trigger a confirmation dialog if needed.**
- I used for a while and thought to share it.
- Dropdown menu and Dialog are based on Radix ui primitive components.

**Props:**

- `actionItems` (array of objects): An array of action items to be shown in the dropdown. here you have to provide everything about actions [take a look at the example below](#usage).
- `targetEle` (num): The "id" of the target element for the action.
- `helperData` (any): Additional data to assist the action handlers.
- `customTrigger` (JSX element, optional): Custom trigger element for the dropdown.
- `variant` (string, optional): Use `"dark"` for dark mode styling.
- `dialogBody` (JSX element, optional): Additional content for the confirmation dialog.
- `dialogButton` (object, optional): Customization options for the dialog button.

##### Usage:

```jsx
import ActionsMenu from "./ActionsMenu";
function Card(card) {
  const handleAction = (target, helper) => {
    // Action handler logic
  };

  const handleConfirmation = (target) => {
    // Confirmation handler logic
  };

  const actionItems = [
    {
      action: "Edit",
      handler: handleAction, // use it if the action doesn't need confirmation dialog, if it does use dialog handler
      hasDialog: true,
      dialogContent: {
        title: "Confirmation",
        description: "Are you sure you want to edit?",
        dialogActions: "Confirm",
        dialogHandler: handleConfirmation, // use it whent you need to confirm action inside dialog
      },
    }, // ...other action items
  ];

  return (
    <div className="App">
      <ActionsMenu
        actionItems={actionItems}
        targetEle={card.id}
        variant="dark"
        customTrigger={<CustomTrigger />}
        helperData="renamed"
        dialogButton={{
          color: "green",
        }}
      />
    </div>
  );
}

export default App;
```
