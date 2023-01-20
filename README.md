#Quick Start
python manage.py createsuperuser --username=loop --email=tony.kusic@gmail.com
POSTGRES_DB=estudent POSTGRES_USER=loop POSTGRES_PASSWORD=toor docker compose -f db/compose-postgres/docker-compose.yml up

#Requirements
docker (with compose)


#About the db/
many thanks to https://github.com/khezen/compose-postgres
