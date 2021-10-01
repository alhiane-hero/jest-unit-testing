const say = require('../say');

test("Say Hello Jest", () => {
    expect(say()).toBe("Hello Jest");
});