import {createClient} from 'contentful'

// we're doing the E6S way
// you need to go to settings, API Key and then ADD API KEY
// to filter the content from contentful directly : in context, you need to use the id as a parameter ! 
// the env needs to be in the above folder ( with package.json)

export default createClient({
    space : process.env.REACT_APP_API_SPACE,
    accessToken : process.env.REACT_APP_ACCESS_TOKEN
})

