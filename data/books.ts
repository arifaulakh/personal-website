export interface Book {
    title: string;
    author: string;
    status: "reading" | "completed" | "planned";
    year: number;
}

export const books: Book[] = [
    {
        title: "John Adams",
        author: "David McCullough",
        status: "reading",
        year: 2026
    }
];
