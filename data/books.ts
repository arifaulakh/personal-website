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
        status: "completed",
        year: 2026
    },
    {
        title: "Technological Revolutions and Financial Capital: The Dynamics of Bubbles and Golden Ages",
        author: "Carlota Perez",
        status: "reading",
        year: 2026
    }
];
