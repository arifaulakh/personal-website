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
        <div className="index-page">
            <h1>Reading</h1>

            {sortedYears.map((year) => (
                <section key={year} className="reading-year">
                    <h2>{year}</h2>
                    <div className="book-list">
                        {booksByYear[year].map((book) => (
                            <div key={`${book.title}-${book.author}`} className="book">
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                                <span>
                                    {book.status === "reading" ? "Currently reading" :
                                     book.status === "completed" ? "Completed" : "To read"}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ReadingPage;
