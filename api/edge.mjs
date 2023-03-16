console.debug(process.env);

export const config = {runtime: "edge"};

const headers = {"Content-Type": "text/json; charset=utf-8"};

export default () => new Response(JSON.stringify(process.env), {headers});
