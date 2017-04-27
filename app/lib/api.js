class Api {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Origin': '',
            'Host': 'ozui.co'
        }
    }

    static get(route) {
        return this.xhr(route, null, 'GET');
    }

    static put(route, params) {
        return this.xhr(route, params, 'PUT')
    }

    static post(route, params) {
        return this.xhr(route, params, 'POST')
    }

    static delete(route, params) {
        return this.xhr(route, params, 'DELETE')
    }

    static xhr(route, params, verb) {
        const host = 'http://ozui.co/feed/find/'
        const url = '${host}${route}'
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
        options.headers = Api.headers()

        return fetch(host, options)
            .then( (response) => {
                console.log('Actions - fetchJobs - received response: ', response)
                return response.json();
            })
            .then( (jobs) => {
                console.log('Actions - fetchJobs - received jobs: ', jobs)
                return jobs;
            })
            .catch( (error) => {
                console.warn('Actions - fetchJobs - recreived error: ', error)
            })
    }

}

export default Api

