## States

All items
    Type: Array
    Name: todoArrAll
    Completed: true or false
    Includes: Active and Completed
Active only
    Type: Array
    Name: todoArrActive
    Completed: false
    Includes: Active only
Completed
    Type: Array
    Name: todoArrComplete
    Completed: true
    Includes: Completed only

## Props?

todoItem: this is the item on the list, will need a unique ID

## User sees the following:
1. Header with text “To-Do List”
2. Input entree field and enter button
    - IF user input field is blank(“”)
        - THEN enter button is diabled AND error message delivered if clicked
    - ELSE    
        - todoItem is created with radio button to differentiate between completed/active state and radio button for delete
        - Input is recorded in Active and All pageState and local storage
        - User sees todoItem in Active pageState and All pageState
3. To-do list (if applicable) for pageState All
4. Footer with the following:
    - All state/view
        - IF clicked THEN user can see both pageState active and pageState completed todoItems
    - Active state/view
        - IF clicked THEN user can see only pageState active todoItems (not completed)
    - Completed state/view
        - IF clicked THEN user can see only pageState completed todoItems (not active)
    - Clear Completed
        - IF clicked 
            - THEN all items from the pageState completed are deleted from local storage

# Functionality

## Components
DONE
CreateReminder() {
    IF input blank and user clicks enter
    THEN error modal received
    ELSEIF input is not blank and user clicks enter
    THEN todoItem is added to todoArrActive AND todoArrAll
}

DeleteReminder() {
    WHILE todos exist within any state
    IF user clicks the remove radio button
    THEN the todoItem is removed from UI and local storage 
}

ClearAllReminder() {
    WHILE todoItem exist / WHILE todoArrAll array length is greater than zero
    remove/delete todoItem
}

CompleteTodo() {
    IF todoItem exist / IF todoArrAll array length is greater than zero
    AND radio button is clicked
    THEN todoItem is moved from the todoArrActive to the todoArrComplete array
}

Date.now, for ID id = (date.now). which becomes todo.id