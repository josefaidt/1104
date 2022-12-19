import { useEffect } from 'react'
import { API } from 'aws-amplify'
import * as queries from '../graphql/queries'

export default function HomePage(props) {
  const getTodos = async () => {
    let todos
    try {
      todos = await API.graphql({ query: queries.listTodos })
    } catch (error) {
      console.log('error is', error)
      todos = error
    }
    console.log('todos are', todos)
  }
  useEffect(() => {
    getTodos()
  }, [])
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={getTodos}>get todos</button>
      <p>Find me in src/pages/index.tsx</p>
    </div>
  )
}
