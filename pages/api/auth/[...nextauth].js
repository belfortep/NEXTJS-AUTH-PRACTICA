import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({

    providers: [    //voy a poder iniciar sesion con los providers que aca escriba

        GitHubProvider({

            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,

        }),

    ]

})