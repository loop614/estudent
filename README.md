#Requirements
docker (with compose)
npm

#Quick Start
djangoestudent:
    docker compose build
    docker compose up
    docker compose exec djangoestudent python manage.py makemigrations
    docker compose exec djangoestudent python manage.py migrate --noinput
    docker compose exec djangoestudent python manage.py createsuperuser --username=loop --email=tony.kusic@gmail.com

angularestudent:
    npm install
    npm run start


#TODOs:
- separate djangoestudent and angularestudent into 2 github repos
