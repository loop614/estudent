export class Approval {
    date_created: string = '';
}

export class ApprovalWrap {
    model: string = '';
    pk: number = 0;
    fields: Approval = new Approval();
}
