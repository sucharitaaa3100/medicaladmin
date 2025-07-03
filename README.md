# 🩺 Device CRM + Inventory Management Dashboard

A full-featured *React + Redux dashboard* to manage medical device installations, service visits, AMC/CMC contracts, facility CRM logs, and alerts — complete with file uploads, dark mode, and export functionality.

---

## 🚀 Features

### 🔧 Device Inventory
- Visual dashboard of all devices
- Status (Online / Offline / Maintenance) with color codes
- Facility info, battery %, last service, and AMC/CMC indicators
- Status dropdown & editable fields

### 🛠 Installation & Training
- Log installations with engineer, facility, date
- Upload installation/unboxing photos
- Training completion status
- Clean form layout with validation

### 🧰 Service Visit Logs
- Add service logs (Preventive / Breakdown)
- Include date, engineer, notes
- Attach photos or PDF reports

### 📅 AMC/CMC Contract Tracker
- Add contracts with start/end date
- Visual alert for upcoming expirations (orange warning)
- Export contracts as CSV file

### 🚨 Alerts & Photo Logs
- Upload alert descriptions and attach photos
- Filter and view logged issues
- LocalStorage-based persistence

---

## 🧠 Tech Stack

- *ReactJS* (frontend UI)
- *Redux Toolkit* (state management)
- *Material UI* (MUI) for components
- *SCSS Modules* for scoped styling
- *Formik + Yup* for form validation
- *LocalStorage* for mock persistence
- *Notistack* for notifications

---

## 🖼 Screenshots

![Screenshot 2025-07-03 192541](https://github.com/user-attachments/assets/aa380691-87e9-4abd-b222-b04683e86a4e)
![Screenshot 2025-07-03 192604](https://github.com/user-attachments/assets/06100e66-bd20-4920-bcd0-fb8661731d94)
![Screenshot 2025-07-03 192621](https://github.com/user-attachments/assets/6fe2374b-0d61-4009-8914-204afd016fa5)
![Screenshot 2025-07-03 192641](https://github.com/user-attachments/assets/8c60f595-f7bc-4b78-85ae-c02a41302deb)
![Screenshot 2025-07-03 192657](https://github.com/user-attachments/assets/f15d9f1e-8c07-47a9-9eb9-27779565219e)
![Screenshot 2025-07-03 192718](https://github.com/user-attachments/assets/2585b2bc-5975-4c3b-bb2e-fc1d3a5e5d9a)
![Screenshot 2025-07-03 192813](https://github.com/user-attachments/assets/574c8feb-f996-47d7-8cb1-d42d5902820b)
![Screenshot 2025-07-03 192906](https://github.com/user-attachments/assets/53462847-1b6d-4cb0-9983-775507d1c5a5)
![Screenshot 2025-07-03 192930](https://github.com/user-attachments/assets/408767e6-b278-4300-8258-3963838ddabd)











---

## 🛠 Local Setup

1. *Clone the repo:*
   ```bash
   git clone https://github.com/sucharitaaa3100/medicaladmin.git
   cd device-crm-dashboard

2. Install dependencies:

npm install


3. Run locally:

npm start


4. App will be live at http://localhost:3000


5.Folder Structure

src/
├── Components/
│   └── Modules/
│       ├── Alerts/
│       ├── AMC/
│       ├── Dashboard/
│       ├── Installation/
│       ├── Inventory/
│       └── Service/
├── Redux/
│   ├── Slices/
│   └── Store.js
├── Styles/
├── Theme/
├── App.js
├── App.scss
├── index.js
└── index.scss

---

🎨 Themes

Supports light and dark mode, automatically based on system preference. Uses CSS variables and SCSS modules.


---

📦 Data Storage

This project uses localStorage for mock data storage. For real backend integration, you can swap with:

json-server

Firebase

Express + MongoDB or any backend API



---

🧪 Optional Enhancements (Future Ready)

[ ] QR code scanning for device IDs

[ ] Role-based access (Admin, Technician)

[ ] Authentication with Firebase/Auth0

[ ] Backend with Express + MongoDB



---

👨‍💻 Author
Sucharita Nandy






