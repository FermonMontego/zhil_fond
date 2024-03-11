'use strict'

const createQueryString = {
    create(params: string): URL {
        const tupleParams = this.parseQuery(params);

        if (tupleParams.length === 1) {
            return this.createQueryStringOneParam(tupleParams);
        }

        return this.createQueryMultiParams(tupleParams);
    },

    createQueryStringOneParam(tupleParams: (string | number)[]) {

        let oneParams;

        if (typeof tupleParams[0] === 'string' && tupleParams[0].split(' ').length < 2) {
            oneParams = `?username=${tupleParams[0]}`;
        } else if (typeof tupleParams[0] === 'string' && tupleParams[0].split(' ').length > 1) {
            oneParams = `?name=${tupleParams[0]}`;
        } else {
            oneParams = `?id=${tupleParams[0]}`;
        }

        return this.createFullURL(String(oneParams));
    },

    createQueryMultiParams(tupleParams: (string | number)[]) {
        const queryString = tupleParams.reduce((acc, param, index) => {
            let typeofParam = typeof param;

            switch (typeofParam) {
                case 'string':
                    if (typeof param === 'string' && param.split(' ').length > 1) {
                        return acc += index === 0 ? `?name=${param}` : `&name=${param}`;
                    } else {
                        return acc += index === 0 ? `?username=${param}` : `&username=${param}`;
                    }

                case 'number':
                    return acc += index === 0 ? `?id=${param}` : `&id=${param}`;
            }

            return acc;
        }, '')

        return this.createFullURL(String(queryString));
    },

    parseQuery(query: string) {
        const resultQuery = query
            .replace(/,\s*$/, '')
            .split(',')
            .map((param) => Number(param) ? Number(param) : param.trim())
            .filter(Boolean);

        console.log(resultQuery);
        return resultQuery;
    },

    createFullURL(stringWithParams: string) {
        const base_url: string = 'https://jsonplaceholder.typicode.com/users';
        return new URL(`${base_url}${stringWithParams}`);
    }
}

export default createQueryString;
