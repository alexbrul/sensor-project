const axios = require('axios').default

// Environment variables for authentication and target.
const serviceAccountKeyId  = "ca34rv45020000d9bh30"
const serviceAccountSecret = "1238a8950b3b6ee4048a4c401c8d4536098xxBotBreakerxx123"
const IDSoveromAlex = 'bj9sf6v7cdlg00b9vf50'
const baderomEn= 'bj9tpt41bddg00fbmi6g'
const baderomTO = 'bj9tmr3fvtng00a964j0'

// Shortform Disruptive REST API base url.
const baseUrl = 'https://api.d21s.com/v2'

async function paginatedGet(url, resultField, keyId, secret) {
    let results = []

    // Create a parameters dictionary that contains an empty page token.
    let params = {'pageToken': ''}

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
        console.log(results)
        if (!(resultField in page.data)) {
            throw new Error('Field "' + resultField + '" not in response.')
        }

        // Concatenate response contents to output list.
        results.push(...page.data[resultField])
        console.log(`- ${page.data[resultField].length} projects in page.`)

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
    // Make paginated requests for all available projects.
    let projects = []
    projects = await paginatedGet(
        baseUrl + '/projects/c9ju20a0gvhdcct6gmjg/devices/' + baderomEn + '/events',
        'events',
        serviceAccountKeyId,
        serviceAccountSecret,
    )

    // Print display name of all fetched projects.
    for (let i = 0; i < projects.length; i++) {
        console.log(projects[i])
    }
}

async function main2 () {
    // Make paginated requests for all available projects.
    let projects = []
    projects = await paginatedGet(
        baseUrl + '/projects/c9ju20a0gvhdcct6gmjg/devices/' + baderomTo + '/events',
        'events',
        serviceAccountKeyId,
        serviceAccountSecret,
    )

    // Print display name of all fetched projects.
    for (let i = 0; i < projects.length; i++) {
        console.log(projects[i])
    }
}


main().catch((err) => {console.log(err)});
