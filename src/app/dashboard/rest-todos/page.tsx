
import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import TodosGrid from "@/todos/components/TodosGrid";
import { useEffect } from "react";

export const metadata = {
 title: 'Listado de Todos',
 description: 'SEO Title',
};

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({
    orderBy: {
      description: 'asc'
    }
  });

  // useEffect(() => {
  //   fetch('/api/todos')
  //     .then(resp => resp.json())
  //     .then(console.log)
  // }, [])

  return (
    <div>
      {/* TODO: form */}
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={ todos } />
    </div>
  );
}