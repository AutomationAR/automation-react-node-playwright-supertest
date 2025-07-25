import { Router } from 'express';

let items = [{ id: 1, title: 'First Todo' }];
let nextId = 2;

const router = Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.json({ token: 'fake-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.get('/items', (req, res) => res.json(items));

router.post('/items', (req, res) => {
  const newItem = { id: nextId++, title: req.body.title };
  items.push(newItem);
  res.status(201).json(newItem);
});

router.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === +req.params.id);
  if (!item) return res.status(404).send();
  item.title = req.body.title;
  res.json(item);
});

router.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === +req.params.id);
  if (index === -1) return res.status(404).send();
  items.splice(index, 1);
  res.status(204).send();
});

export default router;
