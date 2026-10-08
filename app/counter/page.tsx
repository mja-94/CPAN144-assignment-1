import Counter from '../components/Counter';

export default function CounterPage() {
  return (
    <div>
      <h1>Counter Page</h1>
      <p>
        Each counter keeps its own number. The title and starting number are
        passed in as props.
      </p>

      <Counter title="Click Counter" start={0} />
      <Counter title="Score Counter" start={5} />
    </div>
  );
}