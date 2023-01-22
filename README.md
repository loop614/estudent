## Requirements

- docker (with compose)
- node with npm

## Quick Start Django App

```console
$ cd djangoestudent
$ docker compose build
$ docker compose up
$ docker compose exec web python manage.py makemigrations
$ docker compose exec web python manage.py migrate --noinput
$ docker compose exec web python manage.py createsuperuser --noinput
$ docker compose exec web python manage.py loaddata fixtures/user.json
$ docker compose exec web python manage.py loaddata */fixtures/*.json
```

## Quick Start Angular App

```console
$ cd angularestudent
$ npm install
$ npm run start
```

## Example users:

    - admin@example.com / admin
    - student1@example.com / django110%
    - student2@example.com / django110%

## TODOs:

    - separate djangoestudent and angularestudent into 2 github repos
    - move birth data from appeal to user
