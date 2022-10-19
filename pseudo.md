# Start

## User sees the following:
1. Header with text “To-Do List”
2. Input entree field and enter button
    - IF user input field is blank(“”)
        - THEN enter button is diabled AND error message delivered
    - ELSE    
        - To-do item is captured with radio button for completed and radio button for delete
        - Input is recorded in Active and All pageState and local storage
        - User sees to-do item(s) in Active pageState and All pageState
3. To-do list (if applicable) for pageState All
4. Footer with the following:
    - All state/view
        - IF clicked THEN user can see both pageState active and pageState completed to-do  items
    - Active state/view
        - IF clicked THEN user can see only pageState active to-do items (not completed)
    - Completed state/view
        - IF clicked THEN user can see only pageState completed to-do items (not active)
    - Clear Completed
        - IF clicked 
            - THEN all items from the pageState active page state are deleted from local storage
