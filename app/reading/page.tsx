import { Metadata } from "next";
import { books, Book } from "../../data/books";

export const generateMetadata = (): Metadata => {
    return {
        title: "Reading",
        description: "Books I'm reading"
    };
};

const ReadingPage = () => {
    // Group books by year
    const booksByYear = books.reduce((acc, book) => {
        if (!acc[book.year]) {
            acc[book.year] = [];
        }
        acc[book.year].push(book);
        return acc;
    }, {} as Record<number, Book[]>);

    // Sort years in descending order
    const sortedYears = Object.keys(booksByYear)
        .map(Number)
        .sort((a, b) => b - a);

    return (
        <div>
            <h1 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-8">
                Reading
            </h1>

            {sortedYears.map((year) => (
                <div key={year} className="mb-10 last:mb-0">
                    <h2 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                        {year}
                    </h2>
                    <div className="space-y-4">
                        {booksByYear[year].map((book, index) => (
                            <div
                                key={index}
                                className="group"
                            >
                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                                    {book.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span>{book.author}</span>
                                    <span>·</span>
                                    <span className="text-xs">
                                        {book.status === "reading" ? "Currently reading" :
                                         book.status === "completed" ? "Completed" : "To read"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReadingPage;
