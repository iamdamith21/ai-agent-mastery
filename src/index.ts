type StudyTask = {
  id: number;
  title: string;
  completed: boolean;
};

type ToolName = "getPendingTasks" | "getCompletedTasks" | "none";

const tasks: StudyTask[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Practice React", completed: true },
  { id: 3, title: "Review JavaScript closures", completed: false },
];

// TOOL: Provides information to the controller.
function getPendingTasks(): StudyTask[] {
  return tasks.filter((task) => !task.completed);
}

function getCompletedTasks(): StudyTask[] {
  return tasks.filter((task) => task.completed);
}

// DECISION POLICY: For now, this is a simple rule.
// Later, a language model will select tools.
function chooseTool(goal: string): ToolName {
  const normalizedGoal = goal.toLowerCase();

  if (normalizedGoal.includes("pending")) {
    return "getPendingTasks";
  }
  if (normalizedGoal.includes("completed")) {
    return "getCompletedTasks";
  }

  return "none";
}

// CONTROLLER: Executes our simplified observe-act loop.
function runAssistant(goal: string): string {
  console.log("[1] Goal received:", goal);

  const tool = chooseTool(goal);
  console.log("[2] Selected tool:", tool);

  if (tool === "none") {
    return "I cannot handle that request yet.";
  }

  const selectedTasks =
    tool === "getPendingTasks" ? getPendingTasks() : getCompletedTasks();
  console.log("[3] Tool executed successfully");

  const taskTitles = selectedTasks.map((task) => task.title);
  const taskType = tool === "getPendingTasks" ? "pending" : "completed";

  console.log("[4] Response generated");
  console.log("[5] Workflow finished");

  return (
    `You have ${taskTitles.length} ${taskType} tasks: ` +
    (taskTitles.length > 0 ? taskTitles.join(", ") : "none")
  );
}

const result = runAssistant("Show my completed study tasks");

console.log("\nResult:", result);
