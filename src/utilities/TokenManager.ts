export type TokenAllowedScopes = "account api email offline_access openid profile trading"

export type Token = {
    access_token: string,
    expires_in: number,
    token_type: string,
    scope: TokenAllowedScopes
}

export class TokenManager {
    public static save = (token: Token): void => {
        let json = JSON.stringify(token)
        localStorage.setItem(token.scope, json)
    }
    public static load = (scope: TokenAllowedScopes): Token | null => {
        let token: Token | null = null;
        let json = localStorage.getItem(scope);

        if (json !== null) {
            token = JSON.parse(json);
        }
        return token
    }
}