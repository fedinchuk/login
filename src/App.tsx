import styles from './Core.module.scss'
import './output.css'
import './index.css'
import './App.css'

function App() {
  return (
    <form className="br-primary/5 p-10 rounded-lg border
    border-solid border-white/5 shadow-lg">
      <h1 className="text-6x1 font-bold mb-5">Login</h1>

      <input className={styles.field} type='text'
      placeholder="Enter email:" />

      <input
        className={styles.field}
        type="password"
        placeholder="Enter password:"
      />

      <button className="dark:bg-white inline-block">Submit</button>
    </form>
  )
}

export default App
