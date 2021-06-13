module.exports = {
  client: {
    includes: ["./**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "instagram",
      url: "http://localhost:4000/graphql",
    },
  },
};
