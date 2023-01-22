export class Subject
{
    fk_discipline: number = 0;
    name: string = '';
    description: string = '';
    ects: number = 0;

}
export class SubjectWrap
{
    model: string = '';
    pk: number = 0;
    fields: Subject = new Subject();
}
