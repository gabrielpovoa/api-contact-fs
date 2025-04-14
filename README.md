# 📇 Contact List API

A simple RESTful API built with **Node.js**, **TypeScript**, and **Express**, used to manage a basic list of contact names stored in a plain `.txt` file.

---

## 🚀 Technologies Used

- **Node.js** – JavaScript runtime
- **Express** – Web server framework
- **TypeScript** – Static typing for JavaScript
- **dotenv** – Environment variable loader
- **helmet** – Adds security headers
- **fs/promises** – Native Node.js module for file I/O

---

## 📁 How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/contact-list-api.git
   cd contact-list-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file**:
   ```
   PORT=3000
   ```

4. **Run the server**:
   ```bash
   npm run dev
   ```
   
   Your API will be running at [http://localhost:3000](http://localhost:3000).

---

## 📌 API Endpoints

### ➕ POST `/contato` — Add a Contact

- **Description:** Adds a new contact to the list.
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "John Doe"
  }
  ```
- **Validations:**
  - `name` is required.
  - Must be at least 2 characters long.
- **Success Response:**
  ```json
  {
    "name": "John Doe"
  }
  ```
- **Error Response:**
  ```json
  {
    "error": "Name is required and must be at least 2 characters long"
  }
  ```

---

### 📜 GET `/contatos` — Get All Contacts

- **Description:** Retrieves the list of all contacts.
- **Method:** `GET`
- **Success Response:**
  ```json
  {
    "contatos": [
      "John Doe",
      "Jane Smith"
    ]
  }
  ```

---

### ❌ DELETE `/contato` — Delete a Contact

- **Description:** Deletes a contact by name (case-insensitive).
- **Method:** `DELETE`
- **Query Parameter:**
  - `name` (required): Name of the contact to delete
- **Example:**
  ```
  DELETE /contato?name=John%20Doe
  ```
- **Success Response:**
  ```json
  {
    "contatos": [
      "Jane Smith"
    ]
  }
  ```
- **Error Response:**
  ```json
  {
    "error": "You need to send a name of a contact to delete"
  }
  ```