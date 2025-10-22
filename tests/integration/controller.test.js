const { TodoService } = require('../../js/model');
const { Controller } = require('../../js/controller');

// Mock the View because we are not testing the UI, only Controller-Model interaction.
const mockView = {
    update: jest.fn(),
    bindAddTodo: jest.fn(),
    bindToggleTodo: jest.fn(),
    bindRemoveTodo: jest.fn(),
};

describe('Controller-Service Integration Tests', () => {
    let service;
    let controller;

    beforeEach(() => {
        service = new TodoService();
        service.todos = []; // Reset singleton for tests
        controller = new Controller(service, mockView);
    });

    test('handleAddTodo should call service.addTodo and update the model', () => {
        // Arrange (Chuẩn bị)
        text = "some text";
        // TODO: Call the controller's handleAddTodo method with some test text.
        // Act (Hành động)
        controller.handleAddTodo(text);
        // Then, get the list of todos directly from the service.
        // Assert (Khẳng định)
        const todos = service.getTodos();
        // Assert that the service's todos array has a length of 1.
        expect(todos).toHaveLength(1);
        // Assert that the text of the first todo in the service matches the input.
        expect(todos[0].text).toBe(text);
    });

    test('handleRemoveTodo should call service.removeTodo and update the model', () => {
        // TODO: First, directly add a todo to the service.
        text = "removed"
        // Arrange (Chuẩn bị)
        service.addTodo(text);
        // Get the ID of the new todo.
        const todoId = service.getTodos()[0].id;
        expect(service.getTodos()).toHaveLength(1);
        // Call the controller's handleRemoveTodo method with that ID.
        // Act
        controller.handleRemoveTodo(todoId);
        // Assert that the service's todos array is now empty.
        // Assert (Khẳng định)
        expect(service.getTodos()).toHaveLength(0);
    });
});
