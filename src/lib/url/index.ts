const REST_DEFAULT_URL = {
    accounts: '/accounts/',
    escapes: '/escapes/',
    users : '/users/'
}
const { accounts, escapes, users } = REST_DEFAULT_URL;
export const ACCOUNTS = {
    login: () => {
        return `${accounts}login`
    }
}

export const ESCAPES = {
    //GET - escapeList, POST - escapeCreate
    escape: () => {
        return `${escapes}`
    },
    escapeDelete: (id : number) => {
        return `${escapes}${id}`
    },
    escapeAccept: (id :number) => {
        return `${escapes}${id}/accept`
    },
    escapeDeny: (id :number) => {
        return `${escapes}${id}/deny`
    }
}

const USER_STUDENT = `${users}student`
const USER_TEACHER = `${users}teacher`

export const USERS = {
    //GET - studentList, POST - signup
    userStudent: () => {
        return `${USER_STUDENT}`
    },
    //GET - teacherList, POST - signup
    userTeacher: () => {
        return `${USER_TEACHER}`
    },
    //GET - studentInfo, DELETE - studentDelete
    studentInfo: (user_id : string) => {
        return `${USER_STUDENT}/${user_id}`
    },
    //GET - teacherInfo, DELETE - teacherDelete
    teacherInfo: (user_id : string) => {
        return `${USER_TEACHER}/${user_id}`
    }
}