import React from "react";
import { KanbanBoard } from "./components/KanbanBoard/KanbanBoard";
import { sampleColumns, sampleTasks } from "./components/KanbanBoard/sampleData";
import { useState } from "react";
import { KanbanColumn, KanbanTask } from "./components/KanbanBoard/KanbanBoard.types";

const App: React.FC = () => {
  const [columns, setColumns] = useState<KanbanColumn[]>(sampleColumns);
  const [tasks, setTasks] = useState<Record<string, KanbanTask>>(sampleTasks);

  const handleTaskMove = (taskId: string, fromColumn: string, toColumn: string, newIndex: number) => {
    setColumns(prev => {
      const next = prev.map(col => ({ ...col, taskIds: [...col.taskIds] }));
      const from = next.find(c => c.id === fromColumn);
      const to = next.find(c => c.id === toColumn);
      if (!from || !to) return prev;
      const fromIndex = from.taskIds.indexOf(taskId);
      if (fromIndex !== -1) {
        from.taskIds.splice(fromIndex, 1);
      }
      const safeIndex = Math.min(Math.max(newIndex, 0), to.taskIds.length);
      to.taskIds.splice(safeIndex, 0, taskId);
      return next;
    });

    setTasks(prev => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        status: toColumn
      }
    }));
  };

  const handleTaskCreate = (columnId: string, task: KanbanTask) => {
    setTasks(prev => ({ ...prev, [task.id]: task }));
    setColumns(prev =>
      prev.map(col =>
        col.id === columnId ? { ...col, taskIds: [...col.taskIds, task.id] } : col
      )
    );
  };

  const handleTaskUpdate = (taskId: string, updates: Partial<KanbanTask>) => {
    setTasks(prev => ({
      ...prev,
      [taskId]: { ...prev[taskId], ...updates }
    }));
  };

  const handleTaskDelete = (taskId: string) => {
    setColumns(prev =>
      prev.map(col => ({
        ...col,
        taskIds: col.taskIds.filter(id => id !== taskId)
      }))
    );
    setTasks(prev => {
      const copy = { ...prev };
      delete copy[taskId];
      return copy;
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-4">
      <h1 className="text-2xl font-semibold mb-4 text-neutral-900">
        Kanban Board Component Demo
      </h1>
      <KanbanBoard
        columns={columns}
        tasks={tasks}
        onTaskMove={handleTaskMove}
        onTaskCreate={handleTaskCreate}
        onTaskUpdate={handleTaskUpdate}
        onTaskDelete={handleTaskDelete}
      />
    </div>
  );
};

export default App;
