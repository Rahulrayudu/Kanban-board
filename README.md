# Kanban Board App


In this project I focused on creating an interactive Kanban board application using React JS. The application which interact with the provided API from [Quicksell](https://api.quicksell.co/v1/internal/frontend-assignment) to display and manage tickets in a Kanban-style board.

## Design

### Display State

![Display State](/readme-assets/display-status.png)

### State Based on Display - Grouping by User

![Grouping by User](/readme-assets/display-user.png)

### Grouping by Priority

![Grouping by Priority](/readme-assets/display-pri.png)

## API

The application interacts with the API provided by Quicksell: [API Link](https://api.quicksell.co/v1/internal/frontend-assignment)

## Features

- Dynamic adjustment of the Kanban board based on user's grouping choice.
- Three distinct ways to group data: By Status, By User, By Priority.
- Two sorting options: Priority and Title.
- Responsive and visually appealing design similar to the provided screenshots.
- User's view state persistence even after page reload.

## Priority Levels

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)


## Vist the deployed App 

https://quickshell-kanban-board-rahul.netlify.app/


## Installation

```bash
git clone https://github.com/Rahulrayudu/Kanban-board.git
cd Kanban-board
npm install

npm start
```

