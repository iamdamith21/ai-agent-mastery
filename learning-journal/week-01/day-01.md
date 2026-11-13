# Day 01 — AI Agent Fundamentals

Date: 2026-11-13
Duration: 60 minutes

## Learning Objectives

- Understand LLMs, workflows and agents
- Understand agent execution architecture
- Implement a basic tool-selection simulation

## Concepts Learned

1. **LLM:** A language model generates or transforms text from a prompt. The
   Day 01 implementation does not call an LLM yet; it uses a deterministic
   rule instead.
2. **Agent:** A system that receives a goal, decides what action is needed,
   uses available tools, and returns a useful result.
3. **Tool:** A function an agent can call to retrieve information or perform an
   action. This project has `getPendingTasks` and `getCompletedTasks`.
4. **State:** The information available to the assistant while it works. Here,
   the in-memory `tasks` array is the assistant's data source.
5. **Orchestrator:** The controller that coordinates the goal, tool selection,
   tool execution, and response generation. Here, that role is handled by
   `runAssistant`.

## Agent Execution Flow

1. `runAssistant` receives the user's goal.
2. `chooseTool` normalizes the goal and selects a tool based on keywords.
3. The controller returns an unsupported-request message if no tool matches.
4. The selected tool reads the task state and returns matching tasks.
5. The controller converts the tool result into a user-facing response.

The important pattern is that the selected function determines both the
execution step and the response. The controller does not execute unrelated
tools.

## Practical Implementation

- **What did I build?** A TypeScript observe-act loop that supports requests
  for pending or completed study tasks.
- **What was challenging?** Connecting the selected tool call to the correct
  response instead of returning a fixed response or executing every tool.
- **How did I solve the problem?** I narrowed the tool name with a TypeScript
  union, handled `"none"` explicitly, executed the selected function, and
  formatted the returned tasks according to the selected tool.

## Technical Limitations

- **It can:** Recognize goals containing “pending” or “completed”, call the
  corresponding task function, and return a readable task summary.
- **It cannot:** Understand arbitrary natural language, remember changes,
  modify tasks, call external services, or recover from richer tool errors.
- **Why it is not a real LLM agent yet:** Tool selection is a hard-coded
  keyword check. There is no model inference, prompt, function-call schema,
  persistent state, or multi-step planning.

## Tomorrow's Focus

LLMs, tokens, inference and prompt experiments.
