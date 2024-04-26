import CountdownTimer from "./CountdownTimer.js";

function App() {
  const now = new Date()
  const deadline = new Date(2024, 10, 3, 13, 30)
  
  const distance = deadline - now

  const days = distance / (1000 * 60 * 60 * 24)
  
  const DAYS_IN_MS = days * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTime = NOW_IN_MS + DAYS_IN_MS;


  return (
    <div className="App">
        <CountdownTimer targetDate={dateTime} />
    </div>
  );
}

export default App;
