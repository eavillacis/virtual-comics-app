import Layout from '../components/Layout';
// import getComics from '../data/data.js'
import Photo from '../components/Photo';
import fetch from 'node-fetch';

const Index = (props) => (
    <Layout>
        {
            props.comics.map((comic, key) => <Photo id={key} key={key} data={comic} />)
        }
    </Layout>
);

export const getStaticProps = async ({ }) => {
    // Would fetch data
    // Call an external API endpoint to get posts.
    const res = await fetch('https://m61b4vp39g.execute-api.us-east-2.amazonaws.com/Stage/api/v1/comics');
    const comics = await res.json();

    return {
        props: {
            // comics: getComics(),
            comics: comics.data.results ? comics.data.results : []
        }
    }
};

export default Index