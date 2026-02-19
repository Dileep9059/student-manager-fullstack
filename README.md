# 🎓 Student Manager – Full Stack Project

This is a Full Stack CRUD application built using:

* ⚛️ React (Frontend)
* ☕ Spring Boot (Backend)
* 🐘 PostgreSQL (Database)

The application allows users to:

* Add Student
* View Students
* Delete Student

---

## 📂 Project Structure

```
full stack project
│
├── backend (Spring Boot API)
└── frontend (React App)
```

---

## 🧰 Prerequisites

Make sure you have installed:

* Java 17 or above
* Node.js
* PostgreSQL

---

## ⚙️ Backend Setup (Spring Boot)

### 1️⃣ Navigate to backend folder

```
cd backend/SpringBootRestAPIProject
```

### 2️⃣ Create PostgreSQL Database

Open PostgreSQL and run:

```
CREATE DATABASE studentDatabase;
```

Update application.properties if needed:

```
spring.datasource.username=postgres
spring.datasource.password=postgres
```

### 3️⃣ Run Spring Boot Server

For Windows:

```
mvnw.cmd spring-boot:run
```

For Mac/Linux:

```
./mvnw spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

Test API in browser:

```
http://localhost:8080/students
```

---

## 💻 Frontend Setup (React)

### 1️⃣ Navigate to frontend folder

```
cd frontend
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start React App

```
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## ▶️ How to Run the Full Project

You must run BOTH backend and frontend.

Open two terminals:

Terminal 1 → Run Backend

```
cd backend/SpringBootRestAPIProject
mvnw.cmd spring-boot:run
```

Terminal 2 → Run Frontend

```
cd frontend
npm start
```

Now open in browser:

```
http://localhost:3000
```

---

## 📸 Features

* Full CRUD operations
* REST API integration
* PostgreSQL database connection
* Professional UI with React

---

## 👨‍💻 Author

Dileep Potnuru
