const { test, expect, _electron: electron } = require('@playwright/test');

test('End-to-end user workflow', async () => {
    // Launch the Electron app
    const electronApp = await electron.launch({ args: ['.'] });
    const window = await electronApp.firstWindow();

    const taskText = 'My new E2E test task';

    // --- TODO: Task 1: Add a new todo item ---
    await window.locator('#todo-input').fill(taskText);
    await window.locator('#add-todo-btn').click();

    // --- TODO: Task 2: Verify the todo item was added ---
    // 1. Locate the new todo item in the list.
    const newItem = window.locator('.todo-item');

    // 2. Assert that its text content contains the `taskText`.
    await expect(newItem).toContainText(taskText);
    

    // --- TODO: Task 3: Mark the todo item as complete ---
    // 1. Find the checkbox within the new todo item.
    const checkbox = newItem.locator('input[type="checkbox"]');

    // 2. Click the checkbox.
    await checkbox.click();

    // 3. Assert that the todo item now has the 'completed' class.
    await expect(newItem).toHaveClass(/completed/); 

    // --- TODO: Task 4: Delete the todo item ---
    // 1. Find the delete button within the todo item.
    const deleteButton = newItem.locator('.delete-btn');

    // 2. Click the delete button.
    await deleteButton.click();

    // 3. Assert that the todo item is no longer visible on the page.
    await expect(newItem).not.toBeVisible();


    // Close the app
    await electronApp.close();
});