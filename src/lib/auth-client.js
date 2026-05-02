import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    /** Use same-origin auth requests in both localhost and deployed environments. */
})

export const { signIn, signUp, useSession } = authClient
