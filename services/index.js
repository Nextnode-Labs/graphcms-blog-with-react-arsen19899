import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    cursor
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        name
                        expert
                        feuteredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }

                    }
                }
            }
        }

    `;

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
};

export const getCategories = async () => {
    const query = gql`
        query GetGategories {
            categories {
                name
                slug
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.categories;
};