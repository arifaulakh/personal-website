export interface Book {
    title: string;
    author: string;
    status: "reading" | "completed" | "planned";
    year: number;
}

export const books: Book[] = [
    {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        status: "reading",
        year: 2026
    },
    {
        title: "Inference Engineering",
        author: "Philip Kiely",
        status: "reading",
        year: 2026
    },
    {
        title: "Why Empires Fall",
        author: "Peter Heather and John Rapley",
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
