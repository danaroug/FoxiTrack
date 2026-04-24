# FoxiTrack

FoxiTrack is a work-in-progress full-stack job application tracker built with ASP.NET Core Web API and React.

It is designed to organise job applications, companies, interview stages, statuses, and notes in one clean workflow. The project is currently being developed as a practical full-stack learning project with a focus on readable code, maintainability, and API-driven architecture.

## Current features

- ASP.NET Core Web API backend
- Entity Framework Core with SQLite
- React frontend using functional components and hooks
- Job listing display
- Basic filtering and status display
- Swagger/OpenAPI documentation for backend endpoints

## Tech stack

- Backend: C#, ASP.NET Core Web API, Entity Framework Core
- Database: SQLite
- Frontend: React, JavaScript, HTML, CSS
- Tooling: Swagger/OpenAPI, Git, Visual Studio, VS Code

## How to run locally

### Backend

```bash
cd JobTracker.API
dotnet restore
dotnet run
```

Swagger UI is available in development mode after starting the backend.

### Frontend

```bash
cd jobtracker-frontend
npm install
npm start
```

The React app fetches job data from the backend API, so the backend should be running first.

## Planned improvements

- Improve the existing CRUD workflow with validation, user-specific job tracking, and a cleaner frontend editing experience.
- Add authentication and user-specific job tracking
- Improve filtering and search
- Improve frontend layout and styling
- Add validation and stronger error handling
- Prepare the application for deployment

## Project purpose

This project demonstrates my progress in building full-stack applications with ASP.NET Core and React. It focuses on practical architecture, API integration, maintainable code, and iterative improvement.