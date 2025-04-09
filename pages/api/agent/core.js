// /pages/api/agent/core.js
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';

const defaultPrompt = new PromptTemplate({
  template: `You are the {agent} agent in a futuristic AI trading system. Your job is to handle this request:

"{input}"

Respond concisely, smartly, and actionably.`,
  inputVariables: ['agent', 'input']
});

const getResponse = async (agent, input) => {
  const llm = new OpenAI({ temperature: 0.6 });
  const chain = defaultPrompt.pipe(llm);
  return await chain.invoke({ agent, input });
};

export async function handler(req, res, agentName) {
  if (req.method !== 'POST') return res.status(405).end();
  const { input } = req.body;
  try {
    const result = await getResponse(agentName, input || 'Analyze BTC/USDT with 5% daily growth target');
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
