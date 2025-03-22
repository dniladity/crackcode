# CrackCode 🚀

CrackCode is a LeetCode-style coding platform built with Django and React.  
It allows users to solve coding problems, submit solutions, and get instant feedback.

---

## 🛠 Tech Stack

- **Frontend:** React + Vite (planned)
- **Backend:** Django + Django REST Framework
- **Database:** SQLite (for dev), MySQL (planned)
- **Containerization:** Docker + Docker Compose
- **CI/CD:** GitHub Actions (planned)

---

## 📁 Project Structure

crackcode/
├── backend/ # Django project 
├── frontend/ # React app (planned) 
├── docker/ # Dockerfiles
├── .github/ # CI/CD workflows
├── docker-compose.yml 
└── README.md


---

## 🚧 Features (Phase 1)

- ✅ Problem listing API
- ✅ Code submission API
- ✅ User model and admin support
- ✅ Health check endpoint
- 🚧 Code execution engine (coming soon)
- 🚧 Authentication (coming soon)
- 🚧 Frontend UI (coming soon)

---

## 🧪 Local Development

### 🔹 Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

cd frontend
npm install
npm run dev


docker-compose up --build

✅ API Endpoints
Method	Endpoint	Description
GET	/api/	Health check
GET	/api/problems/	List all problems
GET	/api/problems/<id>/	Get problem by ID
POST	/api/submit/	Submit solution