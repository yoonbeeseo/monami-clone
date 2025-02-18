import { Todo } from "./App"
import { useState } from "react"
import TodoForm from "./TodoForm"

// Form 수정/추가
// 수정 옵션
// 타입을 지정하되, 받지 않아도 되는 값

interface Props {
  payload: Todo
  index: number
  todos?: Todo[] // 넣어도되고 안넣어도 됨

  onDelete: () => void
  onUpdate: (newTodo: Todo) => void
}

const TodoItem = ({ payload, index, onDelete, onUpdate }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const editHandler = () => setIsEditing((prev) => !prev)

  return (
    <li>
      {isEditing ? (
        <TodoForm
          onSubmit={(newTodo) => {
            onUpdate(newTodo)
            editHandler()
          }}
          payload={payload}
          onCancel={editHandler}
        />
      ) : (
        <>
          <p>
            {index + 1}. TodoItem: {payload.text}
          </p>
          <button onClick={editHandler}>수정</button>
          <button onClick={onDelete}>삭제</button>
        </>
      )}
    </li>
  )
}

export default TodoItem
