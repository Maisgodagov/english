import type { Request, Response } from 'express';

import { createUserWordSchema, deleteUserWordSchema } from './dictionary.schemas';
import { dictionaryService } from './dictionary.service';

const getUserId = (req: Request): string | null => {
  const header = req.header('x-user-id');
  if (header && header.trim()) {
    return header.trim();
  }
  if (typeof req.query.userId === 'string' && req.query.userId.trim()) {
    return req.query.userId.trim();
  }
  if (typeof req.body?.userId === 'string' && req.body.userId.trim()) {
    return req.body.userId.trim();
  }
  return null;
};

export const list = async (req: Request, res: Response) => {
  const userId = getUserId(req);
  if (!userId) {
    res.status(401).json({ message: 'Missing user identifier' });
    return;
  }

  const items = await dictionaryService.list(userId);
  res.json(items);
};

export const create = async (req: Request, res: Response) => {
  const userId = getUserId(req);
  if (!userId) {
    res.status(401).json({ message: 'Missing user identifier' });
    return;
  }

  const payload = createUserWordSchema.parse(req.body);
  const entry = await dictionaryService.create(userId, payload);
  res.status(201).json(entry);
};

export const remove = async (req: Request, res: Response) => {
  const userId = getUserId(req);
  if (!userId) {
    res.status(401).json({ message: 'Missing user identifier' });
    return;
  }

  const params = deleteUserWordSchema.parse({ id: req.params.id });
  const deleted = await dictionaryService.remove(userId, params.id);
  if (!deleted) {
    res.status(404).json({ message: 'Word not found' });
    return;
  }
  res.status(204).end();
};