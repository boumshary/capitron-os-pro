// /pages/api/agent/multimodal.js
import { handler } from '../core';

export default function multimodalAPI(req, res) {
  return handler(req, res, 'multimodal');
}
