import { CreateTodo } from '@/component/CreateTodo';
import { TodoList } from '@/component/TodoList';
import { useTodoApi } from '@/hooks/useTodoApi';

export const Home = () => {
  const { todoList, addTodo, updateTodo, deleteTodo } = useTodoApi();

  return (
    <div>
      Home
      <CreateTodo addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};
