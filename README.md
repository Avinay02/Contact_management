The application will allow users to manage their contacts, including adding,
updating, deleting, and viewing them.

API Endpoints:

1. GET /contacts
○ Fetch a list of all contacts.
○ Each contact should include:
■ Contact ID
■ Name
■ Email
■ Phone Number
■ Address (Optional)
■ Created At (Timestamp)

2. POST /contacts
○ Create a new contact.
○ Input field
■ Name
■ Email

■ Phone Number
■ Address (Optional)
○ Return the newly created contact with a unique Contact ID.

3. PUT /contacts/:id
○ Update an existing contact based on its ID.
○ Input field
■ Name
■ Email
■ Phone Number
■ Address (Optional)
○ Ensure data validation for required fields and proper error handlin

4. DELETE /contacts/:id
○ Delete a contact based on its ID.
○ Return a success message confirming the deletio

5. GET /contacts/:id
○ Fetch a single contact based on its ID.

Bonus Features (Optional):
● Search Contacts: Implement a feature that allows users to search contacts
by name or email.
● Validation: Ensure all required fields are validated properly (e.g., Nam
Email, Phone Number).

Instructions:
● Framework: Use Node.js and Express.js for building the backend.
● Database: Use MongoDB to store the contacts (or use a mock database
for simplicity).
● Authentication: Simple API without authentication for this task.
● Error Handling: Ensure appropriate error messages are returned for
invalid requests (e.g., contact not found, missing fields
● Data Validation: Use validation libraries like Joi or express-validator to
ensure input data is valid.

Code Requirements:
● Clean Code Practices: Ensure the code is modular, well-commented, and
structured in a maintainable manner.
● Use of HTTP Status Codes: Proper usage of HTTP status codes (e.g., 200
for success, 400 for bad requests, 404 for not found).
● Version Control: Use Git for version control and include a GitHub
repository link containing your project.