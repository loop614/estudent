export class Discipline {
    fk_university: number = 0;
    name: string = '';
    quote: number = 0;
}

export class DisciplineWrap {
    model: string = '';
    pk: number = 0;
    fields: Discipline = new Discipline();
}
