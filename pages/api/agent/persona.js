// /pages/api/agent/persona.js
import { handler } from '../core';

export default function personaAPI(req, res) {
  return handler(req, res, 'persona');
}
