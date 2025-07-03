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

![Screenshot 2025-07-03 192541](https://github.com/user-attachments/assets/e124b1fd-204e-4db5-b08b-efd9c963f4f4)


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






