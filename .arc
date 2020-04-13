@app
begin-app

@static
folder build

@http
get /api
post /api

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
