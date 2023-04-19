export type TokenAllowedScopes = "trading" | "account"

export type Token = {
    accessToken: string,
    expiresIn: number,
    tokenType: string,
    scope: TokenAllowedScopes
}


export class TokenManager {
    public static save = (token: Token): void =>
    {
        let json = JSON.stringify(token)
        localStorage.setItem(token.scope, json)
    }
    public static load = (scope: TokenAllowedScopes): Token | null => {
        let token: Token | null = null;
        let json = localStorage.getItem(scope);

        if(json !== null){
            token = JSON.parse(json);
        }
        return token
    }
}