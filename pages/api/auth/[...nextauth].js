import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from 'lib/mongodb'
export default NextAuth({

    adapter: MongoDBAdapter(clientPromise),

    providers: [    //voy a poder iniciar sesion con los providers que aca escriba

        GitHubProvider({

            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,

        }),

    ]

})