import { useEffect, useState } from 'react';
import { api } from './api';

export default function Todo() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    api.get('/items').then(res => setItems(res.data));
  }, []);

  const addItem = async () => {
    const res = await api.post('/items', { title });
    setItems([...items, res.data]);
  };

  const editItem = async (id: number) => {
    const title = prompt('Edit item');
    const res = await api.put(`/items/${id}`, { title });
    setItems(items.map(i => (i.id === id ? res.data : i)));
  };

  const deleteItem = async (id: number) => {
    await api.delete(`/items/${id}`);
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div>
      <input onChange={e => setTitle(e.target.value)} />
      <button onClick={addItem}>Add</button>
      {items.map((item: any) => (
        <div key={item.id}>
          {item.title}
          <button onClick={() => editItem(item.id)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
