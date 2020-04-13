exports.handler = async function http(req) {
  console.log(req.body);
  return {
    headers: {
      "content-type": "application/json; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    body: JSON.stringify({
      message: req.body,
    }),
  };
};
