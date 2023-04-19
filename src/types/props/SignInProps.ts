export type SignInProps = SignInPropsState & SignInPropsDispatch

export type SignInPropsState = {
    name: string,
    email: string,
    password: string,
}

export type SignInPropsDispatch = {
    updateName: (name: string) => void
    updateEmail: (email: string) => void
    updatePassword: (password: string) => void
}