// ─── User ────────────────────────────────────────────────────────────────────

export const currentUser = {
  id: "user_1",
  name: "John Doe",
  email: "john@devstash.io",
};

// ─── Item Types (sidebar counts) ─────────────────────────────────────────────

export const itemTypes = [
  { id: "type_snippet",  name: "Snippets",  icon: "code",    count: 24 },
  { id: "type_prompt",   name: "Prompts",   icon: "sparkles", count: 18 },
  { id: "type_command",  name: "Commands",  icon: "terminal", count: 15 },
  { id: "type_note",     name: "Notes",     icon: "file-text", count: 12 },
  { id: "type_file",     name: "Files",     icon: "paperclip", count: 5 },
  { id: "type_image",    name: "Images",    icon: "image",    count: 3 },
  { id: "type_link",     name: "Links",     icon: "link",     count: 8 },
];

// ─── Collections ─────────────────────────────────────────────────────────────

export const collections = [
  {
    id: "col_1",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    itemCount: 12,
    isFavorite: true,
    contentTypes: ["snippet", "link", "image"],
  },
  {
    id: "col_2",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    itemCount: 8,
    isFavorite: false,
    contentTypes: ["snippet"],
  },
  {
    id: "col_3",
    name: "Context Files",
    description: "AI context files for projects",
    itemCount: 5,
    isFavorite: true,
    contentTypes: ["file", "note"],
  },
  {
    id: "col_4",
    name: "Interview Prep",
    description: "Technical interview preparation",
    itemCount: 24,
    isFavorite: false,
    contentTypes: ["snippet", "note", "link", "command"],
  },
  {
    id: "col_5",
    name: "Git Commands",
    description: "Frequently used git commands",
    itemCount: 15,
    isFavorite: true,
    contentTypes: ["command", "note"],
  },
  {
    id: "col_6",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    itemCount: 18,
    isFavorite: false,
    contentTypes: ["prompt"],
  },
];

export const favoriteCollections = collections.filter((c) => c.isFavorite);
export const allCollections = collections.filter((c) => !c.isFavorite);

// ─── Items ────────────────────────────────────────────────────────────────────

export const items = [
  {
    id: "item_1",
    title: "useAuth Hook",
    type: "snippet",
    language: "typescript",
    description: "Custom authentication hook for React applications",
    content: `import { useContext } from 'react'
import { AuthContext } from './AuthContext'

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthP...')
  }
  return context
}`,
    tags: ["react", "auth", "hooks"],
    collectionId: "col_1",
    collectionName: "React Patterns",
    isFavorite: true,
    isPinned: true,
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15",
  },
  {
    id: "item_2",
    title: "API Error Handling Pattern",
    type: "snippet",
    language: "typescript",
    description: "Fetch wrapper with exponential backoff retry logic",
    content: `async function fetchWithRetry(url: string, retries = 3): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetch(url)
    } catch (err) {
      if (i === retries - 1) throw err
      await new Promise((r) => setTimeout(r, 2 ** i * 1000))
    }
  }
}`,
    tags: ["typescript", "api", "error-handling"],
    collectionId: "col_1",
    collectionName: "React Patterns",
    isFavorite: false,
    isPinned: true,
    createdAt: "2024-01-12",
    updatedAt: "2024-01-12",
  },
  {
    id: "item_3",
    title: "Git interactive rebase",
    type: "command",
    language: null,
    description: "Clean up commits before merging a feature branch",
    content: "git rebase -i HEAD~5",
    tags: ["git", "rebase", "workflow"],
    collectionId: "col_5",
    collectionName: "Git Commands",
    isFavorite: false,
    isPinned: false,
    createdAt: "2024-01-10",
    updatedAt: "2024-01-10",
  },
  {
    id: "item_4",
    title: "Explain this code",
    type: "prompt",
    language: null,
    description: "General-purpose code explanation prompt for AI assistants",
    content:
      "Explain the following code in plain English. Break it down step by step and highlight any potential issues or improvements:\n\n```\n{{code}}\n```",
    tags: ["ai", "code-review", "prompt"],
    collectionId: "col_6",
    collectionName: "AI Prompts",
    isFavorite: true,
    isPinned: false,
    createdAt: "2024-01-08",
    updatedAt: "2024-01-09",
  },
  {
    id: "item_5",
    title: "Python list comprehension patterns",
    type: "snippet",
    language: "python",
    description: "Common list comprehension patterns with filtering",
    content: `# Filter and transform
evens_squared = [x**2 for x in range(20) if x % 2 == 0]

# Flatten nested list
flat = [item for sublist in nested for item in sublist]

# Dict comprehension
word_lengths = {word: len(word) for word in words}`,
    tags: ["python", "list-comprehension", "functional"],
    collectionId: "col_2",
    collectionName: "Python Snippets",
    isFavorite: false,
    isPinned: false,
    createdAt: "2024-01-05",
    updatedAt: "2024-01-05",
  },
  {
    id: "item_6",
    title: "Next.js project context",
    type: "file",
    language: null,
    description: "AI context file describing the Next.js app architecture",
    content: null,
    fileUrl: "/files/nextjs-context.md",
    fileName: "nextjs-context.md",
    fileSize: 4096,
    tags: ["nextjs", "context", "ai"],
    collectionId: "col_3",
    collectionName: "Context Files",
    isFavorite: false,
    isPinned: false,
    createdAt: "2024-01-03",
    updatedAt: "2024-01-06",
  },
];

export const pinnedItems = items.filter((i) => i.isPinned);

// ─── Tags ─────────────────────────────────────────────────────────────────────

export const tags = [
  { id: "tag_1",  name: "react" },
  { id: "tag_2",  name: "auth" },
  { id: "tag_3",  name: "hooks" },
  { id: "tag_4",  name: "typescript" },
  { id: "tag_5",  name: "api" },
  { id: "tag_6",  name: "error-handling" },
  { id: "tag_7",  name: "git" },
  { id: "tag_8",  name: "rebase" },
  { id: "tag_9",  name: "workflow" },
  { id: "tag_10", name: "python" },
  { id: "tag_11", name: "ai" },
  { id: "tag_12", name: "prompt" },
  { id: "tag_13", name: "nextjs" },
  { id: "tag_14", name: "context" },
];

// ─── Aggregated export ────────────────────────────────────────────────────────

export const mockData = {
  currentUser,
  itemTypes,
  collections,
  favoriteCollections,
  allCollections,
  items,
  pinnedItems,
  tags,
};
