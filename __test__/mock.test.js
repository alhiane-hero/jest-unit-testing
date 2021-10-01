const mocker = require('../mock');

test('Mock Function', () => {
    // implementation sayHello() here by mocker:
    const mocker = jest.fn((name) => `Hello ${name}`);
    expect(mocker("Ahmed")).toBe("Hello Ahmed");
    expect(mocker("Alhiane")).toBe("Hello Alhiane");
    expect(mocker("Aicha")).toBe("Hello Aicha");
    expect(mocker).toHaveBeenCalled();
    expect(mocker).toHaveBeenCalledTimes(3);
    expect(mocker).toHaveBeenCalledWith("Ahmed");
    expect(mocker).toHaveBeenCalledWith("Alhiane");
    expect(mocker).toHaveBeenLastCalledWith("Aicha");
});