export const GET_ALL_PRODUCTS = `
    query{
        products{
            id
            title
            description
            price
            stock
            brand
            thumbnail
            category{
                name
            }
        }
    }
`;
