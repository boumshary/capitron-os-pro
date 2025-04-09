// /pages/api/agent/capital.js
import { handler } from '../core';

export default function capitalAPI(req, res) {
  return handler(req, res, 'capital');
}
