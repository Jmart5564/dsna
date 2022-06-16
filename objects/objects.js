
export function makePet(name, type, age, food, toys) {
    return {
        name,
        type,
        age,
        food,
        toys,
    };
} 

export function formatWork(data) {
    return {
        work: data.book.title,
        writer: data.author.first + ' ' + data.author.last,
    };
}

export function reverseWork(data) {
    const names = data.writer.split(' ');
    const first = names[0];
    const last = names[names.length - 1];
    return {
        author: {
            first,
            last,
        },
        book: {
            title: data.work
        }

    };
}