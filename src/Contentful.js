import {createClient} from 'contentful'

// we're doing the E6S way
// you need to go to settings, API Key and then ADD API KEY
// to filter the content from contentful directly : in context, you need to use the id as a parameter ! 

export default createClient({
    space : "1rg0bmc9npfg",
    accessToken : "edF_9D2_cTBjWfY_ri-LbQ2JHyXmtrtcYmFYm3it0K0"
})

