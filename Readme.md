## Get started
### Backend (server)
1. Go to the server folder and install dependencies:

   ```bash
   npm install
   ```

2. Start the server

   ```bash
    node --env-file=config.env server
   ```
   Note that to avoid expose our database api in this public repo, you need to set up "server/configs/config.env" in your local:
   ```
   ATLAS_URI=mongodb+srv://<db_username>:<db_password>@cluster.ntiw1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster
   PORT=5050
   ```
   Replace <db_username> and <db_password> with your database username and password.

### Frontend (client)
1. Go to the client folder and install dependencies:
   ```bash
   npm install
   ```

2. Start the client:
   ```bash
    npx expo start
   ```