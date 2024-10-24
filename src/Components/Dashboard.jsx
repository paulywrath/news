import Story from './Story.jsx';

function Dashboard() {

  return (
    <>
      <header>
        <h1>Personalized News Dashboard</h1>
      </header>
      <main>
        <h2>Latest News</h2>
        <ul>
          <Story />
        </ul>
      </main>
    </>
  )
}

export default Dashboard