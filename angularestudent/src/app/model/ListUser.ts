export class ListUser {
    password: string = '';
    last_login: string = '';
    is_super_user: boolean = false;
    username: string = '';
    first_name: string = '';
    last_name: string = '';
    email: string = '';
    is_staff: boolean = false;
    is_active: boolean = false;
    date_joined: string = '';
}

export class ListUserWrap {
    model: string = '';
    pk: number = 0;
    fields: ListUser = new ListUser();
}
