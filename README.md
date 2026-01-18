# Pagination using React Query (React Web)

This project demonstrates efficient pagination in a **React (Web)** application using **React Query**.  
It focuses on correct caching, smooth navigation between pages, proper loading states, and performance optimizations.

---

## 🎯 Objective

Implement page-based pagination using React Query while ensuring:
- Efficient data fetching
- Cached pages when navigating back and forth
- Smooth UI without flickering
- Clean and reusable code structure

---

## 🚀 Features

- Paginated user list using a real paginated API
- **Previous / Next** buttons for navigation
- Cached data when moving between pages
- Skeleton loader on **initial load only**
- Loader on page change without replacing existing data
- Error state with retry button
- Empty state handling
- Prefetching of next page for smoother UX
- No unnecessary API calls when returning to previous pages

---

## 🌐 API Used

DummyJSON Users API:
https://dummyjson.com/users?limit=20&skip=0


---

## 🧠 Pagination Logic (Plain English)

The API provides:
- `skip`: how many items are already fetched
- `limit`: items per page
- `total`: total number of users

To decide if another page exists:
skip + limit < total


If this condition is true, the next page can be fetched.  
Otherwise, pagination stops.

This logic prevents extra API calls and ensures correct pagination.

---

## ⚙️ Tech Stack

- React
- TypeScript
- @tanstack/react-query
- DummyJSON API

---

## 📁 Folder Structure

```
src/
├── api/
│ └── users.api.ts
├── hooks/
│ └── useUsers.ts
├── components/
│ ├── UserItem/
│ ├── SkeletonList/
│ ├── ErrorState/
│ └── EmptyState/
├── types/
│ └── types.ts
├── App.tsx
└── main.tsx
```


---

## 🛠 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shivampurbia/pagination-list.git
cd pagination-list
```
## 2️⃣ Install Dependencies
```bash
npm install
```

## 3️⃣ Run the App
```bash
npm run dev
```
## ⚡ Performance Optimizations

- Used `staleTime` to prevent unnecessary refetching
- Cached paginated data using page-based query keys
- Prefetched next page for faster navigation
- Used `keepPreviousData` to avoid UI flicker
- Disabled refetch on window focus and component remount
- Memoized list items to reduce unnecessary re-renders

---

## ✅ Requirements Covered

- Paginated list with real API data
- Previous / Next buttons for navigation
- Cache maintained when moving between pages
- Loading and error states handled properly
- Skeleton loader implemented
- Prefetching for next pages
- Clean and readable code structure
- Performance optimizations applied

---

## 📌 Notes

- Skeleton loader appears only on the initial data load
- Page navigation does not trigger unnecessary API calls
- UI remains smooth without flickering
- Cached data is reused when navigating back to previous pages

---

## 👨‍💻 Author

Built as part of a pagination assignment using **React Query (Web)**.
