# Generated by Django 4.1.5 on 2023-01-20 20:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('student', '0001_initial'),
        ('discipline', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appeal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime_created', models.DateTimeField(auto_created=True)),
                ('date_of_birth', models.DateField()),
                ('place_of_birth', models.CharField(max_length=256)),
                ('finished_school', models.CharField(max_length=256)),
                ('cover_letter', models.TextField()),
                ('finished_school_file_path', models.CharField(max_length=256)),
                ('average_grade', models.CharField(max_length=256)),
                ('graduation_test_result', models.CharField(max_length=256)),
                ('datetime_updated', models.DateTimeField(auto_now=True)),
                ('fk_discipline', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='discipline.discipline')),
                ('fk_student', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='student.student')),
            ],
        ),
    ]
