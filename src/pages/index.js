import React from 'react';
import { graphql } from 'gatsby';
import sortBy from 'lodash/sortBy'
import groupBy from 'lodash/groupBy';

import Layout from '../components/layout';
import CocktailTable from '../components/CocktailTable';
import SEO from '../components/seo';

const exclusions = new Set(['type', 'mixing'])

const IndexPage = ({ data }) => {
    const rawCocktailsArray = data.allCocktailsData.edges.map(x => x.node);
    const allFields = data.allCocktailsFields.edges
    .map(x => x.node)
    .filter(x => x.isNotes !== 'TRUE');

    const cocktailsSorted = sortBy(rawCocktailsArray, ['type', 'spirit', 'name']);
    const groupedCocktails = groupBy(cocktailsSorted, 'type');

    return <Layout>
        <SEO title="Home" />
        <h2>The Sour</h2>
        <CocktailTable
            fields={allFields}
            exclusions={exclusions}
            cocktails={groupedCocktails.sour}
        />
        <h2>The Negroni</h2>
        <CocktailTable
            fields={allFields}
            exclusions={exclusions}
            cocktails={groupedCocktails.negroni}
        />
        <h2>The Brooklyn</h2>
        <CocktailTable
            fields={allFields}
            exclusions={exclusions}
            cocktails={groupedCocktails.brooklyn}
        />
    </Layout>
};

export default IndexPage;

export const query = graphql`
    query {
        allCocktailsData {
            edges {
                node {
                    name
                    type
                    mixing
                    spirit
                    spiritNotes
                    sweet
                    sour
                    bitter
                    bitterNotes
                    vermouth
                    albumen
                    bitters
                    soda
                    garnish
                }
            }
        }
        allCocktailsFields {
            edges {
                node {
                    key
                    title
                    value,
                    isNotes,
                    hasNotes
                }
            }
        }
    }
`;
