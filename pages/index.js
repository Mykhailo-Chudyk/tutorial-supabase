import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase.from('Tasks').select('*');
      if (error) console.error('Error fetching tasks:', error);
      else setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name} - {task.completed ? 'Done' : 'Pending'}</li>
        ))}
      </ul>
    </div>
  );
}
