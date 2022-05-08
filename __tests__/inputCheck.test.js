const inputCheck = require('../utils/inputCheck');

test('inputCheck() returns null when our object has the single element (property) we want to check', () => {
  const obj = {name: 'alice'};

  expect(inputCheck(obj, 'name')).toBe(null);
});

test('inputCheck() returns an error object when a property is missing', () => {
  const obj = {name: 'alice', occupation: ''};

  expect(inputCheck(obj, 'name', 'occupation')).toEqual(
    expect.objectContaining({
      error: expect.stringContaining('No occupation specified')
    })
  );
});


test('inputCheck() returns null when we check multiple properties and they all exist', () => {
  const obj = {name: 'alice', disha: "something" };

  expect(inputCheck(obj, 'name', "disha")).toBe(null)
});


test('inputCheck() returns an error object when one of multiple properties is empty string', () => {
  const obj = {name: 'alice', disha: ""};

  expect(inputCheck(obj, 'name', "disha")).toEqual(
    expect.objectContaining({
      error: expect.stringContaining('No disha specified')
    })
  );
});

