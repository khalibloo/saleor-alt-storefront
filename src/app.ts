// import {
//   TokenVerifyMutation,
//   TokenVerifyMutationVariables,
// } from "./mutations/types/TokenVerifyMutation";
// import { client } from "./apollo";
// import { TOKEN_VERIFY_MUTATION } from "./mutations/TokenVerify";

export const dva = {
  config: {
    onError(e) {
      e.preventDefault();
      console.error(e.message);
    },
  },
  plugins: [require("dva-logger")()],
};

// export async function getInitialState() {
//   const remember = !!localStorage.getItem("rememberme");
//   const storage = remember ? localStorage : sessionStorage;
//   const token = storage.getItem("jwt");
//   let role = "guest";
//   if (token) {
//     const variables: TokenVerifyMutationVariables = {
//       token,
//     };
//     const response = await client.mutate<TokenVerifyMutation>({
//       mutation: TOKEN_VERIFY_MUTATION,
//       variables,
//     });
//     if (response.data?.tokenVerify?.user?.isStaff) {
//       role = "staff";
//     } else {
//       role = "customer";
//     }
//   }
//   return {
//     access: {
//       role,
//     },
//   };
// }
