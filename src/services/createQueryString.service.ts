'use strict'

const createQueryString = {
    create(params: string): URL {

        const base_url: string = 'https://jsonplaceholder.typicode.com/users';
        const tupleParams = params
            .replace(/,\s*$/, '')
            .split(',')
            .map((param) => Number(param) ? Number(param) : param.trim());

        if (tupleParams.length === 1) {
            let oneParams;

            if (typeof tupleParams[0] === 'string' && tupleParams[0].split(' ').length < 2) {
                oneParams = `?username=${tupleParams[0]}`;
            } else if (typeof tupleParams[0] === 'string' && tupleParams[0].split(' ').length > 1) {
                oneParams = `?name=${tupleParams[0]}`;
            } else {
                oneParams = `?id=${tupleParams[0]}`;
            }

            return new URL(`${base_url}${oneParams}`);
        }

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
        }, base_url)

        return new URL(String(queryString));
    }
}

export default createQueryString;
