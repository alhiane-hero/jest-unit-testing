// beforeAll(function, timeOut) => it's work before all tests(tasks);
// beforeEeach(function, timeOut) => it's work before each test(task);
// testing دور هاتين الدالتين يكمن في عمل شيء معين قبل ال;
// beforeAll() / beforeEeach() => for do some tasks before testing start;

beforeAll(() => {
    // connect To Database;
    // Empty Testing Table;
    // Add Dummy Data For Testing;
    // Prepare Everything Before Testing;
});

// afterAll(function, timeOut) => it's work after all tests(tasks);
afterAll(() => {
    // clean Database;
    // clean Cache;
});