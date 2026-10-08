export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>

      <div className="card">
        <p>
          This app shows what we learned in Weeks 1 to 4: components, props,
          state, event handling, and conditional rendering.
        </p>
        <p>Use the menu at the top to visit each page:</p>
        <ul className="page-list">
          <li>Counter: buttons that change a number</li>
          <li>To-Do List: add, complete, and delete tasks</li>
          <li>Contact: a form with validation</li>
        </ul>
      </div>
    </div>
  );
}