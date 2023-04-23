export type SignUpProps = SignUpPropsState & SignUpPropsDispatch

export type SignUpPropsState = {
    name: string,
    email: string,
    password: string,
    verifyPassword: string
}

export type SignUpPropsDispatch = {
    updateName: (name: string) => void
    updateEmail: (email: string) => void
    updatePassword: (password: string) => void
    updateVerifyPassword: (verifyPassword: string) => void
}