const REST_DEFAULT_URL = {
    accounts: '/accounts/',
    escapes: '/escapes/',
    users : '/users/'
}
const { accounts, escapes, users } = REST_DEFAULT_URL;
export const ACCOUNTS = {
    activeRead: (uidb64, token) => {
        return `${accounts}activate/${uidb64}/${token}`
    }
    ,
    login: () => {
        return `${accounts}login`
    }
}

export const ESCAPES = {
    //GET - escapeList, POST - escapeCreate
    escape: () => {
        return `${escapes}`
    },
    escapeDelete: (id) => {
        return `${escapes}${id}`
    },
    escapeAccept: (id) => {
        return `${escapes}${id}/accept`
    },
    escapeDeny: (id) => {
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
    studentInfo: (user_id) => {
        return `${USER_STUDENT}/${user_id}`
    },
    //GET - teacherInfo, DELETE - teacherDelete
    teacherInfo: (user_id) => {
        return `${USER_TEACHER}/${user_id}`
    }
}