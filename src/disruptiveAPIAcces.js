const axios = require('axios').default

// Environment variables for authentication and target.
const serviceAccountKeyId  = "ca34rv45020000d9bh30"
const serviceAccountSecret = "8a8950b3b6ee4048a4c401c8d4536098"
const IDSoveromAlex = 'bj9sf6v7cdlg00b9vf50'
const baderomEn= 'bj9tpt41bddg00fbmi6g'
const baderomTO = 'bj9tmr3fvtng00a964j0'

// Shortform Disruptive REST API base url.
const baseUrl = 'https://api.d21s.com/v2'

async function paginatedGet(url, resultField, keyId, secret, parameters) {
    let results = []

    // Params, but overwritten to main function to be generic. 
    let params = parameters
    let paramsold = {}

    // Loop until all pages have been fetched.
    console.log('Paging...')
    while (true) {
        // Send GET request for projects.
        let page = await axios({
            method: 'GET',
            url: url,
            auth: {
                username: keyId,
                password: secret,
            },
            params: params,
        }).catch(function (error) {
            if (error.response) {
                throw new Error(
                    error.response.data.code + ' - '
                    + error.response.data.error
                )
            }
        })
        if (!(resultField in page.data)) {
            console.log("Error with results: here is output")
            throw new Error('Field "' + resultField + '" not in response.')
        }

        // Concatenate response contents to output list.
        results.push(...page.data[resultField])
        console.log(`- ${page.data[resultField].length} events in page.`)

        // Update parameters with next page token.
        if (page.data.nextPageToken.length > 0) {
            params.pageToken = page.data.nextPageToken
        } else {
            break
        }
    }

    return results
}

async function main () {
    // get sensor data from the last 24 hours.
    let results = []
    //projects/projectid/devices/deviceId/events. events nr 2 retrieves events response from dict. 
    results = await paginatedGet(
        baseUrl + '/projects/c9ju20a0gvhdcct6gmjg/devices/' + baderomEn + '/events',
        'events',
        serviceAccountKeyId,
        serviceAccountSecret,
        params = { //pageToken is needed for pagination iteration. Add timestamps here if we need
            'pageToken': '',
            'eventTypes': ["objectPresent"]
        },
    )

    // Print all results
    for (let i = 0; i < results.length; i++) {
        console.log(results[i].data.objectPresent) //retrives event data from object
    }
}


//main().catch((err) => {console.log(err)});


/* example output:

{ state: 'NOT_PRESENT', updateTime: '2022-05-19T15:21:01.487000Z' }
{ state: 'PRESENT', updateTime: '2022-05-19T15:15:01.141000Z' }
{ state: 'NOT_PRESENT', updateTime: '2022-05-19T13:28:42.744000Z' }
{ state: 'PRESENT', updateTime: '2022-05-19T13:25:14.432000Z' }
{ state: 'NOT_PRESENT', updateTime: '2022-05-19T12:23:16.734000Z' }
{ state: 'PRESENT', updateTime: '2022-05-19T12:19:08.812000Z' }

*/


async function getBathRoom1 () {
        // get sensor data from the last 24 hours.
        let results = []
        //projects/projectid/devices/deviceId/events. events nr 2 retrieves events response from dict. 
        results = await paginatedGet(
            baseUrl + '/projects/c9ju20a0gvhdcct6gmjg/devices/' + baderomEn + '/events',
            'events',
            serviceAccountKeyId,
            serviceAccountSecret,
            params = { //pageToken is needed for pagination iteration. Add timestamps here if we need
                'pageToken': '',
                'eventTypes': ["objectPresent"]
            },
        )
    
        // Print all results
        let output = []
        for (let i = 0; i < results.length; i++) {
            output.push(results[i].data.objectPresent) //retrives event data from object
        }
        return output;

}

getBathRoom1().catch((err) => {console.log(err)}).then(test => {console.log(test)})



