export interface Book {
    title: string;
    author: string;
    status: "reading" | "completed" | "planned";
    year: number;
}

export const books: Book[] = [
    {
        title: "Central Banking 101",
        author: "Joseph Wang",
        status: "reading",
        year: 2026
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        status: "completed",
        year: 2026
    },
    {
        title: "John Adams",
        author: "David McCullough",
        status: "completed",
        year: 2026
    }
];
