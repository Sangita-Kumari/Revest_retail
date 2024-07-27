# gcp-approval-suit-service


## sample .env file

```
PORT=8080
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=


# token expire time 
JWT_TOKEN_EXPIRY_TIME="60m" 


# encryption 
INIT_VECTOR=
SECURITY_KEY=
DATABASE_SECURITY_KEY=
```


## Docker build command

```
docker build -t gcp_service:app .
```


## Docker run command

```
docker run -p 8080:8080 gcp_service:app
```


## health check api
```
http://localhost:8080/management/health
```

## Endpoint
```
http://localhost:8080/api/gcp/<methods>
```
