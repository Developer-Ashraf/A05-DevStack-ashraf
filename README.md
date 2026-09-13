# 🚀 Dev Stack Builder

Dev Stack Builder is an interactive web application designed to help developers explore, select, and organize their ideal tech stack for modern software development.

---

## 🛠️ Technologies Used

* **Frontend:** React, TypeScript
* **Styling:** Tailwind CSS
* **Build Tool:** Vite
* **Notifications:** React Toastify
* **Version Control:** Git & GitHub

---

## ✨ Key Features

* **Interactive Stack Selection:** Dynamic selection and removal of technologies with instant visual feedback on cards.
* **Real-time Cart Management:** Seamless state synchronization between technology cards and the selection sidebar.
* **Responsive Layout:** Optimized UI featuring custom breakpoints to handle sidebars and cards across mobile, tablet, and desktop views.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax used in React that lets us write HTML-like code inside JavaScript.

---

### 2. What is the difference between props and state?
Props are read-only data passed from a parent component, while state is changeable data managed inside a component.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
useState is a React hook that stores and updates data inside a component. In this project, I used it to manage the cart items and update the UI when a tech stack is added or removed.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
useEffect is a React hook that runs code after a component renders. I used it to load the JSON data once when the app starts, so the tech stack list is displayed.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
Every item in a .map() list needs a unique key prop so React can identify each item and update the UI efficiently.

---

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition.
**Example:** In `SelectedStack.tsx`, we show the message *"No technology selected yet."* when `cartStacks.length === 0`.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
We pass data from parent to child using props. To send data back, the child can call a callback function passed from the parent as a prop.

---

© 2026 Dev Stack Builder. All rights reserved.