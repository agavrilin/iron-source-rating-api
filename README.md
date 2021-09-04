### iron-source-rating-api

## Getting started

- run `docker-compose up` to run app instance with DB
- run `yarn db:migrations && yarn db:seeds` to setup DB structure and some dummy date

### API Endpoints:
- `[GET] /api/v1/relevantApplication`
    - QueryParams: `{ customerType: string, category: string }`
    - Response `{ apps: [{ id, name, description, rating }] }`
- `[POST] /api/v1/installedApps`
    - Request Body: `{ installerApp: string }`
    - Response `{ id, name, description, rating }`

### Folder structure:
- src - all code related to app
    - database - all related to DB: configs, models, migrations, seeds.
    - domain - all related to domain/business logic and infrastructure layer
        - app - application domain entity (router, repo, controller, usecases)
        - category - category domain entity (repo)
        - customer-type (service)
    - extensions - error-handling
