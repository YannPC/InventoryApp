# InventoryApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Explaination:


🚀 Project Overview
Front‑End (Angular)
Framework: Angular (latest LTS).
Languages: HTML, CSS (or SCSS), TypeScript.
Structure:
Components for UI pieces (e.g. LoginComponent, ProductListComponent).
Services to call the API (HttpClient).
Routing module for navigation.
Build: ng serve for development, ng build --prod for production.
State management: simple services / BehaviorSubject or NgRx if needed later.
Back‑End (C# / .NET)
Platform: .NET 8 (or latest).
Architecture:
Layers:
API layer (ASP.NET Core Controllers)
Application/Core layer (interfaces, DTOs, business logic)
Infrastructure layer (EF Core, data access, external services)
SOLID Principles:
Single Responsibility: each class has a single reason to change.
Open/Closed: extend functionality via abstractions.
Dependency Inversion: depend on interfaces, not concretions.
Liskov Substitution: derived types substitute base types.
Interface Segregation: small, focused interfaces.
Dependency Injection: use built‑in DI container (services.AddScoped, etc.).
Asynchrony:
Return Task<T> from repository/service methods.
Use async/await in controllers and services to avoid blocking.
Data Access: EF Core with DbContext or any repository pattern.
Communication between front and back
RESTful API (JSON).
CORS configured on backend.
HTTP client on front end to consume endpoints.
📋 Step‑by‑Step Tasks
Each numbered item below can be treated as a standalone task you perform in order.

Initialize repositories

Create two folders/projects: frontend and backend.
Initialize Git in each.
Scaffold the Angular app

ng new frontend --routing --style=scss (or css).
Generate a few sample components and a service.
Set up basic UI

Add a navigation bar and placeholder views.
Create CSS/SCSS for layout.
Implement Angular service for API calls

Use HttpClient to GET/POST sample data.
Define interfaces (models) in TypeScript.
Configure routing and lazy loading (optional)

Define routes in app-routing.module.ts.
Lazy-load a feature module.
Create .NET backend project

dotnet new webapi -o backend.
Add necessary NuGet packages (e.g., Microsoft.EntityFrameworkCore.SqlServer).
Define data models and DbContext

Create simple entity classes.
Configure AppDbContext.
Implement repository interfaces

IRepository<T> with async CRUD methods.
Concrete Repository<T> implementing interface.
Build application services

Services that encapsulate business logic (e.g., IProductService).
Register services with DI

In Program.cs add services.AddScoped<IProductService, ProductService>(); etc.
Create controllers

API controllers that accept HTTP requests and call services asynchronously.
Return ActionResult<T> and use await.
Enable CORS and run backend

Allow Angular dev URL (http://localhost:4200) in CORS policy.
Connect front and back

Update Angular service base URL to backend.
Test a full call (e.g., fetch products).
Implement error handling & validation

Use model validation attributes in C#.
Show errors in Angular forms.
Add unit tests (optional)

Simple Jasmine/Karma tests for Angular.
xUnit tests for C# services/controllers.
Prepare for deployment

Configure production build.
Possibly host backend on Azure/AWS and front-end static files or on a CDN.
Tip: Treat each task as a mini‑project: commit early, experiment locally, then move to the next.

🛠 Key Concepts to Keep in Mind
SOLID keeps your backend maintainable and testable.
Dependency Injection makes components modular and swap‑able.
async/await ensures your app remains responsive and scalable.
Angular services + models mirror your backend DTOs for type safety.
REST + JSON is the glue between front and back.
